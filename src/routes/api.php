<?php

use App\Http\Controllers\Api\Auth\ProfileController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\Auth\ResetPasswordController;
use App\Http\Controllers\Api\Auth\UpdatePasswordController;
use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\LogoutController;
use App\Http\Controllers\Api\PatientsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware(['logging'])->group(function () {
Route::prefix('v1')->group(function () {
    Route::post('/register', [RegisterController::class, 'register'])->name('api.register');
    Route::post('/login', [LoginController::class, 'login'])->name('api.login');
    Route::post('/reset-password', [ResetPasswordController::class, 'reset'])->name('api.reset.password');
    Route::post('/update-password', [UpdatePasswordController::class, 'update'])->name('api.password.update');

    Route::middleware(['bearer'])->group(function () {
        Route::get('/logout', [LogoutController::class, 'logout'])->name('api.logout');
        Route::get('/profile', [ProfileController::class, 'profile'])->name('api.profile');

        Route::prefix('patients')->group(function () {
            Route::get('/', [PatientsController::class, 'list'])->name('api.patients.list');
            Route::put('/', [PatientsController::class, 'update'])->name('api.patients.update');
            Route::get('/{id}', [PatientsController::class, 'info'])->name('api.patients.info');
            Route::post('/create', [PatientsController::class, 'create'])->name('api.patients.create');
        });
    });
});
//});
