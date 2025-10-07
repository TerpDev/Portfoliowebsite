<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;

//Route::get('/', function () {
//    return Inertia::render('Welcome');
//})->name('home');
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');
