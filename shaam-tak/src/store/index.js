import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import noteReducer from './features/noteSlice';
import newsReducer from './features/newsSlice';


import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    user: userReducer,
    note: noteReducer,
    news:newsReducer,
  },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})