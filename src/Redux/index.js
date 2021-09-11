import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './Slices/session';

export default configureStore({
  reducer: {
    session: sessionReducer
  }
});
