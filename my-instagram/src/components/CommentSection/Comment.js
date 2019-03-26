import React from "react";
import "./Comment.css";

function Comment(props) {
  return (
    <>
      {props.dummyData.map(item => (
        <Comment key={item.id} comment={item.comment} />
      ))}
    </>
  );
}
