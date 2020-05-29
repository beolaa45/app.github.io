import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrappedComponent, axios) => {

    
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
            console.log('errorDidmount')
            axios.interceptors.request.use(res => {
                this.setState({error: null});
                return res;
            });
         
            axios.interceptors.response.use(null, error => {
                this.setState({error: error});
              
            });
            return 'hi'
        };
        componentWillUnmount () {
            axios.interceptors.request.eject( this.reqInterceptor );
            axios.interceptors.response.eject( this.resInterceptor );
        }

      errorConfirmeHandler = () => {
          this.setState({error: null})
      }
        render() {
            return (
                <Aux>
                <Modal show={this.state.error} modalClosed={this.errorConfirmeHandler}>
                    {this.state.error ?  this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props} />
            </Aux>
            )
        }
    } 
}

export default withErrorHandler;