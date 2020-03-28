import React from 'react';
import WithModel from '../../hoc/models-pages-hoc/withModel';
/* HEROS */
import modelHeroImg from '../../assets/images/model-s/model-s-hero-social.jpg';
import safetyHeroImg from '../../assets/images/model-s/safety-model-s-hero.png';
import performanceHeroImg from '../../assets/images/model-s/model-s-performance.jpg';
import rangeVideoHero from '../../assets/video/model-s/range.mp4';
import interiorHeroImg from '../../assets/images/model-s/hero@2_1.jpg';
import exteriorHeroImg from '../../assets/images/model-s/hero-high-viewport.jpg';
import specsHeroImg from '../../assets/images/model-s/MS-specs-desktop.jpg';
import orderHeroImg from '../../assets/images/model-s/models-2.jpg';
/* ICONS */
import { ReactComponent as WifiIcon } from '../../assets/svg/wifi_0.svg';
import { ReactComponent as RoofCarIcon } from '../../assets/svg/MS_roof.svg';
import { ReactComponent as SigColors } from '../../assets/svg/signature-colors.svg';
import Icon from '../../components/icon/Icon';

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
        rightText: 'Range (Est.)'
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
        invertColor: true,
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
          'Improved handling and aerodynamics allow for a top speed of 163 mph'
      },
      horizontalAsideProps: {
        section: 'Performance',
        title: 'Quickest Acceleration',
        text:
          'Model S sets an industry standard for performance and safety. Tesla’s all-electric powertrain delivers unparalleled performance in all weather conditions – with Dual Motor All-Wheel Drive, adaptive air suspension and ludicrous acceleration.'
      }
    },
    rangeProps: {
      /* propiedades de range section */
      videoHero: rangeVideoHero,
      verticalAsideProps: {
        section: 'Range',
        title: 'Go Anywhere',
        text:
          'Model S can get you anywhere you want to go—with industry-leading range and convenient charging options, all over the world.'
      },
      specsProps: {
        invertColor: true,
        speedometerOnFirstCell: false,
        button: false,
        speedometer: false,
        leftTitle: '391 mi',
        leftText:
          'Go anywhere with up to 391 miles of range on a single charge',
        midTitle: '15 min',
        midText:
          'Recharge up to 136 miles in 15 minutes at any Supercharger location',
        rightTitle: '16,000+',
        rightText:
          'Superchargers placed along well-traveled routes around the world'
      }
    },
    interiorProps: {
      /* propiedades de interior section */
      heroImg: interiorHeroImg,
      heroVideo: null,
      verticalSpecsProps: {
        invertColor: true,
        topTitle: '17inch',
        topText:
          'An expansive touchscreen display designed to improve over time',
        midTitle: <WifiIcon />,
        midText:
          'Over-the-air software updates introduce new features, functionality and performance',
        bottomTitle: '28cu ft',
        bottomText:
          'Best in class storage, with more cargo room than most SUVs',
        position: 'right'
      },
      horizontalAsideProps: {
        section: 'Interior',
        title: 'Built Around the Driver',
        text:
          'Model S is built with best in class storage, seating for up to five adults and an expansive 17-inch touchscreen. Advanced noise engineering creates sound dynamics comparable to a recording studio, while the standard Glass Roof provides a spacious interior experience for every passenger.'
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
        leftTitle: (
          <Icon text={'Signature Colors'}>
            <SigColors />
          </Icon>
        ),
        leftText: 'Customize Model S with signature, multi-layered paint',
        midTitle: '0.23c',
        midText:
          'The most aerodynamic car in its class with the lowest drag coefficient on earth',
        rightTitle: (
          <Icon text={'Roof Rack Compatible'}>
            <RoofCarIcon />
          </Icon>
        ),
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
      title: 'Model S',
      leftList: [
        {
          title: 'Battery',
          text: 'Long Range'
        },
        {
          title: 'Acceleration',
          text: '2.4 seconds 0-60 mph'
        },
        {
          title: 'Range',
          text: '348 miles (EPA est.)'
        },
        {
          title: 'Drive',
          text: 'All-Wheel Drive'
        },
        {
          title: 'Seating',
          text: '5 Adults'
        },
        {
          title: 'Wheels',
          text: '19” or 21”'
        }
      ],
      rightList: [
        {
          title: 'Weight',
          text: '4,941 lbs'
        },
        {
          title: 'Cargo',
          text: '28 cu ft'
        },
        {
          title: 'Displays',
          text: 'Driver Display + 17" Touchscreen'
        },
        {
          title: 'Supercharging Max/ Payment Type',
          text: '200 kW max FreeSupercharging'
        },
        {
          title: 'Onboard Charger Max',
          text: '11.5 kW max (48A)'
        },
        {
          title: 'Warranty',
          text: 'Basic Vehicle - 4 years or 50,000 miles,whichever comes first'
        }
      ]
    },
    orderProps: {
      /* propiedades de order section */
      title: 'Model S',
      heroImg: orderHeroImg
    }
  };

  return (
    <div>
      <WithModel {...pageProps} />
    </div>
  );
};

export default ModelS;
