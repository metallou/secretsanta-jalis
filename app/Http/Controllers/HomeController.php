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
      'glyphs' => self::fillGlyphs($aNodes),
    );

    return view('home', $aResource);
  }

  public function node(Request $request)
  {
    $glyph = $request->route('glyph');

    $aResource = array(
      'glyph' => $glyph,
    );

    return view('node', $aResource);
  }

  private static function fillGlyphs(array $aNodes)
  {
    $aLetters = range('A', 'Z');
    $fMap = function(array $aNode) {
      return $aNode['glyph'];
    };

    $aGlyphs = array_map($fMap, $aNodes);
    $aGlyphs[] = 'KCN';
    $fClosure = function($i) use ($aGlyphs) {
      $fMap = function($glyph) use ($i) {
        return $glyph[$i];
      };
      $aLetters = array_map($fMap, $aGlyphs);

      return function($s) use ($aLetters) {
        return !in_array($s, $aLetters);
      };
    };
    $f0 = $fClosure(0);
    $f1 = $fClosure(1);
    $f2 = $fClosure(2);

    $a0 = array_values(array_filter($aLetters, $f0));
    $a1 = array_values(array_filter($aLetters, $f1));
    $a2 = array_values(array_filter($aLetters, $f2));

    $max = max(count($a0), count($a1), count($a2));
    $fFill = function(&$a) use ($max) {
      for($i = count($a); $i < $max; $i++) {
        array_push($a, 'Z');
      }
    };

    $fFill($a0);
    $fFill($a1);
    $fFill($a2);
    shuffle($a0);
    shuffle($a1);
    shuffle($a2);

    $aOUT = [];
    for($i = 0; $i < $max; $i++) {
        $aOUT[] = $a0[$i] . $a1[$i] . $a2[$i];
    };

    shuffle($aOUT);

    return $aOUT;
  }
}
