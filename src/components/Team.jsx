import React from "react";

import ClaytonGrayHeadshot from "../clayton-gray.png";

export const Team = (props) => {
  return (
    <div id="team" className="text-center section">
      <div className="container">
        <div className="text-center section-title ">
          <h2>Meet the Team</h2>
        </div>
        <div className="row">
          <div className=" col-md-4 col-sm-12 order-1 order-md-2">
            <img
              src={ClaytonGrayHeadshot}
              className="img-fluid headshot"
              alt="Clayton Gray"
            />
          </div>
          <div className="col-md-8 col-sm-12 order-2 order-md-1">
            <p>
              <b>Clayton Gray is an ISA Certified Arborist</b> with nearly two
              decades of experience in arboriculture and forestry silviculture.
              Dedicated to balancing urban development with nature preservation,
              he has worked in both the wild forests of British Columbia and the
              urban forests of the GTA. After gaining field experience in
              silviculture, he studied Urban Forestry at Humber College while
              serving as head climber and foreman at Westwood Tree Care in
              Burlington. He then honed his consulting skills with the Davey
              Resource Group in Toronto and Hamilton. His hands-on experience
              provides a unique perspective on urban forestry challenges,
              allowing him to develop effective solutions. With a lifetime goal
              of planting one million trees by hand, he is already halfway
              there.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
