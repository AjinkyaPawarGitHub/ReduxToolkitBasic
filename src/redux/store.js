import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../modules/counter/redux/CounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
