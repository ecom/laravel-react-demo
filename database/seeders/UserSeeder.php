<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = Tag::all();

        $attach_relationships = function ($user) use ($tags) {
            $random_tag_ids = $tags->random(rand(1, 5))->pluck('id')->toArray();
            $user->tags()->attach($random_tag_ids);
            $user->avatar_id = $user->id;
            $user->portrait_id = $user->id;
            $user->save();
        };

        User::factory(1)->create([
            'email' => 'admin@example.com',
            'role' => 'admin',
        ])->each($attach_relationships);

        User::factory(1)->create([
            'email' => 'user@example.com',
        ])->each($attach_relationships);

        User::factory(48)->create()->each($attach_relationships);
    }
}
