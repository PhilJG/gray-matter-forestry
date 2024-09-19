import React from "react";

export const About = (props) => {
  return (
    <div id="about" className="section text-center">
      <div className="container">
        <div className="section-title text-center">
          <h2>About Us</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src="img/about-image.webp"
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <p>{props.data ? props.data.paragraph : "loading..."}</p>
            <h3>Services</h3>
            <div className="list-style">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : "loading"}
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  {props.data
                    ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                    : "loading"}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
