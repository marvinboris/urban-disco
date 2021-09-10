<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Feature;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    private $rules = [
        'name' => 'required|string|unique:roles',
        'description' => 'required|string',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $roles = [];
        $filteredData = Role::orderBy('id');

        $filteredData = $filteredData
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%")
                        ->orWhere('description', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $role) {
            $roles[] = $role->toArray();
        }

        return [
            'roles' => $roles,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $roles = $data['roles'];
        $total = $data['total'];

        return response()->json([
            'roles' => $roles,
            'total' => $total,
        ]);
    }

    public function info()
    {
        $features = [];
        foreach (Feature::all() as $feature) {
            $features[] = $feature->toArray();
        }

        return response()->json([
            'features' => $features,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $role = Role::find($id);
        if (!$role) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['roles']['not_found'], 'danger'),
        ]);

        $role_features = [];
        foreach ($role->features as $feature) {
            $role_features[] = [
                'id' => $feature->id,
                'permissions' => $feature->pivot->access,
            ];
        }

        $role = $role->toArray();
        $role['features'] = $role_features;

        $features = [];
        foreach (Feature::all() as $feature) {
            $features[] = $feature->toArray();
        }

        return response()->json([
            'role' => $role,
            'features' => $features,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->only(['name', 'description']);

        $role = Role::create($input);

        $features = [];
        foreach ($request->features as $feature_id => $feature) {
            $access = [];
            if ($feature['permissions']) foreach ($feature['permissions'] as $abbr => $permission) {
                $access[] = $abbr;
            }
            $features[$feature_id] = [
                'access' => json_encode($access),
            ];
        }

        $role->features()->sync($features);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['roles']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $role = Role::find($id);
        if (!$role) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['roles']['not_found'], 'danger'),
        ]);

        $rules = UtilController::rules($this->rules, $role);
        $request->validate($rules);

        $input = $request->only(['name', 'description']);

        $role->update($input);

        $features = [];
        foreach ($request->features as $feature_id => $feature) {
            $access = [];
            if ($feature['permissions']) foreach ($feature['permissions'] as $abbr => $permission) {
                $access[] = $abbr;
            }
            $features[$feature_id] = [
                'access' => json_encode($access),
            ];
        }

        $role->features()->sync($features);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['roles']['created'], 'success'),
            'role' => $role,
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $role = Role::find($id);
        if (!$role) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['roles']['not_found'], 'danger'),
        ]);

        $role->delete();

        $data = $this->data();

        $roles = $data['roles'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['roles']['deleted'], 'success'),
            'roles' => $roles,
            'total' => $total,
        ]);
    }
}
