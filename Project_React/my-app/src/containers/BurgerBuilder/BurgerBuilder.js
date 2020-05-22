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

    // addIngredientHandler = (type) => {
        
    //     const oldCount = this.state.ingredients[type];
    //     const updateCount = oldCount + 1;
    //     const updateIngedients = {
    //         ...this.state.ingredients
    //     };
    //     updateIngedients[type] = updateCount;

    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;
    //     this.setState({totalPrice: newPrice, ingredients: updateIngedients});
    //     this.updatePurchaseState(updateIngedients);
    //     setTimeout(()=>{ console.log(this.state.purchaseble) },100)


    // };

    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if(oldCount <= 0){
    //         return;
    //     }
    //     const updateCount = oldCount - 1;
    //     const updateIngedients = {
    //         ...this.state.ingredients
    //     };
    //     updateIngedients[type] = updateCount;

    //     const priceDeduction = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - priceDeduction;
    //     this.setState({totalPrice: newPrice, ingredients: updateIngedients});
    //     this.updatePurchaseState(updateIngedients);
   
    // };

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
        // alert('You continue!')
       
        // const qureyParams = [];
        // for(let i in this.state.ingredients){
        //     qureyParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        // };
        // qureyParams.push('price' + '=' + this.state.totalPrice);
        // const queryString = qureyParams.join('&');
        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: '?' + queryString
        // });
        this.props.onPurchase();
        this.props.history.push('/checkout')
        // console.log('sen')
        // this.setState({loading: true})
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.price
        // }
        // axios.post('/orders.json', order)
        // .then(response =>{
        //     this.setState({loading: false, purchasing: false})
        // })
        // .catch(error => {
        //     this.setState({loading: false,  purchasing: false})
        //     console.log(error)
        // })
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
        // if(this.state.loading){
        //     orderSummary = <Spinner />
        // }
 
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