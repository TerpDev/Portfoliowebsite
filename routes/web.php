<?php

use App\Http\Controllers\SpotifyController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Route::get('/', function () {
//    return Inertia::render('Welcome');
//})->name('home');
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');
Route::get('/stage', function () {
    return Inertia::render('Stage');
})->name('stage');
Route::get('/test', function () {
    return Inertia::render('Test');
})->name('stage');


Route::get('/spotify/currently-playing', [SpotifyController::class, 'currentlyPlaying']);
Route::get('/spotify/top-tracks', [SpotifyController::class, 'topTracks']);


Route::get('/auth/spotify/redirect', function () {
    $query = http_build_query([
        'response_type' => 'code',
        'client_id' => config('services.spotify.client_id'),
        'scope' => 'user-read-currently-playing user-read-playback-state user-top-read',
        'redirect_uri' => config('services.spotify.redirect'),
        // optioneel, maar handig om altijd opnieuw consent te krijgen:
        'show_dialog' => 'true',
    ]);

    return redirect('https://accounts.spotify.com/authorize?' . $query);
})->name('spotify.redirect');


Route::get('/auth/spotify/callback', function (\Illuminate\Http\Request $request) {
    $code = $request->query('code');

    $response = Http::asForm()->post('https://accounts.spotify.com/api/token', [
        'grant_type' => 'authorization_code',
        'code' => $code,
        'redirect_uri' => config('services.spotify.redirect'),
        'client_id' => config('services.spotify.client_id'),
        'client_secret' => config('services.spotify.client_secret'),
    ]);

    $data = $response->json();

    // Check even wat je terugkrijgt
    // In je browser zie je dan de refresh token
    dd($data);
});

// 404 Fallback Route - Must be at the end
Route::fallback(function () {
    return Inertia::render('Error404');
});

