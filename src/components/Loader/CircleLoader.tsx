const CircleLoader = ({
  className = '',
  size = 6,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <div
      className={`w-${size} h-${size} border-4 border-spacing-2 border-t-black rounded-full animate-spin ${className}`}
    />
  );
};

export default CircleLoader;
