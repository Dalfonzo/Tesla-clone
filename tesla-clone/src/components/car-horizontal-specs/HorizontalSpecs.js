import React from 'react';
import classes from './horizontalSpec.module.scss';

import Speedometer from '../speedometer/Speedometer';
import OrderNowBtn from '../buttons/order-now/OrderNowBtn.js';

const HorizontalSpecs = props => {
  const borderColor = { borderColor: props.borderColor };

  let style = null;
  if (!props.button) {
    style = { borderLeft: `0.1px solid ${props.borderColor}` };
  }

  let speedometerProps = null;
  if (props.invertColor) {
    speedometerProps = { invertColor: true };
  }

  return (
    <div className={classes.container} style={{ color: props.textColor }}>
      <div className={classes.left} style={borderColor}>
        <p className={classes.specsTitle}>
          {props.speedometerOnFirstCell && props.speedometer && (
            <Speedometer {...speedometerProps} />
          )}
          {props.leftTitle}
        </p>
        <p className={classes.specstSubTitle}>{props.leftText}</p>
      </div>
      <div className={classes.mid} style={borderColor}>
        <p className={classes.specsTitle}>
          {!props.speedometerOnFirstCell && props.speedometer && (
            <Speedometer {...speedometerProps} />
          )}
          {props.midTitle}
        </p>
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
