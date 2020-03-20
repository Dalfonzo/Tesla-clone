import React, { useState } from 'react';

import classes from './heroControls.module.scss';

const HeroControls = ({ heroProps }) => {
  const [active, setActive] = useState(2);

  const clickHandler = (index, value, name) => {
    setActive(index);
    heroProps({
      heroPosition: value,
      title: name
    });
  };

  const leftBg =
    active === 1
      ? { backgroundColor: 'white' }
      : { backgroundColor: 'transparent' };

  const midBg =
    active === 2
      ? { backgroundColor: 'white' }
      : { backgroundColor: 'transparent' };

  const rightBg =
    active === 3
      ? { backgroundColor: 'white' }
      : { backgroundColor: 'transparent' };

  return (
    <div className={classes.container}>
      <div
        className={classes.left}
        style={leftBg}
        onClick={() => clickHandler(1, '100%', 'Model S')}
      />
      <div
        className={classes.mid}
        style={midBg}
        onClick={() => clickHandler(2, '50%', 'Model 3')}
      />
      <div
        className={classes.right}
        style={rightBg}
        onClick={() => clickHandler(3, '0%', 'Model X')}
      />
    </div>
  );
};

export default HeroControls;
