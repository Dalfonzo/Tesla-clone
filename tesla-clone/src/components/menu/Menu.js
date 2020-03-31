import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './menu.css';

const test = ({ isOpen }) => {
  return (
    <Menu right isOpen={isOpen}>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/models">
        Model s
      </a>
      <a id="contact" className="menu-item" href="/model3">
        Model 3
      </a>
      <a id="contact" className="menu-item" href="/modelx">
        Model x
      </a>
      <a id="contact" className="menu-item" href="/modely">
        Model y
      </a>
      <a id="contact" className="menu-item" href="/solarroof">
        solar roof
      </a>
      <a id="contact" className="menu-item" href="/signin">
        sign in
      </a>
    </Menu>
  );
};

export default test;
