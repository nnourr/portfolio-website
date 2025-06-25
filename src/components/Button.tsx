export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  const baseClasses =
    'font-bold rounded-lg w-fit transition-[transform_50ms,opacity_300ms] active:scale-95';

  const variantClasses = {
    primary: 'bg-bg/30 inset-shadow-glow/50',
    secondary: 'bg-contrast',
    outline: 'border-2 border-accent ',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-base',
    md: 'px-3 text-lg',
    lg: 'px-4 py-1 text-xl',
  };

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
