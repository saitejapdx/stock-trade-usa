// import React from 'react';
// import axios from 'axios';
// import './GraphBox.css';
// class GraphBox extends React.Component{
//     componentDidUpdate(pP){
//         if(pP.currentStockCode != this.props.currentStockCode){
//             console.log(this.props.currentStockCode);
//         let startDate = Math.round(new Date().getTime() / 1000);
//           let endDate = startDate - (72 * 3600);

//           axios.get('https://finnhub.io/api/v1/stock/candle',{
//             params:{
//                 symbol: this.props.currentStockCode,
//                 resolution: 5,
//                 from: endDate,
//                 to: startDate,
//                 token: 'bu5pnnf48v6qku34c7vg'
//             }})
//           .then((response) => {
//             console.log(response);
//             // var hourly = response.data["hourly"];
//             //console.log(hourly);
//           })
//         }
//     }

//     render(){

//         return(
//             <div className>
//                 <h2>Graph</h2>
//             </div>
//         );
//     };
// }
// export default GraphBox;
import React from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
// import Plot from 'react-plotly.js';
import "./GraphBox.css";
import moment from "moment";
class GraphBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate(pP) {
    if (pP.currentStockCode !== this.props.currentStockCode) {
      // console.log(this.props.currentStockCode);
      // console.log(this.props.alter_Graph)
      if (this.props.alter_Graph === false) {
        let startDate = Math.round(new Date().getTime() / 1000);
        let endDate = startDate - 72 * 3600;
      } else {
        let startDate = this.props.dates.endDate;
        let endDate = this.props.dates.startDate;
      }
      const pointerToThis = this;
      axios
        .get("https://finnhub.io/api/v1/stock/candle", {
          params: {
            symbol: this.props.currentStockCode,
            resolution: 5,
            from: endDate,
            to: startDate,
            token: "bu5pnnf48v6qku34c7vg",
          },
        })
        .then((response) => {
          console.log(response);
          // console.log({ JSON.stringify(new Date(response.data.t * 1000)).split('T')[0].replace('"', '') });
          var unix_time = response.data.t;
          var i;
          var x = [];
          // console.log(unix_time);
          for (i = 0; i < unix_time.length; i++) {
            var time = moment.unix(unix_time[i]).format("YYYY-MM-DD HH:mm");
            x.push(time);
          }
          var y = response.data.c;
          // console.log(typeof(y[0]));
          var lowOrHighColor = y[0] < y[y.length - 1] ? "#81b737" : "#d54f4f";
          this.setState({
            symbol: this.props.currentStockCode,
            text: "in the last 72 Hours",
            Data: {
              labels: x,
              datasets: [
                {
                  label: "Stock Price",
                  data: y,
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: lowOrHighColor,
                  borderColor: lowOrHighColor,
                  borderCapStyle: "butt",
                  borderJoinStyle: "miter",
                  pointBorderColor: lowOrHighColor,
                  pointBackgroundColor: lowOrHighColor,
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: lowOrHighColor,
                  pointHoverBorderColor: lowOrHighColor,
                  pointHoverBorderWidth: 2,
                  pointRadius: 2,
                  pointHitRadius: 10,
                },
              ],
            },
          });
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else if (pP.dates != this.props.dates) {
      if (this.props.alter_Graph === false) {
        var startDate = Math.round(new Date().getTime() / 1000);
        var endDate = startDate - 72 * 3600;
      } else {
        var startDate = this.props.dates.endDate;
        var endDate = this.props.dates.startDate;
      }
      const pointerToThis = this;
      axios
        .get("https://finnhub.io/api/v1/stock/candle", {
          params: {
            symbol: this.props.currentStockCode,
            resolution: 5,
            from: endDate,
            to: startDate,
            token: "bu5pnnf48v6qku34c7vg",
          },
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.s == "no_data") {
            // const alert = useAlert();
            alert(
              "No Data Currently Available. Markets are closed during weekends and public holidays. Please filter by previous date."
            );
          } else {
            var unix_time = response.data.t;
            var i;
            var x = [];
            for (i = 0; i < unix_time.length; i++) {
              var time = moment.unix(unix_time[i]).format("YYYY-MM-DD HH:mm");
              x.push(time);
            }
            var text =
              "between " +
              String(x[0]).slice(0, 10) +
              " to " +
              String(x[x.length - 1].slice(0, 10));
            var y = response.data.c;
            var lowOrHighColor = y[0] < y[y.length - 1] ? "#81b737" : "#d54f4f";
            this.setState({
              text: text,
              symbol: this.props.currentStockCode,
              Data: {
                labels: x,
                datasets: [
                  {
                    label: "Stock Price",
                    data: y,
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: lowOrHighColor,
                    borderColor: lowOrHighColor,
                    borderCapStyle: "butt",
                    borderJoinStyle: "miter",
                    pointBorderColor: lowOrHighColor,
                    pointBackgroundColor: lowOrHighColor,
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: lowOrHighColor,
                    pointHoverBorderColor: lowOrHighColor,
                    pointHoverBorderWidth: 2,
                    pointRadius: 2,
                    pointHitRadius: 10,
                  },
                ],
              },
            });
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  }
  render() {
    return (
      <div className="graphClass">
        <h2>
          Price per share of {this.state.symbol} {this.state.text}{" "}
        </h2>
        <Line
          data={this.state.Data}
          height={300}
          width={400}
          options={{
            responsive: true,
            maintainAspectRatio: false,

            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    display: false, //this will remove only the label
                  },
                  scaleLabel: {
                    display: true,

                    labelString: "Time",
                    fontColor: "black",
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Stock Price",
                    fontColor: "black",
                  },
                  ticks: {
                    display: true,
                    fontColor: "black",
                  },
                },
              ],
            },

            legend: {
              display: true,
              position: "top",
              labels: {
                fontColor: "black",
                fontSize: 12,
              },
            },
          }}
        />
      </div>
    );
  }
}
export default GraphBox;
