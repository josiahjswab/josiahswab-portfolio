import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  const [toggle, setToggle] = useState('translate3d(0, 0, 0)');

  const toggleHeader = () => {
    if (toggle === 'translate3d(0, -67%, 0)') {
      setToggle('translate3d(0, 0, 0)');
    } else {
      setToggle('translate3d(0, -67%, 0)');
    }
  };

  return (
    <header
      onClick={toggleHeader}
      style={{ transform: toggle }}
      className='navigation-overlay flex shadow2'
    >
      {/* <img
        className='img shadow'
        src={require('../img/josiahswab.jpg')}
        alt='Josiah Swab'
        width='40'
        onClick={toggleHeader}
      /> */}

      <div className='navigation flex column  align-end'>
        <div className="nav-but flex wrap">
          <Link to ='/'><p>Home</p></Link>
          <Link to ='/projects'><p>Projects</p></Link>
          <Link to ='/about'><p>About</p></Link>
          <a href='https://github.com/josiahjswab' rel='noreferrer noopener' target='_blank'>
            <img src={require('../img/mark.png')} alt='github' height='40' />
          </a>
          <a href='https://www.linkedin.com/in/josiah-swab-235ba7173/' rel='noreferrer noopener' target='_blank'>
            <img src={require('../img/linkedin.png')} alt='LinkedIN' height='40' />
          </a>
          <a href='mailto:josiahjswab@gmail.com' rel='noreferrer noopener' target='_blank'>
          <img src={require('../img/email.png')} alt='Email' height='40' />
          </a>
        </div>
        <section className='nav-bar'>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </div>
    </header>
  );
}
