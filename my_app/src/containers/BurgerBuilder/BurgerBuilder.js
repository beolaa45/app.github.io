import React, { Component } from 'react';
import  { connect } from 'react-redux';
import * as burgerBuidAction from '../../Store/actions/index';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OderSummary'
import axios from '../../axios-oriders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { Redirect } from 'react-router-dom'


class BurgerBuider extends Component {

    state = {
     
   
        purchasing: false,
        loading: false,
   
    }

    componentDidMount() {
        this.props.onInitIngredients()
       
    };
    
    updatePurchaseState (ingredient) {
        
     
        const sum = Object.keys(ingredient)
        .map(igKey => {
            return ingredient[igKey]
        })
        .reduce((sum, e) => {
           return sum + e 
        }, 0);
       return sum > 0

    }

    purchaseHandler = () => {
        if(this.props.isAuthenticated){
            this.setState({purchasing: !this.state.purchasing})
        }else {
            this.props.onSetAuthRedirectPath('/checkout')
           this.props.history.push('/auth')
        }
       
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
    
        this.props.onPurchase();
        this.props.history.push('/checkout')

    };

  
    render() {
        const disabledInfo = {
            ...this.props.ings
        };
       
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        };
        let orderSummary = null;
  

        let burger = this.props.error ?  "error" :<Spinner />;
        if(this.props.ings){
            burger = (
                <Aux>
                      <Burger ingredients={this.props.ings}/>
                    <BuildControls 
                    ingredientAdded={this.props.onIngredientAdd}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    price={this.props.price}
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchaseHandler}
                    isAuth={this.props.isAuthenticated}
                    />
                </Aux>
                    );
            orderSummary =   <OrderSummary ingredients={this.props.ings} 
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    price={this.props.price.toFixed(2)}
                    />;
            
        }
 
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                  {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token != null
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdd: (ingName) => dispatch(burgerBuidAction.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuidAction.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(burgerBuidAction.initIngredients()),
        onPurchase: () => dispatch(burgerBuidAction.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(burgerBuidAction.setAuthRedirectPath(path))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuider, axios));