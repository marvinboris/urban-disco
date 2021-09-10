<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admins = [
            [
                'name' => 'Boris Ndouma',
                'phone' => '237655588688',
                'email' => 'jaris.ultio.21@gmail.com',
                'password' => Hash::make('adminadmin'),
                'language_id' => 1,
            ],
            [
                'name' => 'Briand Yungong',
                'phone' => '237694422723',
                'email' => 'yungongbriand@gmail.com',
                'password' => Hash::make('11223344'),
                'language_id' => 1,
            ],
        ];

        foreach ($admins as $admin) {
            Admin::create($admin);
        }
    }
}
