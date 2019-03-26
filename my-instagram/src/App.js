import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/Search";
import PostRender from "./components/PostContainer/PostRender";
import CommentSec from "./components/CommentSection/CommentSec";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      filteredPost: []
    };
  }
  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }

  searchPostFinder = e => {
    const dummyData = this.state.dummyData.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });

    this.setState({ filteredPost: dummyData });
  };
  render() {
    // console.log("state", this.state.dummyData);
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPost={this.state.searchPost}
        />
        <PostRender dummyData={this.state.dummyData} />
        <CommentSec comment={this.props.comment} />
      </div>
    );
  }
}

export default App;
