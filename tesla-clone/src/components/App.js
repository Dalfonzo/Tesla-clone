import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header/Header';
import Home from '../pages/home/Home';
import ModelS from '../pages/model-s/ModelS';
import Model3 from '../pages/model-3/Model3';

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
    </div>
  );
};

export default App;
