import React, { useState, useEffect } from 'react';

import classes from './heroControls.module.scss';

const HeroControls = ({ position }) => {
  const [active, setActive] = useState(2);

  const clickHandler = (index, value) => {
    position(value);
    setActive(index);
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
        onClick={() => clickHandler(1, '100%')}
      />
      <div
        className={classes.mid}
        style={midBg}
        onClick={() => clickHandler(2, '50%')}
      />
      <div
        className={classes.right}
        style={rightBg}
        onClick={() => clickHandler(3, '0%')}
      />
    </div>
  );
};

export default HeroControls;
