import React from 'react';
import Button from '../containers/Button';
import Loading from '../containers/Loading';
import ProductItem from '../containers/ProductItem';


let App = () => (
    <div>
        <Button/>
        <Loading/>
        <br/>
        <hr/>
        <br/>
        <ProductItem/>
    </div>
);

export default App;