import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuider extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseble: false,
        purchasing: false
    }
    
    updatePurchaseState (ingredient) {
        
     
        const sum = Object.keys(ingredient)
        .map(igKey => {
            return ingredient[igKey]
        })
        .reduce((sum, e) => {
           return sum + e 
        }, 0);
        this.setState({purchaseble: sum > 0})

    }

    addIngredientHandler = (type) => {
        
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngedients = {
            ...this.state.ingredients
        };
        updateIngedients[type] = updateCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updateIngedients});
        this.updatePurchaseState(updateIngedients);
        setTimeout(()=>{ console.log(this.state.purchaseble) },100)


    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updateCount = oldCount - 1;
        const updateIngedients = {
            ...this.state.ingredients
        };
        updateIngedients[type] = updateCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updateIngedients});
        this.updatePurchaseState(updateIngedients);
   
    };

    purchaseHandler = () => {
        this.setState({purchasing: !this.state.purchasing})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        alert('You continue!')
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
       
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
 
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} 
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    price={this.state.totalPrice.toFixed(2)}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchaseble}
                    ordered={this.purchaseHandler}
                    />
                    
            </Aux>
        );
    }
}

export default BurgerBuider;