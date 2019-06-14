import React from "react";
import ReactDOM from "react-dom";
import Main from "./views/Main";
import { Global } from "@emotion/core";

function App() {
  const [user, setUser] = React.useState(localStorage.getItem("user"));

  return (
    <>
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0
          }
        }}
      />
      <Main />
    </>
  );
}

ReactDOM.render(<TopicList />, document.getElementById("root"));
