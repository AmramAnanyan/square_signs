import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
export interface IDynamicModal {
  isOpen: boolean;
  position: { top: number; left: number; bottom?: number; right?: number };
  children: ReactNode;
}
const DynamicModal: FC<IDynamicModal> = ({ isOpen, position, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="absolute bg-white p-3 shadow-lg rounded-md transition-all"
      style={{
        top: position.top,
        left: position.left,
        position: 'absolute',
        zIndex: 9999,
      }}
    >
      {children}
    </div>,
    document.body
  );
};
export default DynamicModal;
