import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import SignUp from "./Components/SignUp";
import SideMenu from "./Components/SideMenu";
import LogIn from "./Components/LogIn";
import Homepage from "./Components/Homepage";
import Profile from "./Components/Profile";
import MonthlyPackage from "./Components/MonthlyPackage";
import DailyPackage from "./Components/DailyPackage";
import WeeklyPackages from "./Components/WeeklyPackages";
import NoContractPP from "./Components/NoContractPP";
import Project from "./Components/Project";
import Input from "./Components/Input";
import Footer from "./Components/Footer.jsx";
import { Animated } from "react-animated-css";

function App() {
  const [dark, setDark] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [navClr, setNavClr] = useState("#2B3856");
  const [secClr, setSecClr] = useState("#2B547E");
  const [vis, setVis] = useState();
  const [sidePanel, setSidePanel] = useState();
  const [disForMonPackage, setDisForMonPackage] = useState("none");
  const [disForWeekPackage, setDisForWeekPackage] = useState("none");
  const [disForDailyPackage, setDisForDailyPackage] = useState("none");
  const [disForNCP, setDisForNCP] = useState("none");
  const [disForProject, setDisForProject] = useState("block");

  const myCallbackForBack = dataFromChildForBack => {
    setDarkMode(!dataFromChildForBack);
  };

  const myCallback = dataFromChild => {
    setDark(dataFromChild);
  };

  const myCallback2 = dataFromChild2 => {
    setVis(dataFromChild2);
    console.log("asbkhbkbkjm" + vis);
  };

  const myCallbackForSidePanel = dataFromChildForSidePanel => {
    setSidePanel(dataFromChildForSidePanel);
  };

  useEffect(() => {
    document.body.style.fontFamily = "Sen";
    if (darkMode == true || dark == true) {
      document.body.style.backgroundColor = "black";
      setNavClr("#121212");
      setSecClr("#191919");
    } else if (darkMode == false || darkMode == false) {
      document.body.style.backgroundColor = "#f0f0f0";
      setNavClr("#2B3856");
      setSecClr("#2B547E");
    }
    if (sidePanel == "monPackage") {
      setDisForMonPackage("block");
      setDisForWeekPackage("none");
      setDisForNCP("none");
      setDisForDailyPackage("none");
      setDisForProject("none");
      console.log("Ni krega re mai");
    } else if (sidePanel == "weekPackage") {
      setDisForMonPackage("none");
      setDisForWeekPackage("block");
      setDisForNCP("none");
      setDisForDailyPackage("none");
      setDisForProject("none");
    } else if (sidePanel == "dailyPack") {
      setDisForMonPackage("none");
      setDisForWeekPackage("none");
      setDisForNCP("none");
      setDisForDailyPackage("block");
      setDisForProject("none");
    } else if (sidePanel == "ncp") {
      setDisForMonPackage("none");
      setDisForWeekPackage("none");
      setDisForNCP("block");
      setDisForDailyPackage("none");
      setDisForProject("none");
    } else if (sidePanel == "project") {
      setDisForMonPackage("none");
      setDisForWeekPackage("none");
      setDisForNCP("none");
      setDisForDailyPackage("none");
      setDisForProject("block");
    }
  });
  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut">
      <div>
        {/* <Homepage callbackFromParentForBack={myCallbackForBack} /> */}

        <Header
          callbackFromParent={myCallback}
          callbackFromParent2={myCallback2}
        />

        <div style={{ display: "flex" }}>
          <SideMenu
            dark={dark}
            textClr="white"
            visTrue={vis}
            callbackForSidePanel={myCallbackForSidePanel}
          />
          <div style={{ display: disForMonPackage, width: "100%" }}>
            <MonthlyPackage navClr={navClr} secClr={secClr} />
          </div>
          <div style={{ display: disForWeekPackage, width: "100%" }}>
            <WeeklyPackages navClr={navClr} secClr={secClr} />
          </div>
          <div style={{ display: disForDailyPackage, width: "100%" }}>
            <DailyPackage navClr={navClr} secClr={secClr} />
          </div>
          <div style={{ display: disForNCP, width: "100%" }}>
            <NoContractPP navClr={navClr} secClr={secClr} />
          </div>
          <div style={{ display: disForProject, width: "100%" }}>
            <Project navClr={navClr} secClr={secClr} />
          </div>
        </div>
        <footer>
          <Footer navClr={navClr} secClr={secClr} />
        </footer>
        {/* <Input /> */}
        {/* <Profile /> */}
      </div>
    </Animated>
  );
}

export default App;
