const reducer = (state={}, action) => {
    console.log("Inside reducer");
    switch(action.type){
        case 'GET_PRODUCT':
            return {...state, loading:true};
        case 'PRODUCT_RECEIVED':
            return{...state, product:action.json, loading:false}
        default:
            return state
    }
};

export default reducer;