import React from "react";
import "./Post.css";

const Post = props => {
  // console.log("Post", props);
  return (
    <div className="mainDiv">
      <div className="headers">
        <section>
          <img src={props.thumbnailUrl} alt="thumbnail" />
        </section>
        <section className="header4">
          <h4>{props.username}</h4>
        </section>
      </div>
      <img src={props.imageUrl} alt="img" />
      <p>
        <i className="fa fa-heart-o" /> <i className="fa fa-comment-o" />
      </p>
    </div>
  );
};

export default Post;
