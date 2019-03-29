import React from "react";
import Post from "./Post";
import CommentSec from "../CommentSection/CommentSec";
import LikeSection from "./LikeSection";
import SearchBar from "../SearchBar/Search";
import dummyData from "../../dummy-data";

class PostRender extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      term: ""
    };
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }

  searchHandler = event => {
    this.setState({ term: event.target.value });
  };

  incrementLike = () => {
    let likes = this.state.dummyData.likes + 1;
    this.setState({ likes });
  };

  render() {
    // console.log(this.state.dummyData);
    return (
      <>
        <SearchBar onSearch={this.searchHandler} />
        {this.state.dummyData.map(prop => (
          // console.log("post", props.liked);
          <Post
            key={prop.id}
            imageUrl={prop.imageUrl}
            username={prop.username}
            thumbnailUrl={prop.thumbnailUrl}
          />
        ))}
        <LikeSection likes={this.state.likes} liked={this.incrementLike} />
        <CommentSec comments={this.state.comments} />
      </>
    );
  }
}

export default PostRender;
