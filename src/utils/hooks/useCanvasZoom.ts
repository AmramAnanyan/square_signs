import { Canvas, Point } from 'fabric';
import { useCallback, useState } from 'react';

const useCanvasZoom = (canvas: Canvas | null) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const zoomCanvas = useCallback(
    (zoomIn: boolean) => {
      if (!canvas) return;
      let newZoom = zoomIn ? zoomLevel + 0.1 : zoomLevel - 0.1;
      const center = new Point(canvas.getWidth() / 2, canvas.getHeight() / 2);
      canvas.zoomToPoint(center, newZoom);
      setZoomLevel(newZoom);
    },
    [canvas, zoomLevel]
  );

  const resetZoom = useCallback(() => {
    if (!canvas) return;
    setZoomLevel(1);
    canvas.setZoom(1);
    canvas.viewportTransform = [1, 0, 0, 1, 0, 0];
    canvas.renderAll();
  }, [canvas]);

  return { zoomLevel, zoomCanvas, resetZoom };
};

export default useCanvasZoom;
