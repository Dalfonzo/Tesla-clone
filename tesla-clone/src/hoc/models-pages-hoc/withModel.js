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

import autoPilotVideoHero from '../../assets/video/model-s/autopilot.mp4';
import { ReactComponent as AutopilotIcon } from '../../assets/svg/autopilot.svg';
import Icon from '../../components/icon/Icon';

const ModelHoc = ({
  modelProps,
  safetyProps,
  performanceProps,
  rangeProps,
  interiorProps,
  exteriorProps,
  specsProps,
  orderProps
}) => {
  const autopilotProps = {
    /* propiedades de autopilot section */
    videoHero: autoPilotVideoHero,
    horizontalAsideProps: {
      section: 'Autopilot',
      title: 'Future of Driving',
      text:
        'Autopilot advanced safety and convenience features are designed to assist you with the most burdensome parts of driving.'
    },
    verticalSpecsProps: {
      topTitle: '360°',
      topText:
        'Rear, side and forward-facing cameras provide maximum visibility',
      midTitle: '160 m',
      midText:
        'Forward-facing radar provides a long-range view of distant objects',
      bottomTitle: (
        <Icon text={'Ultrasonic Sensors'}>
          <AutopilotIcon />
        </Icon>
      ),
      bottomText:
        'Detects nearby cars, prevents potential collisions and assists with parking',
      position: 'left'
    }
  };
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
