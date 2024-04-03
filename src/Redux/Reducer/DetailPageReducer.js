import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// createAsyncThunk 를 통해 비동기 처리 
export const fetchProductDetail = createAsyncThunk(
  'detailPage/fetchProductDetail',
  async (id) => {
    const response = await fetch(`https://my-json-server.typicode.com/HyeRinGrace/noona_03/products/${id}`);
    const data = await response.json();
    return data;
  }
);

// createSlice로 리듀서 만들어주기
const detailPageSlice = createSlice({
  name: 'detailPage',
  initialState: {
    productDetailItem: {},
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.productDetailItem = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default detailPageSlice.reducer;
