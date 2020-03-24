import React from 'react';
import LearnMoreBtn from '../learn-more/LearnMoreBtn';
import OrderNowBtn from '../order-now/OrderNowBtn';
import classes from './learnOrder.module.scss';

const LearnOrder = () => {
  return (
    <div className={classes.btnContainer}>
      <LearnMoreBtn />
      <OrderNowBtn />
    </div>
  );
};

export default LearnOrder;
