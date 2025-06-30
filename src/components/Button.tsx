import Glass from './Glass';

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
    'font-bold rounded-lg w-fit transition-[transform_50ms,opacity_300ms] active:scale-95 relative overflow-hidden';

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
      <div className="flex gap-2 opacity-0">{children}</div>
      {variant === 'primary' && (
        <>
          <div className="bg-accent/30 absolute -top-4 left-0 -z-10 h-7 w-2 rounded-xs blur-sm" />
          <div className="bg-accent/30 absolute right-0 -bottom-2 -z-10 h-7 w-2 rounded-xs blur-sm" />
        </>
      )}
      <Glass className="underline-[inherit] text-decoration-inherit !absolute top-0 left-0 z-0 w-full">
        <div className="flex h-full w-full items-center gap-2 pl-3">
          {children}
        </div>
      </Glass>
    </button>
  );
};

export default Button;
