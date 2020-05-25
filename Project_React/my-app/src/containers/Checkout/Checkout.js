import React, { Component } from 'react';
import { Route , Redirect } from 'react-router-dom';
import ContacData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { connect } from 'react-redux';


class Checkout extends Component {
   

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