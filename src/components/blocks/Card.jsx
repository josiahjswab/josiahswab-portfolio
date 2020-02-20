import React from 'react';

export default function Card(props) {
  const {imageSource, altDescription, styles, link} = props
  console.log(typeof imageSource)
  return(
    <a href={link} rel="noreferrer noopener" target="_blank">
      <div className={`hello scale ${styles}`}>
        <div className=" card-bubble flex shadow2 align-start">
          <img
            className=""
            src={imageSource}
            height= "300"
            alt={altDescription}
          />
        </div>
      </div>
    </a>
  )
}
