import React from "react";
import { Animated } from "react-animated-css";

const Project = props => {
  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut">
      <div style={{ height: "100vh" }}>
        <div
          style={{
            marginLeft: 20,
            marginTop: 20,
            width: "100%"
            // textAlign: "center"
          }}
        >
          <div>
            <h3
              style={{
                fontWeight: "bold",
                backgroundColor: props.navClr,
                padding: 20,
                color: "white",
                borderRadius: "16px",
                width: "17%"
              }}
            >
              Projects
            </h3>
          </div>

          <div
            style={{
              padding: 20,
              backgroundColor: props.secClr,
              borderRadius: "16px",
              width: "95%"
            }}
          >
            <h1 style={{ color: "white" }}>DUMMY</h1>
          </div>
        </div>
      </div>
    </Animated>
  );
};

export default Project;
