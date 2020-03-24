import React from 'react';

import Model from '../../components/model/Model';
import Safety from '../../components/safety/Safety';

import classes from './models.module.scss';

const ModelS = () => {
  return (
    <div className={classes.container}>
      <Model />
      <Safety />
    </div>
  );
};

export default ModelS;
