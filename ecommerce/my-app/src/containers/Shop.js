import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from '../Store/actions/index';
const Shop = (props) => {
    
    useEffect(() => {
        props.product()
        
    }, [])
    
    
        return (
            <div>
                Shop
            </div>
        );
    
}
const mapDispaccthToProps = dispatch => {
    return {
        product: () => dispatch(actions.productStart())
    } 
}
export default connect(null, mapDispaccthToProps)(Shop);