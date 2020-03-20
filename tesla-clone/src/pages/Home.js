import React, { useState } from 'react';
import heroImg from '../assets/images/main-hero-homepage-desktop.jpg';
import HeroControls from '../components/main-hero-controls/HeroControls';
import HeroButtons from '../components/hero-buttons/HeroButtons';
import ArrowDown from '../components/down-arrow/ArrowDown';

import classes from './home.module.scss';

const Home = () => {
  // 100% mueve el hero hacia la izquierda, 0% hacia la derecha
  const [heroProps, setHeroProps] = useState({
    heroPosition: '50%',
    title: 'Model 3'
  });

  const position = { left: `${heroProps.heroPosition}` };

  return (
    <div>
      <div className={classes.main}>
        <img src={heroImg} alt="Hero" style={position} />
        <HeroControls heroProps={setHeroProps} />
        <HeroButtons title={heroProps.title} />
        <ArrowDown />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Home;
