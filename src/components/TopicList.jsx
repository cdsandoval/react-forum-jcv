/** @jsx jsx */
import { jsx } from "@emotion/core";
import Topic from "./Topic";
import { Link } from "@reach/router";

function TopicList({ discussions }) {
  return (
    <section>
      {discussions.map(values => (
        <Link
          to={`/${values.title}`}
          css={{ color: "black", textDecoration: "none" }}
        >
          <Topic author={values.author} title={values.title} />
        </Link>
      ))}
    </section>
  );
}

export default TopicList;
