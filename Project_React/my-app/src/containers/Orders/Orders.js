import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-oriders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as action from '../../Store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner'
class Orders extends Component {

    // state = {
    //     oriders: [],
    //     loading: false
    // }
  
    componentDidMount (){
        this.props.onFetchOrders();
        // this.setState({loading: true})
        // axios.get('/orders.json')
        // .then(res => {
        //     console.log(res.data);
            
        //     const fetcheOrders = [];
        //     for(let key in res.data){
        //         fetcheOrders.push({
        //             ...res.data[key],
        //             id: key
        //         })
        //     };
        //     this.setState({oriders: fetcheOrders, loading: false})
        // })
        // .catch(error => {
        //     this.setState({loading: false})
        // });
        // setTimeout(() => {console.log(this.state)}, 1000)
    }
    render(){
        console.log(this.props.or)
        let orders = this.props.loading ?  <Spinner /> : null;
        if(this.props.or){
            orders = (
                <div>
                {this.props.or.map(order => (
                    <Order  key={order.id} ingredients={order.ingredients} price={order.price}/>
                ))}
            </div>
            )
        }
        return orders
    }
}
const mapStateToProps = state => {
    return {
       
        loading: state.order.loading,
        or: state.order.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(action.fetchOrders()),
        onFetchOrdersStart: () => dispatch(action.fetchOrderStart())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders, axios));