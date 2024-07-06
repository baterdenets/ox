<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/timeRecord', function () {
    return Inertia::render('TimeRecord/index');
})->middleware(['auth', 'verified'])->name('timeRecord');

Route::get('/info', function () {
    return Inertia::render('Info/index');
})->middleware(['auth', 'verified'])->name('info');

Route::get('/config', function () {
    return Inertia::render('Config/index');
})->middleware(['auth', 'verified'])->name('config');

Route::get('/report', function () {
    return Inertia::render('Report/index');
})->middleware(['auth', 'verified'])->name('report');

Route::get('/config/calculation', function () {
    return Inertia::render('Config/Calculation');
})->middleware(['auth', 'verified'])->name('config/calculation');

Route::get('/config/holiday', function () {
    return Inertia::render('Config/Holiday');
})->middleware(['auth', 'verified'])->name('config/holiday');

Route::get('/info/corp', function () {
    return Inertia::render('Info/Corp');
})->middleware(['auth', 'verified'])->name('info/corp');

Route::get('/info/office', function () {
    return Inertia::render('Info/Office');
})->middleware(['auth', 'verified'])->name('info/office');

Route::get('/info/division', function () {
    return Inertia::render('Info/Division');
})->middleware(['auth', 'verified'])->name('info/division');

Route::get('/info/position', function () {
    return Inertia::render('Info/Position');
})->middleware(['auth', 'verified'])->name('info/position');

Route::get('/info/role', function () {
    return Inertia::render('Info/Role');
})->middleware(['auth', 'verified'])->name('info/role');

Route::get('/info/user', function () {
    return Inertia::render('Info/User');
})->middleware(['auth', 'verified'])->name('info/user');

Route::get('/report/timeReport', function () {
    return Inertia::render('Report/TimeReport');
})->middleware(['auth', 'verified'])->name('report/timeReport');

Route::get('/request', function () {
    return Inertia::render('Request/index');
})->middleware(['auth', 'verified'])->name('request');

Route::get('/request/vacancy', function () {
    return Inertia::render('Request/Vacancy');
})->middleware(['auth', 'verified'])->name('request/vacancy');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
