import React from 'react';
import WithModel from '../../hoc/models-pages-hoc/withModel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faSolarPanel } from '@fortawesome/free-solid-svg-icons';

import modelHeroImg from '../../assets/images/model-y/model.jpg';
import safetyHeroImg from '../../assets/images/model-x/safety-model-x-hero.png';
import performanceHeroImg from '../../assets/images/model-x/performance-hero@2.jpg';
import rangeVideoHero from '../../assets/video/model-x/Model X - range.mp4';
import autoPilotVideoHero from '../../assets/video/model-s/autopilot.mp4';
import interiorHeroImg from '../../assets/images/model-x/hero@2_3.jpg';
import exteriorHeroImg from '../../assets/images/model-x/exterior.jpg';
import specsHeroImg from '../../assets/images/model-x/MX-specs-desktop.jpg';
import orderHeroImg from '../../assets/images/model-x/order.jpg';

const pageProps = {
  modelProps: {
    /* propiedades de model section */
    title: 'Tesla',
    subtitle: 'Model Y',
    heroImg: modelHeroImg,
    specsProps: {
      speedometerOnFirstCell: true,
      button: true,
      speedometer: true,
      leftTitle: '3.0s',
      leftText: 'From 0-60 mph',
      midTitle: `68cu ft`,
      midText: 'Cargo Space',
      rightTitle: 'AWD',
      rightText: 'Dual Motor',
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
    heroImg: exteriorHeroImg,
    specsProps: {
      invertColor: false,
      speedometer: false,
      speedometerOnFirstCell: false,
      button: false,
      leftTitle: 'Signature Colors',
      leftText: 'Customize Model X with signature, multi-layered paint',
      midTitle: '0.23c',
      midText:
        'The most aerodynamic car in its class with the lowest drag coefficient on earth',
      rightTitle: 'Falcon Wing Doors',
      rightText: 'Enhanced accessibility to the second and third rows'
    },

    horizontalAsideProps: {
      section: 'Exterior',
      title: 'Designed for Efficiency',
      text:
        'Model X is built for efficiency—with an uncompromised design, allowing for industry-leading range, performance and utility. A spoiler provides incredible aerodynamics and the lowest drag coefficient of any vehicle in its class.'
    }
  },
  specsProps: {
    /* propiedades de specs section */
    heroImg: specsHeroImg,
    title: 'Model X',
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
        text: 'Up to 7 Adults'
      },
      {
        title: 'Wheels',
        text: '20” or 22”'
      }
    ],
    rightList: [
      {
        title: 'Weight',
        text: '5,531 lbs'
      },
      {
        title: 'Cargo',
        text: '88 cu ft'
      },
      {
        title: 'Displays',
        text: 'Driver Display + 17" Touchscreen'
      },
      {
        title: 'Supercharging Max/ Payment Type',
        text: '200 kW max; Free Supercharging'
      },
      {
        title: 'Onboard Charger Max',
        text: '11.5 kW max (48A)'
      },
      {
        title: 'Warranty',
        text: 'Basic Vehicle - 4 years or 50,000 miles, whichever comes first'
      }
    ]
  },
  orderProps: {
    /* propiedades de order section */
    invertColor: false,
    title: 'Model X',
    heroImg: orderHeroImg
  }
};
const ModelY = () => {
  return <WithModel {...pageProps} />;
};

export default ModelY;
