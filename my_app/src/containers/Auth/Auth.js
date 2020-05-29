import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../Store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import  { Redirect } from 'react-router-dom'
class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: ''
        },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: ''
            }  
        },
        isSigup: true   
}

inputChangeHandler = (e, id) => {
    const update = {...this.state.controls};
    const updateFormElement = {...update[id]};
    updateFormElement.value = e.target.value;
    update[id] = updateFormElement;
    
    this.setState({controls: update})
    setTimeout(() => {
        console.log(this.state.email, this.state.password)
    },100)
};

authHandler = (e) => {
    e.preventDefault();

    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSigup)
}
authSwicth = (e) => {
    e.preventDefault();
    this.setState(prevState => {
        return {isSigup: !prevState.isSigup}
    })
};

componentDidMount(){
    if(!this.props.building && this.props.authRedirectPath !== '/'){
        this.props.onSetAuthRedirectPath()
    }
}

    render () {
        const formElementArray = [];
        for(let key in this.state.controls){
            formElementArray.push(
                {
                    id: key,
                    config: this.state.controls[key]
                }
            )
        };

        let form = (
            <div>
               
                {formElementArray.map(formElement => (
                    <Input key={formElement.id} 
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            change={(event) => this.inputChangeHandler(event, formElement.id)}/>
                ))}
               
            </div>
        );

        if(this.props.loading){
            form = <Spinner />
        }
        let errorMessage = null;
        console.log(this.props.error)
        if(this.props.error){
            errorMessage = (
            <p>{this.props.error.message}</p>
            )
        }

        let authRedirect = null;
        if(this.props.isAuthenticated){
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

       
        return (
           
            <div style={{ width: 500, margin: 'auto' }}>
                 {authRedirect}
                {errorMessage}
                <form  className='Form' onSubmit={this.authHandler}>
              {form}
              <Button btnType='ContactDataButton'>SUBMIT</Button>
                <Button btnType='ContactDataButton' clicked={this.authSwicth}>SWITCH TO {this.state.isSigup ? "SIGNIN" : "SIGNUP"}</Button>
          </form>
            </div>
          
        )
    }
}
const mapStaeToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token != null,
        building: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    }
}
const mapDispacthToProps = (dispacth) => {
    return {
        onAuth: (email, password, isSigup) => dispacth(actions.auth(email, password, isSigup)),
        onSetAuthRedirectPath: () => dispacth(actions.setAuthRedirectPath('/'))
    }
}
export default connect(mapStaeToProps,mapDispacthToProps)(Auth);