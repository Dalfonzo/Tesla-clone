import React from 'react';
import WithModel from '../../hoc/models-pages-hoc/withModel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faSolarPanel } from '@fortawesome/free-solid-svg-icons';

import modelHeroImg from '../../assets/images/model-y/model.jpg';
import safetyHeroImg from '../../assets/images/model-y/safety.png';
import rangeVideoHero from '../../assets/video/model-y/Model Y - range.mp4';
import autoPilotVideoHero from '../../assets/video/model-s/autopilot.mp4';
import interiorHeroImg from '../../assets/images/model-y/interior_hero@2.jpg';
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
      title: 'Designed for Safety',
      text:
        'Like every Tesla, Model Y is designed to be the safest vehicle in its class. The low center of gravity, rigid body structure and large crumple zones provide unparalleled protection.'
    },
    carParts: {
      partOne: 'Impact Protection',
      partTwo: 'Rigid Structure',
      partThree: 'Low Center of Gravity'
    }
  },
  rangeProps: {
    /* propiedades de range section */
    videoHero: rangeVideoHero,
    verticalAsideProps: {
      section: 'Range',
      title: 'Go Anywhere',
      text:
        'Model Y is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 16,000 Superchargers worldwide, with six new locations opening every week.'
    },
    specsProps: {
      invertColor: true,
      speedometerOnFirstCell: false,
      button: false,
      speedometer: false,
      leftTitle: '316mi',
      leftText: 'Go anywhere with up to 316 miles of range on a single charge',
      midTitle: '15 min',
      midText: 'Recharge 158 miles in 15 minutes at Supercharger locations',
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
      topTitle: '15 inch',
      topText: 'A touchscreen display designed to improve over time',
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
        'With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky.'
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
