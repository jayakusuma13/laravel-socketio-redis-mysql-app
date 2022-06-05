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
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>

    <body>
        <div id="navbar-component"></div>
        <div class="container ml-64">
            
            
            <div class="chart-container">
                <div class="pie-chart-container">
                <canvas id="pie-chart"></canvas>
                </div>
            </div>            
    
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
    <script>

      
  $(function(){
      //get the pie chart canvas
        window.Echo.channel('laravel_database_user-channel').listen('.UserEvent', (data) => {
          addData(25)
        });

        function makeChart(pushVar){
          const query = <?php echo json_encode($dataAll); ?>;
          const projects = []
          
          var ctx = $("#pie-chart");

          for(var key in query){
              projects.push(query[key].value1)
          }


            console.log(projects)

          //pie chart data
          var data = {
            labels: projects,
            datasets: [
              {
                label: "Users Count",
                data: projects,
                backgroundColor: [
                  "#DEB887",
                  "#A9A9A9",
                  "#DC143C",
                  "#F4A460",
                  "#2E8B57",
                  "#1D7A46",
                  "#CDA776",
                ],
                borderColor: [
                  "#CDA776",
                  "#989898",
                  "#CB252B",
                  "#E39371",
                  "#1D7A46",
                  "#F4A460",
                  "#CDA776",
                ],
                borderWidth: [1, 1, 1, 1, 1,1,1]
              }
            ]
          };
    
          //options
          var options = {
            responsive: true,
            title: {
              display: true,
              position: "top",
              text: "Last Week Registered Users -  Day Wise Count",
              fontSize: 18,
              fontColor: "#111"
            },
            legend: {
              display: true,
              position: "bottom",
              labels: {
                fontColor: "#333",
                fontSize: 16
              }
            }
          };
    
          //create Pie Chart class object
          var chart1 = new Chart(ctx, {
            type: "line",
            data: data,
            options: options
          });
        }
            
        makeChart()

        function addData(data){
          chart1.data.datasets.forEach((dataset) => {
              dataset.data.push(data);
          });
          chart.update();
        }
    
  });
</script>
</html>