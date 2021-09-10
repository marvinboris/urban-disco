<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Admin;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    private $rules = [
        'post_category_id' => 'required|exists:post_categories,id',
        'title' => 'array|required',
        'body' => 'array|required',
        'photo' => 'nullable|image',
        'is_active' => 'required|integer',
    ];



    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $posts = [];
        $filteredData = Post::orderBy('id');

        $filteredData = $filteredData
            ->join('users', function ($join) {
                $join->on('users.id', 'posts.author_id');
                $join->where('posts.author_type', '=', User::class);
            })
            ->join('post_categories', 'post_categories.id', '=', 'posts.post_category_id')
            // ->join('admins', function ($join) {
            //     $join->on('admins.id', 'posts.author_id');
            //     $join->where('posts.author_type', '=', Admin::class);
            // })
            ->select('posts.*')
            ->when($search, function ($query, $search) {
                if ($search !== "")
                    $query
                        ->where('posts.name', 'LIKE', "%$search%")
                        ->orWhere('email', 'LIKE', "%$search%")
                        ->orWhere('users.name', 'LIKE', "%$search%")
                        ->orWhere('post_categories.name', 'LIKE', "%$search%")
                        ->orWhere('posts.photo', 'LIKE', "%$search%");
            });

        $total = $filteredData->count();

        if ($show !== 'All') $filteredData = $filteredData->skip(($page - 1) * $show)->take($show);

        $filteredData = $filteredData->get();

        foreach ($filteredData as $post) {
            $posts[] = array_merge($post->toArray(), [
                'author' => $post->author->name,
                'post_category' => $post->post_category->name,
            ]);
        }

        return [
            'posts' => $posts,
            'total' => $total,
        ];
    }

    private function information()
    {
        $post_categories = [];
        foreach (PostCategory::all() as $post_category) {
            $post_categories[] = array_merge($post_category->toArray(), []);
        }

        return [
            'post_categories' => $post_categories,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $posts = $data['posts'];
        $total = $data['total'];

        return response()->json([
            'posts' => $posts,
            'total' => $total,
        ]);
    }

    public function info()
    {
        $information = $this->information();

        return response()->json($information);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $post = Post::find($id);
        if (!$post) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['posts']['not_found'], 'danger'),
        ]);

        $information = $this->information();

        return response()->json([
            'post' => $post,
        ] + $information);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->except(['photo', 'title', 'body']);

        if ($file = $request->file('photo')) {
            $fileName = UtilController::resize($file, 'posts');
            $input['photo'] = htmlspecialchars($fileName);
        }

        $user->posts()->create($input + [
            'title' => json_encode($request->title),
            'body' => json_encode($request->body),
        ]);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['posts']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $post = Post::find($id);
        if (!$post) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['posts']['not_found'], 'danger'),
        ]);

        $rules = $this->rules;
        $request->validate($rules);

        $input = $request->except(['photo', 'title', 'body']);

        if ($file = $request->file('photo')) {
            if ($post->photo && is_file(public_path($post->photo))) unlink(public_path($post->photo));
            $fileName = UtilController::resize($file, 'posts');
            $input['photo'] = htmlspecialchars($fileName);
        }

        $post->update($input + [
            'title' => json_encode($request->title),
            'body' => json_encode($request->body),
        ]);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['posts']['updated'], 'success'),
            'post' => $post,
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $post = Post::find($id);
        if (!$post) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['posts']['not_found'], 'danger'),
        ]);

        if ($post->photo && is_file(public_path($post->photo))) unlink(public_path($post->photo));
        $post->delete();

        $data = $this->data();

        $posts = $data['posts'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['posts']['deleted'], 'success'),
            'posts' => $posts,
            'total' => $total,
        ]);
    }
}
