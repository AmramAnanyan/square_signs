import './style.css';
const CircleLoader = ({
  className = '',
  size = 6,
}: {
  className?: string;
  size?: number;
}) => {
  return <div className={`w-${size} h-${size} circle-loader  ${className}`} />;
};

export default CircleLoader;
