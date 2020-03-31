import React, { useState } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';

import Header from '../../components/general-layout/header/Header';
import HeroControls from '../../components/home/main-hero-controls/HeroControls';
import HeroButtons from '../../components/home/hero-buttons/HeroButtons';
import SecondaryHeroButtons from '../../components/home/secondary-hero-buttons/SecondaryHeroButtons';
import mainHeroImg from '../../assets/images/home/main-hero-homepage-desktop.jpg';
import energyHeroImg from '../../assets/images/home/homepage-energy-hero-desktop.jpg';
import modelYHeroImg from '../../assets/images/home/tesla-model-1855169.jpg';
import videoHero from '../../assets/video/home/accessories-hero-desktop.mp4';
import Footer from '../../components/general-layout/footer/Footer';

import classes from './home.module.scss';

const Home = () => {
  // 100% mueve el hero hacia la izquierda, 0% hacia la derecha
  const [heroProps, setHeroProps] = useState({
    heroPosition: '50%',
    title: 'Model 3'
  });

  const position = { left: `${heroProps.heroPosition}` };

  const options = {
    anchors: ['main', 'powereverything', 'accesories', 'modely'], // the anchors for each sections
    activeClass: 'active-a', // the class that is appended to the sections links
    arrowNavigation: true, // use arrow keys
    delay: 1000, // the scroll animation speed
    navigation: true, // use dots navigatio
    sectionPaddingTop: '0', // the section top padding
    sectionPaddingBottom: '0', // the section bottom padding
    verticalAlign: true // align the content of each section vertical
  };

  return (
    <SectionsContainer {...options}>
      <Header />
      <Section>
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
        </div>
      </Section>
      <Section>
        <div className={classes.energyHero} id="1">
          <img src={energyHeroImg} alt="Hero" />
          <HeroButtons
            firstOpt="ORDER SOLAR PANELS"
            secondOpt="ORDER SOLAR ROOF"
            title="Power Everything"
            subtitle="Solar and Powerwall"
            link="Learn More"
          />
        </div>
      </Section>
      <Section>
        <div className={classes.videoHeroContainer} id="2">
          <video
            muted
            loop
            src={videoHero}
            className={classes.videoPlayer}
            autoPlay
          />
          <SecondaryHeroButtons title="Accesories" option="SHOP NOW" />
        </div>
      </Section>
      <Section>
        <div className={classes.modelYHero} id="3">
          <div className={classes.imgContainer}>
            <img src={modelYHeroImg} alt="Hero" />
          </div>
          <SecondaryHeroButtons title="Model Y" option="ORDER NOW" />
          <div className={classes.linksWrapper} id="4">
            <Footer />
          </div>
        </div>
      </Section>
    </SectionsContainer>
  );
};

export default Home;
