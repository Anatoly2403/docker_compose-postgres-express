import React, { FC } from 'react';
import style from './style.module.css';

export const Spinner: FC = () => {
  return (
    <div className={style.root}>
      <div className={style.spinner} />
    </div>
  );
};
