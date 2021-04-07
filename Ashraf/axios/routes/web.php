<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});


Route::resource('category', CategoryController::class);
Route::get('get-all-cat',[CategoryController::class,'getAllCat'])->name('get-all-cat');
