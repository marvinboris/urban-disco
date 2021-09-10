<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            LanguageSeeder::class,
            RoleSeeder::class,
            FeatureSeeder::class,
            AdminSeeder::class,
            UserSeeder::class,
            MethodSeeder::class,
        ]);
    }
}
