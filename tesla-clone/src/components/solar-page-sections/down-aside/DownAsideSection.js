import React from 'react';
import HorizontalAside from '../../asides/horizontal-aside/HorizontalAside';

import classes from './downAsideSection.module.scss';

const DownAsideSection = ({ horizontalAsideProps, heroImg, heroVideo }) => {
  let renderHero = <img src={heroImg} alt="" />;

  if (heroVideo) {
    renderHero = <video muted loop src={heroVideo} autoPlay />;
  }
  return (
    <div className={classes.container}>
      <div className={classes.hero}>{renderHero}</div>
      <div className={classes.text}>
        <HorizontalAside {...horizontalAsideProps} />
      </div>
    </div>
  );
};

export default DownAsideSection;
