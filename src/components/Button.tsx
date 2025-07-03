import Glass from './Glass';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
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
  const baseClasses = 'p-0 m-0';

  const variantClasses = {
    primary: 'bg-bg/30 inset-shadow-glow/50',
    secondary: 'bg-contrast',
    outline: 'border-1 border-secondary',
    ghost: 'px-0 py-0',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
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
      className={`${disabledClasses} ${className} ${baseClasses}`}
    >
      {variant === 'ghost' ? (
        children
      ) : (
        <Glass
          className={`underline-[inherit] ${variantClasses[variant]} ${sizeClasses[size]} *:text-decoration-inherit active:scale-95-sm relative top-0 left-0 z-0 w-fit overflow-hidden rounded-lg font-bold shadow-none transition-[transform_50ms,opacity_300ms]`}
        >
          {variant === 'primary' && (
            <>
              <div className="bg-accent/30 absolute -top-4 left-0 -z-10 h-7 w-2 rounded-xs blur-sm" />
              <div className="bg-accent/30 absolute right-0 -bottom-2 -z-10 h-7 w-2 rounded-xs blur-sm" />
            </>
          )}
          <div className="text-contrast z-50 flex h-full w-full items-center gap-2">
            {children}
          </div>
        </Glass>
      )}
    </button>
  );
};

export default Button;
