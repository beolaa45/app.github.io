import React from 'react';
import PropTypes from 'prop-types';
import SiderDrawer from '../../components/Navigation/SideDarwer/SideDarwer'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
const Layout = props => {
    return (
        <React.Fragment>
            
            <Toolbar />
            <SiderDrawer />
            <main>
                {props.children}
            </main>
        </React.Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.element
};

export default Layout;