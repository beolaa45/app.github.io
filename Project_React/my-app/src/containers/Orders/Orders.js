import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-oriders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {
        oriders: [],
        loading: false
    }

    componentDidMount (){
        this.setState({loading: true})
        axios.get('/orders.json')
        .then(res => {
            console.log(res.data);
            
            const fetcheOrders = [];
            for(let key in res.data){
                fetcheOrders.push({
                    ...res.data[key],
                    id: key
                })
            };
            this.setState({oriders: fetcheOrders, loading: false})
        })
        .catch(error => {
            this.setState({loading: false})
        });
        setTimeout(() => {console.log(this.state)}, 1000)
    }
    render(){

        return (
            <div>
                {this.state.oriders.map(order => (
                    <Order  key={order.id} ingredients={order.ingredients} price={order.price}/>
                ))}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);