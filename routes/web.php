<?php

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

Route::get("/", 'HomeController@index')->name('home');
Route::post("/step1", 'AjaxController@step1');
Route::post("/step2", 'AjaxController@step2');
Route::post("/step3", 'AjaxController@step3');

Route::get('/node', 'HomeController@node')->name('node');
Route::post('/node', 'AjaxController@node');
