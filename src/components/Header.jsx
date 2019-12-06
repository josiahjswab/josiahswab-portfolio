import React, { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState("translate3d(0, -100%, 0)");

  const toggleHeader = () => {
    if (toggle === "translate3d(0, -100%, 0)") {
      setToggle("translate3d(0, 0, 0)");
    } else {
      setToggle("translate3d(0, -100%, 0)");
    }
  };
  return (
    <header
      onClick={toggleHeader}
      style={{ transform: toggle }}
      className="header flex block-padding-sm shadow2"
    >
        <img
          className="img shadow"
          src={require("../img/josiahswab.jpg")}
          alt="Josiah Swab"
          width="150"
          onClick={toggleHeader}
        />
        <div className="bookmark" onClick={toggleHeader}></div>

      <div className="icons flex">
        <img src={require("../img/mark.png")} alt="" height="80"/>
        <img src={require("../img/linkedin.png")} alt="" height="80"/>
        <img src={require("../img/email.png")} alt="" height="80"/>
      </div>
      <ul className="navigation flex  align-end">
        <li className="block-margin">Home</li>
        <li className="block-margin">Projects</li>
        <li className="block-margin">About</li>
      </ul>
      <div className="overlay-box"></div>
    </header>
  );
}
