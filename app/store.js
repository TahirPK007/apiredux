import {configureStore} from '@reduxjs/toolkit';
import todoSlice from '../src/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
