import React from "react";
import cloud from "../../images/cloud.png";
import cloud2 from "../../images/clouds.png";
import rain from "../../images/rain.png";
import sun from "../../images/sun.png";
import sunny from "../../images/sunny.png";
require("../WeatherCard/weatherCard.css");


class card extends React.Component {
  state = {
    data: this.props.forecast,
    day: this.props.forecast.day,
    nowday: "",
    image: ""
  };
  componentDidMount() {
    switch (this.state.data.day) {
      case 0:
        this.setState({ nowday: "Sunday" });
        break;

      case 1:
        this.setState({ nowday: "Monday" });

        break;
      case 2:
        this.setState({ nowday: "Tuesday" });

        break;
      case 3:
        this.setState({ nowday: "Wednesday" });

        break;
      case 4:
        this.setState({ nowday: "Thursday" });

        break;
      case 5:
        this.setState({ nowday: "Friday" });

        break;
      case 6:
        this.setState({ nowday: "Saturday" });

        break;
    }

    switch (this.state.data.desc[0]) {
      case 'overcast clouds':
        this.setState({ image: cloud })
        break;
      case 'scattered clouds':
        this.setState({ image: cloud2 })
        break;
      case 'broken clouds':
        this.setState({ image: cloud2 })
        break;
      case 'few clouds': this.setState({ image: sun })
        break;
      case 'light rain': this.setState({ image: rain })
        break;
      case 'clear sky': this.setState({ image: sunny })
        break;
      default: console.log(this.state.data.desc[0])

    }
  }
  render() {
    return (
      <div className="mainWeatherCard">
        <div className="card border-info">
          <div className="card-header">{this.state.nowday} <br />{this.state.data.date}</div>
          <div className="card-body text-primary">
            <div className="card-text">

              <div className="temperature">{this.state.data.temperature} C<sub style={{ bottom: "0.75em" }}>o</sub><br /></div>
              <div className="">

                <img src={this.state.image} className="imagecss" />
              </div>
              <label>{this.state.data.desc}</label>
              <br />
              <label>Humidity: </label>{"   "}{this.state.data.humidity}%<br />
              <label>Wind Speed:</label>{"   "}{this.state.data.windSpeed} km/h


            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default card;
