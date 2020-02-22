import React from "react";
import Card from './blocks/Card';

export default function ProjectCards() {

  return (
    <div className="project block-padding-md flex column">
      <h1>Projects</h1>
      {/* TODO: Make the title  position: absolute */}
      <div className="spacer-sm" />
      <div className="card-container flex wrap">
        <Card
          link="https://berserk-lorem-ipsum.herokuapp.com/"
          styles="outer-border"
          imageSource={require("../img/berserk.png")}
          altDescription="berserk lorem ipsum"
        />
        <Card
          link="https://blackasnight-movie-finder.herokuapp.com/"
          styles="test"
          imageSource={require("../img/movie-finder.jpg")}
          altDescription="redux movie finder"
        />
        <Card
          link="https://unicode-cipher.herokuapp.com/"
          styles="outer-border"
          imageSource={require("../img/cipher.jpeg")}
          altDescription="Unicode Cipher"
        />
      </div>
    </div>
  );
}
