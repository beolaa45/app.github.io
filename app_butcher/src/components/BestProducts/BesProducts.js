import React from 'react';
import Card from './Card/Card';
import Button  from '../UI/Button/Button';
const besProducts = (props) => {
    
    let butcherBest = props.data.map(item => (
        <div className='col-lg-4 col-md-6 col-sm-12' key={item.key}>
            <div className='list-item'  >
                <Card {...item} keyCard={props.key} />
            </div>
            
        </div>
       
    )) 
    return (
        <React.Fragment>
            {butcherBest}
            
        </React.Fragment>
    );
};

export default besProducts;

