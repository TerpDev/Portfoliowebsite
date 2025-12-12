<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class SpotifyController extends Controller
{
    private function getAccessToken()
    {
        $response = Http::asForm()->post('https://accounts.spotify.com/api/token', [
            'grant_type' => 'refresh_token',
            'refresh_token' => config('services.spotify.refresh_token'),
            'client_id' => config('services.spotify.client_id'),
            'client_secret' => config('services.spotify.client_secret'),
        ]);

        if ($response->failed()) {
            return null;
        }

        return $response->json()['access_token'] ?? null;
    }

    public function currentlyPlaying()
    {
        $accessToken = $this->getAccessToken();
        if (!$accessToken) {
            return response()->json(['playing' => false]);
        }

        $response = Http::withToken($accessToken)
            ->get('https://api.spotify.com/v1/me/player/currently-playing');

        if ($response->status() === 204) {
            return response()->json(['playing' => false]);
        }

        if ($response->failed()) {
            return response()->json(['playing' => false]);
        }

        $data = $response->json();

        return response()->json([
            'playing' => $data['is_playing'] ?? false,
            'track' => [
                'name' => $data['item']['name'] ?? null,
                'artists' => collect($data['item']['artists'] ?? [])->pluck('name')->join(', '),
                'album' => $data['item']['album']['name'] ?? null,
                'image' => $data['item']['album']['images'][0]['url'] ?? null,
                'url'   => $data['item']['external_urls']['spotify'] ?? null,
            ],
        ]);
    }

    public function topTracks()
    {
        $accessToken = $this->getAccessToken();
        if (!$accessToken) {
            return response()->json(['tracks' => []]);
        }

        $response = Http::withToken($accessToken)
            ->get('https://api.spotify.com/v1/me/top/tracks', [
                'limit' => 5,
                'time_range' => 'medium_term',
            ]);

        if ($response->failed()) {
            return response()->json(['tracks' => []]);
        }

        $data = $response->json();

        $tracks = collect($data['items'] ?? [])->map(function ($item) {
            return [
                'name'    => $item['name'] ?? null,
                'artists' => collect($item['artists'] ?? [])->pluck('name')->join(', '),
                'album'   => $item['album']['name'] ?? null,
                'image'   => $item['album']['images'][0]['url'] ?? null, // ✅ cover
                'url'     => $item['external_urls']['spotify'] ?? null,   // ✅ link
            ];
        })->values();

        return response()->json(['tracks' => $tracks]);
    }
}
