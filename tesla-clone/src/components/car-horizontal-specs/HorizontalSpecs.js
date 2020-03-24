import React from 'react';
import classes from './horizontalSpec.module.scss';

import Speedometer from '../speedometer/Speedometer';
import OrderNowBtn from '../buttons/order-now/OrderNowBtn.js';

const HorizontalSpecs = props => {
  let style = null;

  if (!props.button) {
    style = { borderLeft: '0.1px solid var(--secondary-color)' };
  }

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <p className={classes.specsTitle}>
          {props.speedometer && <Speedometer />}
          {props.leftTitle}
        </p>
        <p className={classes.specstSubTitle}>{props.leftText}</p>
      </div>
      <div className={classes.mid}>
        <p className={classes.specsTitle}>{props.midTitle}</p>
        <p className={classes.specstSubTitle}>{props.midText}</p>
      </div>
      <div className={classes.right} style={style}>
        <p className={classes.specsTitle}>{props.rightTitle}</p>
        <p className={classes.specstSubTitle}>{props.rightText}</p>
      </div>
      {props.button && <OrderNowBtn />}
    </div>
  );
};

export default HorizontalSpecs;
