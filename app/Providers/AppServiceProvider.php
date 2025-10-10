<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (strtolower(request()->header('x-forwarded-proto', '')) === 'https') {
            URL::forceScheme('https'); // keeps the current host (whatever Expose gives you)
        }
    }
}
