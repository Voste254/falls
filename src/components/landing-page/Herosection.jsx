import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './Herosection.css';

function HeroSection() {
  return (
    <div className='hero-container'><video src="https://raw.githubusercontent.com/Voste254/falls/master/public/videos/video-4.mp4" autoPlay loop muted />

      <h1>SHOPPING REDEFINED</h1>
      <p>Explore our wide range of products</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          type='login'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LET'S GO
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          type='login'
          buttonSize='btn--large'
          onClick={console.log('yoo')}
        >
          FLASH SALES <i className='fas fa-tags' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;