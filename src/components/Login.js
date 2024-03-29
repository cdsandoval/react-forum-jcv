/** @jsx jsx */
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";

function LoginForm({ onUser }) {
  const formContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    "@media (max-width: 960px)": {
      width: "70%",
      marginLeft: "15%"
    }
  };

  const styledForm = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "500px",
    padding: "1.5em",
    background: "#18435A",
    borderRadius: "2em",
    "@media (max-width: 960px)": {
      height: "120px",
      fontSize: "14px"
    }
  };

  const styledHeader = {
    textAlign: "center",
    margin: "5px",
    fontSize: "35px",
    color: "white",
    fontWeight: "bolder",
    "@media (max-width: 960px)": {
      height: "50px",
      fontSize: "30px",
      marginBottom: "5px",
      marginTop: "0px"
    }
  };

  const input = {
    margin: "0.5em 0",
    fontSize: "20px",
    paddingTop: "15px",
    paddingBottom: "10px",
    borderRadius: "4px",
    outline: "none",
    border: "none",
    borderBottom: "1px solid #ddd",
    width: "90%",
    textAlign: "center",
    "&:focus": {
      border: "1px solid red"
    },
    "@media (max-width: 960px)": {
      fontSize: "12px",
      width: "250px"
    }
  };

  const submitButton = {
    lineHeight: "1.5em",
    background: "#757575",
    border: "none",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "0.5em",
    cursor: "pointer",
    borderRadius: "0.5rem",
    textAlign: "center",
    width: "50%",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "#484848",
      border: "1px solid white",
      padding: "0.45em"
    },
    "@media (max-width: 960px)": {
      fontSize: "12px",
      margin: "0.5em",
      width: "30%",
      marginTop: "-5px",
      padding: "0.2em"
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    onUser({
      name: event.target.elements.userName.value,
      email: event.target.elements.email.value
    });
    event.target.elements.userName.value && navigate("/discussion");
  }

  return (
    <div css={formContainer}>
      <form css={styledForm} onSubmit={handleSubmit}>
        <header css={styledHeader}>Username</header>
        <input
          css={input}
          aria-label="Input to get username"
          placeholder="Enter username"
          type="text"
          required
          name="userName"
          id="userName"
          autoFocus
          autoComplete="off"
        />
        <header css={styledHeader}>E-mail</header>
        <input
          css={input}
          aria-label="Input to get email"
          placeholder="Enter email"
          type="text"
          required
          name="email"
          id="email"
          autoFocus
          autoComplete="off"
        />
        <button type="submit" css={submitButton}>
          Enter
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
