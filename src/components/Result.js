import React from 'react';
import { Bar } from 'react-chartjs-2';
import './styles/result.css'
import { FaAngleLeft, FaAngleRight, FaRegBell } from "react-icons/fa";
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
        this.state = {
            chartData:{
                width: 200,
                height: 50,
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
      <div id="Result">
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
                        },
                        scaleLabel: {
                          display: true,
                          padding: 10,
                        },
                        gridLines: {
                          display:false,
                        },
                      }],
                    yAxes: [
                      {
                        display: true,
                        gridLines: {
                          color: '#e7e7e7',
                        },
                        ticks: {
                          display: false,
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
                    padding: 5,
                },
            }}
            width={this.state.chartData.width}
            height={this.state.chartData.height}
          />
        
        <div id="Result__chart__footer">
          <p>Tarifa por adulto para una estadía de 14 días<br/>
          Los precios visualizados son los mayores encontrados por los usuarios en los últimos días y podrían no estar actualizados</p>
        </div>

        <div id="Result__chart__header">
          <span className="text-secondary" ><FaAngleLeft /></span>
          <span className="Result__chart__header__month"><b>Abril</b><p className="Result__chart__header__price">desde AR$15.100</p></span>
          <span className="Result__chart__header__month"><b>Mayo</b><p className="Result__chart__header__price">desde AR$16.100</p></span>
          <span className="Result__chart__header__month" id="active__month"><b>Junio</b><p id="active__price" className="Result__chart__header__price">desde AR$14.500</p></span>
          <span className="Result__chart__header__month"><b>Julio</b><p className="Result__chart__header__price">desde AR$17.800</p></span>
          <span className="Result__chart__header__month"><b>Agosto</b><p className="Result__chart__header__price">desde AR$22.500</p></span>
          <span className="text-secondary"><FaAngleRight /></span>
        </div>
      </div>

    </div>
    )
  }
}

export default Result;