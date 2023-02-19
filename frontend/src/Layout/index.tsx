import React, { FC, PropsWithChildren } from 'react';
import style from './style.module.css';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={style.layout}>{children}</div>;
};
