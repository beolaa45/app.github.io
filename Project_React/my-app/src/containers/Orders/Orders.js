import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-oriders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as action from '../../Store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner'
class Orders extends Component {

    componentDidMount (){
        this.props.onFetchOrders(this.props.token, this.props.userId);
       
    }
    render(){
        console.log(this.props.loading)
        let orders = this.props.loading ? <Spinner /> : null;
        
        if(this.props.or){
            orders = (
                <div>
                {this.props.or.map(order => (
                    <Order  key={order.id} ingredients={order.ingredients} price={order.price}/>
                ))}
            </div>
            )
        }
        console.log(this.props.or)
        return orders
    }
   
}
const mapStateToProps = state => {
    return {
       
        loading: state.order.loading,
        or: state.order.orders,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(action.fetchOrders(token, userId)),
        onFetchOrdersStart: () => dispatch(action.fetchOrderStart())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders, axios));