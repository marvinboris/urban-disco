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

class MonetbilController extends Controller
{
    protected static $settings;

    public function __construct()
    {
        self::$settings = [
            'vendor' => 'monetbil',
            'base_url' => 'https://api.monetbil.com/widget/v2.1/',
            'apikey' => env('MONETBIL_SERVICE_KEY'),
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
            // 'amount' => 1,
            'amount' => $input['amount'],
            'item_ref' => $input['amount'],
            'payment_ref' => time(),
            'country' => 'XAF',
            'logo' => asset('images/email/logo.png'),
            'email' => $input['ref'],
            'country' => 'CM',
            'return_url' => route('monetbil.notify.get')
        ];

        $client = new Client();

        $response = $client->request('POST', self::$settings['base_url'] . self::$settings['apikey'], [
            'headers' => [
                'Content-Type' => 'application/x-www-form-urlencoded'
            ],
            'form_params' => $json
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

        $enrolment = Enrolment::where('ref', $input['email'])->first();

        if (!$enrolment) {
            error_log('No enrolment found !');
            die('No enrolment found !');
        }

        $transaction = Transaction::where("tx_id", $input['payment_ref'])->first();
        $payment = null;

        if (!$transaction) {
            $transaction = Transaction::create([
                'amount' => +$request->item_ref,
                'tx_id' => $input['payment_ref'],
                'tx_hash' => $input['transaction_id'],
                'vendor' => 'monetbil',
                'method' =>  $request->operator ? $input['operator'] : 'MTN',
                'type' => 'payment',
                'status' => 'pending',
                'currency' => $request->currency ? $input['current'] : 'XAF',
                'address' => $request->phone
            ]);
            $payment = Payment::create([
                'enrolment_id' => $enrolment->id,
                'method_id' => Method::whereSlug('LIKE', '%mobile%')->first()->id,
                'amount' => +$request->item_ref,
                'status' => 0,
                'fees' => 0,
            ]);
            $enrolment->transactions()->save($transaction);
        }

        if ($request->currency) $transaction->currency = $input['currency'];
        if ($request->transaction_id) $transaction->tx_hash = $input['transaction_id'];

        $transaction->vendor = self::$settings['vendor'];

        if ($request->operator) $transaction->method = $input['operator'];
        if ($request->phone) $transaction->address = $input['phone'];
        if ($request->amount) $transaction->amount = +$request->item_ref;

        if ('success' === $input['status']) {
            $payment->update([
                'status' => 2,
            ]);
            $enrolment->notify(new PaymentProcessed($payment));
            $enrolment->update([
                'balance' => $enrolment->balance + $transaction->amount
            ]);
            $transaction->status = 'completed';
        } else {
            if ($payment) $payment->update([
                'status' => 1,
            ]);
            $enrolment->delete();
            $transaction->status = $input['status'];
        }

        $transaction->save();

        if ('success' === $input['status'])
            return redirect('/?status=1&amount=' . $request->item_ref);

        return redirect('/');
    }
}
