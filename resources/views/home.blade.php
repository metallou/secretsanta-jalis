@extends('layout.base')

@section('content')
<section id="start">
  @include('parts.start')
</section>
<section id="step1" class="d-none">
  @include('parts.step1')
</section>
<section id="step2" class="d-none">
  @include('parts.step2')
</section>
<section id="step3" class="d-none">
  @include('parts.step3')
</section>
<section id="finish" class="d-none">
  @include('parts.finish')
</section>
@endsection
