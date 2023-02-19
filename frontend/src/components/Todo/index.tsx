import React, { FC } from 'react';
import { I_Todo } from '../../shared/store/todoSlice';
import { ReactComponent as TrashIcon } from '../../shared/icons/trash.svg';
import style from './style.module.css';

interface IProps {
  index: number;
  todo: I_Todo;
  handleRemove?: (id: number) => void;
}

export const Todo: FC<IProps> = ({ index, todo, handleRemove }) => {
  return (
    <li className={style.root}>
      <span className={style.index}>{index}.</span>
      <p className={style.title}>{todo.title}</p>
      <TrashIcon className={style.icon} onClick={() => handleRemove?.(todo.id)} />
    </li>
  );
};
