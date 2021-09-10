<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Feature;
use Illuminate\Http\Request;

class FeatureController extends Controller
{
    private $rules = [
        'name' => 'required|string|unique:features',
        'prefix' => 'required|string',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $features = [];
        $filteredData = Feature::orderBy('id');

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%")
                        ->orWhere('prefix', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $feature) {
            $features[] = $feature->toArray();
        }

        return [
            'features' => $features,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $features = $data['features'];
        $total = $data['total'];

        return response()->json([
            'features' => $features,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $feature = Feature::find($id);
        if (!$feature) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['features']['not_found'], 'danger'),
        ]);

        return response()->json([
            'feature' => $feature,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->all();

        Feature::create($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['features']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $feature = Feature::find($id);
        if (!$feature) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['features']['not_found'], 'danger'),
        ]);

        $rules = UtilController::rules($this->rules, $feature);
        $request->validate($rules);

        $input = $request->all();

        $feature->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['features']['updated'], 'success'),
            'feature' => $feature,
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $feature = Feature::find($id);
        if (!$feature) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['features']['not_found'], 'danger'),
        ]);

        $feature->delete();

        $data = $this->data();

        $features = $data['features'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['features']['deleted'], 'success'),
            'features' => $features,
            'total' => $total,
        ]);
    }
}
