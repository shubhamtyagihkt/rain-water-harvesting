import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Grievance from "./components/Grievance";
import OptimalMap from "./components/OptimalMap";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Playground from "./components/Playground";
import { withScriptjs } from "react-google-maps";
class App extends Component {
  render() {
    const MapLoader = withScriptjs(Playground);
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/grievance" component={Grievance} />
            <Route exact path="/optimalmap" component={OptimalMap} />
            <Route exact path="/playground" component={() => <Playground />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
