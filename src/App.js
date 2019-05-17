import React, { Component } from "react";
import Progress from "./Progress";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDate: 45,
      finalDate: 100,
      daysLeft: 55
    };
    this.getDaysLeft = this.getDaysLeft.bind(this);
  }

  // compute number of days left
  // getDaysLeft
  getDaysLeft() {
    // get final date
    // get current date
    // get difference and round off to the nearest days
    // return number days
  }

  render() {
    const { daysLeft } = this.state;
    return (
      <div className="App">
        <h2>Number of days left before cohort ends</h2>
        <Progress daysLeft={daysLeft} />
      </div>
    );
  }
}

export default App;
