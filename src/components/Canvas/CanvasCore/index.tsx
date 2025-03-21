import { useEffect } from 'react';
import { CanvasTool } from '../CanvasToolbar';
export interface ICanvasCoreProps {
  //   canvas: FabricCanvas | null;
  canvas: any;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  canvasContainerRef: React.RefObject<HTMLDivElement>;
  activeTool: CanvasTool;
  activeColor: string;
  isPanMode: boolean;
  zoomLevel?: number;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleFileSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CanvasCore = ({
  canvas,
  canvasRef,
  canvasContainerRef,
  activeTool,
  activeColor,
  isPanMode,
  fileInputRef,
}: any) => {
  useEffect(() => {
    if (!canvas) return;

    canvas.isDrawingMode = activeTool === 'draw';

    if (activeTool === 'draw' && canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.color = activeColor;
      canvas.freeDrawingBrush.width = 3;
    }

    if (isPanMode) {
      canvas.defaultCursor = 'grab';
      canvas.hoverCursor = 'grab';
    } else {
      canvas.defaultCursor = 'default';
      canvas.hoverCursor = 'move';
    }
  }, [activeTool, activeColor, canvas, isPanMode]);

  return (
    <div
      ref={canvasContainerRef}
      className="canvas-container relative flex-1 bg-white rounded-lg overflow-hidden border border-border animate-scale-in"
    >
      <canvas ref={canvasRef} className="rounded-lg" />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept=".png,.jpg,.jpeg,.svg"
      />
    </div>
  );
};

export default CanvasCore;
