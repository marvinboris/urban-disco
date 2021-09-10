<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'address', 'order_id', 'amount', 'currency', 'tx_id', 'tx_hash', 'vendor', 'method', 'type', 'status', 'data'
    ];

    public function enrolment()
    {
        return $this->belongsTo(Enrolment::class);
    }

    public function getDataAttribute($value)
    {
        return json_decode($value);
    }
}
