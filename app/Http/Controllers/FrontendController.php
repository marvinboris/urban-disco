<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Method\Cinetpaycontroller;
use App\Http\Controllers\Method\MonetbilController;
use App\Models\Brand;
use App\Models\Course;
use App\Models\Enrolment;
use App\Models\Method;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\Product;
use App\Notifications\EnrolmentDone;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function home()
    {
        $products = Product::latest()->limit(6)->get();
        $posts = Post::latest()->limit(3)->get();

        return response()->json([
            'products' => $products,
            'posts' => $posts,
        ]);
    }

    public function posts($postCategorySlug = null)
    {
        $cms = UtilController::cms();

        $posts = [];
        if ($postCategorySlug) {
            $post_category = PostCategory::whereSlug($postCategorySlug)->first();
            if (!$post_category) return response()->json([
                'message' => UtilController::message($cms['pages'][env('MIX_DEFAULT_LANG', 'fr')]['messages']['post_categories']['not_found'], 'danger'),
            ]);

            $posts = $post_category->posts()->latest()->get();
        } else $posts = Post::latest()->get();

        $postsData = [];
        foreach ($posts as $post) {
            $postsData[] = array_merge($post->toArray(), [
                'author' => $post->author->name,
            ]);
        }

        $post_categories = [];
        foreach (PostCategory::all() as $post_category) {
            $post_categories[] = $post_category->toArray() + [
                'number' => $post_category->posts()->count(),
            ];
        }

        return response()->json([
            'posts' => $postsData,
            'post_categories' => $post_categories,
        ]);
    }

    public function post($postCategorySlug, $slug)
    {
        $cms = UtilController::cms();

        $post = null;
        if ($postCategorySlug) {
            $post_category = PostCategory::whereSlug($postCategorySlug)->first();
            if (!$post_category) return response()->json([
                'message' => UtilController::message($cms['pages'][env('MIX_DEFAULT_LANG', 'fr')]['messages']['post_categories']['not_found'], 'danger'),
            ]);

            $post = $post_category->posts()->whereSlug($slug)->first();
        } else $post = Post::whereSlug($slug)->first();
        if (!$post) return response()->json([
            'message' => UtilController::message($cms['pages'][env('MIX_DEFAULT_LANG', 'fr')]['messages']['posts']['not_found'], 'danger'),
        ]);

        $posts = Post::latest()->limit(6)->get();

        $post_categories = [];
        foreach (PostCategory::all() as $post_category) {
            $post_categories[] = $post_category->toArray() + [
                'number' => $post_category->posts()->count(),
            ];
        }

        return response()->json([
            'post' => array_merge($post->toArray(), [
                'author' => $post->author->name
            ]),
            'posts' => $posts,
            'post_categories' => $post_categories,
        ]);
    }

    public function products()
    {
        $products = Product::latest()->get();

        $productsData = [];
        foreach ($products as $product) {
            $productsData[] = array_merge($product->toArray(), []);
        }

        $brands = [];
        foreach (Brand::all() as $brand) {
            $brands[] = $brand->toArray() + [];
        }

        return response()->json([
            'products' => $productsData,
            'brands' => $brands,
        ]);
    }

    public function product($slug)
    {
        $cms = UtilController::cms();

        $product = Product::whereSlug($slug)->first();
        if (!$product) return response()->json([
            'message' => UtilController::message($cms['pages'][env('MIX_DEFAULT_LANG', 'fr')]['messages']['products']['not_found'], 'danger'),
        ]);

        $brands = [];
        foreach (Brand::all() as $brand) {
            $brands[] = $brand->toArray() + [];
        }

        return response()->json([
            'product' => array_merge($product->toArray(), []),
            'brands' => $brands,
        ]);
    }
}
