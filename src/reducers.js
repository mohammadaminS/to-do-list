import { combineReducers } from 'redux';

const initialState = {};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  example: exampleReducer,
});