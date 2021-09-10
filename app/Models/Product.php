<?php

namespace App\Models;

use App\Http\Controllers\UtilController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Product extends Model
{
    use HasFactory, Sluggable;

    protected $directory = '/images/products/';

    protected $fillable = [
        'name', 'photo', 'price', 'description', 'brand_id', 'slug'
    ];

    protected $appends = [
        'stringified', 'link',
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

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'stringified'
            ]
        ];
    }

    public function getNameAttribute($value)
    {
        return $this->translatable($value);
    }

    public function getDescriptionAttribute($value)
    {
        return $this->translatable($value);
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function getStringifiedAttribute()
    {
        return $this->name[env('MIX_DEFAULT_LANG', 'fr')];
    }

    public function getLinkAttribute()
    {
        return  '/products/' . $this->slug;
    }
}
