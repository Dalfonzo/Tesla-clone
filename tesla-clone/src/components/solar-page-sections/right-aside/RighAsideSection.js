import React from 'react';
import VerticalAside from '../../asides/vertical-aside/VerticalAside';
import classes from './rightAsideSection.module.scss';

const RighAsideSection = ({ verticalAsideProps, videoHero }) => {
  return (
    <div className={classes.container}>
      <div className={classes.video}>
        <video muted loop src={videoHero} autoPlay />
      </div>
      <div className={classes.aside}>
        <VerticalAside {...verticalAsideProps} />
      </div>
    </div>
  );
};

export default RighAsideSection;
