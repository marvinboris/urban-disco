<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    //
    protected $fillable = [
        'post_id', 'body', 'is_active', 'user_id'
    ];

    public function author()
    {
        return $this->belongsTo(User::class);
    }

    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function replies()
    {
        return $this->hasMany(CommentReply::class);
    }
}
