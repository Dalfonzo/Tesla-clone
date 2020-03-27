import React from 'react';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import classes from './header.module.scss';

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo} />
      <ul className={classes.models}>
        <li>MODEL S</li>
        <li>MODEL 3</li>
        <li>MODEL X</li>
        <li>MODEL Y</li>
        <li>SOLAR ROOF</li>
        <li>SOLAR PANELS</li>
      </ul>
      <ul className={classes.menu}>
        <li>SHOP</li>
        <li>SIGN IN</li>
        <li>
          <Icon icon={faBars} />
        </li>
      </ul>
    </div>
  );
};

export default Header;
