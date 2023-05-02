import React from "react";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherOptions: ["sunny", "cloudy", "rainy", "stormy"],
      currentWeather: ""
    };
  }

  componentDidMount() {
    this.updateWeather();
  }

  updateWeather() {
    const { weatherOptions } = this.state;
    const randomIndex = Math.floor(Math.random() * weatherOptions.length);
    const randomWeather = weatherOptions[randomIndex];
    this.setState({
      currentWeather: randomWeather
    });
  }

  render() {
    return (
      <div>
        <h2>Current Weather: {this.state.currentWeather}</h2>
        <button onClick={() => this.updateWeather()}>Update Weather</button>
      </div>
    );
  }
}

export default Weather;
