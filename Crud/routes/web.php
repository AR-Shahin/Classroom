<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;



Route::get('/', function () {
    return view('welcome');
});

Route::resource('category', CategoryController::class)->middleware('auth');

Route::get('show-login', [AuthController::class, 'showLogin'])->name('show.login');
Route::post('login', [AuthController::class, 'login'])->name('login');

Route::get('show-register', [AuthController::class, 'showRegister'])->name('show.register');
Route::post('register', [AuthController::class, 'register'])->name('register');
Route::get('logout', function () {
    Auth::logout();
    return redirect()->route('show.login');
})->name('logout');
