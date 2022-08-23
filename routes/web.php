<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('calendar', function () {
        return Inertia::render('Calendar');
    })->name('dashboard.calendar');

    Route::get('tickets', function () {
        return Inertia::render('Tickets');
    })->name('dashboard.tickets');

    Route::get('lineup', function () {
        return Inertia::render('Lineup');
    })->name('dashboard.lineup');

    Route::get('contests', function () {
        return Inertia::render('Contests');
    })->name('dashboard.contests');

    Route::get('caravans', function () {
        return Inertia::render('Caravans');
    })->name('dashboard.caravans');

    Route::get('about', function () {
        return Inertia::render('About');
    })->name('dashboard.about');

    Route::prefix('faq')->group(function () {
        Route::get('/', function () {
            return Inertia::render('Admin/FAQ/list');
        })->name('dashboard.faq');

        Route::get('edit/{id}', function ($id) {
            return Inertia::render('Admin/FAQ/edit', [
                'id' => $id
            ]);
        })->name('dashboard.faq.edit');
    });

    Route::prefix('documentation')->group(function () {
        Route::get('/', function () {
            return Inertia::render('Documentation/index');
        })->name('dashboard.documentation');
    });
});

require __DIR__ . '/auth.php';
