import React from 'react';

import HorizontalAside from '../../asides/horizontal-aside/HorizontalAside';
import HorizontalSpecs from '../../specs/car-horizontal-specs/HorizontalSpecs';
import classes from './exterior.module.scss';

const Exterior = ({ specsProps, horizontalAsideProps, heroImg }) => {
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
