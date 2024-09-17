import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Clayton Gray is an ISA Certified Arborist with nearly two decades of
            experience in arboriculture and forestry silviculture, and is
            committed to creating a balance between urban development while
            honoring and preserving nature. His years of field work in the wild
            forests of the British Columbia interior and the urban forests of
            the GTA have given Clayton a strong appreciation for the ecological
            and economic values of the forests and trees. After spending several
            years in silviculture fieldwork, he attended Humber College’s Urban
            Forestry program while serving as head climber and foreman at
            Westwood Tree Care in Burlington, On. Later he cut his teeth in
            consulting with the Davey Resource Group (DRG) Tree in Toronto and
            Hamilton. This hands-on experience allows him to see the world at
            work from a unique vantage point, developing an empathy that enables
            him to view challenges from multiple perspectives. As a climbing
            arborist, Clayton gained valuable practical intelligence from
            working closely with trees. He now applies his extensive experience
            to complex problem-solving in urban forestry. He has a lifetime goal
            to plant one million trees by hand, and is already halfway there.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className=" team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img " />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
