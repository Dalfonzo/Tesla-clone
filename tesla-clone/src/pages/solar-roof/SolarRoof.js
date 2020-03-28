import React from 'react';

import Desing from '../../components/solar-page-sections/left-aside/LeftAsideSection';
import Installation from '../../components/solar-page-sections/left-aside/LeftAsideSection';
import Experience from '../../components/solar-page-sections/right-aside/RighAsideSection';
import Cost from '../../components/solar-page-sections/down-aside/DownAsideSection';
import Specs from '../../components/solar-page-sections/specs-section/SpecsSection';
import Order from '../../components/solar-page-sections/order-section/OrderSection';

import designHeroImg from '../../assets/images/model-s/safety-model-s-hero.png';
import installationHeroImg from '../../assets/images/model-s/safety-model-s-hero.png';
import rangeVideoHero from '../../assets/video/model-s/range.mp4';
import performanceHeroImg from '../../assets/images/model-s/model-s-performance.jpg';
import specsHeroImg from '../../assets/images/model-s/MS-specs-desktop.jpg';

const SolarRoof = () => {
  const designProps = {
    /* propiedades de safety section */
    heroImg: designHeroImg,
    verticalAsideProps: {
      section: 'Safety',
      title: 'High Impact Protection',
      text:
        'Model S is built from the ground up as an electric vehicle, with high-strength architecture and a floor-mounted battery pack allowing for incredible impact protection.'
    }
  };
  const installationProps = {
    /* propiedades de safety section */
    heroImg: installationHeroImg,
    verticalAsideProps: {
      section: 'Safety',
      title: 'High Impact Protection',
      text:
        'Model S is built from the ground up as an electric vehicle, with high-strength architecture and a floor-mounted battery pack allowing for incredible impact protection.'
    }
  };
  const experienceProps = {
    /* propiedades de range section */
    videoHero: rangeVideoHero, //PENDIENTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE<--------------------------
    verticalAsideProps: {
      section: 'Range',
      title: 'Go Anywhere',
      text:
        'Model S can get you anywhere you want to go—with industry-leading range and convenient charging options, all over the world.'
    }
  };
  const costProps = {
    /* propiedades de performance section */
    heroImg: performanceHeroImg,
    horizontalAsideProps: {
      section: 'Performance',
      title: 'Quickest Acceleration',
      text:
        'Model S sets an industry standard for performance and safety. Tesla’s all-electric powertrain delivers unparalleled performance in all weather conditions – with Dual Motor All-Wheel Drive, adaptive air suspension and ludicrous acceleration.'
    }
  };
  const specsProps = {
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
  };
  const orderProps = {
    /* propiedades de order section */
    title: 'Model S'
  };

  return (
    <div>
      <Desing {...designProps} />
      <Installation {...installationProps} />
      <Experience {...experienceProps} />
      <Cost {...costProps} />
      <Specs {...specsProps} />
      <Order {...orderProps} />
    </div>
  );
};

export default SolarRoof;
