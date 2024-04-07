const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-[1440px] mx-auto ${className}`}>{children}</div>
  );
};
export default Container;
