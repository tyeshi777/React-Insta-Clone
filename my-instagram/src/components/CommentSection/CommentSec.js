import React, { Component } from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import "./Comment.css";

class CommentSec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: ""
    };
  }

  commentHandler = event => {
    this.setState({ newComment: event.target.value });
  };

  handleCommentSubmit = event => {
    event.preventDefault();
    const copiedComment = { text: this.state.newComment, username: "tenzing" };
    let comments = this.state.comments.slice();
    comments.push(copiedComment);
    this.setState({ comments: [...comments], newComment: "" });
  };

  render() {
    return (
      <div>
        {this.state.comments &&
          this.state.comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        <CommentInput
          newComment={this.state.newComment}
          onComment={this.commentHandler}
          onEnter={this.handleCommentSubmit}
        />
      </div>
    );
  }
}

export default CommentSec;
