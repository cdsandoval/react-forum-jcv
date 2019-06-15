/** @jsx jsx */
import { jsx } from "@emotion/core";

function Topic({ title, author }) {
  return (
    <article
      css={{ padding: "1rem 1.5rem", borderBottom: "1px solid #DAE0E6" }}
    >
      <div>
        <h3 css={{ margin: ".5rem 0 0", fontSize: "2rem" }}>{title}</h3>
        <strong css={{ fontSize: "1rem" }}>{author}</strong>
      </div>
    </article>
  );
}

export default Topic;
