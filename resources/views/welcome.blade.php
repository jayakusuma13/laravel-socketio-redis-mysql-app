<!doctype html>

<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>
            IoT Temperature Monitoring
        </title>
        <link href="dist/output.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>

    <body>
        <div id="navbar-component"></div>
        <div class="container ml-64">

            <div id="line-chart"></div>

            
            <canvas id="chartBar" class="p-10"></canvas>
            
    
            <!-- Item List Here -->
            <div id="existing-button"></div>

            <div>
                <!--<div id="containerx">
                    @foreach ($dataAll as $data)
                        <div>{{ $data->value1 }} {{ $data->value2 }}</div>
                    @endforeach
                </div>-->
            </div>
        </div>

    </body>

    <script type="text/javascript">
        window.laravel_echo_hostname = "{{ env('LARAVEL_ECHO_HOSTNAME') }}";
    </script>
    <script src="{{ env('LARAVEL_ECHO_HOSTNAME') }}/socket.io/socket.io.js" type="text/javascript"></script>
    <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</html>