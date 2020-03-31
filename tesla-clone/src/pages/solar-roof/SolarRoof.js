import React from 'react';
import { SectionsContainer, Section } from 'react-fullpage';

import Header from '../../components/general-layout/header/Header';
import Hero from '../../components/solar-page-sections/hero-section/HeroSection';
import Desing from '../../components/solar-page-sections/left-aside/LeftAsideSection';
import Cost from '../../components/solar-page-sections/down-aside/DownAsideSection';

import Installation from '../../components/solar-page-sections/left-aside/LeftAsideSection';
import Experience from '../../components/solar-page-sections/right-aside/RighAsideSection';
import Specs from '../../components/solar-page-sections/specs-section/SpecsSection';
import Order from '../../components/solar-page-sections/order-section/OrderSection';

import heroHeroImg from '../../assets/images/solar-roof/Solar_Roof_Hero_2880x1800.jpg';
import designHeroImg from '../../assets/images/solar-roof/V3_Roof-Front_Exploded03.png';
import costHeroImg from '../../assets/images/solar-roof/D_coe_hero-2880x1800.jpg';
import installationHeroImg from '../../assets/images/solar-roof/D_install_hero-2090x1800.jpg';
import experienceHeroImg from '../../assets/images/solar-roof/D_app_hero-2090x1800.jpg';
import specsHeroImg from '../../assets/images/solar-roof/PanelMeasure_desktop2x.png';
/* ICONS */
import { ReactComponent as Solar } from '../../assets/svg/icon.solar_.svg';

const SolarRoof = () => {
  const heroProps = {
    /* propiedades de model section */
    title: 'Tesla',
    subtitle: 'Solar Roofs',
    heroImg: heroHeroImg,
    specsProps: {
      invertColor: true,
      button: true,
      leftTitle: <Solar />,
      leftText: 'Beautiful Solar No Compromise',
      midTitle: '3X',
      midText: 'Stronger Than Standard Roofing Tiles',
      rightTitle: '24/7',
      rightText: 'Energy Monitoring'
    }
  };
  const designProps = {
    /* propiedades de safety section */
    heroImg: designHeroImg,
    verticalAsideProps: {
      section: 'Design',
      title: 'Function and Form',
      text:
        'Solar Roof replaces your existing roof and brings it to life with beautiful solar tiles that can power your home for decades with the energy you produce.'
    }
  };
  const costProps = {
    /* propiedades de performance section */
    heroImg: costHeroImg,
    horizontalAsideProps: {
      section: 'Cost of Ownership',
      title: 'Best Value',
      text:
        'Solar Roof provides the lowest cost per watt of any national solar panel provider and is comparable in price to a typical roof with solar panels.'
    }
  };
  const installationProps = {
    /* propiedades de safety section */
    heroImg: installationHeroImg,
    verticalAsideProps: {
      section: 'Installation',
      title: 'Peace of Mind',
      text:
        'Order your Solar Roof today and we’ll take care of the rest. We’ll complete a remote home assessment, custom design, permitting and installation so you can start producing clean energy in no time.'
    }
  };
  const experienceProps = {
    /* propiedades de range section */
    heroImg: experienceHeroImg,
    verticalAsideProps: {
      section: 'Experience',
      title: '24/7 Monitoring',
      text:
        'Manage your solar system and home energy consumption anytime from anywhere in the world with your Tesla app. Watch your consumption rise and fall in real time, including historical usage.'
    }
  };

  const specsProps = {
    /* propiedades de specs section */
    heroImg: specsHeroImg,
    title: 'Solar Roof',
    leftList: [
      {
        title: 'Tile Warranty',
        text: '25 years'
      },
      {
        title: 'Power Warranty',
        text: '25 years'
      },
      {
        title: 'Weatherization Warranty',
        text: '25 years'
      },
      {
        title: 'Roof Pitch',
        text: '2:12 to 20:12'
      }
    ],
    rightList: [
      {
        title: 'Hail Rating',
        text: 'Class 3 ANSI FM 4473 (up to 1.75" diameter hail)'
      },
      {
        title: 'Wind Rating',
        text: 'Class F ASTM D3161 (up to 130 mph winds)'
      },
      {
        title: 'Fire Rating',
        text: 'Class A UL 790 (best fire rating)'
      }
    ]
  };
  const orderProps = {
    /* propiedades de order section */
    title: 'Power Your Home'
  };

  const options = {
    anchors: [
      'main',
      'design',
      'cost',
      'installation',
      'experience',
      'specs',
      'orderNow'
    ], // the anchors for each sections
    activeClass: 'active-a', // the class that is appended to the sections links
    arrowNavigation: true, // use arrow keys
    delay: 1000, // the scroll animation speed
    navigation: true, // use dots navigatio
    sectionPaddingTop: '0', // the section top padding
    sectionPaddingBottom: '0', // the section bottom padding
    verticalAlign: true // align the content of each section vertical
  };

  return (
    <div>
      <SectionsContainer {...options}>
        <Header />
        <Section>
          <Hero {...heroProps} />
        </Section>
        <Section>
          <Desing {...designProps} />
        </Section>
        <Section>
          <Cost {...costProps} />
        </Section>
        <Section>
          <Installation {...installationProps} />
        </Section>
        <Section>
          <Experience {...experienceProps} />
        </Section>
        <Section>
          <Specs {...specsProps} />
        </Section>
        <Section>
          <Order {...orderProps} />
        </Section>
      </SectionsContainer>
    </div>
  );
};

export default SolarRoof;
