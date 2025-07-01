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
      className={` ${className} bg-bg before:bg-pale-accent/30 before:stroke-pale-accent/50 relative z-0 h-fit overflow-hidden before:fixed before:top-0 before:-left-0 before:-z-10 before:h-[100%] before:w-full before:mask-[url("/tic-tac.svg")] before:mask-size-[8vh] before:md:mask-size-[6vh] dark:before:mask-[url("/circuit-board.svg")] dark:before:mask-size-[50vh]`}
    >
      <div className="z-10">{children}</div>
    </div>
  );
};

export default Background;
