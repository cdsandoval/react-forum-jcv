/** @jsx jsx */
import { jsx } from "@emotion/core";
import Topic from "./Topic";
import { Link } from "@reach/router";

const topics = [
  {
    author: "Carlos",
    title: "Bootcamp"
  },
  {
    author: "Daniel",
    title: "Universidades"
  },
  {
    author: "Jorge",
    title: "Institutos"
  }
];

function TopicList({ children }) {
  return (
    <section>
      {topics.map(values => (
        <Link
          to={`discussion/${values.title}`}
          css={{ color: "black", textDecoration: "none" }}
        >
          <Topic author={values.author} title={values.title} />
        </Link>
      ))}
      {children}
    </section>
  );
}

export default TopicList;
