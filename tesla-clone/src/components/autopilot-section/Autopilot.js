import React from 'react';
import HorizontalAside from '../horizontal-aside/HorizontalAside';
import VerticalSpecs from '../car-vertical-specs/VerticalSpecs';

import classes from './autopilot.module.scss';

const Autopilot = ({ horizontalAsideProps, verticalSpecsProps, videoHero }) => {
  return (
    <div className={classes.container}>
      <div className={classes.video}>
        <video
          muted
          loop
          src={videoHero}
          className={classes.videoPlayer}
          autoPlay
        />
        <VerticalSpecs {...verticalSpecsProps} />
      </div>
      <div className={classes.text}>
        <HorizontalAside {...horizontalAsideProps} />
      </div>
    </div>
  );
};

export default Autopilot;
