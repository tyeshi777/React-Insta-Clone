import React from "react";

const authenticate = Login => PostRender => props => {
  if (props.users === "") {
    return <Login />;
  } else if (props.username === "users") {
    return <PostRender />;
  } else {
    return <Login />;
  }
};

export default authenticate;
