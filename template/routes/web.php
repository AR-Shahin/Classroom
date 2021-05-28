<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});
Route::get('/login', function () {
    return view('login');
});

Route::get('/app', function () {
    return view('layouts.app');
});

Route::get('/master', function () {
    return view('layouts.master');
});


Route::get('/category', function () {
    return view('category');
})->name('category');

Route::get('/product', function () {
    return view('product');
})->name('product');
Route::get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');
