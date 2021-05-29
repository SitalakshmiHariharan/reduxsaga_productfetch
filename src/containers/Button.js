import React from 'react';
import {connect} from 'react-redux';
import {getProduct} from '../actions';

let Button = ({getProduct}) => (   
    <div>
        <br/>
        <center>
            <button onClick={getProduct} className="btn btn-success">Click to see the Products</button>
        </center>
    </div>   
);

const mapDispatchToProps = {
    getProduct: getProduct,
};

Button = connect(null,mapDispatchToProps)(Button);

export default Button;

