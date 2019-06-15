/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function DiscussionForm({ setModalIsOpen, setDiscussions, discussions }) {
  function JSONify(elements) {
    var obj = {};
    for (var i = 0; i < elements.length; ++i) {
      var element = elements[i];
      var name = element.name;
      var value = element.value;
      if (name) {
        obj[name] = value;
      }
    }
    return obj;
  }

  const user = JSON.parse(localStorage.getItem("user"));

  const discussion = {
    ID: Date.now(),
    author: user.name,
    date: new Date(),
    comments: []
  };

  function handleSubmit(event) {
    event.preventDefault();
    const data = JSONify(event.target.elements);
    Object.assign(discussion, data);
    const addedData = discussions.concat(discussion);
    setDiscussions(addedData);
    localStorage.setItem("discussions", JSON.stringify(addedData));
    setModalIsOpen(false);
  }

  function handleCancel(event) {
    setModalIsOpen(false);
  }

  const formStyled = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "500px",
    padding: "1.5em",
    background: "darkgrey",
    borderRadius: "0.5em",
    margin: "0 auto"
  };

  const formContainer = {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    zIndex: "2",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  };

  const titleStyle = {
    margin: "1em 0",
    fontSize: "25px",
    paddingTop: "8px",
    paddingBottom: "8px",
    borderRadius: "4px",
    outline: "none",
    border: "none",
    borderBottom: "1px solid #ddd",
    width: "100%",
    textAlign: "center"
  };

  const bodyStyle = {
    argin: "1em 0",
    fontSize: "15px",
    paddingTop: "8px",
    paddingBottom: "14px",
    borderRadius: "4px",
    outline: "none",
    border: "none",
    borderBottom: "1px solid #ddd",
    width: "100%",
    textAlign: "left",
    height: "150px"
  };

  const submitButton = {
    marginTop: "20px",
    lineHeight: "1.5em",
    background: "#757575",
    border: "none",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "0.5em",
    borderRadius: "0.25rem",
    textAlign: "center",
    width: "50%",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#484848"
    }
  };

  const closeButton = {
    fontSize: "2em",
    cursor: "pointer",
    color: "white",
    textAlign: "right",
    width: "100%"
  };

  return (
    <div css={formContainer}>
      <form css={formStyled} onSubmit={handleSubmit}>
        <span
          onClick={handleCancel}
          css={closeButton}
          aria-label="Close discussion form"
        >
          &times;
        </span>
        <label css={{ color: "white", fontSize: "40px" }} htmlFor="title">
          Title
        </label>
        <input
          css={titleStyle}
          name="title"
          type="text"
          id="title"
          aria-label="Enter discussion title"
          placeholder="Enter discussion title"
          required
          autoComplete="off"
        />
        <label css={{ color: "white", fontSize: "40px" }} htmlFor="body">
          Body
        </label>
        <textarea
          css={bodyStyle}
          cols="20"
          rows="10"
          name="body"
          id="body"
          aria-label="Enter discussion body"
          placeholder="Enter discussion body"
          required
        />
        <input css={submitButton} type="submit" value="Create!" />
      </form>
    </div>
  );
}

export default DiscussionForm;
