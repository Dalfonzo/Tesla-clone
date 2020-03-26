import React from 'react';

import VerticalSpecs from '../car-vertical-specs/VerticalSpecs';
import HorizontalAside from '../horizontal-aside/HorizontalAside';

import classes from './interior.module.scss';

const Interior = ({
  verticalSpecsProps,
  horizontalAsideProps,
  heroImg,
  heroVideo
}) => {
  let renderHero = <img src={heroImg} alt="" />;

  if (heroVideo) {
    renderHero = <video muted loop src={heroVideo} autoPlay />;
  }
  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        {renderHero}
        <VerticalSpecs {...verticalSpecsProps} />
      </div>
      <div className={classes.text}>
        <HorizontalAside {...horizontalAsideProps} />
      </div>
    </div>
  );
};

export default Interior;
