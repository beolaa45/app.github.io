import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toobar/Toobar';
import './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux'

class Layout extends Component {
    // constructor(props){
    //     super(props);

    // }
    state = {
        showSideDrawer: false
    }

    SideDrawerClose = () => {
        this.setState({showSideDrawer: false})
    }

    SideDrawerOpen = () => {
        this.setState({showSideDrawer: true})
    }
    render() {
        return(
            <Aux>
            <Toolbar isAuth={this.props.token} clicked={this.SideDrawerOpen}/>
            <SideDrawer isAuth={this.props.token} open={this.state.showSideDrawer} 
            closed={this.SideDrawerClose}/>
            <main className='Content'>
                {this.props.children}
            </main>
        </Aux>
        )
    }

}

const mapStateToProps = state => {
    return {
        token: state.auth.token != null
    }
}
export default connect(mapStateToProps)(Layout);
