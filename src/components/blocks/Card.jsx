import React, { useState } from 'react';
import Toggler from '../renderprops/Toggler';

export default function Card(props) {
  const {imageSource, altDescription, styles, link, description} = props

  return(
    <Toggler defaultValue={false} render={(toggler) => {
      const { on, toggle } = toggler;
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
    }}/>
  )
}
