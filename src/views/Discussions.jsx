/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import DiscussionDetails from "../components/DiscussionDetails";

function Discussions({ title, discussions }) {
  return (
    <>
      <DiscussionDetails title={title} discussions={discussions} />

      <Link to="/discussion">Back Discussions</Link>
    </>
  );
}

export default Discussions;
