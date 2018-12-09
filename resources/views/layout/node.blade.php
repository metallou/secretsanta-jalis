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
      <main class="card">
        <section class="card-body text-center">
          @yield('content')
        </section>
        <section class="card-footer bg-dark text-center">
          <button type="button" id="check" class="btn btn-success">Valider</button>
          <button type="button" id="next" class="btn btn-success invisible d-none">ERROR</button>
        </section>
      </main>
    </body>
</html>
