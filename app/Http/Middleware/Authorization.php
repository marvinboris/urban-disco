<?php

namespace App\Http\Middleware;

use App\Http\Controllers\UtilController;
use Closure;

class Authorization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = $request->user();

        $rootPath = url('api/user/');

        $url = $request->url();
        $method = $request->method();

        $features = $user->role->features;

        foreach ($features as $feature) {
            $prefix = $rootPath . $feature->prefix;
            $access = json_decode($feature->pivot->access);

            $prefixCheck = explode($prefix, $url);

            $readCheck = $method === 'GET';
            $createCheck = $method === 'POST' && in_array('c', $access);
            $updateCheck = in_array($method, ['PATCH', 'PUT']) && in_array('u', $access);
            $deleteCheck = $method === 'DELETE' && in_array('d', $access);

            $globalCheck = $prefixCheck && ($readCheck || $createCheck || $updateCheck || $deleteCheck);

            if ($globalCheck) return $next($request);
        }

        return response()->json([
            'message' => UtilController::message("You don't have permission.", 'danger'),
        ], 403);
    }
}
