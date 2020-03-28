import React from 'react';

import VerticalAside from '../../asides/vertical-aside/VerticalAside';
import classes from './leftAsideSection.module.scss';

const LeftAsideSection = ({ verticalAsideProps, heroImg }) => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <VerticalAside {...verticalAsideProps} />
      </div>
      <div className={classes.rightSide}>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default LeftAsideSection;
