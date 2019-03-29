import React, { Component } from "react";
import "./App.css";
import PostRender from "./components/PostContainer/PostRender";
import Authenticate from "./components/Authenticator/Authenticate";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostRender />
      </div>
    );
  }
}

export default Authenticate(App);
