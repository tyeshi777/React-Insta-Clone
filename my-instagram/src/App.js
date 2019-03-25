import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/Search";
import Post from "./components/PostContainer/Post";
import Comment from "./components/CommentSection/Comment";

class App extends Component {
  state = {
    dummyData
  };

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map((post, i) => (
          <Post key={i} post={post} />
        ))}
        {this.state.comment &&
          this.state.comment.map((comm, i) => <Comment key={i} comm={comm} />)}
      </div>
    );
  }
}

export default App;
