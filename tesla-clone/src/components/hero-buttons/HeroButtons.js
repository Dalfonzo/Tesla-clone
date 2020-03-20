import React from 'react';

import classes from './heroButtons.module.scss';

const HeroButtons = ({ title, subtitle, link, firstOpt, secondOpt }) => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>{title}</p>
      {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
      <button>{firstOpt}</button>
      <button>{secondOpt}</button>
      <p className={classes.link}>{link}</p>
    </div>
  );
};

export default HeroButtons;
