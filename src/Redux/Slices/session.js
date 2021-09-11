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
    storeSession: (state, action) => {
      Object.keys(action.payload).forEach(key => {
        state[key] = action.payload[key];
      });
    },
    clearSession: state => {
      state = initialState;
    }
  }
});

export const { storeSession, clearSession } = sessionSlice.actions;

export default sessionSlice.reducer;
