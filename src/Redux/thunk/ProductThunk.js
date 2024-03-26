function getProducts(searchQuery) {
    // The `extraArgument` is the third arg for thunk functions
    return async(dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/HyeRinGrace/noona_03/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"PRODUCT_API",payload:{data}})

    }
  }

  export const ProductThunk = {getProducts}