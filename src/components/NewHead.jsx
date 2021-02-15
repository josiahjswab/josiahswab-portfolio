import React, { useEffect } from 'react'
import images from '../img/*.svg';

export default function NewHead() {
  // console.log(images)
  let content = [
    '../img/css.svg',
    '../img/js.svg'
  ];
  const caroselContent = images.map((i) => {
    return (
      <div className='carousel-item'>
        <img src={require(`${i}`)} alt=""/>
      </div>
    )
  })

  useEffect(() => {
  }, [])

  return(
    <div>
      <section className="new-head">
        <div className="grid container flex">
          <div className="box">
          <h1 className="lg">JS</h1>

          </div>
          <nav>
            <ul>
              <li>Home</li>
              <li>Projects</li>
            </ul>
          </nav>
        </div>
      </section>
      <section className="intro">
        <div className="grid container">
          <div>
            <h1 className="xlg">Hey there</h1>
            <p className="mgtbmd">Nice to meet you. I'm Josiah. A web developer creating responsive and user friendly applications.</p>
          </div>
          <div className="card sm">
            <div className="grid">
              <img src={require("../img/linkedin.png")} alt=""/>
              <p>Visit my Linkedin</p>
            </div>
            <div className="grid">
              <img src={require("../img/mark.png")} alt=""/>
              <p>See my source code</p>
            </div>
            <div className="grid">
              <img src={require("../img/email.png")} alt=""/>
              <p>Get in touch with me</p>
            </div>
          </div>
        </div>
      </section>
      <section className="kata">
        <div className="grid container">
          <div className="sub-container">
              <img src='https://www.codewars.com/users/Devobolo/badges/large'/>
            <p className='mgtbmd'>In addition to project based learning I practice my whiteboard skills with the Codewars platform. Click below to be taken to my Codewar portfolio. </p>
            <a href='https://www.codewars.com/users/Devobolo' rel='noreferrer noopener' target='_blank'>
              <button className="btn btn-outline">Codewar</button>
            </a>
          </div>
          <div className="carousel">
            <div className='window'>
              {caroselContent}
            </div>
            hi
          </div>
        </div>
      </section>
    </div>
  )
}
