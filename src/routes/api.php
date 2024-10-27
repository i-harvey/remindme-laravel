<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Enums\TokenAbility;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/session', [AuthController::class, 'session'])->name('session');

$accessApiAbility = (TokenAbility::ACCESS_API->value);

Route::middleware(['auth:sanctum', "abilities:{$accessApiAbility}"])->group(function () {
    Route::post('/refresh-token', [AuthController::class, 'refresh'])->name('refresh');

    Route::get('/user', function (Request $request) {
        return $request->user();
    })->name('getUser');
});
