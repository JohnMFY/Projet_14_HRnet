import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './slice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});

export default store;