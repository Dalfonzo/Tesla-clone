import React from 'react';
import videoHero from '../../assets/video/model-s/autopilot.mp4';
import HorizontalAside from '../horizontal-aside/HorizontalAside';
import VerticalSpecs from '../car-vertical-specs/VerticalSpecs';

import classes from './autopilot.module.scss';

const Autopilot = () => {
  const horizontalAsideProps = {
    section: 'Performance',
    title: 'Quickest Acceleration',
    text:
      'Model S sets an industry standard for performance and safety. Tesla’s all-electric powertrain delivers unparalleled performance in all weather conditions – with Dual Motor All-Wheel Drive, adaptive air suspension and ludicrous acceleration.'
  };

  const verticalSpecsProps = {
    topTitle: '360°',
    topText: 'Rear, side and forward-facing cameras provide maximum visibility',
    midTitle: '160 m',
    midText:
      'Forward-facing radar provides a long-range view of distant objects',
    bottomTitle: 'Ultrasonic Sensors',
    bottomText:
      'Detects nearby cars, prevents potential collisions and assists with parking',
    position: 'left'
  };

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
