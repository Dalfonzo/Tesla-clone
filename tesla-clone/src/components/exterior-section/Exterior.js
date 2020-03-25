import React from 'react';

import heroImg from '../../assets/images/model-s/hero-high-viewport.jpg';
import HorizontalAside from '../horizontal-aside/HorizontalAside';
import HorizontalSpecs from '../car-horizontal-specs/HorizontalSpecs';
import classes from './exterior.module.scss';

const Exterior = () => {
  const specsProps = {
    speedometer: false,
    speedometerOnFirstCell: false,
    button: false,
    leftTitle: 'Signature Colors',
    leftText: 'Customize Model S with signature, multi-layered paint',
    midTitle: '0.23c',
    midText:
      'The most aerodynamic car in its class with the lowest drag coefficient on earth',
    rightTitle: 'Roof Rack Compatible',
    rightText:
      'A standard, expansive Glass Roof provides more headroom and UV protection',
    borderColor: 'var(--secondary-color)',
    invertColor: true
  };

  const horizontalAsideProps = {
    section: 'Exterior',
    title: 'Designed for Efficiency',
    text:
      'Model S was designed for speed and endurance—with incredible aerodynamics, ludicrous performance and uncompromised aesthetics. Automatic door handles auto-present upon approach and withdraw when closed.'
  };
  return (
    <div className={classes.container}>
      <img src={heroImg} alt="" />
      <div className={classes.upper}>
        <HorizontalSpecs {...specsProps} />
      </div>
      <div className={classes.bottom}>
        <HorizontalAside {...horizontalAsideProps} />
      </div>
    </div>
  );
};

export default Exterior;
