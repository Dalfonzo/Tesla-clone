import React from 'react';
import classes from './secondaryHeroButtons.module.scss';

const SecondaryHeroButtons = ({ title, option }) => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>{title}</p>
      <button>{option}</button>
    </div>
  );
};

export default SecondaryHeroButtons;
