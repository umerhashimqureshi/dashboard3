import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import HeaderWithoutUser from "./HeaderWithoutUser";
import { Link } from "react-router-dom";

const Homepage = props => {
  const [dark, setDark] = useState(false);
  const [backClr, setBackClr] = useState("#2B3856");
  const [btnClr, setBtnClr] = useState("#2B3856");

  const myCallbackAgain = dataFromChildAgain => {
    setDark(dataFromChildAgain);
    props.callbackFromParentForBack(dark);
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
      {/* callbackFromParent2={myCallback2} */}
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
          <h3 style={{ color: "white", textAlign: "center" }}>COMPANY NAME</h3>
          <hr style={{ borderColor: "#f0f0f0" }} />

          <div
            style={{
              textAlign: "center",
              justifyContent: "center"
              // backgroundColor: "yellow"
            }}
          >
            <Link to="/login">
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
                Log In
              </button>
            </Link>
            <br />
            <Link to="/signup">
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
