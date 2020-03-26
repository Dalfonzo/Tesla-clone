import React from 'react';

import VerticalSpecs from '../car-vertical-specs/VerticalSpecs';
import HorizontalAside from '../horizontal-aside/HorizontalAside';

import classes from './interior.module.scss';

const Interior = ({ verticalSpecsProps, horizontalAsideProps, heroImg }) => {
  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        <img src={heroImg} alt="" />
        <VerticalSpecs {...verticalSpecsProps} />
      </div>
      <div className={classes.text}>
        <HorizontalAside {...horizontalAsideProps} />
      </div>
    </div>
  );
};

export default Interior;
