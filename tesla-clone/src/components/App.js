import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header/Header';
import Home from '../pages/home/Home';
import ModelS from '../pages/model-s/ModelS';

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
    </div>
  );
};

export default App;
