import React from 'react';
import HorizontalSpecs from '../car-horizontal-specs/HorizontalSpecs';
import HorizontalAside from '../horizontal-aside/HorizontalAside';
import classes from './performance.module.scss';

const Performance = ({
  specsProps,
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
        <HorizontalSpecs {...specsProps} />
      </div>
      <div className={classes.text}>
        <HorizontalAside {...horizontalAsideProps} />
      </div>
    </div>
  );
};

export default Performance;
