<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <script src="{{ asset('js/vendor.js') }}" defer></script>
        <link href="{{ asset('css/vendor.css') }}" rel="stylesheet" />

        <script src="{{ asset('js/app.js') }}" defer></script>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" />

        <script src="{{ asset('js/node.js') }}" defer></script>
        <link href="{{ asset('css/node.css') }}" rel="stylesheet" />

        <title>Secret Santa - Jalis</title>
    </head>
    <body>
      <main class="card border-0">
        <section class="card-body text-center">
          <div id="form" class="d-inline-block p-2">
            <input type="hidden" id="glyph" class="form-control d-none" value="{{ $glyph }}" />
            <div class="form-group text-left m-0">
              <label for="key1" class="m-0 font-weight-bold">Clé 1</label>
              <input type="text" id="key1" class="form-control" />
            </div>
            <div class="form-group text-left m-0">
              <label for="key2" class="m-0 font-weight-bold">Clé 2</label>
              <input type="text" id="key2" class="form-control" />
            </div>
            <div class="form-group text-left m-0 mt-3">
              <label for="code" class="m-0 font-weight-bold">Code</label>
              <input type="text" id="code" readonly class="form-control-plaintext" />
            </div>
          </div>
        </section>
        <section class="card-footer bg-dark text-center">
          <button type="button" id="check" class="btn btn-success">Valider</button>
        </section>
      </main>
    </body>
</html>
