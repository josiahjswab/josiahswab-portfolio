import React from "react";
import Card from './blocks/Card';

export default function ProjectCards() {
  return (
    <div className="project block-padding-md flex column">
      <h1 className="">&#123; projects &#125;</h1>
      {/* TODO: Make the title  position: absolute */}
      <div className="spacer-sm" />
      <div className="card-container flex">
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
      </div>
    </div>
  );
}
