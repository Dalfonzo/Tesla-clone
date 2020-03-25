import React, { useState } from 'react';

import heroImg from '../../assets/images/model-s/MS-specs-desktop.jpg';
import classes from './specs.module.scss';

const Specs = () => {
  const [active, setActive] = useState('PERFORMANCE'); //pendiente

  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <img src={heroImg} alt="" />
      </div>
      <div className={classes.rightSide}>
        <p>
          <span>Model S</span> Specs
        </p>
        <div className={classes.buttonsContainer}>
          <button onClick={() => setActive('PERFORMANCE')}>performance</button>
          <button onClick={() => setActive('LRPLUS')}>long range plus</button>
        </div>
        <div className={classes.listWrapper}>
          <ul className={classes.leftList}>
            <li>
              <span>Battery</span>
              Long Range
            </li>
            <li>
              <span>Acceleration</span>
              2.4 seconds 0-60 mph
            </li>
            <li>
              <span>Range</span> 348 miles (EPA est.)
            </li>
            <li>
              <span>Drive</span> All-Wheel Drive
            </li>
            <li>
              <span>Seating</span> 5 Adults
            </li>
            <li>
              <span>Wheels</span> 19” or 21”
            </li>
          </ul>
          <ul className={classes.rightList}>
            <li>
              <span>Weight</span> 4,941 lbs
            </li>
            <li>
              <span>Cargo</span> 28 cu ft
            </li>
            <li>
              <span>Displays</span> Driver Display + 17" Touchscreen
            </li>
            <li>
              <span>Supercharging Max/ Payment Type</span> 200 kW max; Free
              Supercharging
            </li>
            <li>
              <span>Onboard Charger Max</span> 11.5 kW max (48A)
            </li>
            <li>
              <span>Warranty</span> Basic Vehicle - 4 years or 50,000 miles,
              whichever comes first
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Specs;
