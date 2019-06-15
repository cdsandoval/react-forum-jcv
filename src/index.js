import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import Loading from "./components/Loading";
const Header = React.lazy(() => import("./components/header"));
const Main = React.lazy(() => import("./views/Main"));
const Discussion = React.lazy(() => import("./views/Discussions"));
const LoginForm = React.lazy(() => import("./components/Login"));

const NotFound = () => <p>Sorry, nothing here.</p>;

function App() {
  const [user, setUser] = React.useState({ name: "", email: "" });

  function handleUser(value) {
    localStorage.setItem("user", JSON.stringify(value));
    setUser(value);
  }
  return (
    <main>
      <React.Suspense fallback={<Loading />}>
        <div>
          <Router>
            <Header default />
          </Router>
        </div>
        <Router>
          <Main path="/discussion" />
          <LoginForm path="/" onUser={handleUser} />
          <Discussion path="discussion/:title" />
          <NotFound default />
        </Router>
      </React.Suspense>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
