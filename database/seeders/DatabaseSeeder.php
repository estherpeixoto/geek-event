<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'name' => 'Esther Peixoto',
            'email' => 'estherpeixoto13@gmail.com',
            'password' => Hash::make('test123'),
        ]);

        \App\Models\About::create([
            'text' => 'Example About text',
            'image' => '',
        ]);
    }
}
