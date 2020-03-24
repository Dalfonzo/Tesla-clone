import React from 'react';
import LearnOrderBtn from '../buttons/learn-and-order-together/LearnOrder';

import classes from './horizontalAside.module.scss';

const HorizontalAside = ({ section, title, text }) => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <p className={classes.section}>{section}</p>
        <p className={classes.title}>{title}</p>
        <LearnOrderBtn />
      </div>
      <p className={classes.text}>{text}</p>
    </div>
  );
};

export default HorizontalAside;
