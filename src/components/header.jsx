import React from "react";

import Logo from "../Gray-Matter-Logo-wordmark.svg";

export const Header = (props) => {
  return (
    <header
      id="header "
      style={{
        margin: "3rem",
      }}
    >
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row header-container">
              <div className="col-md-8 col-md-offset-2 intro-text">
                {/* <img src={Logo} className="logo " alt="gray matter forestry" /> */}
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  I need an arborist report
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
