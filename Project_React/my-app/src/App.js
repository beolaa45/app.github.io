import React from 'react';

import './App.css';

import { Switch, Route } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Layout from './components/Layout/Layout'
import BurgerBuider from './containers/BurgerBuilder/BurgerBuilder';
function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/' exact component={BurgerBuider} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
