import React, { useState } from 'react';

import HeroControls from '../../components/home/main-hero-controls/HeroControls';
import HeroButtons from '../../components/home/hero-buttons/HeroButtons';
import SecondaryHeroButtons from '../../components/home/secondary-hero-buttons/SecondaryHeroButtons';
import ArrowDown from '../../components/home/down-arrow/ArrowDown';
import mainHeroImg from '../../assets/images/home/main-hero-homepage-desktop.jpg';
import energyHeroImg from '../../assets/images/home/homepage-energy-hero-desktop.jpg';
import modelYHeroImg from '../../assets/images/home/tesla-model-1855169.jpg';
import videoHero from '../../assets/video/home/accessories-hero-desktop.mp4';

import classes from './home.module.scss';

const Home = () => {
  // 100% mueve el hero hacia la izquierda, 0% hacia la derecha
  const [heroProps, setHeroProps] = useState({
    heroPosition: '50%',
    title: 'Model 3'
  });

  const position = { left: `${heroProps.heroPosition}` };

  const clickHandler = id => {
    let elmnt = document.getElementById(id);
    elmnt.scrollIntoView({ behavior: 'smooth' });
  };

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
        <ArrowDown arrowClick={() => document.querySelector('.Navigation')} />
      </div>
      <div className={classes.energyHero} id="1">
        <img src={energyHeroImg} alt="Hero" />
        <HeroButtons
          firstOpt="ORDER SOLAR PANELS"
          secondOpt="ORDER SOLAR ROOF"
          title="Power Everything"
          subtitle="Solar and Powerwall"
          link="Learn More"
        />
        <ArrowDown arrowClick={() => clickHandler('2')} />
      </div>
      <div className={classes.videoHeroContainer} id="2">
        <video
          muted
          loop
          src={videoHero}
          className={classes.videoPlayer}
          autoPlay
        />
        <SecondaryHeroButtons title="Accesories" option="SHOP NOW" />
        <ArrowDown arrowClick={() => clickHandler('3')} />
      </div>

      <div className={classes.modelYHero} id="3">
        <div className={classes.imgContainer}>
          <img src={modelYHeroImg} alt="Hero" />
        </div>
        <SecondaryHeroButtons title="Model Y" option="ORDER NOW" />
        <div className={classes.linksWrapper} id="4">
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
