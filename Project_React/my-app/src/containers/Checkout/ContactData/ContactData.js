import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css'
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        console.log(this.props.price);
        // this.setState({loading: true})
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.price
        // }
        // axios.post('/orders.json', order)
        // .then(response =>{
        //     this.setState({loading: false})
        // })
        // .catch(error => {
        //     this.setState({loading: false})
        //     console.log(error)
        // })
    }

    render() {
        return (
            <div className='ContactData'>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input type='text' name='name' placeholder='Your Name'/>
                    <input type='text' name='email' placeholder='Your Email'/>
                    <input type='text' name='street' placeholder='Street'/>
                    <input type='text' name='postal' placeholder='Postal Code'/>
                    <Button btnType='ContactDataButton' clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData