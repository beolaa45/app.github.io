import React from 'react';
import Card from './Card/Card';
import Button  from '../UI/Button/Button';
const besProducts = (props) => {
    
    let butcherBest = Object.keys(props.data)
    .map(item => (
        <div className='col-lg-4 col-md-6 col-sm-12' key={props.data[item]}>
            <div className='list-item'  >
                <Card {...props.data[item]} keyCard={props.data.item} />
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

