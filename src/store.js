import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { counterReducer, todoReducer } from './reducers';

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;