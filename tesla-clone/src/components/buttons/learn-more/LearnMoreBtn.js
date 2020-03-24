import React from 'react';
import classes from './learnMoreBtn.module.scss';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const LearnMoreBtn = () => {
  return (
    <div className={classes.container}>
      <Icon icon={faPlus} />
      <p>learn more</p>
    </div>
  );
};

export default LearnMoreBtn;
