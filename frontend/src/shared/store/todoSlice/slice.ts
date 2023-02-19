import { I_Todo } from './models';
import { PayloadAction } from '@reduxjs/toolkit';
import { T_RootState } from '..';
import { createSlice } from '@reduxjs/toolkit';

export interface I_TodoState {
  todos: I_Todo[];
  errorMessage: string | null;
  isLoading: boolean;
}

const initialState: I_TodoState = {
  todos: [],
  errorMessage: null,
  isLoading: false,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<I_Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action: PayloadAction<number | string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setAllTodos: (state, action: PayloadAction<I_Todo[]>) => {
      state.todos = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.errorMessage = action.payload;
    },
  },
});

export const todoActions = {
  ...todoSlice.actions,
};

export const todoReducer = todoSlice.reducer;

export const todoSelector = (state: T_RootState) => state.todo;
