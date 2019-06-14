/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Link } from "@reach/router";
import TopicList from "../components/TopicList";

function Main() {
  // const [modalIsOpen, setModalIsOpen] = React.useState(false);
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
          >
            Add new discussion
          </button>
          <div css={{ marginTop: "70px" }}>
            <TopicList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
