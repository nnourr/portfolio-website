import Button, { type ButtonProps } from './Button';

const QuickButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <Button
      onClick={onClick}
      className={`${className} decoration-accent group flex items-center gap-2 underline decoration-2 backdrop-blur-md`}
      disabled={disabled}
      variant="primary"
      size="md"
      {...props}
    >
      <div className="bg-accent aspect-square h-3 rounded-full opacity-50 transition-all duration-300 group-hover:opacity-100"></div>
      {children}
    </Button>
  );
};

export default QuickButton;
