import React, { Component } from "react";
import Progress from "./Progress";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dateToday: 0
    };
  }
  render() {
    return (
      <div className="App">
        <h2>Some Title of a Timer</h2>
        <Progress />
      </div>
    );
  }
}

export default App;
