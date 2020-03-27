import React from 'react';
import LearnOrderBtn from '../../buttons/learn-and-order-together/LearnOrder';

import classes from './verticalAside.module.scss';

const VerticalAside = ({ section, title, text }) => {
  return (
    <div className={classes.container}>
      <div>
        <p className={classes.section}>{section}</p>
        <p className={classes.title}>{title}</p>
        <p className={classes.text}>{text}</p>
      </div>
      <LearnOrderBtn />
    </div>
  );
};

export default VerticalAside;
