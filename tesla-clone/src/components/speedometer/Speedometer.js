import React from 'react';
import classes from './speedometer.module.scss';

const Speedometer = props => {
  let invert = null;
  if (props.invertColor) {
    invert = { filter: 'invert(1)' };
  }
  return (
    <div className={classes.container} style={invert}>
      <div className={classes.circle}>
        <div className={classes.inner}>
          <div className={classes.needle}></div>
        </div>
      </div>
    </div>
  );
};

export default Speedometer;
