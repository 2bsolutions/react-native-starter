import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './Slices/session';

export const store = configureStore({
  reducer: {
    session: sessionReducer
  }
});
