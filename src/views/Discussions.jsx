/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

function Discussions({ title }) {
  return (
    <div>
      <h1>Hola {title}</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Discussions;
