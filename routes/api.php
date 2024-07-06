<?php
use App\Http\Controllers\ConfigController;

Route::get('config', [ConfigController::class, 'index']);
