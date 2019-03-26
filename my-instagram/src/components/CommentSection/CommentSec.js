import React, { Component } from "react";
import Comment from "./Comment";
import "./Comment.css";

class CommentSec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  render() {
    // console.log(this.state.comments);
    return (
      <div>
        {this.state.comments &&
          this.state.comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
      </div>
    );
  }
}

export default CommentSec;
