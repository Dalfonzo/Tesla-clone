import React from 'react';
import WithModel from '../../hoc/models-pages-hoc/withModel';

import modelHeroImg from '../../assets/images/model-3/model-3-hero-desktop-v2.jpg';
import safetyHeroImg from '../../assets/images/model-3/model-3-hero.png';
import performanceHeroImg from '../../assets/images/model-s/model-s-performance.jpg';
import rangeVideoHero from '../../assets/video/model-3/Model 3 -range.mp4';
import autoPilotVideoHero from '../../assets/video/model-s/autopilot.mp4';
import interiorHeroImg from '../../assets/images/model-s/hero@2_1.jpg';
import specsHeroImg from '../../assets/images/model-3/top@2.png';
import orderHeroImg from '../../assets/images/model-3/Desktop_Model3_Order_102719.png';

import classes from './model3.module.scss';
const pageProps = {
  modelProps: {
    /* propiedades de model section */
    title: 'Tesla',
    subtitle: 'Model 3',
    heroImg: modelHeroImg,
    specsProps: {
      speedometerOnFirstCell: true,
      button: true,
      speedometer: true,
      leftTitle: '3.2s',
      leftText: 'From 0-60 mph',
      midTitle: '322mi',
      midText: 'Range',
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
      title: 'Built for Safety',
      text:
        "Safety is the most important part of the overall Model 3 design. The metal structure is a combination of aluminum and steel, for maximum strength in every area. In a roof-crush test, Model 3 resisted four times its own mass, even with an all-glass roof: that's the same weight as two full-grown African elephants."
    },
    carParts: {
      partOne: 'Impact Protection',
      partTwo: 'Rigid Structure',
      partThree: 'Very Low Rollover Risk'
    }
  },
  performanceProps: {
    /* propiedades de performance section */
    heroImg: performanceHeroImg,
    specsProps: {
      speedometer: true,
      speedometerOnFirstCell: true,
      button: false,
      leftTitle: '3.2s',
      leftText:
        'Quickest acceleration—from zero to 60 mph in as little as 3.2 seconds',
      midTitle: '162mph',
      midText:
        'Improved handling and aerodynamics allow for a top speed of 162 mph',
      rightTitle: 'AWD',
      rightText:
        'Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions',
      borderColor: 'var(--primary-color)',
      invertColor: true
    },
    horizontalAsideProps: {
      section: 'Performance',
      title: 'Quickest Acceleration',
      text:
        'Model 3 comes with the option of dual motor all-wheel drive, 20” Performance Wheels and Brakes and lowered suspension for total control, in all weather conditions. And a carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph in as little as 3.2 seconds.'
    }
  },
  rangeProps: {
    /* propiedades de range section */
    videoHero: rangeVideoHero,
    verticalAsideProps: {
      section: 'Range',
      title: 'Go Anywhere',
      text:
        'Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 16,000 Superchargers worldwide, with six new locations opening every week.'
    },
    specsProps: {
      speedometerOnFirstCell: false,
      button: false,
      speedometer: false,
      leftTitle: '322mi',
      leftText: 'Go anywhere with up to 322 mi of range on a single charge',
      midTitle: '15 min',
      midText: 'Recharge up to 172 mi in 15 minutes at Supercharger locations',
      rightTitle: '16,000+',
      rightText:
        'Superchargers placed along well-traveled routes around the world',
      borderColor: 'var(--primary-color)'
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
    verticalSpecsProps: {
      topTitle: '15inch',
      topText: 'A touchscreen display designed to improve over time',
      midTitle: 'Wi-fi',
      midText:
        'Over-the-air software updates introduce new features, functionality and performance',
      bottomTitle: 'Roof',
      bottomText:
        'An expansive Glass Roof provides more headroom and UV protection',
      position: 'right'
    },
    horizontalAsideProps: {
      section: 'Interior',
      title: 'Built Around the Driver',
      text:
        'The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat.'
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
    title: 'Experience Model 3',
    heroImg: orderHeroImg
  }
};
const Model3 = () => {
  return <WithModel {...pageProps} />;
};

export default Model3;
