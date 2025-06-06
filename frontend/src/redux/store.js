import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice';
import emailReducer from './features/email/emailSlice';
import filteredUserReducer from './features/search/searchSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    email: emailReducer,
    filteredUser: filteredUserReducer
  }
});