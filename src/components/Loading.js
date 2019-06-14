/** @jsx jsx */
import { jsx } from "@emotion/core";

function Loading() {
  const cssLoading = {
    fontSize: "40px",
    color: "black",
    fontWeight: "bolder"
  };
  return <span css={cssLoading}>Loading...</span>;
}

export default Loading;
