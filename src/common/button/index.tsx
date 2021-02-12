import styles from './button.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

// Button component for rendering native button element
// Taking a custom className property from parent component (for overriding)
const Button = ({ children, className, ...rest }: IButtonProps) => {
  return (
    <button  aria-label={rest.placeholder} {...rest} className={`${styles['button']} ${className ?? ''}`}>
      {children}
    </button>
  );
};

export default Button;
