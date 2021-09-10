<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    private $rules = [
        'name' => 'string|required',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $brands = [];
        $filteredData = Brand::orderBy('id');

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%")
                        ->orWhere('slug', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $brand) {
            $brands[] = $brand->toArray();
        }

        return [
            'brands' => $brands,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $brands = $data['brands'];
        $total = $data['total'];

        return response()->json([
            'brands' => $brands,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $brand = Brand::find($id);
        if (!$brand) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['brands']['not_found'], 'danger'),
        ]);

        return response()->json([
            'brand' => $brand,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->except([]);

        Brand::create($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['brands']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $brand = Brand::find($id);
        if (!$brand) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['brands']['not_found'], 'danger'),
        ]);

        $rules = UtilController::rules($this->rules, $brand);
        $request->validate($rules);

        $input = $request->except([]);

        $brand->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['brands']['updated'], 'success'),
            'brand' => $brand,
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $brand = Brand::find($id);
        if (!$brand) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['brands']['not_found'], 'danger'),
        ]);

        $brand->delete();

        $data = $this->data();

        $brands = $data['brands'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['brands']['deleted'], 'success'),
            'brands' => $brands,
            'total' => $total,
        ]);
    }
}
