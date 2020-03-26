import React from 'react';
import Footer from '../footer/Footer';

import classes from './order.module.scss';

const Order = ({ title, heroImg }) => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <p>Order {title}</p>
        <button>ORDER NOW</button>
      </div>
      <div className={classes.right}>
        <img src={heroImg} alt="" />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Order;
