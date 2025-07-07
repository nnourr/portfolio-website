import Button, { type ButtonProps } from './Button';

const QuickButton: React.FC<ButtonProps> = ({
  children,
  className = '',
  title,
  ...props
}) => {
  return (
    <Button
      className={`${className} decoration-accent group relative flex w-fit items-center gap-2 rounded-md underline decoration-2`}
      variant="primary"
      size="md"
      title={title}
      {...props}
    >
      <div className="bg-accent aspect-square h-3 rounded-full opacity-50 transition-all duration-300 group-hover:opacity-100" />
      {children}
    </Button>
  );
};

export default QuickButton;
