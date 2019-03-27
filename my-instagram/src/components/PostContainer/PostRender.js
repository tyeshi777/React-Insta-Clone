import React from "react";
import Post from "./Post";
import CommentSec from "../CommentSection/CommentSec";
import LikeSection from "./LikeSection";

function PostRender(props) {
  // console.log("props", props.dummyData);
  return (
    <>
      {props.dummyData.map(prop => {
        // console.log("post", props.liked);
        return (
          <div>
            <Post
              key={prop.id}
              imageUrl={prop.imageUrl}
              username={prop.username}
              thumbnailUrl={prop.thumbnailUrl}
            />
            <LikeSection likes={prop.likes} liked={props.liked} />
            <CommentSec comments={prop.comments} />
          </div>
        );
      })}
    </>
  );
}

export default PostRender;
