import { useEffect, useState } from 'react';
import { Canvas } from 'fabric';
import { CanvasTool } from '../../constants/toolbarConstants';
import setActiveShape from '../canvashelpers/setActiveSHape';

const useUpdateSettingsModalPosition = (canvas: Canvas | null) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [activeShape, setActivatedShape] = useState(CanvasTool.SELECT);

  useEffect(() => {
    if (!canvas) return;

    const updateModalPosition = (event: any) => {
      const obj = event.target || event.selected?.[0];

      if (!obj) return;
      setActiveShape(obj, setActivatedShape);
      const boundingBox = obj.getBoundingRect();
      const canvasRect = canvas.upperCanvasEl.getBoundingClientRect();

      setPosition({
        top: canvasRect.top + boundingBox.top,
        left: canvasRect.left + boundingBox.left + boundingBox.width,
      });

      setIsOpen(true);
    };

    canvas.on('selection:created', updateModalPosition);
    canvas.on('selection:updated', updateModalPosition);
    canvas.on('object:modified', updateModalPosition);

    canvas.on('selection:cleared', () => {
      setIsOpen(false);
    });

    return () => {
      canvas.off('selection:created', updateModalPosition);
      canvas.off('selection:updated', updateModalPosition);
      canvas.off('selection:cleared');
    };
  }, [canvas]);

  return { isOpen, position, activeShape };
};
export default useUpdateSettingsModalPosition;
