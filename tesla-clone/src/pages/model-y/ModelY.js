import React from 'react';
import WithModel from '../../hoc/models-pages-hoc/withModel';

import modelHeroImg from '../../assets/images/model-y/model.jpg';
import safetyHeroImg from '../../assets/images/model-y/safety.png';
import rangeVideoHero from '../../assets/video/model-y/Model Y - range.mp4';
import autoPilotVideoHero from '../../assets/video/model-s/autopilot.mp4';
import interiorHeroImg from '../../assets/images/model-y/interior_hero@2.jpg';
import specsHeroImg from '../../assets/images/model-y/ModelYSilhouette.png';
import orderHeroImg from '../../assets/images/model-y/ModelY_Order_Hero.jpg';
/* ICONS */
import { ReactComponent as WifiIcon } from '../../assets/svg/wifi_0.svg';
import { ReactComponent as RoofCarIcon } from '../../assets/svg/MS_roof.svg';

const pageProps = {
  modelProps: {
    /* propiedades de model section */
    title: 'Tesla',
    subtitle: 'Model Y',
    heroImg: modelHeroImg,
    specsProps: {
      speedometerOnFirstCell: true,
      button: true,
      speedometer: false,
      leftTitle: '316mi',
      leftText: 'Range (EPA est.)',
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
      midTitle: <WifiIcon />,
      midText:
        'Over-the-air software updates introduce new features, functionality and performance',
      bottomTitle: <RoofCarIcon />,
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
  specsProps: {
    /* propiedades de specs section */
    heroImg: specsHeroImg,
    title: 'Model Y',
    leftList: [
      {
        title: 'Battery',
        text: 'Long Range'
      },
      {
        title: 'Acceleration',
        text: '3.5s 0-60 mph'
      },
      {
        title: 'Range',
        text: '315 miles (EPA est.)'
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
        text: '19"'
      }
    ],
    rightList: [
      {
        title: 'Max Cargo Volume',
        text: '68 cu ft'
      },
      {
        title: 'Top Speed',
        text: '145 mph'
      },
      {
        title: 'Displays',
        text: '15" Center Touchscreen'
      },
      {
        title: 'Supercharging',
        text: 'Pay Per Useg'
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
    invertColor: true,
    title: 'Model Y',
    heroImg: orderHeroImg
  }
};
const ModelY = () => {
  return <WithModel {...pageProps} />;
};

export default ModelY;
