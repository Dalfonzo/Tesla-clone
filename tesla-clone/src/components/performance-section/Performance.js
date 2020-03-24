import React from 'react';
import heroImg from '../../assets/images/model-s/model-s-performance.jpg';
import HorizontalSpecs from '../car-horizontal-specs/HorizontalSpecs';
import HorizontalAside from '../horizontal-aside/HorizontalAside';
import classes from './performance.module.scss';

const Performance = () => {
  const specsProps = {
    speedometer: true,
    speedometerOnFirstCell: false,
    button: false,
    leftTitle: 'AWD',
    leftText:
      'Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions',
    midTitle: '2.4s',
    midText:
      'The quickest acceleration on earth—from zero to 60 mph in as little as 2.4 seconds',
    rightTitle: '163 mph',
    rightText:
      'Improved handling and aerodynamics allow for a top speed of 163 mph',
    borderColor: 'var(--primary-color)',
    textColor: 'var(--primary-color)',
    invertColor: true
  };

  const horizontalAsideProps = {
    section: 'Performance',
    title: 'Quickest Acceleration',
    text:
      'Model S sets an industry standard for performance and safety. Tesla’s all-electric powertrain delivers unparalleled performance in all weather conditions – with Dual Motor All-Wheel Drive, adaptive air suspension and ludicrous acceleration.'
  };

  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        <img src={heroImg} alt="" />
        <HorizontalSpecs {...specsProps} />
      </div>
      <div className={classes.text}>
        <HorizontalAside {...horizontalAsideProps} />
      </div>
    </div>
  );
};

export default Performance;
