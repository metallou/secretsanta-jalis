@extends('layout.step', ['next' => 'step3'])

@section('step')
<div class="card border-0">
  <div class="card-header bg-dark text-white">Types</div>
  <div id="step2types" class="card-body">
  @foreach ($types as $type)
    <figure class="step2type d-inline-block text-center text-white bg-primary rounded p-1" data-name="{{ $type['name'] }}">
      <i class="fas fa-2x fa-{{ $type['image'] }}"></i>
      <figcaption>{{ $type['label'] }}</figcaption>
    </figure>
  @endforeach
  </div>
  <div id="step2slots" class="card-deck">
    <div class="card border-dark">
      <div class="card-header bg-dark text-white">Code</div>
      <div class="step2slot card-body text-center" data-field="code"></div>
    </div>
    <div class="card border-dark">
      <div class="card-header bg-dark text-white">Clé 1</div>
      <div class="step2slot card-body text-center" data-field="key1"></div>
    </div>
    <div class="card border-dark">
      <div class="card-header bg-dark text-white">Clé 2</div>
      <div class="step2slot card-body text-center" data-field="key2"></div>
    </div>
  </div>
</div>
@overwrite
