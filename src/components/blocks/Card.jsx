import React, { useState } from 'react';
import { withToggle } from '../HOC/withToggle';

// This component is wrapped in a HOC.
function Card(props) {
  const {imageSource, altDescription, styles, link, toggle, on, description} = props
  // const [ hoverTrue, setHoverTrue ] = useState(false);

  return(
    <>

        <div 
          className={`hello scale ${styles}`}
          onClick={toggle}
        >
          <div className='card-bubble flex shadow2 align-start'>
            <img
              src={imageSource}
              alt={altDescription}
            />
          </div>
        </div>
      <div
        className='card-info flex' 
        style={{ display: on ? 'flex' : 'none' }}
        onClick={toggle}
        >
        {description}      
        <a 
        href={link} 
        rel='noreferrer noopener' 
        target='_blank' 
        className='card-abs' 
        >
          <button>Click Here</button>
        </a>
      </div>
    </>
  )
}

export default withToggle(Card, {defaultValue: false});