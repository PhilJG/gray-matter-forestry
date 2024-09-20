import React from "react";

import Logo from "../Gray-Matter-Logo-wordmark.svg";

export const Header = (props) => {
  return (
    <header id="header">
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
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Get Arborist Report
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
