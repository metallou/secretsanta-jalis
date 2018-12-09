<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
  public function index()
  {
    $fMap1 = function(array $aConst) {
      return array(
        'name' => $aConst['name'],
        'glyph' => $aConst['glyph'],
        'key' => $aConst['key1'],
      );
    };
    $fMap2 = function(array $aConst) {
      return array(
        'name' => $aConst['name'],
        'label' => $aConst['label'],
        'image' => $aConst['image'],
      );
    };

    $aNodes = config('const.nodes');
    $aTypes = config('const.types');
    shuffle($aNodes);
    shuffle($aTypes);

    $aResource = array(
      'nodes' => array_map($fMap1, $aNodes),
      'types' => array_map($fMap2, $aTypes),
    );

    return view('home', $aResource);
  }

  public function node()
  {
    $fSort = function(array $a, array $b) {
      return $a['name'] > $b['name'];
    };
    $fMap = function(array $aConst) {
      return array(
        'name' => $aConst['name'],
        'glyph' => $aConst['glyph'],
      );
    };

    $aNodes = config('const.nodes');
    usort($aNodes, $fSort);

    $aResource = array(
      'nodes' => array_map($fMap, $aNodes),
    );

    return view('node', $aResource);
  }
}
