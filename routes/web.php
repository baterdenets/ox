<?php

use App\Http\Controllers\ConfigController;
use App\Http\Controllers\CorpController;
use App\Http\Controllers\OfficeController;
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
    Route::get('config.get', [ConfigController::class, 'index'])->name('config.get');
    Route::post('config.create', [ConfigController::class, 'store'])->name('config.create');
    Route::post('config.update', [ConfigController::class, 'update'])->name('config.update');
    Route::post('config.delete', [ConfigController::class, 'delete'])->name('config.delete');

    Route::get('corp.get', [CorpController::class, 'index'])->name('corp.get');
    Route::post('corp.create', [CorpController::class, 'store'])->name('corp.create');
    Route::post('corp.update', [CorpController::class, 'update'])->name('corp.update');
    Route::post('corp.delete', [CorpController::class, 'delete'])->name('corp.delete');

    Route::get('office.get', [OfficeController::class, 'index'])->name('office.get');
    Route::post('office.create', [OfficeController::class, 'store'])->name('office.create');
    Route::post('office.update', [OfficeController::class, 'update'])->name('office.update');
    Route::post('office.delete', [OfficeController::class, 'delete'])->name('office.delete');
});

require __DIR__.'/auth.php';
