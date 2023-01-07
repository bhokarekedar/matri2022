import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice';
import getAllUsersReducer from '../features/getAllUsers/getAllUsersSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        getAllUsers: getAllUsersReducer,
        authUser: authReducer
    },
  })
  
