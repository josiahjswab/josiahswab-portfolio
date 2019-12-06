import React from "react";

export default function ProjectCards() {
  return (
    <div className="project block-padding-md flex column">
      <h1 className="">&#123; projects &#125;</h1>
      {/* TODO: Make the title  position: absolute */}
      <div className="spacer-sm" />

      <div className="card-container flex">
        {/* card */}
        <div className=" hello outer-border scale">
          <div className=" card-bubble flex shadow2 align-start">
            <img
              className=""
              src={require("../../img/berserk.png")}
              height= "300"
              alt="Josiah Swab"
            />
          </div>
        </div>
        {/* end card */}

        {/* card */}
          <div className=" card-bubble test flex shadow2 align-start">
            <img
              className=""
              src={require("../../img/berserk.png")}
              height= "300"
              alt="Josiah Swab"
            />
          </div>
        {/* end card */}
      </div>
    </div>
  );
}
