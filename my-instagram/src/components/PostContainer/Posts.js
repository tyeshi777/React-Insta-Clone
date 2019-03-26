import React from "react";
import Post from "./Post";

function Posts(props) {
  console.log("props", props.dummyData);
  return (
    <>
      {props.dummyData.map(prop => (
        <Post
          key={prop.id}
          imageUrl={prop.imageUrl}
          username={prop.username}
          thumbnailUrl={prop.thumbnailUrl}
        />
      ))}
    </>
  );
}

export default Posts;
