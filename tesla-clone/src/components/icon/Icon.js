import React from 'react';
import classes from './icon.module.scss';

const Icon = props => {
  return (
    <span className={classes.container}>
      {props.children}
      <span className={classes.text}>{props.text}</span>
    </span>
  );
};

export default Icon;
