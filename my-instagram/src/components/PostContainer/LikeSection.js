import React from "react";

const LikeSection = props => {
  // console.log("like", props.liked);
  return (
    <div>
      <div className="faFlex">
        <div onClick={props.liked}>
          <i className="fa fa-heart-o" />
        </div>
        <div>
          <i className="fa fa-comment-o" />
        </div>
      </div>
      <div className="likesCount">{props.likes}</div>
    </div>
  );
};

export default LikeSection;
