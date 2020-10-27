<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'username' => $this->faker->userName,
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            'profession' => $this->faker->randomElement(['Student', 'Designer', 'Artist', 'Photographer', 'Journalist', 'Business Owner', 'Teacher', 'Workshop Master', 'Tour Guide']),
            'organization' => $this->faker->randomElement(['Aalto University', 'Artek', 'Fiskars', 'Nordic Trip Oy', 'Paperbee Studio', 'K&W', 'iittala', 'Vasmo', 'Finnish Design Community']),
            'location' => $this->faker->randomElement(['Helsinki', 'Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Oulu', 'Turku', 'Jyväskylä', 'Lahti']),
        ];
    }
}
