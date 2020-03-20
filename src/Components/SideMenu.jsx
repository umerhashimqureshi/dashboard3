import React, { useState, useEffect } from "react";
import {
  ProjectOutlined,
  ContainerOutlined,
  InboxOutlined
} from "@ant-design/icons";
import Input from "./Input";

const SideMenu = props => {
  const [backClr, setBackClr] = useState("#2B547E");
  const [vis, setVis] = useState("?");
  const [sideMenuWidth, setSideMenuWidth] = useState("15%");
  const [alignT, setAlignT] = useState("left");
  const [marLeft, setMarLeft] = useState(10);
  const [show, setShow] = useState("");

  function handleRender(name) {
    setShow(name);
    console.log(show);
  }
  props.callbackForSidePanel(show);

  useEffect(() => {
    if (props.dark === true) {
      setBackClr("#191919");
    } else if (props.dark === false) {
      setBackClr("#2B547E");
    }
    if (props.visTrue === true) {
      setVis("inline");
      setAlignT("left");
      setMarLeft(10);
      setSideMenuWidth("15%");
    } else if (props.visTrue === false) {
      setVis("none");
      setAlignT("center");
      setMarLeft("auto");
      setSideMenuWidth("3%");
    }
  });

  return (
    <div
      style={{
        backgroundColor: backClr,
        width: sideMenuWidth,
        // alignItems: "center",
        // justifyContent: "center",
        textAlign: alignT
      }}
      className="cursor:pointer"
    >
      <h6
        style={{ color: props.textClr, padding: 5, marginLeft: marLeft }}
        onClick={() => {
          handleRender("project");
        }}
      >
        <ProjectOutlined /> <span style={{ display: vis }}>Projects</span>
      </h6>
      <hr />
      <h6
        style={{ color: props.textClr, padding: 5, marginLeft: marLeft }}
        onClick={() => {
          handleRender("monPackage");
        }}
      >
        <InboxOutlined /> <span style={{ display: vis }}>Monthly Packages</span>
      </h6>
      <hr />
      <h6
        style={{ color: props.textClr, padding: 5, marginLeft: marLeft }}
        onClick={() => {
          handleRender("weekPackage");
        }}
      >
        <InboxOutlined /> <span style={{ display: vis }}>Weekly Packages</span>
      </h6>
      <hr />
      <h6
        style={{ color: props.textClr, padding: 5, marginLeft: marLeft }}
        onClick={() => {
          handleRender("dailyPack");
        }}
      >
        <InboxOutlined /> <span style={{ display: vis }}>Daily Package</span>
      </h6>
      <hr />
      <h6
        style={{ color: props.textClr, padding: 5, marginLeft: marLeft }}
        onClick={() => {
          handleRender("ncp");
        }}
      >
        <ContainerOutlined />{" "}
        <span style={{ display: vis }}>No Contract PostPaid</span>
      </h6>
      <hr />
      <h6
        style={{ color: props.textClr, padding: 5, marginLeft: marLeft }}
        onClick={() => {
          handleRender("dummy");
        }}
      >
        <ProjectOutlined /> <span style={{ display: vis }}>Projects</span>
      </h6>
      <hr />
    </div>
  );
};

export default SideMenu;
