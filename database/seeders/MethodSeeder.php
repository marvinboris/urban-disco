<?php

namespace Database\Seeders;

use App\Models\Method;
use Illuminate\Database\Seeder;

class MethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $methods = [
            [
                'name' => 'Mobile',
                'text' => 'Mobile Payment',
            ],
            [
                'name' => 'Admin',
                'text' => 'Admin',
            ],
        ];

        foreach ($methods as $method) {
            Method::create($method);
        }
    }
}
