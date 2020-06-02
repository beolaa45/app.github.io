import React from 'react';
import PropTypes from 'prop-types';

const Layout = props => {
    return (
        <React.Fragment>
            <header>Toolbar, Siderbar, Backdrop</header>
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