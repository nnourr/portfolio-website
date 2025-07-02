import Button, { type ButtonProps } from './Button';

const QuickButton: React.FC<ButtonProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <Button
      className={`${className} decoration-accent group relative flex items-center gap-2 underline decoration-2 backdrop-blur-md`}
      variant="primary"
      size="md"
      {...props}
    >
      <div className="bg-accent aspect-square h-3 rounded-full opacity-50 transition-all duration-300 group-hover:opacity-100" />
      {children}
    </Button>
  );
};

export default QuickButton;
