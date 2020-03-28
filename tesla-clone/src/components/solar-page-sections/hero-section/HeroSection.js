import React from 'react';
import HorizontalSpecs from '../../specs/car-horizontal-specs/HorizontalSpecs';

import classes from './heroSection.module.scss';

const HeroSection = ({ specsProps, title, subtitle, heroImg, heroVideo }) => {
  let renderHero = <img src={heroImg} alt="" />;

  if (heroVideo) {
    renderHero = <video muted src={heroVideo} autoPlay />;
  }

  return (
    <div className={classes.container}>
      {renderHero}
      <div className={classes.textWrapper}>
        <p className={classes.title}>{title}</p>
        <p className={classes.subTitle}>{subtitle}</p>
      </div>
      <HorizontalSpecs {...specsProps} />
    </div>
  );
};

export default HeroSection;
