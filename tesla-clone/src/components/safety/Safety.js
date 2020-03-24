import React from 'react';

import safetyImg from '../../assets/images/model-s/safety-model-s-hero.png';
import LearnMoreBtn from '../../components/buttons/learn-more/LearnMoreBtn';
import OrderNowBtn from '../../components/buttons/order-now/OrderNowBtn';

import classes from './safety.module.scss';

const Safety = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <div>
          <p className={classes.section}>Safety</p>
          <p className={classes.title}>High Impact Protection</p>
          <p className={classes.text}>
            Model S is built from the ground up as an electric vehicle, with
            high-strength architecture and a floor-mounted battery pack allowing
            for incredible impact protection.
          </p>
        </div>
        <div className={classes.btnContainer}>
          <LearnMoreBtn />
          <OrderNowBtn />
        </div>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.line1}>Front-Impact Protection</div>
        <div className={classes.line2}>Side-Impact Protection</div>
        <div className={classes.line3}>Very Low Rollover Risk</div>
        <img src={safetyImg} alt="" />
      </div>
    </div>
  );
};

export default Safety;
