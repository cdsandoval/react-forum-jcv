import React from "react";
import ReactDOM from "react-dom";
import Main from "./views/Main";
import { Global } from "@emotion/core";

function App() {
  const [username, setUsername] = React.useState(
    localStorage.getItem("username")
  );

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

ReactDOM.render(<App />, document.getElementById("root"));
