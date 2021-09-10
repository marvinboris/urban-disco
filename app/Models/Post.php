<?php

namespace App\Models;

use App\Http\Controllers\UtilController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Post extends Model
{
    use HasFactory, Sluggable;

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'stringified'
            ]
        ];
    }

    protected $directory = '/images/posts/';

    protected $fillable = [
        'post_category_id', 'title', 'body', 'photo', 'slug', 'is_active',
    ];

    protected $appends = [
        'link', 'stringified',
    ];

    public function translatable($value)
    {
        $data = null;
        if (!UtilController::isJson($value)) {
            $data = [];
            foreach (Language::all() as $language) {
                $data[$language->abbr] = $value;
            }
            return $data;
        }

        return json_decode($value, true);
    }

    public function getTitleAttribute($value)
    {
        return $this->translatable($value);
    }

    public function getBodyAttribute($value)
    {
        return $this->translatable($value);
    }

    public function getStringifiedAttribute()
    {
        return $this->title[env('MIX_DEFAULT_LANG', 'fr')];
    }

    public function author()
    {
        return $this->morphTo();
    }

    public function post_category()
    {
        return $this->belongsTo(PostCategory::class);
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function getLinkAttribute()
    {
        return '/post-categories/' . $this->post_category->slug . '/posts/' . $this->slug;
    }
}
