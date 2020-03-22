import React from 'react';
import classes from './speedometer.module.scss';

const Speedometer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.circle}>
        <div className={classes.inner}>
          <div className={classes.needle}></div>
        </div>
      </div>
    </div>
  );
};

export default Speedometer;
