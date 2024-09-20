import React from "react";

export const About = (props) => {
  return (
    <div id="about" className="section text-center">
      <div className="container">
        <div className="section-title text-center">
          <h2>We Get Your Urban Forestry Permits Faster</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};
