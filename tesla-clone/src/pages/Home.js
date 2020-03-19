import React, { useState, useEffect } from 'react';
import heroImg from '../assets/images/main-hero-homepage-desktop.jpg';
import HeroControls from '../components/main-hero-controls/HeroControls';

import classes from './home.module.scss';

const Home = () => {
  // 100% mueve el hero hacia la izquierda, 0% hacia la derecha
  const [heroPosition, setHeroPosition] = useState('50%');
  const position = { left: `${heroPosition}` };

  return (
    <div>
      <div className={classes.main}>
        <img src={heroImg} alt="Hero" style={position} />
        <HeroControls position={setHeroPosition} />
      </div>

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Home;
