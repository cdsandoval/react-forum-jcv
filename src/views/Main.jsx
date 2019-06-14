/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { createPortal } from "react-dom";
import { Link } from "@reach/router";
import TopicList from "../components/TopicList";
import Loading from "../components/Loading";
const DiscussionForm = React.lazy(() => import("../components/DiscussionForm"));

function Main() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const $portal = React.useMemo(() => document.getElementById("portal"), []);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key !== "Escape" || !modalIsOpen) return;
      setModalIsOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIsOpen]);

  function handleClick() {
    setModalIsOpen(true);
  }

  function handleOpenedModel(value) {
    setModalIsOpen(value);
  }

  return (
    <div>
      <main
        css={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "0 auto",
          backgroundColor: "#DAE0E6",
          width: "100%",
          height: "89vh"
        }}
      >
        <div css={{ width: "80%" }}>
          <button
            css={{
              height: "40px",
              textTransform: "uppercase",
              cursor: "pointer",
              boxSizing: "border-box",
              width: "250px",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "0.5px",
              backgroundImage: "linear-gradient(-180deg,#34d058,#28a745 90%)",
              color: "rgb(255,255,255)",
              borderRadius: "5px",
              padding: "3px 16px",
              marginTop: "40px",
              justifyContent: "flex-start"
            }}
            onClick={handleClick}
          >
            Add new discussion
          </button>
          <React.Suspense fallback={<Loading />}>
            {modalIsOpen &&
              createPortal(
                <DiscussionForm setModalIsOpen={handleOpenedModel} />,
                $portal
              )}
          </React.Suspense>
          <div css={{ marginTop: "70px" }}>
            <TopicList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
