/** @jsx jsx */
import { jsx } from "@emotion/core";

function Commentform({ setModalIsOpen, setDiscussions, discussions }) {
  function JSONify(elements) {
    var obj = {};
    for (var i = 0; i < elements.length; ++i) {
      var name = elements[i].name;
      var value = elements[i].value;
      if (name) {
        obj[name] = value;
      }
    }
    return obj;
  }

  const user = JSON.parse(localStorage.getItem("user"));

  const comment = {
    ID: Date.now(),
    author: user.name,
    date: new Date(),
    body: "alabama"
  };

  function handleSubmit(event) {
    event.preventDefault();
    const data = JSONify(event.target.elements);
    Object.assign(comment, data);
    const addedData = discussions.concat(comment);
    setDiscussions(addedData);
    localStorage.setItem("discussions", JSON.stringify(addedData));
    setModalIsOpen(false);
  }

  function handleCancel() {
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
        <label css={{ color: "white", fontSize: "40px" }} htmlFor="comment">
          Comment
        </label>
        <textarea
          css={bodyStyle}
          cols="20"
          rows="10"
          name="comment"
          id="comment"
          aria-label="Enter comment"
          placeholder="Enter comment"
          required
        />
        <input css={submitButton} type="submit" value="SEND" />
      </form>
    </div>
  );
}

export default Commentform;
