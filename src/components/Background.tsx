interface BackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

const Background: React.FC<BackgroundProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={` ${className} h-fit overflow-hidden relative z-0 bg-bg before:absolute before:h-[100%] before:w-full before:top-0 before:-left-0 dark:before:mask-[url("/circuit-board.svg")] dark:before:mask-size-[40vh] before:mask-[url("/tic-tac.svg")] before:mask-size-[8vh] before:bg-accent/15 before:stroke-accent/50 before:-z-10`}
    >
      <div className="z-10">{children}</div>
    </div>
  );
};

export default Background;
