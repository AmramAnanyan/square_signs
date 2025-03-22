import { Minus, Plus, RotateCcw } from 'lucide-react';
import { Button } from '../../Button';
import { Canvas } from 'fabric';
import useCanvasZoom from '../../../utils/hooks/useCanvasZoom';

export interface IZoomControlsProps {
  canvas: Canvas | null;
}
const ZoomControls = ({ canvas }: IZoomControlsProps) => {
  const { zoomLevel, zoomCanvas, resetZoom } = useCanvasZoom(canvas);

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={resetZoom}
        className="flex items-center gap-1"
      >
        <RotateCcw className="h-4 w-4" />
        <span>Reset View</span>
      </Button>
      <div className="flex items-center rounded-lg border border-border bg-background/50 backdrop-blur-sm px-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => zoomCanvas(false)}
          disabled={zoomLevel <= 0.5}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-12 text-center text-sm">
          {Math.round(zoomLevel * 100)}%
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => zoomCanvas(true)}
          disabled={zoomLevel >= 3}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ZoomControls;
