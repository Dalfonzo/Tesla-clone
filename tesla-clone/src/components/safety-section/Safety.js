import React from 'react';

import VerticalAside from '../vertical-aside/VerticalAside';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import classes from './safety.module.scss';

const Safety = ({ verticalAsideProps, heroImg, carParts }) => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <VerticalAside {...verticalAsideProps} />
      </div>
      <div className={classes.rightSide}>
        <div className={classes.line1}>
          <span>1</span>
          {carParts.partOne} <Icon icon={faAngleDoubleRight} />
        </div>
        <div className={classes.line2}>
          <span>2</span>
          {carParts.partTwo} <Icon icon={faAngleDoubleRight} />
        </div>
        <div className={classes.line3}>
          <span>3</span>
          {carParts.partThree} <Icon icon={faAngleDoubleRight} />
        </div>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Safety;
