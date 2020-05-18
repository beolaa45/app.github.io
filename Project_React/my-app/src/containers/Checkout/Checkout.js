import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContacData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount(){
        console.log(this.props)
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        console.log(query.entries());
        for(let param of query.entries()){
            //['salad', '1']
            if(param[0] === 'price'){
                price = param[1]
            }else{
                ingredients[param[0]] = +param[1];
            }
            
        };
        this.setState({ingredients: ingredients, totalPrice: price})
        
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinueHandler = () => {
        this.props.history.push('/checkout/contact-data');
    }

    render(){
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                checkoutCancel={this.checkoutCancelHandler}
                checkoutContinue={this.checkoutContinueHandler}/>
                <Route path={this.props.match.path + '/contact-data'} 
                render={(props) => <ContacData ingredients={this.state.ingredients} 
                price={this.state.totalPrice} 
                {...props}/>}/>
            </div>
        )
    }
}

export default Checkout;