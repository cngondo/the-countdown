import React, { Component } from "react";
import Filler from "./Filler";

export default class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completion: 0
    };
  }
  render() {
    const { completion } = this.state;
    return (
      <div>
        <p>x days gone</p>
        <p>x days left</p>
        <p>Progress bar goes here</p>
        <Filler percentage={completion} />
      </div>
    );
  }
}
