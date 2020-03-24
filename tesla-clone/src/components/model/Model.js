import React from 'react';
import heroImg from '../../assets/images/model-s/model-s-hero-social.jpg';
import Speedometer from '../speedometer/Speedometer';
import OrderNowBtn from '../buttons/order-now/OrderNowBtn.js';

import classes from './model.module.scss';

const Model = () => {
  return (
    <div className={classes.container}>
      <img src={heroImg} alt="Hero" />
      <div className={classes.textWrapper}>
        <p className={classes.title}>Title</p>
        <p className={classes.subTitle}>subTitle</p>
      </div>
      <div className={classes.specsContainer}>
        <div className={classes.left}>
          <p className={classes.specsTitle}>
            <Speedometer />
            2.4s
          </p>
          <p className={classes.specstSubTitle}>From 0-60 mph</p>
        </div>
        <div className={classes.mid}>
          <p className={classes.specsTitle}>28 cu ft</p>
          <p className={classes.specstSubTitle}>Best in Class Storage</p>
        </div>
        <div className={classes.right}>
          <p className={classes.specsTitle}>391 mi</p>
          <p className={classes.specstSubTitle}>Range (Est.)</p>
        </div>
        <OrderNowBtn />
      </div>
    </div>
  );
};

export default Model;
