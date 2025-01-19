// filepath: /f:/Amin/programming/test-1/src/reducers.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

const anotherInitialState = {
  items: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: anotherInitialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((item, index) => index !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export const counterReducer = counterSlice.reducer;
export const todoReducer = todoSlice.reducer;