import React from 'react';

import safetyImg from '../../assets/images/model-s/safety-model-s-hero.png';
import VerticalAside from '../vertical-aside/VerticalAside';

import classes from './safety.module.scss';

const Safety = () => {
  const verticalAsideProps = {
    section: 'Safety',
    title: 'High Impact Protection',
    text:
      'Model S is built from the ground up as an electric vehicle, with high-strength architecture and a floor-mounted battery pack allowing for incredible impact protection.'
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <VerticalAside {...verticalAsideProps} />
      </div>
      <div className={classes.rightSide}>
        <div className={classes.line1}>Front-Impact Protection</div>
        <div className={classes.line2}>Side-Impact Protection</div>
        <div className={classes.line3}>Very Low Rollover Risk</div>
        <img src={safetyImg} alt="" />
      </div>
    </div>
  );
};

export default Safety;
