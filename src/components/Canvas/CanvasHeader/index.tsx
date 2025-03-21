import { CircleIcon } from 'lucide-react';
import { FC, PropsWithChildren } from 'react';

const CanvasHeader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center justify-between w-full mb-2">
      <div className="flex items-center gap-2">
        <CircleIcon className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-medium">Canvas Studio</h2>
      </div>
      {children}
    </div>
  );
};

export default CanvasHeader;
