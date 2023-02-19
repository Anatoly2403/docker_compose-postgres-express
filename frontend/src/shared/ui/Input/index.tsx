import React, { FC, InputHTMLAttributes, useMemo } from 'react';
import style from './style.module.css';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...restAttr }) => {
  const classNames = useMemo(() => [className, style.root], [className]);

  return <input {...restAttr} className={classNames.join(' ')} />;
};
