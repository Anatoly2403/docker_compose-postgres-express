import React, { FC } from 'react';
import { ReactComponent as LogoIcon } from '../../icons/logo.svg';
import style from './style.module.css';

interface IProps {
  greetingText?: string;
}

export const Logo: FC<IProps> = ({ greetingText }) => {
  return (
    <div className={style.root}>
      <LogoIcon className={style.icon} />
      <h1 className={style.title}>{greetingText}</h1>
    </div>
  );
};
