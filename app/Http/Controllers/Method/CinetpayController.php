<?php

namespace App\Http\Controllers\Method;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Enrolment;
use App\Models\Method;
use App\Models\Payment;
use App\Models\Transaction;
use App\Notifications\PaymentProcessed;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class CinetpayController extends Controller
{
    protected static $settings;

    public function __construct()
    {
        self::$settings = [
            'vendor' => 'cinetpay',
            'signature_url' => 'https://api.cinetpay.com/v1/?method=getSignatureByPost',
            'payment_url' => 'https://secure.cinetpay.com',
            'apikey' => env('CINETPAY_APIKEY'),
            'siteId' => env('CINETPAY_SITE_ID'),
        ];
    }

    /**
     * Generate data necessary for the widget
     * @param Array
     * @return Array
     */
    public static function generateWidgetData($input)
    {
        $payload = [
            'status' => 'success',
            'link' => null
        ];

        $json = [
            'cpm_amount' => $input['amount'],
            'cpm_currency' => 'XAF',
            'cpm_site_id' => self::$settings['siteId'],
            'apikey' => self::$settings['apikey'],
            'cpm_trans_id' => time() . '_' . $input['ref'],
            'cpm_trans_date' => now(),
            'cpm_payment_config' => 'SINGLE',
            'cpm_action_type' => 'PAYMENT',
            'cpm_version' => 'V1',
            'cpm_language' => 'fr',
            'cpm_designation' => $input['designation'],
            'cpm_custom' => $input['ref'],
            'cpm_phone_prefixe' => '237',
            'debug' => 1,
        ];

        // Get signature
        $client = new Client();

        $response = $client->request('POST', self::$settings['signature_url'], [
            'headers' => [
                'Content-Type' => 'application/x-www-form-urlencoded'
            ],
            'form_params' => $json
        ]);

        $response = json_decode($response->getBody()->getContents());

        $payload['response'] = $response;
        return $payload;

        $signature = $response->signature;

        // Payment page
        $client = new Client();

        $response = $client->request('POST', self::$settings['payment_url'], [
            'headers' => [
                'Content-Type' => 'application/x-www-form-urlencoded'
            ],
            'form_params' => $json + [
                'signature' => $signature,
                'notify_url' => route('cinetpay.notify.post'),
                'return_url' => url('/?status=1&amount=' . $input['amount'] . '&course_id=' . $input['course_id']),
                'cancel_url' => url('/'),
            ]
        ]);

        $response = json_decode($response->getBody()->getContents());

        if (1 === +$response->success) {
            // User will be redirected to complete their payment
            $payload['link'] = $response->payment_url;
        } else {
            $payload['status'] = 'failure';
            $payload['link'] = 'Error during the process, please retry.';
        }

        return $payload;
    }

    /**
     * Get notified about the transaction
     * @param Request
     * @return \Illuminate\Http\Response
     */
    public function notify(Request $request)
    {
        $input = $request->all();
        foreach ($input as $key => $value) {
            $input[$key] = htmlspecialchars($value);
        }

        $json = [
            'apikey' => env('CINETPAY_APIKEY'),
            'cpm_site_id' => env('CINETPAY_SITE_ID'),
            'cpm_trans_id' => $input['cpm_trans_id'],
        ];

        // Check payment status
        $client = new Client();

        $checkPayUrl = "https://api.cinetpay.com/v1/?method=checkPayStatus";

        $response = $client->request('POST', $checkPayUrl . $json['apikey'], [
            'headers' => [
                'Content-Type' => 'application/x-www-form-urlencoded'
            ],
            'form_params' => $json
        ]);

        $response = json_decode($response->getBody()->getContents());

        $ref = $response->transaction->cpm_custom;
        $amount = $response->transaction->cpm_amount;

        $input = $response->transaction;

        $enrolment = Enrolment::where('ref', $ref)->first();

        if (!$enrolment) {
            error_log('No enrolment found !');
            die('No enrolment found !');
        }

        $transaction = Transaction::where("tx_id", $input->cpm_trans_id)->first();
        $payment = null;

        if (!$transaction) {
            $transaction = Transaction::create([
                'amount' => +$amount,
                'tx_id' => $input->cpm_trans_id,
                'tx_hash' => $input->signature,
                'vendor' => 'cinetpay',
                'method' =>  $input->payment_method ? $input->payment_method : 'MTN',
                'type' => 'payment',
                'status' => 'pending',
                'currency' => $input->cpm_currency ? $input->cpm_currency : 'XAF',
                'address' => $input->cpm_phone_prefixe . $input->cel_phone_num
            ]);
            $payment = Payment::create([
                'enrolment_id' => $enrolment->id,
                'method_id' => Method::whereSlug('LIKE', '%mobile%')->first()->id,
                'amount' => +$amount,
                'status' => 0,
                'fees' => 0,
            ]);
            $enrolment->transactions()->save($transaction);
        }

        if ($input->cpm_currency) $transaction->currency = $input->cpm_currency;
        if ($input->signature) $transaction->tx_hash = $input->signature;

        $transaction->vendor = self::$settings['vendor'];

        if ($input->payment_method) $transaction->method = $input->payment_method;
        if ($input->cel_phone_num) $transaction->address = ($input->cpm_phone_prefixe ?? '237') . $input->cel_phone_num;
        if ($input->cpm_amount) $transaction->amount = +$amount;

        if ('00' === $input->cpm_result) {
            $payment->update([
                'status' => 2,
            ]);
            $enrolment->notify(new PaymentProcessed($payment));
            $transaction->status = 'completed';
        } else {
            if ($payment) $payment->update([
                'status' => 1,
            ]);
            $enrolment->delete();
            $transaction->status = $input->status;
        }

        $transaction->save();

        if ('success' === $input->status)
            return redirect('/?status=1&amount=' . $amount . '&course_id=' . $enrolment->course_id);

        return redirect('/');
    }
}
