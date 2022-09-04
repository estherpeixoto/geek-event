<?php

use App\Http\Controllers\Admin\AboutController;
use App\Http\Controllers\Admin\FaqController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('faq', FaqController::class);

Route::prefix('about')->group(function () {
    Route::get('/', [AboutController::class, 'index'])
        ->name('about.index');

    Route::post('/{id}', [AboutController::class, 'update'])
        ->name('about.update');
});
