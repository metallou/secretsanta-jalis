<?php

namespace App\Http\Controllers;

use \Closure;
use Illuminate\Http\Request;

class AjaxController extends Controller
{
  public function step1(Request $request)
  {
    $aConsts = config('const.nodes');

    $fMap = function(array $aData) use ($aConsts) {
      $glyph = strtoupper($aData['glyph']);
      $code = strtolower($aData['code']);
      $fFilter = function(array $aConst) use ($glyph, $code) {
        return $aConst['glyph'] === $glyph && $aConst['code'] === $code;
      };

      $aFilteredConsts = array_filter($aConsts, $fFilter);
      $success = !empty($aFilteredConsts);
      $aData['success'] = $success;

      if ($success) {
        $aConst = reset($aFilteredConsts);
        $aData['key1'] = $aConst['key1'];
        $aData['key2'] = $aConst['key2'];
      }

      return $aData;
    };

    $aDatas = $request->input('data');

    return response()->json(static::check($aDatas, $fMap));
  }

  public function step2(Request $request)
  {
    $aConsts = config('const.types');

    $fFilter = function(array $aConst) {
      return !is_null($aConst['field']);
    };
    $fMap = function(array $aConst) {
      return array(
        'name' => $aConst['name'],
        'field' => $aConst['field'],
      );
    };
    $aConsts = array_map($fMap, array_filter(config('const.types'), $fFilter));

    $fMap = function(array $aData) use ($aConsts) {
      $name = $aData['name'];
      $field = $aData['field'];
      $fFilter = function($aConst) use ($name, $field) {
        return $aConst['name'] === $name && $aConst['field'] === $field;
      };

      $aFilteredConsts = array_filter($aConsts, $fFilter);
      $success = !empty($aFilteredConsts);
      $aData['success'] = $success;

      return $aData;
    };

    $aDatas = $request->input('data');

    return response()->json(static::check($aDatas, $fMap));
  }

  public function step3(Request $request)
  {
    $glyph = $request->input('data');
    $status = strtoupper($glyph) === 'KCN';

    $aResponse = array(
      'status' => $status ? 'success' : 'error',
      'data' => $status,
    );

    return response()->json($aResponse);
  }

  private static function check(array $aDatas, Closure $fMap)
  {
    $fReduce = function($carry, $aCode) {
      return $carry && $aCode['success'];
    };

    $aHandledDatas = array_map($fMap, $aDatas);
    $status = array_reduce($aHandledDatas, $fReduce, true);

    return array(
      'status' => $status ? 'success' : 'error',
      'data' => $aHandledDatas,
    );
  }

  public function node(Request $request)
  {
    $aConsts = config('const.nodes');

    $aData = $request->input('data');
    $aData['key1'] = $aData['key1'] ?? '';
    $aData['key2'] = $aData['key2'] ?? '';

    $glyph = strtoupper($aData['glyph']);
    $fFilter = function(array $aConst) use ($glyph) {
      return $aConst['glyph'] === $glyph;
    };

    $aConsts = array_filter(config('const.nodes'), $fFilter);
    $aConst = reset($aConsts);

    $success = $aConst && (strtolower($aData['key1']) == $aConst['key1']) && (strtolower($aData['key2']) == $aConst['key2']);

    $data = $aData;
    if ($success) {
      $data['code'] = $aConst['code'];
    }

    $aResponse = array(
      'status' => $success ? 'success' : 'error',
      'data' => $data
    );

    return response()->json($aResponse);
  }
}
