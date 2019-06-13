/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
<<<<<<< HEAD
import TopicList from "../components/TopicList";
import Topic from "../components/Topic";
=======
import TopicList from "./components/topiclist";
>>>>>>> Create Main Component

function Main() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  function logOut() {
    localStorage.removeItem("user");
  }
  return (
    <div
      css={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "grid",
        gridTemplateRows: "100px auto"
      }}
    >
      <header
        css={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
          borderBottom: "solid 1px black"
        }}
      >
        <h1
          css={{
            marginLeft: "100px",
            marginTop: "30px"
          }}
        >
          JCV FORUM
        </h1>
        <button
          onClick={logOut}
          css={{
            height: "30px",
            textTransform: "uppercase",
            cursor: "pointer",
            boxSizing: "content-box",
            width: "120px",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "700",
            letterSpacing: "0.5px",
            backgroundColor: "rgb(0, 121, 211)",
            color: "rgb(255,255,255)",
            borderRadius: "5px",
            padding: "3px 16px",
            marginRight: "30px",
            marginTop: "25px",
            ":hover": {
              backgroundColor: "rgb(0, 121, 211,0.7)"
            }
          }}
        >
          Log Out
        </button>
      </header>
      <main
        css={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "0 auto",
          backgroundColor: "#DAE0E6",
          width: "100%"
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
<<<<<<< HEAD
          <div css={{ marginTop: "70px" }}>
            <TopicList />
=======
          <div css={{ textAlign: "center", marginTop: "70px" }}>
            Discussion List
>>>>>>> Create Main Component
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
