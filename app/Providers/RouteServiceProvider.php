<?php
namespace App\Providers;


use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;

class RouteServiceProvider extends \Illuminate\Support\ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }
    public function boot(): void
    {
        RateLimiter::for('contact', fn ($request) => [ Limit::perMinute(5)->by($request->ip()) ]);
    }
}

