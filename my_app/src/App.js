import React, { Component, lazy, Suspense } from 'react';

import './App.css';
import Orders from './containers/Orders/Orders';
import { Switch, Route, withRouter, Redirect} from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Layout from './components/Layout/Layout'
import BurgerBuider from './containers/BurgerBuilder/BurgerBuilder';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/logout';
import { connect,  } from 'react-redux';
// import asyncComponent from './hoc/asyncComponent/asyncComponent';
import * as action from './Store/actions/index';

// const asyncCheckout = asyncComponent(() => {
//   return import('./containers/Checkout/Checkout')
// });

// const asyncAuth = asyncComponent(() => {
//   return import('./containers/Auth/Auth')
// });
const asyncCheckout = lazy(() => import('./containers/Checkout/Checkout'));
const asyncAuth = lazy(() => import('./containers/Auth/Auth'))
class  App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  render(){
      let routes = (
        <Suspense fallback={<div>Loading...</div>}>
           <Switch>
        <Route path='/auth' component={asyncAuth} />
      
        <Route path='/' exact component={BurgerBuider} />
        <Redirect to='/' />
      </Switch>
        </Suspense>
       
      )
      if(this.props.isAuthenticated){
        routes = (
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
          <Route path='/checkout' component={asyncCheckout} />
          <Route path='/order' component={Orders} />
          <Route path='/auth' component={asyncAuth} />
          <Route path='/logout' component={Logout} />
          <Route path='/' exact component={BurgerBuider} />
          <Redirect to='/' />
        </Switch>
          </Suspense>
          
        )
      }
    return (
      <div>
        <Layout>
         {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(action.authCheckState())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

