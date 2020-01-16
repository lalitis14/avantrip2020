import React from 'react';
import { Bar } from 'react-chartjs-2';
import './styles/result.css'
require ('./RoundedBars.js')



class Result extends React.Component {
    constructor(props){
        super(props);
        const priceData = [18000, 18000, 17000, 17000, 15500, 14500, 16000, 17000, 18000, 18000, 17000, 17000, 15500, 14500, 16000, 17000,18000, 18000, 17000, 17000, 15500, 14500, 16000, 17000, 18000, 18000, 17000, 17000, 15500, 14500, 16000, 17000];
        const barColors = [];

        for(let i=0; i<priceData.length; i++){
            if(priceData[i]<=Math.min(...priceData)){
                barColors[i]="rgb(87,200,120)";
           }else{
               barColors[i]="rgb(37,162,220)";
           }
        };

        const chartHeight = 40;
        // var screenWidth = window.innerWidth;
        // if ( screenWidth < 800) {
        //     chartHeight = 80;
        // }    
         

        this.state = {
            chartData:{
                height: chartHeight,
                labels: ['Lun 01', 'Mar 02', 'Mie 03', 'Jue 04', 'Vie 05', 'Sab 06', 'Dom 07', 'Lun 08', 'Lun 09', 'Mar 10', 'Mie 11', 'Jue 12', 'Vie 13', 'Sab 14', 'Dom 15', 'Lun 16', 'Lun 17', 'Mar 18', 'Mie 19', 'Jue 20', 'Vie 21', 'Sab 22', 'Dom 23', 'Lun 24', 'Lun 25', 'Mar 26', 'Mie 27', 'Jue 28', 'Vie 29', 'Sab 30', 'Dom 31'],
                datasets: [
                    {
                      data: priceData,
                      backgroundColor: barColors,
                    }
                ]
            }
        }
    }

    render(){
    return(
      <body id="Result__body">
        <div id="Result__chart">
          <Bar
            data={this.state.chartData}
            options={{
                scales: {
                    xAxes: [{
                        categoryPercentage: 1.0,
                        barPercentage: 0.6,
                        ticks: {
                          minRotation: 90,
                          fontSize: 10,
                        }
                      }],
                    yAxes: [
                      {
                        display: false,
                        ticks: {
                          min: 13000,
                          max: 22000
                        }
                      }
                    ]
                  },
                cornerRadius: 12,
                legend:{
                    display:false
                },
                title:{
                    display:true,
                    text: ['Junio', 'desde AR$ 14.500'],
                    fontSize: 12,
                    fontColor: 'rgb(7,155,217)',
                    padding: 5,
                },
            }}
            width={200}
            height={this.state.chartData.height}
          />
        </div>
      </body>
    )
  }
}

export default Result;