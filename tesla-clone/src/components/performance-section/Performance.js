import React from 'react';
import HorizontalSpecs from '../car-horizontal-specs/HorizontalSpecs';
import HorizontalAside from '../horizontal-aside/HorizontalAside';
import classes from './performance.module.scss';

const Performance = ({ specsProps, horizontalAsideProps, heroImg }) => {
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
