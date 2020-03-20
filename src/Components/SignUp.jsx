import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import HeaderWithoutUser from "./HeaderWithoutUser";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [dark, setDark] = useState(false);
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
          <h3 style={{ color: "white", textAlign: "center" }}>SIGN UP</h3>
          <hr style={{ borderColor: "#f0f0f0" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 15,
              marginBottom: 15,
              // marginBottom: 20,
              marginTop: 40
            }}
          >
            <input
              style={{
                backgroundColor: "transparent",
                color: "white",
                borderColor: "transparent",
                borderBottomColor: "white"
              }}
              placeholder="First Name"
            />
            <input
              style={{
                backgroundColor: "transparent",
                color: "white",
                borderColor: "transparent",
                borderBottomColor: "white"
              }}
              placeholder="Last Name"
            />
            {/* <TextField
              label="First Name"
              id="standard-size-small"
              size="small"
            /> */}
            {/* <TextField
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
              className={classes.root}
              required
              size="small"
              label="First Name"
              className={classes.margin}
              id="custom-css-standard-input"
            />
            <TextField
              required
              size="small"
              label="First Name"
              className={classes.margin}
              id="custom-css-standard-input"
            /> */}
          </div>
          <input
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
            placeholder="Email"
          />
          <input
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
              style={{
                marginTop: 20,
                backgroundColor: btnClr,
                borderColor: "transparent",
                borderRadius: "24px",
                height: "50px",
                width: "40%",
                color: "white"
              }}
            >
              Sign Up
            </button>
            <br />
            <Link
              to="/login"
              style={{
                color: "white",
                textAlign: "center",
                // justifyContent: "center",
                padding: 5
              }}
            >
              Log In instead!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
