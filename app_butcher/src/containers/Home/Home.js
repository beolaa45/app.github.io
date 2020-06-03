import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';



class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <section><Banner /></section>
                <section>About</section>
            </React.Fragment>
        );
    }
}

export default Home;