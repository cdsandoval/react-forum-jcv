/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import DiscussionDetails from "../components/DiscussionDetails";
import { createPortal } from "react-dom";
import CommentList from "../components/CommentList";
import Loading from "../components/Loading";
const CommentForm = React.lazy(() => import("../components/Commentform"));

function Discussions({ title, discussions, setDiscussions }) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [index, setIndex] = React.useState(1);
  const $comment = React.useMemo(() => document.getElementById("comment"), []);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key !== "Escape" || !modalIsOpen) return;
      setModalIsOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIsOpen]);

  React.useEffect(() => {
    discussions.map((element, i, array) => {
      if (element.title.replace(/[^a-zA-Z ]/g, "") === title) {
        setIndex(i);
      }
    });
  });

  function handleClick() {
    setModalIsOpen(true);
  }

  function handleOpenedModel(value) {
    setModalIsOpen(value);
  }

  return (
    <>
      <DiscussionDetails title={title} discussions={discussions} />
      <CommentList
        comments={discussions[index].comments}
        handleClick={handleClick}
      />
      <Link to="/discussion">Back Discussions</Link>
      <React.Suspense fallback={<Loading />}>
        {modalIsOpen &&
          createPortal(
            <CommentForm
              setModalIsOpen={handleOpenedModel}
              setDiscussions={setDiscussions}
              discussions={discussions}
            />,
            $comment
          )}
      </React.Suspense>
    </>
  );
}

export default Discussions;
