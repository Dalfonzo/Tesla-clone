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

import classes from './models.module.scss';

const ModelS = () => {
  const pageProps = {
    modelProps: {
      //props para model section
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
    safetyProps: {},
    performanceProps: {},
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
