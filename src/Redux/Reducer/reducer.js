let initialState = {
    ProductList: [],
}

function reducer(state = initialState,action){
    let {type,payload} = action;
    switch(type){
        case "PRODUCT_API":
            return {...state,ProductList:payload.data}
        default:
            return {...state};
    }
}

export default reducer;