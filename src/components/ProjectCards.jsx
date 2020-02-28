import React from 'react';
import Card from './blocks/Card';

export default function ProjectCards() {

  return (
    <>
      <h1 className='section-title'>Projects</h1>
      <div className='project flex column'>
        {/* TODO: Make the title  position: absolute */}
        <div className='card-container flex wrap'>
          <Card
            link='https://berserk-lorem-ipsum.herokuapp.com/'
            styles='border-style'
            imageSource={require('../img/berserk.png')}
            altDescription='berserk lorem ipsum'
            description='This is a project made with passion.'
          />
          <Card
            link='https://blackasnight-movie-finder.herokuapp.com/'
            styles='border-style2'
            imageSource={require('../img/movie-finder.jpg')}
            altDescription='redux movie finder'
          />
          <Card
            link='https://unicode-cipher.herokuapp.com/'
            styles='border-style'
            imageSource={require('../img/cipher.jpeg')}
            altDescription='Unicode Cipher'
          />
        </div>
      </div>`
    </>
  );
}
