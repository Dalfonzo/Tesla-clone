import React from 'react';

import Model from '../../components/model-section/Model';
import Safety from '../../components/safety-section/Safety';
import Performance from '../../components/performance-section/Performance';
import Range from '../../components/range-section/Range';
import Autopilot from '../../components/autopilot-section/Autopilot';
import Interior from '../../components/interior-section/Interior';
import Exterior from '../../components/exterior-section/Exterior';
import Specs from '../../components/specs-section/Specs';
import Order from '../../components/order-section/Order';

import classes from './modelHoc.module.scss';

const ModelHoc = ({
  modelProps,
  safetyProps,
  performanceProps,
  rangeProps,
  autopilotProps,
  interiorProps,
  exteriorProps,
  specsProps,
  orderProps
}) => {
  return (
    <div>
      <Model {...modelProps} />
      <Safety {...safetyProps} />
      <Performance {...performanceProps} />
      <Range {...rangeProps} />
      <Autopilot {...autopilotProps} />
      <Interior {...interiorProps} />
      <Exterior {...exteriorProps} />
      <Specs {...specsProps} />
      <Order {...orderProps} />
    </div>
  );
};

export default ModelHoc;
