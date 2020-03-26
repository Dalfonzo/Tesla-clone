import React from 'react';

import VerticalAside from '../vertical-aside/VerticalAside';

import classes from './safety.module.scss';

const Safety = ({ verticalAsideProps, heroImg, carParts }) => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <VerticalAside {...verticalAsideProps} />
      </div>
      <div className={classes.rightSide}>
        <div className={classes.line1}>{carParts.partOne}</div>
        <div className={classes.line2}>{carParts.partTwo}</div>
        <div className={classes.line3}>{carParts.partThree}</div>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Safety;
