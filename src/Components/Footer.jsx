import React from "react";

const Footer = props => {
  return (
    <footer
      style={{
        backgroundColor: props.navClr,
        color: "white",
        width: "100%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        fontSize: 14
      }}
    >
      <p style={{ marginTop: "1em" }}>
        © 2020{" "}
        <a style={{ color: "#dcdcdc" }} href="/">
          ftfits.com
        </a>
        . All rights reserved. Created by{" "}
        <a style={{ color: "#dcdcdc" }} href="github.com/umerhashimqureshi">
          umerhashimqureshi
        </a>
      </p>
    </footer>
  );
};

export default Footer;
