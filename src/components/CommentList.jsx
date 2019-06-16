/** @jsx jsx */
import { jsx } from "@emotion/core";
import Comment from "./Comment";

function CommentList({ comments, handleClick }) {
  return (
    <div css={{ listStyleType: "none" }}>
      {comments.map(value => {
        return <Comment comment={value} handleClick={handleClick} />;
      })}
    </div>
  );
}

export default CommentList;
