import React from 'react';

import './App.css';
import Layout from './HOC/Layout/Layout';
import {Switch, Redirect, Route, withRouter} from 'react-router-dom'
import Home from './containers/Home';
import Shop from './containers/Shop';
import SigninSignup from './containers/SigninSignup';
import Logout from './containers/Logout'
import NotFound from './components/NotFound';
import User from './containers/Auth/User';
function App() {

  let routes = (
    <Switch>
      <Route path='/shop' component={Shop}/>
      <Route path='/logout' component={Logout}/>
      <Route path='/siginsignup' component={SigninSignup}/>
      <Route path='/user' component={User}/>

      <Route path='/' exact component={Home}/>
      <Route component={NotFound}/>

      
    </Switch>
  )
  return (
    <Layout>
     {routes}
     
    </Layout>
  );
}

export default App;
