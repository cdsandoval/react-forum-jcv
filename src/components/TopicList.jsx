/** @jsx jsx */
import { jsx } from "@emotion/core";
import Topic from "./Topic";

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

function TopicList() {
  return (
    <section>
      {topics.map(values => (
        <Topic author={values.author} title={values.title} />
      ))}
    </section>
  );
}

export default TopicList;
