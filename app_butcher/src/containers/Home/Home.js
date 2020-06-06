import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import HeadingSecondary from '../../components/UI/HeadingSecondary/HeadingSecondary';
import Button from '../../components/UI/Button/Button'

import './Home.scss'
import BesProducts from '../../components/BestProducts/BesProducts';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

class Home extends Component {
    state = {
        HeadingSecondary: {
            title: 'Our Best Products',
            des: 'We call it ultimate because we simply believe every website We call it ultimate because we simply believe every website needs to be well presented at the'
        },
        BesProducts: [
            {
                key: 1,
                img: 'http://demoapus-wp.com/butcher/butcher-food/wp-content/uploads/2016/10/8-400x400.jpg',
                title: 'Ground Lamb',
                des: 'Lorem ipsum dolor sit',
                dola: 22
            },
            {
                key: 2,
                img: 'http://demoapus-wp.com/butcher/butcher-food/wp-content/uploads/2016/10/8-400x400.jpg',
                title: 'Ground Lamb',
                des: 'Lorem ipsum dolor sit',
                dola: 22
            },
            {
                key: 3,
                img: 'http://demoapus-wp.com/butcher/butcher-food/wp-content/uploads/2016/10/8-400x400.jpg',
                title: 'Ground Lamb',
                des: 'Lorem ipsum dolor sit',
                dola: 22
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                
                <main>
                <section className='Banner'><Banner /></section>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <HeadingSecondary title={this.state.HeadingSecondary.title} des={this.state.HeadingSecondary.des} />
                            </div>
                        </div>
                        <div className='row'>
                            
                                <BesProducts data={this.state.BesProducts} />
                                
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div>
                                <Button view='view'>View all</Button>
                                </div>
                           
                            </div>
                        </div>
                    </div>
                </section>
                </main>
            </React.Fragment>
        );
    }
}

export default Home;