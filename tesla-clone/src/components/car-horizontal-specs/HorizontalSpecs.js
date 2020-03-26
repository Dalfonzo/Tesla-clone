import React from 'react';
import classes from './horizontalSpec.module.scss';

import Speedometer from '../speedometer/Speedometer';
import OrderNowBtn from '../buttons/order-now/OrderNowBtn.js';

const HorizontalSpecs = props => {
  let changeColor = false;
  if (props.invertColor) {
    changeColor = true;
  }

  return (
    <div
      className={classes.container}
      style={changeColor ? { filter: 'invert(1)' } : null}
    >
      <div className={classes.left}>
        <p className={classes.specsTitle}>
          {props.speedometerOnFirstCell && props.speedometer && (
            <Speedometer invertColor={changeColor} />
          )}
          {props.leftTitle}
        </p>
        <p className={classes.specstSubTitle}>{props.leftText}</p>
      </div>
      <div className={classes.mid}>
        <p className={classes.specsTitle}>
          {!props.speedometerOnFirstCell && props.speedometer && (
            <Speedometer invertColor={changeColor} />
          )}
          {props.midTitle}
        </p>
        <p className={classes.specstSubTitle}>{props.midText}</p>
      </div>
      <div className={classes.right}>
        <p className={classes.specsTitle}>{props.rightTitle}</p>
        <p className={classes.specstSubTitle}>{props.rightText}</p>
      </div>
      {props.button && <OrderNowBtn invertColor={changeColor} />}
    </div>
  );
};

export default HorizontalSpecs;
