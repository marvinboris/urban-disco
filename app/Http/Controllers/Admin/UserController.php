<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    private $rules = [
        'role_id' => 'required|exists:roles,id',
        'name' => 'required|string',
        'email' => 'required|string|email|unique:users',
        'password' => 'required|string|confirmed',
        'photo' => 'nullable|image',
        'phone' => 'required|string',
    ];



    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $users = [];
        $filteredData = User::orderBy('id');

        $filteredData = $filteredData
            ->join('roles', 'roles.id', '=', 'users.role_id')
            ->select('users.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('name', 'LIKE', "%$search%")
                        ->orWhere('email', 'LIKE', "%$search%")
                        ->orWhere('roles.name', 'LIKE', "%$search%")
                        ->orWhere('photo', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $user) {
            $users[] = $user->toArray() + [
                'role' => $user->role->name,
            ];
        }

        return [
            'users' => $users,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $users = $data['users'];
        $total = $data['total'];

        return response()->json([
            'users' => $users,
            'total' => $total,
        ]);
    }

    public function info()
    {
        $roles = [];
        foreach (Role::all() as $city) {
            $roles[] = array_merge($city->toArray(), []);
        }

        return response()->json([
            'roles' => $roles,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $user = User::find($id);
        if (!$user) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['users']['not_found'], 'danger'),
        ]);

        $roles = [];
        foreach (Role::all() as $city) {
            $roles[] = array_merge($city->toArray(), []);
        }

        return response()->json([
            'user' => $user,
            'roles' => $roles,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $admin = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->except('photo');

        $input['phone'] = '237' . $input['phone'];
        $input['password'] = Hash::make($input['password']);
        $input['language_id'] = 1;

        if ($file = $request->file('photo')) {
            $fileName = UtilController::resize($file, 'users');
            $input['photo'] = htmlspecialchars($fileName);
        }

        User::create($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$admin->language->abbr]['messages']['users']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $admin = UtilController::get(request());

        $user = User::find($id);
        if (!$user) return response()->json([
            'message' => UtilController::message($cms['pages'][$admin->language->abbr]['messages']['users']['not_found'], 'danger'),
        ]);

        $rules = $this->rules;
        if ($request->email === $user->email) $rules['email'] = 'required|email';
        if (!$request->password) $rules['password'] = 'nullable|string|confirmed';

        $request->validate($rules);

        $input = $request->except(['password', 'photo']);
        if ($request->password) $input['password'] = Hash::make($request->password);

        if ($file = $request->file('photo')) {
            if ($user->photo && is_file(public_path($user->photo))) unlink(public_path($user->photo));
            $fileName = UtilController::resize($file, 'users');
            $input['photo'] = htmlspecialchars($fileName);
        }

        $user->update($input);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$admin->language->abbr]['messages']['users']['updated'], 'success'),
            'user' => $user,
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $admin = UtilController::get(request());

        $user = User::find($id);
        if (!$user) return response()->json([
            'message' => UtilController::message($cms['pages'][$admin->language->abbr]['messages']['users']['not_found'], 'danger'),
        ]);

        if ($user->photo) unlink(public_path($user->photo));
        $user->delete();

        $data = $this->data();

        $users = $data['users'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$admin->language->abbr]['messages']['users']['deleted'], 'success'),
            'users' => $users,
            'total' => $total,
        ]);
    }
}
