import React from 'react';

import Model from '../../components/model-section/Model';
import Safety from '../../components/safety-section/Safety';
import Performance from '../../components/performance-section/Performance';

import classes from './models.module.scss';

const ModelS = () => {
  return (
    <div className={classes.container}>
      <Model />
      <Safety />
      <Performance />
    </div>
  );
};

export default ModelS;
