import React from "react";

class ClockFace extends React.Component {
  render() {
    const { time } = this.props;
    return <h2>{time.toLocaleTimeString()}</h2>;
  }
}

export default ClockFace;