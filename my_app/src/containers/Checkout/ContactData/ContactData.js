import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-oriders';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as action from '../../../Store/actions/index'; 
class ContactData extends Component {
    state = {
        orderFrom: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street:  {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode:  {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: ''
            },
            country:  {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email:  {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            deliveryMethod:  {
                elementType: 'select',
                elementConfig: {
                    option:[{value: 'fastest', displayValue: 'Fastest'},
                             {value: 'chepeas', displayValue: 'Chepeas'}
                        ]
                },
                value: 'fastest'
            }
        }
    }
    componentDidMount() {
        console.log(this.props)
    }
    orderHandler = (e) => {
        e.preventDefault();
        
        // this.setState({loading: true})

        const formData = {};
        for(let formElement in this.state.orderFrom){
            formData[formElement] = this.state.orderFrom[formElement].value
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
            userId: this.props.userId
        }

        this.props.onOrderBurger(order, this.props.token)
        // this.props.history.push('/');
        // axios.post('/orders.json', order)
        // .then(response =>{
        //     this.setState({loading: false});
        //     this.props.history.push('/');
        //     console.log(this.props)
            
        // })
        // .catch(error => {
        //     this.setState({loading: false})
        //     console.log(error)
        // })
    }

   
    inputChangeHandler = (e, id) => {
        const update = {...this.state.orderFrom};
        const updateFormElement = {...update[id]};
        updateFormElement.value = e.target.value;
        update[id] = updateFormElement;
        this.setState({orderFrom: update})
    }
    render() {
        const formElementArray = [];
        for(let key in this.state.orderFrom){
            formElementArray.push(
                {
                    id: key,
                    config: this.state.orderFrom[key]
                }
            )
        };



        let form = (
            <form className='Form' onSubmit={this.orderHandler}>
               
                {formElementArray.map(formElement => (
                    <Input key={formElement.id} 
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            change={(event) => this.inputChangeHandler(event, formElement.id)}/>
                ))}
                <Button btnType='ContactDataButton'>ORDER</Button>
            </form>
        )

        if(this.props.loading){
            form = <Spinner />
        }
        return (
            <div className='ContactData'>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}
const mapStatetoProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
        
    }
}

const mapDispatchProps = dispatch => {
    return {
        onOrderBurger: (orderData, token )=> dispatch(action.purchaseBurgerStart(orderData, token))
    }
}

export default connect(mapStatetoProps, mapDispatchProps)(withErrorHandler(ContactData, axios));