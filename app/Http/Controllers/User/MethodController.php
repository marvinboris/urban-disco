<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Method;
use Illuminate\Http\Request;

class MethodController extends Controller
{
    private $rules = [
        'name' => 'required|string',
        'text' => 'required|string',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $methods = [];
        $filteredData = Method::orderBy('id');

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('methods.name', 'LIKE', "%$search%")
                        ->orWhere('methods.text', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $method) {
            $methods[] = $method->toArray();
        }

        return [
            'methods' => $methods,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $methods = $data['methods'];
        $total = $data['total'];

        return response()->json([
            'methods' => $methods,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $method = Method::find($id);
        if (!$method) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['methods']['not_found'], 'danger'),
        ]);

        return response()->json([
            'method' => $method,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate(array_merge($this->rules, [
            'name' => 'required|string|unique:methods',
        ]));

        $input = $request->all();

        Method::create($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['methods']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $method = Method::find($id);
        if (!$method) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['methods']['not_found'], 'danger'),
        ]);

        $rules = UtilController::rules($this->rules, $method);
        $request->validate($rules);

        $input = $request->all();

        $method->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['methods']['updated'], 'success'),
            'method' => $method,
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $method = Method::find($id);
        if (!$method) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['methods']['not_found'], 'danger'),
        ]);

        $method->delete();

        $data = $this->data();

        $methods = $data['methods'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['methods']['deleted'], 'success'),
            'methods' => $methods,
            'total' => $total,
        ]);
    }
}
