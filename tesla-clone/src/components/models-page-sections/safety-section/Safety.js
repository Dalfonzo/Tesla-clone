import React from 'react';

import VerticalAside from '../../asides/vertical-aside/VerticalAside';
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
          <Icon icon={faAngleDoubleRight} />
          {'  '}
          {carParts.partOne}
        </div>
        <div className={classes.line2}>
          <span>2</span>
          <Icon icon={faAngleDoubleRight} />
          {'  '}
          {carParts.partTwo}
        </div>
        <div className={classes.line3}>
          <span>3</span>
          <Icon icon={faAngleDoubleRight} />
          {'  '}
          {carParts.partThree}
        </div>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Safety;
