import React from 'react';

import './App.css';
import Orders from './containers/Orders/Orders';
import { Switch, Route } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Layout from './components/Layout/Layout'
import BurgerBuider from './containers/BurgerBuilder/BurgerBuilder';
import Auth from './containers/Auth/Auth';
function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/order' component={Orders} />
          <Route path='/auth' component={Auth} />
          <Route path='/' exact component={BurgerBuider} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
