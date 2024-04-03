import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// 비동기 처리
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (searchQuery) => {
    const response = await fetch(`https://my-json-server.typicode.com/HyeRinGrace/noona_03/products?q=${searchQuery}`);
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    productList: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default productSlice.reducer;
