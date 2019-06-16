/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

function Comment({ comment, handleClick }) {
  const button = {
    borderRadius: "10px",
    backgroundColor: "blue",
    color: "white",
    padding: "5px 10px",
    fontWeight: "700",
    fontSize: "1rem",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "green"
    }
  };

  const item = {
    borderRadius: "10px",
    backgroundColor: "#eee",
    width: "400px",
    padding: "10px 20px",
    margin: "10px"
  };
  return (
    <ul css={{ listStyleType: "none" }}>
      <li key={Date.now()} css={item}>
        <p>
          {comment.author} | {comment.date}
        </p>
        <p>{comment.body}</p>
        <button css={button} onClick={handleClick}>
          Reply
        </button>
      </li>
      {comment.comments && (
        <ul css={{ listStyleType: "none" }}>
          {comment.comments.map(value => {
            return (
              <li key={Date.now()} css={item}>
                <p>
                  {value.author} | {value.date}
                </p>
                <p>{value.body}</p>
              </li>
            );
          })}
        </ul>
      )}
    </ul>
  );
}

export default Comment;
