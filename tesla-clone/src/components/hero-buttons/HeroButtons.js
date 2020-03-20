import React from 'react';

import classes from './heroButtons.module.scss';

const HeroButtons = ({ title }) => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>{title}</p>
      <button>CUSTOM ORDER</button>
      <button>EXISTING INVENTORY</button>
      <p className={classes.subTitle}>Visit a Store</p>
    </div>
  );
};

export default HeroButtons;
