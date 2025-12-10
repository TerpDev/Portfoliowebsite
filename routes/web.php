<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Route::get('/', function () {
//    return Inertia::render('Welcome');
//})->name('home');
Route::get('/home', function () {
    return Inertia::render('Home');
})->name('home');
Route::get('/', function () {
    return Inertia::render('test');
})->name('test');
