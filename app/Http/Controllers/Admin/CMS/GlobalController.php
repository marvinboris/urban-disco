<?php

namespace App\Http\Controllers\Admin\CMS;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use Illuminate\Http\Request;

class GlobalController extends Controller
{
    private $rules = [
        'app_name' => 'required|string',
        'company_name' => 'required|string',
        'photo' => 'nullable|image'
    ];

    public function patch(Request $request)
    {
        $jsonString = file_get_contents(base_path('cms.json'));
        $cms = json_decode($jsonString, true);

        $request->validate($this->rules);

        $input = $request->except('_method');

        foreach (['logo'] as $image) {
            if ($file = $request->file($image)) {
                $fileName = $file->getClientOriginalName();
                $file->move('images', $fileName);
                $input[$image] = '/images/' . htmlspecialchars($fileName);
            } else $input[$image] = $cms['global'][$image];
        }

        $cms['global'] = $input;

        $contentText = json_encode($cms);
        file_put_contents(base_path('cms.json'), $contentText);

        return response()->json([
            'message' => UtilController::message('Contenu modifié avec succès.', 'success'),
            'cms' => $cms,
        ]);
    }
}
