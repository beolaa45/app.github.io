import React from 'react';
import './Order.css'
const order = (props) => {

    const ingredients = [];
    for(let ingredient in props.ingredients) {
        if(props.ingredients[ingredient] > 0){
            ingredients.push({
                name: ingredient,
                amount: props.ingredients[ingredient]
            })
        }
       
    };
    const ingredientOutput = ingredients.map(ig => {
    return <span key={ig.name} 
                style={{
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    border: '1px solid #ccc',
                    padding: '5px'
                }}>
                {ig.name} ({ig.amount})</span>
    })
    return (
        <div className='Order'>
        {ingredientOutput}
<p> Price: <strong>USD {parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
    )
   
};

export default order;