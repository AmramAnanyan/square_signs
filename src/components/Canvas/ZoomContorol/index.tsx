import { Minus, Plus, RotateCcw } from 'lucide-react';
import { Button } from '../../Button';

export interface IZoomControlsProps {
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetView: () => void;
}
const ZoomControls = ({
  zoomLevel,
  onZoomIn,
  onZoomOut,
  onResetView,
}: IZoomControlsProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={onResetView}
        className="flex items-center gap-1"
      >
        <RotateCcw className="h-4 w-4" />
        <span>Reset View</span>
      </Button>
      <div className="flex items-center rounded-lg border border-border bg-background/50 backdrop-blur-sm px-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onZoomOut}
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
          onClick={onZoomIn}
          disabled={zoomLevel >= 3}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ZoomControls;
