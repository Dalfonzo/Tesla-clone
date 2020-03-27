import React from 'react';

import Model from '../../components/models-page-sections/model-section/Model';
import Safety from '../../components/models-page-sections/safety-section/Safety';
import Performance from '../../components/models-page-sections/performance-section/Performance';
import Range from '../../components/models-page-sections/range-section/Range';
import Autopilot from '../../components/models-page-sections/autopilot-section/Autopilot';
import Interior from '../../components/models-page-sections/interior-section/Interior';
import Exterior from '../../components/models-page-sections/exterior-section/Exterior';
import Specs from '../../components/models-page-sections/specs-section/Specs';
import Order from '../../components/models-page-sections/order-section/Order';

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
      {modelProps && <Model {...modelProps} />}
      {safetyProps && <Safety {...safetyProps} />}
      {performanceProps && <Performance {...performanceProps} />}
      {rangeProps && <Range {...rangeProps} />}
      {autopilotProps && <Autopilot {...autopilotProps} />}
      {interiorProps && <Interior {...interiorProps} />}
      {exteriorProps && <Exterior {...exteriorProps} />}
      {specsProps && <Specs {...specsProps} />}
      {orderProps && <Order {...orderProps} />}
    </div>
  );
};

export default ModelHoc;
