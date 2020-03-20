import React, { useState } from 'react';

import HeroControls from '../components/main-hero-controls/HeroControls';
import HeroButtons from '../components/hero-buttons/HeroButtons';
import ArrowDown from '../components/down-arrow/ArrowDown';
import mainHeroImg from '../assets/images/main-hero-homepage-desktop.jpg';
import energyHeroImg from '../assets/images/homepage-energy-hero-desktop.jpg';
import modelYHeroImg from '../assets/images/tesla-model-1855169.jpg';
import videoHero from '../assets/video/accessories-hero-desktop.mp4';
import SecondaryHeroButtons from '../components/secondary-hero-buttons/SecondaryHeroButtons';

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
      <div className={classes.mainHero}>
        <img src={mainHeroImg} alt="Hero" style={position} />
        <HeroControls heroProps={setHeroProps} />
        <HeroButtons
          firstOpt="CUSTOM ORDER"
          secondOpt="EXISTING INVENTORY"
          title={heroProps.title}
          subtitle={null}
          link="Visit a Store"
        />
        <ArrowDown />
      </div>
      <div className={classes.energyHero}>
        <img src={energyHeroImg} alt="Hero" />
        <HeroButtons
          firstOpt="ORDER SOLAR PANELS"
          secondOpt="ORDER SOLAR ROOF"
          title="Power Everything"
          subtitle="Solar and Powerwall"
          link="Learn More"
        />
        <ArrowDown />
      </div>
      <div className={classes.videoHeroContainer}>
        <video
          muted
          loop
          src={videoHero}
          className={classes.videoPlayer}
          autoPlay
        />
        <SecondaryHeroButtons title="Accesories" option="SHOP NOW" />
        <ArrowDown />
      </div>
      <div className={classes.modelYHero}>
        <div className={classes.imgContainer}>
          <img src={modelYHeroImg} alt="Hero" />
        </div>
        <SecondaryHeroButtons title="Model Y" option="ORDER NOW" />
        <div className={classes.linksWrapper}>
          <ul className={classes.links}>
            <li>Tesla 2020</li>
            <li>Privacy & legal</li>
            <li>contact</li>
            <li>careers</li>
            <li>get newsletter</li>
            <li>forums</li>
            <li>locations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
