import React from 'react';
import HorizontalSpecs from '../car-horizontal-specs/HorizontalSpecs';

import classes from './model.module.scss';

const Model = ({ specsProps, title, subtitle, heroImg }) => {
  return (
    <div className={classes.container}>
      <img src={heroImg} alt="Hero" />
      <div className={classes.textWrapper}>
        <p className={classes.title}>{title}</p>
        <p className={classes.subTitle}>{subtitle}</p>
      </div>
      <HorizontalSpecs {...specsProps} />
    </div>
  );
};

export default Model;
