import React, { Component } from 'react';
import { connect } from 'react-redux'

class Shop extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div>
                Shop
            </div>
        );
    }
}
const mapDispaccthToProps = dispatch => {
    // product: () => dispatch()
}
export default connect(null, mapDispaccthToProps)(Shop);