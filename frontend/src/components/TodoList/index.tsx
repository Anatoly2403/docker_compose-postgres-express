import React, { FC } from 'react';
import { I_Todo } from '../../shared/store/todoSlice';
import { Todo } from '../Todo';
import style from './style.module.css';

interface IProps {
  todos: I_Todo[];
  handleRemove?: (id: number) => void;
}

export const TodoList: FC<IProps> = ({ todos, handleRemove }) => {
  return (
    <ul className={style.root}>
      {todos.map((todo, i) => (
        <Todo key={todo.id} index={i + 1} todo={todo} handleRemove={handleRemove} />
      ))}
    </ul>
  );
};
