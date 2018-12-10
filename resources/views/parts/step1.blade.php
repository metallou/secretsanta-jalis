@extends('layout.step', ['next' => 'step2'])

@section('step')
<div class="table-responsive">
  <table class="table table-stripped table-borderless table-hover">
    <thead>
      <tr class="bg-dark text-white">
        <th scope="col" class="text-nowrap">Nom</th>
        <th scope="col" class="text-nowrap">Code</th>
        <th scope="col" class="text-nowrap">Clé 1</th>
        <th scope="col" class="text-nowrap">Clé 2</th>
      </tr>
    </thead>
    <tbody>
    @foreach ($nodes as $node)
      <tr class="step1row" data-glyph="{{ $node['glyph'] }}">
        <td class="text-nowrap" data-field="name">{{ $node['name'] }}</td>
        <td class="text-nowrap text-capitalize" data-field="code">
          <input type="text" class="form-control" />
        </td>
        <td class="text-nowrap text-capitalize" data-field="key1">{{ $node['key'] }}</td>
        <td class="text-nowrap text-capitalize" data-field="key2"></td>
      </tr>
    @endforeach
    </tbody>
  </table>
</div>
@overwrite
