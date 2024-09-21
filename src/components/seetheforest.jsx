import React from "react";

import SeeTheForestImage from "../see-the-forest-gray-matter-forestry.webp";
import SeeTheTreesImage from "../see-the-trees-gray-matter-forestry.webp";

export const SeeTheForest = (props) => {
  return (
    <div id="see-the-forest" className="section text-center">
      <div className="container">
        <div className="section-title text-center">
          <h2>
            See The Forest <br />
            See The Trees
          </h2>
        </div>
        <div className="row flex-row-reverse flex-md-row">
          <div className="col-xs-12 col-md-8">
            <p>
              Nowhere is it written that urban development must come at the
              expense of our natural environment. Or, that development must stop
              to protect the trees. Our mission is to simplify urban forestry
              regulatory compliance, so that you can get on with your
              construction projects without compromising the health of our
              valuable urban forests. We are committed to balancing progress and
              environmental stewardship, ensuring that our clients can achieve
              their development goals without unnecessary delays or
              complications.
            </p>
            <h5>Moving Your Projects Forward</h5>
            <p>
              Our business arose from the frustration faced by our clients
              frustration with the complex, expensive, and lengthy building
              permit process, particularly due to tree protection bylaws. These
              by-laws are necessary but bewildering hurdles that can delay
              projects and adds costs that are often avoidable. We offer a
              simplified, efficient solution for construction projects in the
              Greater Toronto Area (GTA).
            </p>
          </div>
          <div className="col-xs-12 col-md-4 image-text-container">
            {" "}
            <img
              src={SeeTheForestImage}
              className="img-responsive"
              alt=""
            />{" "}
          </div>
        </div>
        <div className="row flex-md-row-reverse">
          <div className="col-xs-12 col-md-4  image-text-container">
            <img src={SeeTheTreesImage} className="image-two" alt="" />
          </div>
          <div className="col-xs-12  col-md-8">
            {" "}
            <h5>Our Story</h5>
            <p>
              Construction projects are inherently complex, with numerous boxes
              that need to be checked at all stages. Recognizing that we are
              just one piece of your larger project, our priority is to deliver
              your documents quickly and accurately so that you will avoid
              unnecessary hold-ups. At the core of our business are
              comprehensive arborist reports and tree protection plans. these
              essential services are designed to help you obtain your urban
              forestry clearance letters. We set ourselves apart in the GTA
              market by leveraging advanced methods and tools to navigate the
              tree bylaw clearance process efficiently, with precision, and in
              compliance with the regulations. Your projects progress smoothly
              through the system with less change requirements from the
              regulators, saving you time and money while you protect the trees.
              Everybody wins!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
