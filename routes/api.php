<?php

use App\Http\Controllers\UtilController;
use App\Models\Language;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('User')->prefix('user')->name('user.')->group(function () {
    Route::post('login', 'AuthController@login')->name('login');
    Route::post('forgot', 'AuthController@forgot')->name('forgot');
    Route::post('reset/{id}/{code}', 'AuthController@reset')->name('reset');

    Route::middleware('auth:api')->group(function () {
        Route::get('dashboard', 'DashboardController@index')->name('dashboard');

        Route::middleware('permission')->group(function () {
            Route::name('cms.')->prefix('cms')->group(function () {
                Route::patch('global', 'CmsController@global')->name('global');
                Route::patch('general', 'CmsController@general')->name('general');
                Route::patch('components', 'CmsController@components')->name('components');
                Route::patch('frontend', 'CmsController@frontend')->name('frontend');
                Route::patch('backend', 'CmsController@backend')->name('backend');
                Route::patch('auth', 'CmsController@auth')->name('auth');

                Route::name('index')->get('', function () {
                    $jsonString = file_get_contents(base_path('cms.json'));
                    $cms = json_decode($jsonString, true);

                    return response()->json([
                        'cms' => $cms,
                        'languages' => Language::all(),
                    ]);
                });
            });

            Route::prefix('features')->name('features.')->group(function () {
                Route::get('{feature}', 'FeatureController@show')->name('show');
            });

            Route::prefix('languages')->name('languages.')->group(function () {
                Route::get('{language}', 'LanguageController@show')->name('show');
            });

            Route::prefix('roles')->name('roles.')->group(function () {
                Route::get('info', 'RoleController@info')->name('info');
                Route::get('{role}', 'RoleController@show')->name('show');
            });

            Route::prefix('users')->name('users.')->group(function () {
                Route::get('info', 'UserController@info')->name('info');
                Route::get('{user}', 'UserController@show')->name('show');
            });

            Route::prefix('methods')->name('methods.')->group(function () {
                Route::get('info', 'MethodController@info')->name('info');
                Route::get('{method}', 'MethodController@show')->name('show');
            });



            Route::prefix('post-categories')->name('post_categories.')->group(function () {
                Route::get('{post_category}', 'PostCategoryController@show')->name('show');
            });

            Route::prefix('posts')->name('posts.')->group(function () {
                Route::get('info', 'PostController@info')->name('info');
                Route::get('{post}', 'PostController@show')->name('show');
            });

            Route::prefix('brands')->name('brands.')->group(function () {
                Route::get('{brand}', 'BrandController@show')->name('show');
            });

            Route::prefix('products')->name('products.')->group(function () {
                Route::get('info', 'ProductController@info')->name('info');
                Route::get('{product}', 'ProductController@show')->name('show');
            });



            Route::apiResources([
                'users' => 'UserController',
                'roles' => 'RoleController',
                'features' => 'FeatureController',
                'languages' => 'LanguageController',
                'methods' => 'MethodController',

                'post-categories' => 'PostCategoryController',
                'posts' => 'PostController',
                'brands' => 'BrandController',
                'products' => 'ProductController',
            ]);
        });
    });
});

Route::name('frontend.')->group(function () {
    Route::get('home', 'FrontendController@home')->name('home');

    Route::prefix('post-categories/{post_category}')->name('post_categories.')->group(function () {
        Route::prefix('posts')->name('posts.')->group(function () {
            Route::get('{post}', 'FrontendController@post')->name('show');
            Route::get('', 'FrontendController@posts')->name('index');
        });
    });

    Route::prefix('posts')->name('posts.')->group(function () {
        Route::get('{post}', 'FrontendController@post')->name('show');
        Route::get('', 'FrontendController@posts')->name('index');
    });

    Route::prefix('products')->name('products.')->group(function () {
        Route::get('{product}', 'FrontendController@product')->name('show');
        Route::get('', 'FrontendController@products')->name('index');
    });
});

Route::middleware('auth:admin,restaurant,api')->group(function () {
    Route::get('logout', 'UtilController@logout')->name('logout');
    Route::get('user', 'UtilController@user')->name('user');

    Route::prefix('notifications')->name('notifications.')->group(function () {
        Route::get('{notification}', 'UtilController@notification')->name('show');
        Route::get('', 'UtilController@notifications')->name('index');
    });

    Route::name('export.')->prefix('export')->group(function () {
        Route::name('xlsx')->post('xlsx', 'ExportController@xlsx');
        Route::name('csv')->post('csv', 'ExportController@csv');
        Route::name('pdf')->post('pdf', 'ExportController@pdf');
    });

    Route::prefix('content')->name('content.')->group(function () {
        Route::get('language/{language}', function ($id) {
            $user = UtilController::get(request());

            $jsonString = file_get_contents(base_path('cms.json'));
            $cmsFile = json_decode($jsonString, true);

            $language = Language::find($id);
            if (!$language) return response()->json([
                'message' => UtilController::message($cmsFile['pages'][$user->language->abbr]['messages']['languages']['not_found'], 'danger')
            ]);

            $user->update([
                'language_id' => $id
            ]);

            $cms = [
                'global' => $cmsFile['global'],
                'pages' => $cmsFile['pages'][$language->abbr],
            ];

            return response()->json([
                'language' => $language->toArray(),
                'cms' => $cms,
            ]);
        })->name('language');
    });
});

Route::prefix('content')->name('content.')->group(function () {
    Route::get('{language}', function ($lang) {
        $jsonString = file_get_contents(base_path('cms.json'));
        $cmsFile = json_decode($jsonString, true);

        $abbr = $lang;
        if (Language::whereAbbr($lang)->count() === 0) $abbr = env('MIX_DEFAULT_LANG', 'en');

        $cms = [
            'global' => $cmsFile['global'],
            'pages' => $cmsFile['pages'][$abbr],
        ];
        $languages = Language::all();

        return response()->json([
            'cms' => $cms,
            'languages' => $languages,
        ]);
    })->name('cms');
});

Route::namespace('Method')->group(function () {
    Route::get('monetbil/notify', 'MonetbilController@notify')->name('monetbil.notify.get');
    Route::post('monetbil/notify', 'MonetbilController@notify')->name('monetbil.notify.post');

    Route::get('cinetpay/notify', 'CinetpayController@notify')->name('cinetpay.notify.get');
    Route::post('cinetpay/notify', 'CinetpayController@notify')->name('cinetpay.notify.post');
});
