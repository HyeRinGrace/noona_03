import { createSlice } from '@reduxjs/toolkit';

// 슬라이스 생성
const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    authority: false,
    loginError: false // loginError 상태 추가
  },
  reducers: {
    loginSuccess: (state, action) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
      state.authority = true;
      state.loginError = false; // 로그인 성공 시 loginError를 false로 변경
    },
    loginFailure: (state) => {
      state.loginError = true; // 로그인 실패 시 loginError를 true로 변경
    }
  }
});

// 액션 내보내기
export const { loginSuccess, loginFailure } = loginSlice.actions;

// 리듀서 내보내기
export default loginSlice.reducer;
