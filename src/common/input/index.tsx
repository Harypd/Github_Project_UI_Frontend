import React from 'react';
import styles from './input.module.scss';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...rest }: IInputProps) => {
  return (
    <React.Fragment>
      <label htmlFor={rest.id} className={styles['label']}>{rest.placeholder}</label>
      <input aria-label={rest.placeholder} name={rest.id} {...rest} className={`${className} ${styles['input']}`} />
    </React.Fragment>
  );
};

export default Input;
