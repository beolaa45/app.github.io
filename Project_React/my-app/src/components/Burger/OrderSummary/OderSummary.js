import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
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
            <ul style={{listStyle: 'none'}}>
                {ingredienSummary}
            </ul>
    <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType={'Danger'} clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType={'Success'} clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;