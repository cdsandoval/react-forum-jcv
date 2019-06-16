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
  const [discussions, setDiscussions] = React.useState(
    JSON.parse(localStorage.getItem("discussions")) || []
  );

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
          <LoginForm path="/" onUser={handleUser} />
          <Main
            path="/discussion"
            discussions={discussions}
            setDiscussions={setDiscussions}
          />
          <Discussion
            path="/:title"
            discussions={discussions}
            setDiscussions={setDiscussions}
          />
          <NotFound default />
        </Router>
      </React.Suspense>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
