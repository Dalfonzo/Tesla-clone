import React from 'react';
import VerticalAside from '../../asides/vertical-aside/VerticalAside';
import HorizontalSpecs from '../../specs/car-horizontal-specs/HorizontalSpecs';

import classes from './range.module.scss';

const Range = ({ verticalAsideProps, specsProps, videoHero }) => {
  return (
    <div className={classes.container}>
      <div className={classes.video}>
        <video muted loop src={videoHero} autoPlay />
        <HorizontalSpecs {...specsProps} />
      </div>
      <div className={classes.aside}>
        <VerticalAside {...verticalAsideProps} />
      </div>
    </div>
  );
};

export default Range;
