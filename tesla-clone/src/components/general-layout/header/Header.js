import React from 'react';
import { Link } from 'react-router-dom';

import classes from './header.module.scss';

const Header = () => {
  const links = [
    { title: 'MODEL S', path: '/models' },
    { title: 'MODEL 3', path: '/model3' },
    { title: 'MODEL X', path: '/modelx' },
    { title: 'MODEL Y', path: '/modely' },
    { title: 'SOLAR ROOF', path: '/solarroof' }
  ];

  return (
    <div className={classes.container}>
      <Link to="/" className={classes.logo} />
      <ul className={classes.models}>
        {links.map(link => (
          <Link to={link.path} className={classes.links} key={link.path}>
            <li>{link.title}</li>
          </Link>
        ))}
      </ul>
      <ul className={classes.menu}>
        <Link to="/signin" className={classes.links}>
          <li>SIGN IN</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
