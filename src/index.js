import React from "react";
import ReactDOM from "react-dom";
import Main from "./views/Main";
import Discussion from "./views/Discussions";
import { Router, Redirect } from "@reach/router";
import Header from "./components/header";
import LoginForm from "./components/Login";
import CommentForm from "./components/commentForm";

const NotFound = () => <p>Sorry, nothing here.</p>;

function App() {
  const [username, setUsername] = React.useState(
    localStorage.getItem("username")
  );

  function handleUser(value) {
    localStorage.setItem("username", JSON.stringify(value));
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
        <CommentForm path="/discussion/:title/comment"/> 
          <Header default />
        </Router>
      </div>
      <Router>
        <CommentForm path="/discussion/:title/comment"/> 
        {username ? (
          <LoginForm onUser={handleUser} path="/" />
        ) : (
          <Main path="/discussion" />
        )}
        <Redirect from="/" to="/discussion" noThrow />
        <Discussion path="discussion/:title" />
        <NotFound default />
      </Router>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
