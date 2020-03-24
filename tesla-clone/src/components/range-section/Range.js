import React from 'react';
import videoHero from '../../assets/video/model-s/range.mp4';
import VerticalAside from '../vertical-aside/VerticalAside';
import HorizontalSpecs from '../car-horizontal-specs/HorizontalSpecs';

import classes from './range.module.scss';

const Range = () => {
  const verticalAsideProps = {
    section: 'Range',
    title: 'Go Anywhere',
    text:
      'Model S can get you anywhere you want to go—with industry-leading range and convenient charging options, all over the world.'
  };

  const specsProps = {
    speedometerOnFirstCell: false,
    button: false,
    speedometer: false,
    leftTitle: '391 mi',
    leftText: 'Go anywhere with up to 391 miles of range on a single charge',
    midTitle: '15 min',
    midText:
      'Recharge up to 136 miles in 15 minutes at any Supercharger location',
    rightTitle: '16,000+',
    rightText:
      'Superchargers placed along well-traveled routes around the world',
    borderColor: 'var(--primary-color)',
    textColor: 'var(--primary-color)'
  };

  return (
    <div className={classes.container}>
      <div className={classes.video}>
        <video
          muted
          loop
          src={videoHero}
          className={classes.videoPlayer}
          autoPlay
        />
        <HorizontalSpecs {...specsProps} />
      </div>
      <div className={classes.aside}>
        <VerticalAside {...verticalAsideProps} />
      </div>
    </div>
  );
};

export default Range;
