<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Admin extends Authenticatable
{
    use Notifiable, HasApiTokens;

    protected $directory = '/images/admins/';

    protected $fillable = [
        'name', 'email', 'password', 'phone', 'photo', 'language_id',
    ];

    protected $hidden = [
        'password',
    ];

    public function type()
    {
        return 'admin';
    }

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }

    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function posts()
    {
        return $this->morphMany(Post::class, 'author');
    }
}
