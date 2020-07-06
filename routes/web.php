<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::prefix('api')->group(function () {
    Route::resources([
        'images' => 'ImageController',
        'users' => 'UserController',
    ]);
});

Route::get('/admin/{any?}', function () {
    return view('admin');
})->where('any', '.*');

Route::get('/{any?}', function () {
    return view('app');
})->where('any', '.*');
