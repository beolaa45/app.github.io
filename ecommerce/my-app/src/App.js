import React from 'react';

import './App.css';
import Layout from './HOC/Layout/Layout';
import {Switch, Redirect, Route, withRouter} from 'react-router-dom'
import Home from './containers/Home';
import Shop from './containers/Shop';
import SigninSignup from './containers/SigninSignup';

function App() {

  let routes = (
    <Switch>
      
      <Route path='/shop' component={Shop}/>
      <Route path='/siginsignup' component={SigninSignup}/>
      <Route path='/' component={Home}/>
    </Switch>
  )
  return (
    <Layout>
     {routes}
     
    </Layout>
  );
}

export default App;
