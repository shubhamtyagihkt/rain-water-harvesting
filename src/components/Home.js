import React, { Component } from "react";

export default class Home extends Component {
  componentDidMount() {
    window.executeHome();
  }
  render() {
    return (
      <div>
        <canvas id="myChart" width="400" height="200" />
      </div>
    );
  }
}
