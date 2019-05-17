import React, { Component } from "react";
import Filler from "./Filler";

export default class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completion: 30
    };
  }
  render() {
    const { completion } = this.state;
    return (
      <div>
        <p>x days gone</p>
        <p>x days left</p>
        <div className="progress-bar">
          <Filler percentage={completion} />
        </div>
      </div>
    );
  }
}
