import React from 'react'

export default function About() {
  return(
    <div className='flex about'>
        <section className='about'>
          <img src={require('../img/me.png')} alt=''/>
        </section>
        <section>
        <h1 style={{ textIndent: '.5em'}}>Hi,</h1>
          <p>
            I am Josiah a Southern California based Jr. Developer who is recently certified in the MERN stack by the San Diego Code School. 
          </p>
        </section>
        <section>This is also</section>
    </div>
  )
}
