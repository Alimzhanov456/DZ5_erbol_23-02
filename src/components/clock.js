import React from "react";
import ClockFace from "./ClockFace.js";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Bishkek Time</h1>
        <ClockFace time={this.state.date} />
      </div>
    );
  }
}

export default Clock;
