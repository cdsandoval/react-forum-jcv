/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function DiscussionDetails({ discussions, title }) {
  const authorAndDate = {
    fontSize: "17px"
  };

  const titleStyled = {
    fontSize: "50px",
    fontWeight: "bolder",
    margin: "15px 0px"
  };

  const detailsContainer = {
    marginLeft: "10px"
  };

  const bodyDiscussion = {
    fontSize: "30px",
    margin: "0px",
    marginBottom: "15px"
  };
  return (
    <div>
      {discussions.map(element => {
        if (element.title.replace(/[^a-zA-Z ]/g, "") === title) {
          return (
            <div css={detailsContainer}>
              <p css={authorAndDate}>
                {element.author} | {element.date}
              </p>
              <h1 css={titleStyled}>{element.title}</h1>
              <p css={bodyDiscussion}>{element.body}</p>
            </div>
          );
        }
      })}
    </div>
  );
}

export default DiscussionDetails;
