import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toobar/Toobar';
import './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    // constructor(props){
    //     super(props);

    // }
    state = {
        showSideDrawer: true
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
            <Toolbar clicked={this.SideDrawerOpen}/>
            <SideDrawer open={this.state.showSideDrawer} 
            closed={this.SideDrawerClose}/>
            <main className='Content'>
                {this.props.children}
            </main>
        </Aux>
        )
    }

}

export default Layout;
