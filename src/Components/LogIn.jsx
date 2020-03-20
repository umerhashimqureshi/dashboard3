import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import HeaderWithoutUser from "./HeaderWithoutUser";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [dark, setDark] = useState(false);
  const [auth, setAuth] = useState(false);
  const [backClr, setBackClr] = useState("#2B3856");
  const [btnClr, setBtnClr] = useState("#2B3856");

  const myCallbackAgain = dataFromChildAgain => {
    setDark(dataFromChildAgain);
  };
  useEffect(() => {
    if (dark == true) {
      setBackClr("#121212");
      setBtnClr("black");
    } else if (dark == false) {
      setBackClr("#2B3856");
      setBtnClr("#2B547E");
    }
  });

  function handleLogin() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    if (user == "user" && pass == "pass") {
      setAuth(true);
      // console.log("innnnnnn");
    }
  }

  return (
    <div>
      <HeaderWithoutUser callbackFromParentAgain={myCallbackAgain} />
      <div
        style={{
          marginTop: "15%",
          marginLeft: "35%"
        }}
      >
        <div
          style={{
            // border: "1px solid",
            backgroundColor: backClr,
            borderRadius: "12px",
            padding: 30,
            width: "40%"
          }}
        >
          <h3 style={{ color: "white", textAlign: "center" }}>LOG IN</h3>
          <hr style={{ borderColor: "#f0f0f0" }} />
          <input
            required
            id="username"
            style={{
              backgroundColor: "transparent",
              color: "white",
              borderColor: "transparent",
              borderBottomColor: "white",
              width: "100%",
              marginBottom: 20,
              marginTop: 20
            }}
            placeholder="Email"
          />
          <input
            id="pass"
            type="password"
            required
            style={{
              backgroundColor: "transparent",
              color: "white",
              borderColor: "transparent",
              borderBottomColor: "white",
              width: "100%",
              marginBottom: 20,
              marginTop: 20
            }}
            placeholder="Password"
          />

          {/* <TextField
              label="First Name"
              id="standard-size-small"
              size="small"
            /> */}
          {/* <TextField
            style={{ marginTop: 15, marginBottom: 15 }}
            fullWidth
            required
            size="small"
            label="Email"
            className={classes.margin}
            id="custom-css-standard-input"
          />
          <TextField
            style={{ marginTop: 15, marginBottom: 15 }}
            fullWidth
            required
            size="small"
            label="Password"
            className={classes.margin}
            id="custom-css-standard-input"
            type="password"
          /> */}
          <div
            style={{
              textAlign: "center",
              justifyContent: "center"
              // backgroundColor: "yellow"
            }}
          >
            <button
              onClick={handleLogin}
              style={{
                marginTop: 20,
                backgroundColor: "#2B547E",
                borderColor: "transparent",
                borderRadius: "24px",
                height: "50px",
                width: "40%",
                color: "white"
              }}
            >
              Log In
            </button>
            <br />
            <Link
              to="/signup"
              style={{
                color: "white",
                textAlign: "center",
                // justifyContent: "center",
                padding: 5
              }}
            >
              Sign Up for an account!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
