import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  logged: false,
  loading: false,
  token: null
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    storeSession: (state, payLoad = initialState) => {
      state = payLoad;
    },
    clearSession: state => {
      state = initialState;
    },
    updateSession: (state, payLoad = {}) => {
      state = { ...state, payLoad };
    }
  }
});

export const { storeSession, clearSession } = sessionSlice.actions;

export default sessionSlice.reducer;
