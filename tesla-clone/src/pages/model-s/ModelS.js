import React from 'react';

import Model from '../../components/model-section/Model';
import Safety from '../../components/safety-section/Safety';
import Performance from '../../components/performance-section/Performance';
import Range from '../../components/range-section/Range';
import Autopilot from '../../components/autopilot-section/Autopilot';

import classes from './models.module.scss';

const ModelS = () => {
  return (
    <div className={classes.container}>
      <Model />
      <Safety />
      <Performance />
      <Range />
      <Autopilot />
    </div>
  );
};

export default ModelS;
