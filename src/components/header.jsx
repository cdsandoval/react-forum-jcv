/** @jsx jsx */
import { jsx } from "@emotion/core";
function Header() {
  function logOut() {
    localStorage.removeItem("user");
  }
  return (
    <header
      css={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
        borderBottom: "solid 1px black"
      }}
    >
      <h1
        css={{
          marginLeft: "100px",
          marginTop: "30px"
        }}
      >
        JCV FORUM
      </h1>
      <button
        onClick={logOut}
        css={{
          height: "30px",
          textTransform: "uppercase",
          cursor: "pointer",
          boxSizing: "content-box",
          width: "120px",
          textAlign: "center",
          fontSize: "14px",
          fontWeight: "700",
          letterSpacing: "0.5px",
          backgroundColor: "rgb(0, 121, 211)",
          color: "rgb(255,255,255)",
          borderRadius: "5px",
          padding: "3px 16px",
          marginRight: "30px",
          marginTop: "25px",
          ":hover": {
            backgroundColor: "rgb(0, 121, 211,0.7)"
          }
        }}
      >
        Log Out
      </button>
    </header>
  );
}

export default Header;
