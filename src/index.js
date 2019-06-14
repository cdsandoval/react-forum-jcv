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
      <React.Suspense fallback={<Loading />}>
        <div>
          <Router>
            <Header default />
          </Router>
        </div>
        <Router>
          <LoginForm path="/" onUser={handleUser} />
          <Main path="/" />
          <Discussion path="discussion/:title" />
          <NotFound default />
        </Router>
      </React.Suspense>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
