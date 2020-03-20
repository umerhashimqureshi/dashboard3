import React, { useState } from "react";
import { Animated } from "react-animated-css";

const Profile = () => {
  const [visForUser, setVisForUser] = useState(false);
  const [disForUser2, setDisForUser2] = useState("none");
  const [visForPass, setVisForPass] = useState(false);
  const [disForPass, setDisForPass] = useState("none");
  function openUser() {
    setVisForUser(!visForUser);
    setVisForPass(false);
    if (visForUser == false) {
      console.log("VISFORUSER block");
      setDisForUser2("block");
    } else if (visForUser == true) {
      setDisForUser2("none");
      console.log("VISFORUSER NONE");
    }
    if (visForPass == true && visForUser == true) {
      setDisForPass("none");
    }
  }
  function openPass() {
    setVisForPass(!visForPass);
    setVisForUser(false);
    if (visForPass == false) {
      setDisForPass("block");
      // setDisForPass("block");
    } else if (visForPass == true) {
      setDisForPass("none");
    }
    if (visForPass == true && visForUser == true) {
      setDisForPass("none");
      setDisForUser2("block");
    }
  }

  return (
    <div style={{ marginLeft: 20, marginTop: 20, width: "100%" }}>
      <div>
        <h3
          style={{
            fontWeight: "bold",
            backgroundColor: "#2B3856",
            padding: 20,
            color: "white",
            borderRadius: "16px",
            width: "16%"
          }}
        >
          Profile Settings
        </h3>
      </div>
      <div>
        <div
          style={{
            padding: 20,
            backgroundColor: "#2B547E",
            borderRadius: "16px",
            width: "95%"
          }}
        >
          <h4 style={{ color: "white" }} onClick={openUser}>
            Change Username
          </h4>
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={visForUser}
          >
            <div style={{ display: disForUser2, padding: 20 }}>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                  marginLeft: 20
                }}
              >
                <h6 style={{ color: "white" }}>Current Username: </h6>
                <input disabled placeholder="Username" />
              </div>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                  marginLeft: 20
                }}
              >
                <h6 style={{ color: "white" }}>New Username: </h6>
                <input placeholder="New Username" />
              </div>
              <button
                // onClick={handleLogin}
                style={{
                  // marginTop: 20,
                  backgroundColor: "#2B3856",
                  borderColor: "transparent",
                  borderRadius: "24px",
                  height: "50px",
                  width: "10%",
                  color: "white",
                  margin: "auto"
                }}
              >
                Save Username
              </button>
            </div>
          </Animated>

          <h4 style={{ color: "white" }} onClick={openPass}>
            Change Password
          </h4>
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={visForPass}
          >
            <div style={{ display: disForPass, padding: 20 }}>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                  marginLeft: 20
                }}
              >
                <h6 style={{ color: "white" }}>Old Password: </h6>
                <input placeholder="Old Password" />
              </div>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                  marginLeft: 20
                }}
              >
                <h6 style={{ color: "white" }}>New Password: </h6>
                <input placeholder="New Password" />
              </div>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                  marginLeft: 20
                }}
              >
                <h6 style={{ color: "white" }}>Confirm New Password: </h6>
                <input placeholder="Confirm New Password" />
              </div>
              <button
                // onClick={handleLogin}
                style={{
                  // marginTop: 20,
                  backgroundColor: "#2B3856",
                  borderColor: "transparent",
                  borderRadius: "24px",
                  height: "50px",
                  width: "10%",
                  color: "white",
                  margin: "auto"
                }}
              >
                Save Password
              </button>
            </div>
          </Animated>

          {/* <h4 style={{ color: "white" }} onClick={openUser}>
            Change Password
          </h4>
          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={visForUser}
          >
            <div style={{ display: disForUser2, padding: 20 }}>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                  marginLeft: 20
                }}
              >
                <h6 style={{ color: "white" }}>Current Username: </h6>
                <input disabled placeholder="Username" />
              </div>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                  marginLeft: 20
                }}
              >
                <h6 style={{ color: "white" }}>New Username: </h6>
                <input placeholder="New Username" />
              </div>
              <button
                // onClick={handleLogin}
                style={{
                  // marginTop: 20,
                  backgroundColor: "#2B3856",
                  borderColor: "transparent",
                  borderRadius: "24px",
                  height: "50px",
                  width: "10%",
                  color: "white",
                  margin: "auto"
                }}
              >
                Save Username
              </button>
            </div>
          </Animated> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
