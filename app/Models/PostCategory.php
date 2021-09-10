<?php

namespace App\Models;

use App\Http\Controllers\UtilController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class PostCategory extends Model
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

    protected $fillable = [
        'name', 'slug', 'is_active',
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

    public function getNameAttribute($value)
    {
        return $this->translatable($value);
    }

    public function getStringifiedAttribute()
    {
        return $this->name[env('MIX_DEFAULT_LANG', 'fr')];
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function getLinkAttribute()
    {
        return '/post-categories/' . $this->slug . '/posts';
    }
}
