import { RefObject, useEffect } from 'react';
import { CanvasTool } from '../../../constants/toolbarConstants';
import { PencilBrush } from 'fabric';
import { Canvas as FabricCanvas } from 'fabric';
export interface ICanvasCoreProps {
  canvas: FabricCanvas | null;
  canvasRef: RefObject<HTMLCanvasElement | null>;
  activeTool?: CanvasTool;
  activeColor?: string;
  imageFileRef?: RefObject<HTMLInputElement | null>;
  svgFileRef?: RefObject<HTMLInputElement | null>;
}

const CanvasCore = ({
  canvas,
  canvasRef,
  activeTool,
  activeColor,
  imageFileRef,
  svgFileRef,
}: ICanvasCoreProps) => {
  useEffect(() => {
    if (!canvas) return;

    const activateBrush = (
      activeTool: ICanvasCoreProps['activeTool'],
      activeColor: ICanvasCoreProps['activeColor']
    ) => {
      if (!activeTool || !activeColor) return;
      canvas.isDrawingMode = activeTool === CanvasTool.DRAW;
      canvas.freeDrawingBrush = new PencilBrush(canvas);
      canvas.freeDrawingBrush.color = activeColor;
      canvas.freeDrawingBrush.width = 5;
    };
    activateBrush(activeTool, activeColor);
  }, [activeTool, activeColor, canvas]);

  return (
    <div className="canvas-container relative flex-1 bg-white rounded-lg overflow-hidden border border-border animate-scale-in z-0">
      <canvas ref={canvasRef} className="rounded-lg" />
      {imageFileRef && (
        <input
          type="file"
          ref={imageFileRef}
          style={{ display: 'none' }}
          accept=".png,.jpg,.jpeg,"
        />
      )}
      {svgFileRef && (
        <input
          type="file"
          ref={svgFileRef}
          style={{ display: 'none' }}
          accept=".svg,"
        />
      )}
    </div>
  );
};

export default CanvasCore;
