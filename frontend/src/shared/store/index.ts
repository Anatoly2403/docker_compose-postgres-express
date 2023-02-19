import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([]);
  },
});

export type T_RootState = ReturnType<typeof store.getState>;
export type T_AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => T_AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<T_RootState> = useSelector;
