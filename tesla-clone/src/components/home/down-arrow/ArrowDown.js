import React from 'react';
import classes from './arrowDown.module.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ArrowDown = ({ arrowClick }) => {
  return (
    <a href="#Model" className={classes.container} onClick={arrowClick}>
      <Icon className={classes.icon} icon={faChevronDown} />
    </a>
  );
};

export default ArrowDown;
