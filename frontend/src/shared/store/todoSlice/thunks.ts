import { createAsyncThunk } from '@reduxjs/toolkit';
import { todoActions } from '.';
import { todoApi } from './api';

export const getAllTodos = createAsyncThunk('todo/getAllTodos', async (_, { dispatch }) => {
  try {
    dispatch(todoActions.setIsLoading(true));
    const todos = await todoApi.getAll();
    dispatch(todoActions.setAllTodos(todos));
    dispatch(todoActions.setIsLoading(false));
  } catch (e) {
    if (e instanceof Error) {
      dispatch(todoActions.setError(e.message));
      dispatch(todoActions.setIsLoading(false));
    }
  }
});

export const createTodo = createAsyncThunk<void, string>(
  'todo/createTodo',
  async (title, { dispatch }) => {
    try {
      dispatch(todoActions.setIsLoading(true));
      const todo = await todoApi.create(title);
      dispatch(todoActions.setTodo(todo));
      dispatch(todoActions.setIsLoading(false));
    } catch (e) {
      if (e instanceof Error) {
        dispatch(todoActions.setError(e.message));
        dispatch(todoActions.setIsLoading(false));
      }
    }
  }
);

export const removeTodo = createAsyncThunk<void, number>(
  'todo/removeTodo',
  async (id, { dispatch }) => {
    try {
      dispatch(todoActions.setIsLoading(true));
      await todoApi.delete(id);
      dispatch(todoActions.removeTodo(id));
      dispatch(todoActions.setIsLoading(false));
    } catch (e) {
      if (e instanceof Error) {
        dispatch(todoActions.setError(e.message));
        dispatch(todoActions.setIsLoading(false));
      }
    }
  }
);
