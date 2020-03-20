import React from "react";
import { Animated } from "react-animated-css";

const DailyPackage = props => {
  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut">
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
              width: "15%"
            }}
          >
            Daily Packages
          </h3>
        </div>
        <div>
          <div
            style={{
              padding: 20,
              backgroundColor: props.secClr,
              borderRadius: "16px",
              width: "95%"
            }}
          >
            <div style={{ padding: 20 }}>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 10,
                  marginLeft: 20
                }}
              >
                <h6 style={{ color: "white" }}>Package Name: </h6>
                <input disabled placeholder="Package Name" />
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
                <h6 style={{ color: "white" }}>Validity: </h6>
                <input placeholder="Validity" />
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
                <h6 style={{ color: "white" }}>Subscribe: </h6>
                <input placeholder="Subscribe" />
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
                <h6 style={{ color: "white" }}>Unsubscribe: </h6>
                <input placeholder="Unsubscribe" />
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
                <h6 style={{ color: "white" }}>Amount: </h6>
                <input placeholder="Amount" />
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "30%",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 10,
                    marginLeft: 20
                  }}
                >
                  <h6 style={{ color: "white" }}>Local Min: </h6>
                  <input placeholder="Local Min" />
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
                  <h6 style={{ color: "white" }}>Int Min: </h6>
                  <input placeholder="Int Min" />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "30%",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 10,
                    marginLeft: 20
                  }}
                >
                  <h6 style={{ color: "white" }}>Free Wifi Hour: </h6>
                  <input placeholder="Free Wifi Hour" />
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
                  <h6 style={{ color: "white" }}>Internet Data: </h6>
                  <input placeholder="Internet Data" />
                </div>
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
                <h6 style={{ color: "white" }}>Social Data: </h6>
                <input placeholder="Social Data" />
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
                <h6 style={{ color: "white" }}>Description: </h6>
                <input
                  style={{ height: "100px", width: "70%" }}
                  placeholder="Description"
                />
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
                <h6 style={{ color: "white" }}>Terms & Conditions: </h6>
                <input
                  style={{ height: "100px", width: "80%" }}
                  placeholder="T&C"
                />
              </div>

              <div
                style={{
                  // textAlign: "right",
                  marginTop: 20,
                  padding: 20
                  // backgroundColor: "black",
                  // margin: "auto"
                }}
              >
                <button
                  // onClick={handleLogin}
                  style={{
                    // marginTop: 20,
                    backgroundColor: props.navClr,
                    borderColor: "transparent",
                    borderRadius: "24px",
                    height: "40px",
                    width: "5%",
                    color: "white",
                    marginRight: "auto"
                  }}
                >
                  Cancel
                </button>
                <button
                  // onClick={handleLogin}
                  style={{
                    // marginTop: 20,
                    backgroundColor: props.navClr,
                    borderColor: "transparent",
                    borderRadius: "24px",
                    height: "40px",
                    width: "5%",
                    color: "white",
                    margin: "auto"
                  }}
                >
                  Save
                </button>
                <button
                  // onClick={handleLogin}
                  style={{
                    // marginTop: 20,
                    backgroundColor: props.navClr,
                    borderColor: "transparent",
                    borderRadius: "24px",
                    height: "40px",
                    width: "5%",
                    color: "white",
                    margin: "auto"
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Animated>
  );
};

export default DailyPackage;
