import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import HeadingSecondary from '../../components/UI/HeadingSecondary/HeadingSecondary';
import Img from '../../asset/img/list-card-1.jpg'

import './Home.scss'
import BesProducts from '../../components/BestProducts/BesProducts';

class Home extends Component {
    state = {
        HeadingSecondary: {
            title: 'Our Best Products',
            des: 'We call it ultimate because we simply believe every website We call it ultimate because we simply believe every website needs to be well presented at the'
        },
        BesProducts: [
            {
                key: 1,
                img: Img,
                title: 'Ground Lamb',
                des: 'Lorem ipsum dolor sit',
                dola: 22
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className='Banner'><Banner /></section>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <HeadingSecondary title={this.state.HeadingSecondary.title} des={this.state.HeadingSecondary.des} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <BesProducts img={this.state.BesProducts} />
                            </div>
                        </div>
                    </div>
                   
                
                </section>
            </React.Fragment>
        );
    }
}

export default Home;