<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    //
    protected $directory = '/images/team-members/';

    protected $fillable = [
        'name', 'job', 'photo',
    ];

    public function getPhotoAttribute($value)
    {
        return $value ? $this->directory . $value : null;
    }
}
