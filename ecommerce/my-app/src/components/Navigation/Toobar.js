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
            <div>
                <HeaderMain isAuth={props.isAuth} />
            </div>
            <div>
                <NavigationItems />
            </div>
        </header>
    );
};

export default Toobar;