import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/Search";
import PostRender from "./components/PostContainer/PostRender";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }
  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }
  incrementLike = () => {
    let likes = this.state.dummyData.likes + 1;
    this.setState({ likes });
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostRender
          dummyData={this.state.dummyData}
          liked={this.incrementLike}
        />
      </div>
    );
  }
}

export default App;
