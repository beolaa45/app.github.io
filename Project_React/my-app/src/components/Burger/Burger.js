import React from 'react';

import './Burger.css'
import BurgerIngredient from './Bergeringredient/Bergeringredient';


const burger = (props) => {
    let transformed = Object.keys(props.ingredients)
    .map(igKey => {
       
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        })
    }).reduce((arr, el) => {
        
        return arr.concat(el)
    }, []);
    if(transformed.length === 0){
        transformed = <p>Please start adding ingredients</p>
    }
    return  (
        <div className='Burger'>
            <BurgerIngredient type='bread-top' />
           {transformed}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default burger