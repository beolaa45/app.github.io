import React from 'react';
import Aux from '../../../hoc/Aux'
const orderSummary = (props) => {
    const ingredienSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredients[igKey]}</span>
            </li>
        )
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A dleicious burger with the following ingredients</p>
            <ul>
                {ingredienSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )
}

export default orderSummary;