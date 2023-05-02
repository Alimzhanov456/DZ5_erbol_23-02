import React from "react";
import Clock from "./Clock";
import Weather from "./Weather";

class App extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Weather />
      </div>
    );
  }
}

export default App;

