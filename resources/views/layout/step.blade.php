<div class="card border-0">
  <div class="card-body text-center">
    @yield('step')
  </div>
  <div class="card-footer d-flex justify-content-between bg-dark text-white">
    <div class="d-inline-block w-75 border rounded">
      <div class="progress h-100 bg-primary text-right"></div>
    </div>
    <button type="button" class="check btn btn-success">Valider</button>
    <button type="button" class="next btn btn-lg btn-primary d-none" data-next="{{ $next }}">Suivant</a>
  </div>
</div>
