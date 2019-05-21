import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage="http://i.imgur.com/ed7t0.jpg"/>
      </div>
    );
  }
}

export default App;
