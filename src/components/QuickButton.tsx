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
      className={`${className} flex items-center gap-2 underline decoration-accent decoration-2 backdrop-blur-md group`}
      disabled={disabled}
      variant="primary"
      size="md"
      {...props}
    >
      <div className="bg-accent rounded-full h-3 aspect-square opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
      {children}
    </Button>
  );
};

export default QuickButton;
