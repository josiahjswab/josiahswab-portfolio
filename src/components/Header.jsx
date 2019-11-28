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
      <div className="flex align-start">
        <img
          className="shadow"
          src={require("../img/josiahswab.jpg")}
          alt="Josiah Swab"
          width="150"
          onClick={toggleHeader}
        />
        <div className="bookmark" onClick={toggleHeader}></div>
        <h1 className="block-margin"></h1>
      </div>
      <ul className="navigation flex  align-end">
        <li className="block-margin">Home</li>
        <li className="block-margin">Projects</li>
        <li className="block-margin">Contact</li>
      </ul>
    </header>
  );
}
