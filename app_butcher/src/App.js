import React from 'react';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Route, Switch } from 'react-router-dom';
import Cheackout from './containers/Checkout/Checkout'



function App() {
  return (
    <div className="App">
       
       
     <Layout>
       <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/checkout" component={Cheackout}/>
       </Switch>
      
     </Layout>
     
    </div>
  );
}

export default App;
