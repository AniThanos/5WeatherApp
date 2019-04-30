import React from "react";
import "./App.css";
import WeatherCard from "./component/WeatherCard/weatherCard";

class App extends React.Component {
  state = {
    forecast: [],
    cityName: ''
  };
  componentDidMount() {
    fetch("http://localhost:3006/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          forecast: data,
          cityName: data[0].cityName
        });

      });
  }
  render() {
    return (
      <div className="App">
        <div className="header">{this.state.cityName}</div>
        <div className="cardContainer">
          {this.state.forecast.map(data => (
            <WeatherCard forecast={data} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
