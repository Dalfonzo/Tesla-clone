import React from 'react';
import heroImg from '../../assets/images/model-s/models-2.jpg';
import classes from './order.module.scss';

const Order = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <p>Order Model S</p>
        <button>ORDER NOW</button>
      </div>
      <div className={classes.right}>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Order;
