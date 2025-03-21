import { useEffect } from 'react';
import { CanvasTool } from '../../../constants/toolbarConstants';
import { PencilBrush } from 'fabric';
import { Canvas as FabricCanvas } from 'fabric';
export interface ICanvasCoreProps {
  canvas: FabricCanvas | null;
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

    canvas.isDrawingMode = activeTool === CanvasTool.DRAW;
    canvas.freeDrawingBrush = new PencilBrush(canvas);
    canvas.freeDrawingBrush.color = activeColor;
    canvas.freeDrawingBrush.width = 5;
  }, [activeTool, activeColor, canvas, isPanMode]);

  return (
    <div
      ref={canvasContainerRef}
      className="canvas-container relative flex-1 bg-white rounded-lg overflow-hidden border border-border animate-scale-in z-0"
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
