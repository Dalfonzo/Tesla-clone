import React from 'react';
import classes from './arrowDown.module.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ArrowDown = ({ arrowClick }) => {
  return (
    <div className={classes.container} onClick={arrowClick}>
      <Icon className={classes.icon} icon={faChevronDown} />
    </div>
  );
};

export default ArrowDown;
