import React from 'react';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FiMenu } from '@fortawesome/free-solid-svg-icons';




function App() {
  return (
    <div className="App">
       
       
     <Layout>
       <Home />
     </Layout>
     
    </div>
  );
}

export default App;
