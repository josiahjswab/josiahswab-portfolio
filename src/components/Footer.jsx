import React from 'react';

export default function Footer() {
  return(
    <div className='footer flex'>
      <a href='https://github.com/josiahjswab/josiahswab-portfolio' rel='noreferrer noopener' target='_blank'>
        <img src={require('../img/mark.png')}></img>
      </a>
    </div>
  )
}