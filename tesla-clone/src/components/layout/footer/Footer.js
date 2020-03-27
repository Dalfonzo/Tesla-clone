import React from 'react';
import classes from './footer.module.scss';
const Footer = () => {
  return (
    <ul className={classes.links}>
      <li>Tesla 2020</li>
      <li>Privacy & legal</li>
      <li>contact</li>
      <li>careers</li>
      <li>get newsletter</li>
      <li>forums</li>
      <li>locations</li>
    </ul>
  );
};

export default Footer;
