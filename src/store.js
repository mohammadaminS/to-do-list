import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { counterReducer, todoReducer, authReducer } from './reducers';

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;