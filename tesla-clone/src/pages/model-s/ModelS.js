// import React from 'react';

// import Model from '../../components/model-section/Model';
// import Safety from '../../components/safety-section/Safety';
// import Performance from '../../components/performance-section/Performance';
// import Range from '../../components/range-section/Range';
// import Autopilot from '../../components/autopilot-section/Autopilot';
// import Interior from '../../components/interior-section/Interior';
// import Exterior from '../../components/exterior-section/Exterior';
// import Specs from '../../components/specs-section/Specs';
// import Order from '../../components/order-section/Order';

// import classes from './models.module.scss';

// const ModelS = () => {
//   return (
//     <div className={classes.container}>
//       <Model />
//       <Safety />
//       <Performance />
//       <Range />
//       <Autopilot />
//       <Interior />
//       <Exterior />
//       <Specs />
//       <Order />
//     </div>
//   );
// };

// export default ModelS;

import React from 'react';
import WithModel from '../../hoc/models-pages-hoc/withModel';

import modelHeroImg from '../../assets/images/model-s/model-s-hero-social.jpg';
import safetyHeroImg from '../../assets/images/model-s/safety-model-s-hero.png';
import performanceHeroImg from '../../assets/images/model-s/model-s-performance.jpg';

import classes from './models.module.scss';

const ModelS = () => {
  const pageProps = {
    modelProps: {
      /* propiedades de model section */
      title: 'Tesla',
      subtitle: 'Model S',
      heroImg: modelHeroImg,
      specsProps: {
        speedometerOnFirstCell: true,
        button: true,
        speedometer: true,
        leftTitle: '2.4s',
        leftText: 'From 0-60 mph',
        midTitle: '28 cu ft',
        midText: 'Best in Class Storage',
        rightTitle: '391 mi',
        rightText: 'Range (Est.)',
        borderColor: 'var(--secondary-color)'
      }
    },
    safetyProps: {
      /* propiedades de safety section */
      heroImg: safetyHeroImg,
      verticalAsideProps: {
        section: 'Safety',
        title: 'High Impact Protection',
        text:
          'Model S is built from the ground up as an electric vehicle, with high-strength architecture and a floor-mounted battery pack allowing for incredible impact protection.'
      },
      carParts: {
        partOne: 'Front-Impact Protection',
        partTwo: 'Side-Impact Protection',
        partThree: 'Very Low Rollover Risk'
      }
    },
    performanceProps: {
      /* propiedades de performance section */
      heroImg: performanceHeroImg,
      specsProps: {
        speedometer: true,
        speedometerOnFirstCell: false,
        button: false,
        leftTitle: 'AWD',
        leftText:
          'Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions',
        midTitle: '2.4s',
        midText:
          'The quickest acceleration on earth—from zero to 60 mph in as little as 2.4 seconds',
        rightTitle: '163 mph',
        rightText:
          'Improved handling and aerodynamics allow for a top speed of 163 mph',
        borderColor: 'var(--primary-color)',
        invertColor: true
      },
      horizontalAsideProps: {
        section: 'Performance',
        title: 'Quickest Acceleration',
        text:
          'Model S sets an industry standard for performance and safety. Tesla’s all-electric powertrain delivers unparalleled performance in all weather conditions – with Dual Motor All-Wheel Drive, adaptive air suspension and ludicrous acceleration.'
      }
    },
    rangeProps: {},
    autopilotProps: {},
    interiorProps: {},
    exteriorProps: {},
    specsProps: {},
    orderProps: {}
  };
  return (
    <div className={classes.container}>
      <WithModel {...pageProps} />
    </div>
  );
};

export default ModelS;
