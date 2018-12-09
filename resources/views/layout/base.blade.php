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

        <script src="js/home.js" defer></script>
        <link href="css/home.css" rel="stylesheet" />

        <title>Secret Santa - Jalis</title>
    </head>
    <body>
      <main>
        @yield('content')
      </main>
    </body>
</html>
