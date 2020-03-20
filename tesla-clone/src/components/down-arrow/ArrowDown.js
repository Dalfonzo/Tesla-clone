import React from 'react';
import classes from './arrowDown.module.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ArrowDown = () => {
  return (
    <div className={classes.container}>
      <Icon className={classes.icon} icon={faChevronDown} />
    </div>
  );
};

export default ArrowDown;
