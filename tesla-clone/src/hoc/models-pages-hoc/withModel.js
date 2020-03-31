import React from 'react';
import { SectionsContainer, Section } from 'react-fullpage';

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

  let anchors = [];

  if (modelProps) {
    anchors.push('Model');
  }
  if (safetyProps) {
    anchors.push('Safety');
  }
  if (performanceProps) {
    anchors.push('Performance');
  }
  if (rangeProps) {
    anchors.push('Range');
  }
  if (autopilotProps) {
    anchors.push('Autopilot');
  }
  if (interiorProps) {
    anchors.push('Interior');
  }
  if (exteriorProps) {
    anchors.push('Exterior');
  }
  if (specsProps) {
    anchors.push('Specs');
  }
  if (orderProps) {
    anchors.push('OrderNow');
  }

  let options = {
    anchors: anchors, // the anchors for each sections
    activeClass: 'active-a', // the class that is appended to the sections links
    arrowNavigation: true, // use arrow keys
    delay: 1000, // the scroll animation speed
    navigation: true, // use dots navigatio
    sectionPaddingTop: '0', // the section top padding
    sectionPaddingBottom: '0', // the section bottom padding
    verticalAlign: true // align the content of each section vertical
  };

  return (
    <SectionsContainer {...options}>
      {modelProps && (
        <Section>
          <Model {...modelProps} />
        </Section>
      )}
      {safetyProps && (
        <Section>
          <Safety {...safetyProps} />
        </Section>
      )}
      {performanceProps && (
        <Section>
          <Performance {...performanceProps} />
        </Section>
      )}
      {rangeProps && (
        <Section>
          <Range {...rangeProps} />
        </Section>
      )}
      {autopilotProps && (
        <Section>
          <Autopilot {...autopilotProps} />
        </Section>
      )}
      {interiorProps && (
        <Section>
          <Interior {...interiorProps} />
        </Section>
      )}
      {exteriorProps && (
        <Section>
          <Exterior {...exteriorProps} />
        </Section>
      )}
      {specsProps && (
        <Section>
          <Specs {...specsProps} />
        </Section>
      )}
      {orderProps && (
        <Section>
          <Order {...orderProps} />
        </Section>
      )}
    </SectionsContainer>
  );
};

export default ModelHoc;
