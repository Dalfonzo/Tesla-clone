import React from 'react';
import classes from './horizontalSpec.module.scss';

import Speedometer from '../../speedometer/Speedometer';
import OrderNowBtn from '../../buttons/order-now/OrderNowBtn.js';

const HorizontalSpecs = props => {
  let changeColor = null;
  if (props.invertColor) {
    changeColor = { filter: 'invert(1)' };
  }

  return (
    <div className={classes.container} style={changeColor}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <div className={classes.specsTitle}>
            {props.speedometerOnFirstCell && props.speedometer && (
              <Speedometer invertColor={changeColor} />
            )}
            {props.leftTitle}
          </div>
          <p className={classes.specstSubTitle}>{props.leftText}</p>
        </div>
        <div className={classes.mid}>
          <div className={classes.specsTitle}>
            {!props.speedometerOnFirstCell && props.speedometer && (
              <Speedometer invertColor={changeColor} />
            )}
            {props.midTitle}
          </div>
          <p className={classes.specstSubTitle}>{props.midText}</p>
        </div>
        <div className={classes.right}>
          <p className={classes.specsTitle}>{props.rightTitle}</p>
          <p className={classes.specstSubTitle}>{props.rightText}</p>
        </div>
      </div>
      {props.button && <OrderNowBtn invertColor={changeColor} />}
    </div>
  );
};

export default HorizontalSpecs;
