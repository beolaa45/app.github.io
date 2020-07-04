import React from 'react';
import { Button } from 'reactstrap';
import NavigationItems from './NavigationItems';
import HeaderMain from '../Header/HeaderMain';
const Toobar = (props) => {
    return (
        <header>
            <div>
                top-main
            </div>
            
                <HeaderMain isAuth={props.isAuth} />
            
            <div>
                <NavigationItems />
            </div>
        </header>
    );
};

export default Toobar;