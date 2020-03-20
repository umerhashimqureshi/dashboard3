import React, { useEffect, useState } from "react";
import { Avatar, Menu, Dropdown, Switch } from "antd";
import { DownOutlined, ShrinkOutlined } from "@ant-design/icons";
import SideMenu from "./SideMenu";
import SignUp from "./SignUp";

const Header = props => {
  const [darkMode, setDarkMode] = useState(false);
  const [navClr, setNavClr] = useState("#2B3856");
  const [userClr, setUserClr] = useState("#2B547E");
  const [textClr, setTextClr] = useState("white");

  const [visTrue, setVisTrue] = useState(true);
  //   const [vis, setVis] = useState("visible");

  function handleVis() {
    setVisTrue(!visTrue);
    console.log("sadasddsa" + visTrue);
    props.callbackFromParent2(visTrue);

    // console.log("VIS TRUE:" + visTrue);
    // if (visTrue == true) {
    //   setVis("visible");
    // } else if (visTrue == false) {
    //   setVis("hidden");
    // }
  }

  function onChange(checked) {
    if (checked == false) {
      setDarkMode(false);
      setNavClr("#2B3856");
      setUserClr("#2B547E");
      setTextClr("white");
    } else if (checked == true) {
      setDarkMode(true);
      setNavClr("#121212");
      setUserClr("#191919");
      setTextClr("white");
    }
    props.callbackFromParent(checked);

    console.log(darkMode, navClr, userClr);
    console.log(`switch to ${checked}`);
  }

  const menu = (
    <Menu style={{ backgroundColor: navClr, color: "white" }}>
      <Menu.Item>
        <a
          style={{ color: textClr }}
          // target="_blank"
          rel="noopener noreferrer"
          href="/profile"
        >
          Profile
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
          href="/"
        >
          Help
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
          //   href="http://www.tmall.com/"
        >
          <span>
            Dark{" "}
            <Switch
              style={{ marginLeft: 5 }}
              size="small"
              onChange={onChange}
            />
          </span>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
          //   href="http://www.tmall.com/"
        >
          Log Out
        </a>
      </Menu.Item>
    </Menu>
  );

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
            <div style={{ display: "flex" }}>
              {/* <button
                onClick={handleVis}
                style={{
                  backgroundColor: "transparent",
                  color: textClr,
                  borderColor: "transparent"
                }}
              > */}
              <h5
                style={{
                  fontWeight: "bold",
                  color: textClr
                  //   border: "1px solid "
                }}
              >
                <ShrinkOutlined onClick={handleVis} />
              </h5>
              {/* </button> */}

              <h5>
                <a
                  style={{ fontWeight: "bold", color: textClr, marginLeft: 30 }}
                  href="/"
                >
                  Company Name
                </a>
              </h5>
            </div>
          </div>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <div
                style={{
                  display: "flex",
                  backgroundColor: userClr,
                  padding: 10,
                  marginRight: 10,
                  borderRadius: "8px"
                }}
              >
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <p
                  style={{
                    margin: "auto",
                    fontWeight: "bold",
                    padding: 10,
                    color: textClr
                  }}
                >
                  Username
                </p>
                <DownOutlined
                  style={{ marginTop: "auto", marginBottom: "auto" }}
                />
              </div>
            </a>
          </Dropdown>
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

export default Header;
