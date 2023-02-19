import React, { ButtonHTMLAttributes, FC, PropsWithChildren, useMemo } from 'react';
import style from './style.module.css';

type TProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button: FC<TProps> = ({ className, children, ...restAttr }) => {
  const classNames = useMemo(() => [className, style.root], [className]);

  return (
    <button {...restAttr} className={classNames.join(' ')}>
      {children}
    </button>
  );
};
