@extends('layout.step', ['next' => 'finish'])

@section('step')
<ul id="step3list" class="d-flex flex-column list-unstyled">
@foreach ($nodes as $node)
  <li class="m-2">
    <span class="p-2 bg-primary rounded text-white">{{ $node['glyph'] }}</span>
  </li>
@endforeach
</ul>
<p class="text-center m-0 py-2">
  <input type="text" id="step3input" class="d-inline-block form-control text-center" size="3" minlength="3" maxlength="3" pattern="^[A-Z]{3}$"  />
</p>
@overwrite
