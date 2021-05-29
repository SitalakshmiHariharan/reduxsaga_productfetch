import React from 'react';
import {connect} from 'react-redux';
import img from '../loading.gif';

let Loading =({loading}) => (
loading?
<div style={{textAlign:'center'}}>
    <img src={img} alt="Loading"/>
    <h2> Loading......</h2>
</div>:
null 
);

const mapStateToProps = (state) => ({loading: state.loading})

Loading = connect(mapStateToProps,null)(Loading)

export default Loading;