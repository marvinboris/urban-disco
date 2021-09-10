<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\PostCategory;
use Illuminate\Http\Request;

class PostCategoryController extends Controller
{
    private $rules = [
        'name' => 'array|required',
        'is_active' => 'required|integer',
    ];

    private function data()
    {
        $page = +request()->page;
        $show = request()->show;
        $search = request()->search;

        $total = 0;

        $post_categories = [];
        $filteredData = PostCategory::orderBy('id');

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

        foreach ($filteredData as $post_category) {
            $post_categories[] = $post_category->toArray();
        }

        return [
            'post_categories' => $post_categories,
            'total' => $total,
        ];
    }



    public function index()
    {
        $data = $this->data();

        $post_categories = $data['post_categories'];
        $total = $data['total'];

        return response()->json([
            'post_categories' => $post_categories,
            'total' => $total,
        ]);
    }

    public function show($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $post_category = PostCategory::find($id);
        if (!$post_category) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['post_categories']['not_found'], 'danger'),
        ]);

        return response()->json([
            'post_category' => $post_category,
        ]);
    }

    public function store(Request $request)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $request->validate($this->rules);

        $input = $request->except('name');

        PostCategory::create($input + [
            'name' => json_encode($request->name),
        ]);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['post_categories']['created'], 'success'),
        ]);
    }

    public function update(Request $request, $id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $post_category = PostCategory::find($id);
        if (!$post_category) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['post_categories']['not_found'], 'danger'),
        ]);

        $rules = UtilController::rules($this->rules, $post_category);
        $request->validate($rules);

        $input = $request->except('name');

        $post_category->update($input + [
            'name' => json_encode($request->name),
        ]);

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['post_categories']['updated'], 'success'),
            'post_category' => $post_category,
        ]);
    }

    public function destroy($id)
    {
        $cms = UtilController::cms();
        $user = UtilController::get(request());

        $post_category = PostCategory::find($id);
        if (!$post_category) return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['post_categories']['not_found'], 'danger'),
        ]);

        $post_category->delete();

        $data = $this->data();

        $post_categories = $data['post_categories'];
        $total = $data['total'];

        return response()->json([
            'message' => UtilController::message($cms['pages'][$user->language->abbr]['messages']['post_categories']['deleted'], 'success'),
            'post_categories' => $post_categories,
            'total' => $total,
        ]);
    }
}
