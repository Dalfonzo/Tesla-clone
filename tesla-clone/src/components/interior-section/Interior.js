import React from 'react';

import heroImg from '../../assets/images/model-s/hero@2_1.jpg';
import VerticalSpecs from '../car-vertical-specs/VerticalSpecs';
import HorizontalAside from '../horizontal-aside/HorizontalAside';

import classes from './interior.module.scss';

const Interior = () => {
  const verticalSpecsProps = {
    topTitle: '17inch',
    topText: 'An expansive touchscreen display designed to improve over time',
    midTitle: 'Wi-fi',
    midText:
      'Over-the-air software updates introduce new features, functionality and performance',
    bottomTitle: '28 cu ft',
    bottomText: 'Best in class storage, with more cargo room than most SUVs',
    position: 'right'
  };

  const horizontalAsideProps = {
    section: 'Interior',
    title: 'Built Around the Driver',
    text:
      'Model S is built with best in class storage, seating for up to five adults and an expansive 17-inch touchscreen. Advanced noise engineering creates sound dynamics comparable to a recording studio, while the standard Glass Roof provides a spacious interior experience for every passenger.'
  };

  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        <img src={heroImg} alt="" />
        <VerticalSpecs {...verticalSpecsProps} />
      </div>
      <div className={classes.text}>
        <HorizontalAside {...horizontalAsideProps} />
      </div>
    </div>
  );
};

export default Interior;
