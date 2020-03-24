import React from 'react';
import heroImg from '../../assets/images/model-s/model-s-hero-social.jpg';
import HorizontalSpecs from '../car-horizontal-specs/HorizontalSpecs';

import classes from './model.module.scss';

const Model = () => {
  const specsProps = {
    button: true,
    speedometer: true,
    leftTitle: '2.4s',
    leftText: 'From 0-60 mph',
    midTitle: '28 cu ft',
    midText: 'Best in Class Storage',
    rightTitle: '391 mi',
    rightText: 'Range (Est.)'
  };

  return (
    <div className={classes.container}>
      <img src={heroImg} alt="Hero" />
      <div className={classes.textWrapper}>
        <p className={classes.title}>Title</p>
        <p className={classes.subTitle}>subTitle</p>
      </div>
      {/* <div className={classes.specsContainer}> */}
      <HorizontalSpecs {...specsProps} />
      {/* </div> */}
    </div>
  );
};

export default Model;
