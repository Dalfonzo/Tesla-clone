import React from 'react';
import WithModel from '../../hoc/models-pages-hoc/withModel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faSolarPanel } from '@fortawesome/free-solid-svg-icons';

import modelHeroVideo from '../../assets/video/model-x/Model X - model.mp4';
import safetyHeroImg from '../../assets/images/model-x/safety-model-x-hero.png';
import performanceHeroImg from '../../assets/images/model-x/performance-hero@2.jpg';
import rangeVideoHero from '../../assets/video/model-x/Model X - range.mp4';
import autoPilotVideoHero from '../../assets/video/model-s/autopilot.mp4';
import interiorHeroImg from '../../assets/images/model-x/hero@2_3.jpg';
import specsHeroImg from '../../assets/images/model-3/top@2.png';
import orderHeroImg from '../../assets/images/model-3/Desktop_Model3_Order_102719.png';

import classes from './modelx.module.scss';

const pageProps = {
  modelProps: {
    /* propiedades de model section */
    title: 'Tesla',
    subtitle: 'Model X',
    heroVideo: modelHeroVideo,
    specsProps: {
      speedometerOnFirstCell: true,
      button: true,
      speedometer: true,
      leftTitle: '3.2s',
      leftText: 'From 0-60 mph',
      midTitle: `★★★★★`,
      midText: '5-Star Safety',
      rightTitle: '351mi',
      rightText: 'Range(EPA est.)',
      invertColor: true
    }
  },
  safetyProps: {
    /* propiedades de safety section */
    heroImg: safetyHeroImg,
    verticalAsideProps: {
      section: 'Safety',
      title: 'The Safest SUV',
      text:
        'Model X is one of the safest SUVs ever. Built from the ground up as an electric vehicle, the body, chassis, restraints and battery technology provide a very low probability of occupant injury.'
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
    heroVideo: null,
    specsProps: {
      invertColor: true,
      speedometer: true,
      speedometerOnFirstCell: false,
      button: false,
      leftTitle: 'AWD',
      leftText:
        'Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions',
      midTitle: '3.2s',
      midText:
        'The quickest SUV on earth—from zero to 60 mph in as little as 3.2 seconds',
      rightTitle: '★★★★★',
      rightText:
        'The highest safety ratings ever, with the lowest probability of occupant injury'
    },
    horizontalAsideProps: {
      section: 'Performance',
      title: 'The Quickest SUV',
      text:
        'Tesla’s all-electric powertrain delivers unparalleled performance in all weather conditions, with Dual Motor All-Wheel Drive, adaptive air suspension and the quickest acceleration of any SUV on the road—from zero to 60 mph in 3.2 seconds.'
    }
  },
  rangeProps: {
    /* propiedades de range section */
    videoHero: rangeVideoHero,
    verticalAsideProps: {
      section: 'Range',
      title: 'Go Anywhere',
      text:
        'Model X can get you anywhere you want to go—with industry-leading range and convenient charging options, all over the world.'
    },
    specsProps: {
      invertColor: true,
      speedometerOnFirstCell: false,
      button: false,
      speedometer: false,
      leftTitle: '351mi',
      leftText: 'Go anywhere with up to 351 miles of range on a single charge',
      midTitle: '15 min',
      midText:
        'Recharge up to 123 miles in 15 minutes at any Supercharger location',
      rightTitle: '16,000+',
      rightText:
        'Superchargers placed along well-traveled routes around the world'
    }
  },
  autopilotProps: {
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
      bottomTitle: 'Ultrasonic Sensors',
      bottomText:
        'Detects nearby cars, prevents potential collisions and assists with parking',
      position: 'left'
    }
  },
  interiorProps: {
    /* propiedades de interior section */
    heroImg: interiorHeroImg,
    heroVideo: null,
    verticalSpecsProps: {
      invertColor: true,
      topTitle: '17inch',
      topText: 'An expansive touchscreen display designed to improve over time',
      midTitle: <FontAwesomeIcon icon={faWifi} />,
      midText:
        'Over-the-air software updates introduce new features, functionality and performance',
      bottomTitle: <FontAwesomeIcon icon={faSolarPanel} />,
      bottomText:
        'An expansive Glass Roof provides more headroom and UV protection',
      position: 'right'
    },
    horizontalAsideProps: {
      section: 'Interior',
      title: 'Built Around the Driver',
      text:
        'Model X is built to provide the most convenient interior experience ever—with best in class storage, seating for up to seven adults and an expansive 17-inch touchscreen. A seven-seat configuration option comes standard with fold-flat seats for maximum cargo space.'
    }
  },
  exteriorProps: {
    /* propiedades de exterior section */
    // heroImg: exteriorHeroImg,
    specsProps: {
      invertColor: false,
      speedometer: false,
      speedometerOnFirstCell: false,
      button: false,
      leftTitle: 'Signature Colors',
      leftText: 'Customize Model S with signature, multi-layered paint',
      midTitle: '0.23c',
      midText:
        'The most aerodynamic car in its class with the lowest drag coefficient on earth',
      rightTitle: 'Roof Rack Compatible',
      rightText:
        'A standard, expansive Glass Roof provides more headroom and UV protection',
      borderColor: 'var(--secondary-color)'
    },

    horizontalAsideProps: {
      section: 'Exterior',
      title: 'Designed for Efficiency',
      text:
        'Model S was designed for speed and endurance—with incredible aerodynamics, ludicrous performance and uncompromised aesthetics. Automatic door handles auto-present upon approach and withdraw when closed.'
    }
  },
  specsProps: {
    /* propiedades de specs section */
    heroImg: specsHeroImg,
    title: 'Model 3',
    leftList: [
      {
        title: 'Battery',
        text: 'Long Range'
      },
      {
        title: 'Acceleration',
        text: '3.2 seconds 0-60 mph'
      },
      {
        title: 'Range',
        text: '322 miles'
      },
      {
        title: 'Drive',
        text: 'Dual Motor All-Wheel Drive'
      },
      {
        title: 'Seating',
        text: '5 Adults'
      },
      {
        title: 'Wheels',
        text: '18"'
      }
    ],
    rightList: [
      {
        title: 'Weight',
        text: '4,036 lbs'
      },
      {
        title: 'Cargo',
        text: '15 cu ft'
      },
      {
        title: 'Displays',
        text: '15" Center Touchscreen'
      },
      {
        title: 'Supercharging Max/ Payment Type',
        text: '250 kW max; Pay Per Use'
      },
      {
        title: 'Onboard Charger Max',
        text: '11.5 kW max (48A)'
      },
      {
        title: 'Warranty',
        text:
          'Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first'
      }
    ]
  },
  orderProps: {
    /* propiedades de order section */
    invertColor: true,
    title: 'Experience Model 3',
    heroImg: orderHeroImg
  }
};

const ModelX = () => {
  return <WithModel {...pageProps} />;
};

export default ModelX;
