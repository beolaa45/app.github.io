import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import classlist from './style/page.module.scss'
class Page extends Component {
    render() {
        return (
            <div>         
                <Meta />
                <Header />
                <div className={classlist.Page}>
                {this.props.children}
                </div>              
            </div>
        );
    }
}

export default Page