import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle} from 'chart.js';
//import { Chart } from 'react-chartjs-2';

Chart.register(
    ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

export default function LineChart (){
    //const [inc, setInc] = useState(0);
    const projects = []

    window.Echo.channel('laravel_database_user-channel').listen('.UserEvent', (data) => {
        data = data.title[0]
        const x = [0, 10, 5, 2, 20, 30, 45, 55, 99];
        const y = [0, 10, 5, 2, 20, 30, 45, 55, 99];
    })
    
    useEffect(()=>{
        axios.get('/api/data').then(response => {        
            
            for(var i=0;i<=response.data.length;i++){
                projects.push(response.data[i].value1)
            }
        })
    },[])


    
    const dataBarChart = {
        labels: projects,
        datasets: [
        {
            label: "My First dataset",
            backgroundColor: "hsl(252, 82.9%, 67.8%)",
            borderColor: "hsl(252, 82.9%, 67.8%)",
            data: projects,
        },
        ],
    };

    const configBarChart = {
        type: "line",
        data: dataBarChart,
        options: {},
    };

    const chartBar = new Chart(
        document.getElementById("chartBar"),
        configBarChart
    );


}

if (document.getElementById('line-chart')) {
    ReactDOM.render(<LineChart />, document.getElementById('line-chart'));
}