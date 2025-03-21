import { ReactNode } from 'react';

export interface IToolbarButtonProps {
  icon: ReactNode;
  active?: boolean;
  disabled?: boolean;
  title?: string;
  onClick: () => void;
}
const ToolbarButton = ({
  icon,
  active = false,
  disabled = false,
  title = '',
  onClick,
}: IToolbarButtonProps) => {
  return (
    <div
      className={`${disabled && 'opacity-30 cursor-not-allowed'}`}
      onClick={disabled ? undefined : onClick}
      title={title}
    >
      <div
        className={`  h-5 w-5${
          active ? 'text-primary' : 'text-muted-foreground'
        }   
          ${disabled && 'text-muted-foreground/30'}} `}
      >
        {icon}
      </div>
    </div>
  );
};

export default ToolbarButton;
