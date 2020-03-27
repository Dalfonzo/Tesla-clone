import React from 'react';
import Footer from '../footer/Footer';

import classes from './order.module.scss';

const Order = ({ title, heroImg, invertColor }) => {
  let changeColor = {
    backgroundColor: null,
    filter: null
  };

  if (invertColor) {
    changeColor = {
      bg: { backgroundColor: 'var(--secondary-color)' },
      color: { filter: 'invert(1)' }
    };
  }

  return (
    <div className={classes.container} style={changeColor.bg}>
      <div className={classes.left} style={changeColor.color}>
        <p>Order {title}</p>
        <button>ORDER NOW</button>
      </div>
      <div className={classes.right}>
        <img src={heroImg} alt="" />
      </div>
      <footer style={changeColor.color}>
        <Footer />
      </footer>
    </div>
  );
};

export default Order;
