import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// products에 대한 비동기 처리
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (searchQuery) => {
    const response = await fetch(`https://my-json-server.typicode.com/HyeRinGrace/noona_03/products?q=${searchQuery}`);
    const data = await response.json();
    return data;
  }
);

// productDetail에 대한 비동기 처리
export const fetchProductDetail = createAsyncThunk(
  'detailPage/fetchProductDetail',
  async (id) => {
    const response = await fetch(`https://my-json-server.typicode.com/HyeRinGrace/noona_03/products/${id}`);
    const data = await response.json();
    return data;
  }
);

// 두 slice를 하나로 합치기
const combinedSlice = createSlice({
  name: 'combinedSlice',
  initialState: {
    productList: [],
    productDetailItem: {},
    productStatus: 'idle',
    detailStatus: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // products에 대한 비동기 처리 extraReducers
      .addCase(fetchProducts.pending, (state) => {
        state.productStatus = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productStatus = 'succeeded';
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productStatus = 'failed';
        state.error = action.error.message;
      })
      // productDetail에 대한 비동기 처리 extraReducers
      .addCase(fetchProductDetail.pending, (state) => {
        state.detailStatus = 'loading';
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.detailStatus = 'succeeded';
        state.productDetailItem = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.detailStatus = 'failed';
        state.error = action.error.message;
      });
  }
});

export default combinedSlice.reducer;
