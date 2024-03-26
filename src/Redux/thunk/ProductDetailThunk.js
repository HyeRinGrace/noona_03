function getID(id){
    return async(dispatch,getState)=>{
        let url = `https://my-json-server.typicode.com/HyeRinGrace/noona_03/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"GET_PRODUCT_DETAIL", payload:{data}})
    }
}

export const ProductDetailThunk = {getID}