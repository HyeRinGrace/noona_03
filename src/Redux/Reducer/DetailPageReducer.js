let initialState = {
    id:'',
    ProductDetailItem:[]
}

function DetailPageReducer(state=initialState,action){
    let {type,payload} = action;
    
    switch(type){
        case "GET_PRODUCT_DETAIL":
            return{...state,ProductDetailItem:payload.data}
        default:
            return{...state}
    }
}


export default DetailPageReducer;