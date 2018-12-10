<?php

namespace App\Http\Middleware;

use Closure;

class CheckGlyph
{
  /**
   * Handle an incoming request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Closure  $next
   * @return mixed
   */
  public function handle($request, Closure $next)
  {
    $fMap = function(array $aNode) {
      return $aNode['glyph'];
    };

    $glyph = $request->route('glyph');
    $aGlyphs = array_map($fMap, config('const.nodes'));
    if (!in_array($glyph, $aGlyphs)) {
      $response = response('Unrecognized glyph', 403);
    } else {
      $response = $next($request);
    }

    return $response;;
  }
}
