import React from 'react';
import VerticalAside from '../../asides/vertical-aside/VerticalAside';
import classes from './rightAsideSection.module.scss';

const RighAsideSection = ({ verticalAsideProps, videoHero, heroImg }) => {
  let renderHero = <img src={heroImg} alt="" />;

  if (videoHero) {
    renderHero = <video muted loop src={videoHero} autoPlay />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.video}>{renderHero}</div>
      <div className={classes.aside}>
        <VerticalAside {...verticalAsideProps} />
      </div>
    </div>
  );
};

export default RighAsideSection;
