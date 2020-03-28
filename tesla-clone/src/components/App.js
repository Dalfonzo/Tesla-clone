import React from 'react';
import { Route } from 'react-router-dom';

import Header from './general-layout/header/Header';
import Home from '../pages/home/Home';
import ModelS from '../pages/model-s/ModelS';
import Model3 from '../pages/model-3/Model3';
import ModelX from '../pages/model-x/ModelX';
import ModelY from '../pages/model-y/ModelY';
import SolarRoof from '../pages/solar-roof/SolarRoof';

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/models">
        <ModelS />
      </Route>
      <Route exact path="/model3">
        <Model3 />
      </Route>
      <Route exact path="/modelx">
        <ModelX />
      </Route>
      <Route exact path="/modely">
        <ModelY />
      </Route>
      <Route exact path="/solarroof">
        <SolarRoof />
      </Route>
    </div>
  );
};

export default App;
