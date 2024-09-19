import React from "react";

import ClaytonGrayHeadshot from "../clayton-gray.png";

export const Team = (props) => {
  return (
    <div id="team " className="text-center section">
      <div className="container">
        <div className="text-center section-title ">
          <h2>Meet the Team</h2>
        </div>
        <div className="row">
          <div className=" headshot col-md-4 col-sm-12 order-1 order-md-2">
            <img src={ClaytonGrayHeadshot} className="img-fluid " alt="" />
          </div>
          <div className="col-md-8 col-sm-12 order-2 order-md-1">
            <p>
              Clayton Gray is an ISA Certified Arborist with nearly two decades
              of experience in arboriculture and forestry silviculture, and is
              committed to creating a balance between urban development while
              honoring and preserving nature. His years of field work in the
              wild forests of the British Columbia interior and the urban
              forests of the GTA have given Clayton a strong appreciation for
              the ecological and economic values of the forests and trees. After
              spending several years in silviculture fieldwork, he attended
              Humber College’s Urban Forestry program while serving as head
              climber and foreman at Westwood Tree care in Burlington, On. Later
              he cut his teeth in consulting with the Davey Resource Group (DRG)
              Tree in Toronto and Hamilton. This hands-on experience allows him
              to see the world at work from a unique vantage point, developing
              an empathy that enables him to view challenges from multiple
              perspectives. As a climbing arborist, Clayton gained valuable
              practical intelligence from working closely with trees. He now
              applies his extensive experience to complex problem-solving in
              urban forestry. He has a lifetime goal to plant one million trees
              by hand, and is already halfway there.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
