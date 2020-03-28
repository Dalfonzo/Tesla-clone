import React from 'react';
import Footer from '../../general-layout/footer/Footer';

import classes from './orderSection.module.scss';

const OrderSection = ({ title }) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <p>{title}</p>
        <button>ORDER NOW</button>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default OrderSection;
