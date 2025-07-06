import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {},
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    loginStart: (state) => {
      return { ...state, isLoading: true };
    },
    loginSuccess: (state, { payload }) => {
      return {
        ...state,
        userData: { ...payload },
        isLoading: false,
      };
    },
    loginError: (state, { payload }) => {
      return {
        ...state,
        userData: {},
        error: payload,
        isLoading: false,
      };
    },
    logoff: (state) => {
      return {
        ...state,
        userData: {},
        isLoading: false,
        error: null,
      };
    },
  },
});

export const { loginStart, loginSuccess, loginError, logoff } = authSlice.actions;
export default authSlice.reducer;
