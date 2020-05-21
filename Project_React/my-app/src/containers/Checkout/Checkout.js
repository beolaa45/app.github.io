import React, { Component } from 'react';
import { Route , Redirect } from 'react-router-dom';
import ContacData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { connect } from 'react-redux';


class Checkout extends Component {
    // state = {
    //     ingredients: null,
    //     totalPrice: 0
    // }

    // componentWillMount(){
    //     console.log(this.props)
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     console.log(query.entries());
    //     for(let param of query.entries()){
    //         //['salad', '1']
    //         if(param[0] === 'price'){
    //             price = param[1]
    //         }else{
    //             ingredients[param[0]] = +param[1];
    //         }
            
    //     };
    //     this.setState({ingredients: ingredients, totalPrice: price})
        
    // }
    // componentWillMount() {
    //     this.props.onPurchase()
    // }

    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinueHandler = () => {
        this.props.history.push('/checkout/contact-data');
    }

    render(){
        let summary = <Redirect to='/'/>
        if(this.props.ings){
            let checkPurchase = this.props.purchase ? <Redirect to='/'/> : null;
            summary = (
                <div>
                    {checkPurchase}
                <CheckoutSummary ingredients={this.props.ings}
                checkoutCancel={this.checkoutCancelHandler}
                checkoutContinue={this.checkoutContinueHandler}/>
                <Route path={this.props.match.path + '/contact-data'} 
                    component={ContacData}/>
            </div>
            )
        }
        return summary
    }
}

const mapStatetoProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchase: state.order.purchased
        
    }
}

// const mapDispatchProps = dispatch => {
//     return {
//         onPurchase: () => dispatch(action.purchaseInit())
//     }
// }
export default connect(mapStatetoProps)(Checkout);