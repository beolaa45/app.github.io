import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SiderDrawer from '../../components/Navigation/SideDarwer/SideDarwer'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const Layout = props => {
    const [sideDrawer, setSideDrawer] = useState(true);

    const sideDrawerClose = () => {
        setSideDrawer(false)
    }

    const sideDrawerOpen = () => {
        setSideDrawer(true)
    }
    return (
        <React.Fragment>
           
            <Toolbar open={sideDrawerOpen}/>
            <SiderDrawer open={sideDrawer}  close={sideDrawerClose}/>
            <main>
                {props.children}
            </main>
        </React.Fragment>
    );
};



export default Layout;