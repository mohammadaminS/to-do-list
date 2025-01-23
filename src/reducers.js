import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


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
    setTodos: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addTodo, removeTodo, setTodos } = todoSlice.actions;

export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await axios.get('https://your-backend-api.com/todos');
    dispatch(setTodos(response.data));
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};


const authInitialState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.user = jwtDecode(action.payload);
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export const login = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await axios.post('https://your-backend-api.com/login', credentials);
    dispatch(loginSuccess(response.data.token));
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.message || 'Login failed'));
  }
};

export const authReducer = authSlice.reducer;

export const counterReducer = counterSlice.reducer;
export const todoReducer = todoSlice.reducer;