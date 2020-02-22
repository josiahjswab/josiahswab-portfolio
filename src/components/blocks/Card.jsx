import React, { useState } from 'react';

export default function Card(props) {
  const {imageSource, altDescription, styles, link} = props
  const [ hoverTrue, setHoverTrue ] = useState(false);

  return(
    <>
      <a href={link} rel='noreferrer noopener' target='_blank' className='card-abs'>
        <div 
          className={`hello scale ${styles}`} 
          onMouseEnter={() => setHoverTrue(true)}
          onMouseLeave={() => setHoverTrue(false)}
        >
          <div className=' card-bubble flex shadow2 align-start'>
            <img
              src={imageSource}
              alt={altDescription}
            />
          </div>
        </div>
      </a>
      <div 
        className='card-info' 
        style={{display: hoverTrue ? 'block' : 'none', zIndex: hoverTrue ? 0 : 2 }}
      >
        HELLO DARKNESS MY OLD FRIEND
      </div>
    </>
  )
}
