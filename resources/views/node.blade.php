<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <script src="js/vendor.js" defer></script>
        <link href="css/vendor.css" rel="stylesheet" />

        <script src="js/app.js" defer></script>
        <link href="css/app.css" rel="stylesheet" />

        <script src="js/node.js" defer></script>
        <link href="css/node.css" rel="stylesheet" />

        <title>Secret Santa - Jalis</title>
    </head>
    <body>
      <main class="card border-0">
        <section class="card-body text-center">
          <div id="form" class="d-inline-block p-2">
            <div class="form-group text-left m-0 mb-3">
              <label for="glyph" class="m-0 font-weight-bold">Nom</label>
              <select id="glyph" class="form-control">
                <option></option>
                @foreach ($nodes as $node)
                  <option value="{{ $node['glyph'] }}">{{ $node['name'] }}</option>
                @endforeach
              </select>
            </div>
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
