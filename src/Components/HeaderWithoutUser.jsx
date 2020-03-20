import React, { useEffect, useState } from "react";
import { Avatar, Menu, Dropdown, Switch } from "antd";
import { DownOutlined, ShrinkOutlined } from "@ant-design/icons";
import SideMenu from "./SideMenu";
import SignUp from "./SignUp";

const HeaderWithoutUser = props => {
  const [darkMode, setDarkMode] = useState(false);
  const [navClr, setNavClr] = useState("#2B3856");
  const [userClr, setUserClr] = useState("#2B547E");
  const [textClr, setTextClr] = useState("white");

  function changeHandle(checked) {
    if (checked == false) {
      console.log("changeHandle" + checked);
      setDarkMode(false);
      setNavClr("#2B3856");
      setUserClr("#2B547E");
      setTextClr("white");
    } else if (checked == true) {
      console.log("changeHandle" + checked);
      setDarkMode(true);
      setNavClr("#121212");
      setUserClr("#191919");
      setTextClr("white");
    }
    props.callbackFromParentAgain(checked);
  }

  return (
    <div>
      <div
        style={{
          width: "100%",
          backgroundColor: navClr,
          padding: 15
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{ marginLeft: 10, marginTop: "auto", marginBottom: "auto" }}
          >
            <h5>
              <a
                style={{
                  fontWeight: "bold",
                  color: textClr,
                  margin: "atuo",
                  marginLeft: 30
                }}
                href="/"
              >
                COMPANY NAME
              </a>
            </h5>
          </div>
          <h6 style={{ color: "white", marginTop: "auto", marginRight: 30 }}>
            Dark{" "}
            <Switch
              style={{ marginLeft: 5 }}
              size="small"
              onChange={changeHandle}
            />
          </h6>
          {/* <div
          style={{ textAlign: "center", margin: "auto", fontWeight: "bold" }}
        >
          <p>Dashboard</p>
        </div> */}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HeaderWithoutUser;
