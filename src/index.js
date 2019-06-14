import React from "react";
import ReactDOM from "react-dom";
import Main from "./views/Main";
import Discussion from "./views/Discussions";
import { Router } from "@reach/router";
import Header from "./components/header";
import LoginForm from "./components/Login";

const NotFound = () => <p>Sorry, nothing here.</p>;



function App() {
  function handleUser(value) {
    setUser(value);
  }
  const [user, setUser] = React.useState({ name: "", email: "" });
  console.log(user);
  return (
    <main
      css={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "grid",
        gridTemplateRows: "100 auto"
      }}
    >
      <div>
        
        <Router>
          <Header default />
        </Router>
      </div>
      <Router>
      <LoginForm path="/" onUser={handleUser}/>
        <Main path="/" />
        <Discussion path="discussion/:title" />
        <NotFound default />
      </Router>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
