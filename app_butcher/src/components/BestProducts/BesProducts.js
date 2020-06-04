import React from 'react';
import Card from './Card/Card';
import Button  from '../UI/Button/Button';
const BesProducts = (props) => {

    let butcherBest = props.data.map(item => (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='list-item' key='listitem'>
                <Card {...item} />
            </div>
            
        </div>
       
    )) 
    return (
        <React.Fragment>
            {butcherBest}
            
        </React.Fragment>
    );
};

export default BesProducts;