import React from 'react';
import Navigation from './Navigation/Navigation';
import './Navigations.scss'
const navigations = () => {
  return (
    <ul className='Navigation'>
      <Navigation link='/' active={true} item='Home'/>
      <Navigation link='/' active={false} item='Shop'/>
      <Navigation link='/'  item='Product'/>
      <Navigation link='/'  item='Blog'/>
      <Navigation link='/'  item='Our store'/>
    </ul>
  );
};

export default navigations;