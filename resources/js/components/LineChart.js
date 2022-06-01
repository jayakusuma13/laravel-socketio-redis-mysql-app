import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chartjs';

export default function LineChart(){
    
//Required chart.js

//Chart line

  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "hsl(252, 82.9%, 67.8%)",
        borderColor: "hsl(252, 82.9%, 67.8%)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const configLineChart = {
    type: "line",
    data,
    options: {},
  };

  var chartLine = new Chart(
    document.getElementById("chartLine"),
    configLineChart
  );

    return(
        <div class="shadow-lg rounded-lg overflow-hidden">
            <div class="py-3 px-5 bg-gray-50">Line chart</div>
            <canvas class="p-10" id="chartLine"></canvas>
        </div>      
    )
}

if (document.getElementById('line-chart')) {
    ReactDOM.render(<LineChart />, document.getElementById('line-chart'));
}