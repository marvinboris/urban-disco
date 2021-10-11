<?php

namespace App\Http\Controllers;

use Intervention\Image\ImageManagerStatic as Image;
use App\Models\Admin;
use App\Models\Language;
use App\Models\User;
use Illuminate\Http\Request;

class UtilController extends Controller
{
    private function guard()
    {
        $user = request()->user();
        switch ($user->token()->name) {
            case 'User Personal Access Token':
                $user = User::find($user->id);
                break;
            case 'Admin Personal Access Token':
                $user = Admin::find($user->id);
                break;
        }
        return $user;
    }

    public static function message($content, $type = 'info')
    {
        return [
            'type' => $type,
            'content' => $content
        ];
    }

    public static function get($request)
    {
        $user = $request->user();
        switch ($user->token()->name) {
            case 'User Personal Access Token':
                return User::find($user->id);
            case 'Admin Personal Access Token':
                return Admin::find($user->id);
        }
    }

    public static function cms()
    {
        $jsonString = file_get_contents(base_path('cms.json'));
        return json_decode($jsonString, true);
    }

    public static function rules($rule_list, $model)
    {
        $rules = [];
        foreach ($rule_list as $key => $rule) {
            if (strpos($rule, 'file') > 0) {
                $rule = str_replace('required', 'nullable', $rule);
                $check = true;
            } else if (strpos($rule, 'array') >= 0) $check = true;
            else $check = request()->input($key) !== $model->toArray()[$key];
            if ($check) $rules[$key] = $rule;
        }
        return $rules;
    }

    public static function resize($file, $folder)
    {
        $name = $file->getClientOriginalName();
        $path = $file->getRealPath();
        $dimensions = getimagesize($path);

        $destinationPath = public_path('/images/' . $folder);
        $destination = time() . $name;

        $maxHeight = 640;
        $maxWidth = 640;

        $actualHeight = $dimensions[1];
        $actualWidth = $dimensions[0];

        $imgRatio = $actualWidth / $actualHeight;
        $maxRatio = $maxWidth / $maxHeight;
        $compressionQuality  = 0.6;

        if ($actualHeight > $maxHeight || $actualWidth > $maxWidth) {
            if ($imgRatio < $maxRatio) {
                //adjust width according to maxHeight
                $imgRatio = $maxHeight / $actualHeight;
                $actualWidth = $imgRatio * $actualWidth;
                $actualHeight = $maxHeight;
            } else if ($imgRatio > $maxRatio) {
                //adjust height according to maxWidth
                $imgRatio = $maxWidth / $actualWidth;
                $actualHeight = $imgRatio * $actualHeight;
                $actualWidth = $maxWidth;
            } else {
                $actualHeight = $maxHeight;
                $actualWidth = $maxWidth;
                $compressionQuality = 1;
            }
        }

        $img = Image::make($path);
        $img
            ->resize($actualWidth, $actualHeight)
            ->save($destinationPath . '/' . $destination, $compressionQuality * 100);

        return $destination;
    }

    public static function isJson($string)
    {
        json_decode($string);
        return json_last_error() === JSON_ERROR_NONE;
    }

    public static function translatable($value)
    {
        $data = null;
        if (!self::isJson($value)) {
            $data = [];
            foreach (Language::all() as $language) {
                $data[$language->abbr] = $value;
            }
            return $data;
        }

        $value = json_decode($value, true);

        foreach (Language::all() as $language) {
            if (!array_key_exists($language->abbr, $value)) $value[$language->abbr] = $value[env('MIX_DEFAULT_LANG')];
        }

        return $value;
    }



    // Authentication
    public function logout()
    {
        request()->user()->token()->revoke();

        return response()->json([
            'message' => self::message('Successfully logged out.', 'success'),
        ]);
    }

    public function user()
    {
        $user = $this->guard();

        $type = $user->type();

        $data = array_merge($user->toArray(), [
            'notifications' => $user->notifications()->latest()->limit(5)->get(),
            'language' => $user->language->abbr
        ]);
        if ($type === 'user') {
            $role = $user->role;

            $role_features = [];
            foreach ($role->features as $feature) {
                $role_features[] = [
                    'id' => $feature->id,
                    'prefix' => $feature->prefix,
                    'permissions' => $feature->pivot->access,
                ];
            }

            $role = $role->toArray();
            $role['features'] = $role_features;

            $data = $data + [
                'role' => $role
            ];
        } else if ($type === 'admin') $data = array_merge($data, []);
        return response()->json(['data' => $data, 'role' => $type,]);
    }


    // Notifications
    public function notifications()
    {
        $user = $this->guard();

        $notifications = [];
        foreach ($user->notifications()->latest()->get() as $notification) {
            $notifications[] = array_merge($notification->toArray(), [
                'data' => $notification->data
            ]);
        }

        return response()->json([
            'notifications' => $notifications
        ]);
    }

    public function notification($id)
    {
        $user = $this->guard();

        $notification = $user->notifications()->find($id);
        $notification->markAsRead();

        $type = $user->type();

        $data = array_merge($user->toArray(), [
            'notifications' => $user->notifications()->latest()->limit(5)->get(),
            'language' => $user->language->abbr
        ]);
        if ($type === 'user') {
            $role = $user->role;

            $role_features = [];
            foreach ($role->features as $feature) {
                $role_features[] = [
                    'id' => $feature->id,
                    'prefix' => $feature->prefix,
                    'permissions' => $feature->pivot->access,
                ];
            }

            $role = $role->toArray();
            $role['features'] = $role_features;

            $data = $data + [
                'role' => $role
            ];
        } else if ($type === 'admin') $data = array_merge($data, []);

        return response()->json([
            'notification' => $notification,
            'data' => $data,
        ]);
    }
}
