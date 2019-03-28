import React, { Component } from "react";
import "./App.css";
import PostRender from "./components/PostContainer/PostRender";
import Login from "./components/LoginPage/Login";
import authenticate from "./components/Authenticate/authenticate.js";

const ConditionalRender = authenticate(Login)(PostRender);

class App extends Component {
  state = {
    users: "",
    password: ""
  };

  loginHandler = event => {
    this.setState({ users: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <ConditionalRender />
      </div>
    );
  }
}

export default App;
