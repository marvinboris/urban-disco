<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'Boris Ndouma',
                'email' => 'jaris.ultio.21@gmail.com',
                'phone' => '237655588688',
                'password' => Hash::make('12345'),
                'role_id' => Role::first()->id,
                'language_id' => 1,
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
