import React from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


import Layout from './components/Layout/Layout'
import BurgerBuider from './containers/BurgerBuilder/BurgerBuilder';
function App() {
  return (
    <div>
      <Layout>
        <BurgerBuider>
          
        </BurgerBuider>
      </Layout>
    </div>
  );
}

export default App;
