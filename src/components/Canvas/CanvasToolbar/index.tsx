import {
  Square,
  Circle as CircleIcon,
  Image as ImageIcon,
  Type,
  Trash2,
  Download,
  Move,
  Hand,
  Undo,
  Redo,
  Pencil,
} from 'lucide-react';
import ToolbarButton from '../../ToolbarButton';
export type CanvasTool =
  | 'select'
  | 'draw'
  | 'rectangle'
  | 'circle'
  | 'text'
  | 'image';
export interface ToolbarProps {
  activeTool: CanvasTool;
  isPanMode: boolean;
  canUndo: boolean;
  canRedo: boolean;
  onToolClick: (tool: CanvasTool) => void;
  onPanModeToggle: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;
  onDownload: () => void;
}

const CanvasToolbar = ({
  activeTool,
  isPanMode,
  canUndo,
  canRedo,
  onToolClick,
  onPanModeToggle,
  onUndo,
  onRedo,
  onClear,
  onDownload,
}: ToolbarProps) => {
  return (
    <div className="glass-panel p-3 flex flex-col items-center gap-3 animate-fade-in">
      <ToolbarButton
        icon={<Move />}
        active={activeTool === 'select'}
        title="Select Tool"
        onClick={() => onToolClick('select')}
      />

      <ToolbarButton
        icon={<Square />}
        active={activeTool === 'rectangle'}
        title="Rectangle"
        onClick={() => onToolClick('rectangle')}
      />

      <ToolbarButton
        icon={<CircleIcon />}
        active={activeTool === 'circle'}
        title="Circle"
        onClick={() => onToolClick('circle')}
      />

      <ToolbarButton
        icon={<Type />}
        active={activeTool === 'text'}
        title="Text"
        onClick={() => onToolClick('text')}
      />

      <ToolbarButton
        icon={<ImageIcon />}
        active={activeTool === 'image'}
        title="Image"
        onClick={() => onToolClick('image')}
      />

      <ToolbarButton
        icon={<Pencil />}
        active={activeTool === 'draw'}
        title="Draw"
        onClick={() => onToolClick('draw')}
      />
      <hr className="my-1" />
      {/* <Separator className="my-1" /> */}

      <ToolbarButton
        icon={<Hand />}
        active={isPanMode}
        title="Pan Canvas"
        onClick={onPanModeToggle}
      />

      {/* <Separator className="my-1" /> */}
      <hr className="my-1" />

      <ToolbarButton
        icon={<Undo />}
        disabled={!canUndo}
        title="Undo"
        onClick={onUndo}
      />

      <ToolbarButton
        icon={<Redo />}
        disabled={!canRedo}
        title="Redo"
        onClick={onRedo}
      />

      {/* <Separator className="my-1" /> */}
      <hr className="my-1" />
      <ToolbarButton icon={<Trash2 />} title="Clear Canvas" onClick={onClear} />

      <ToolbarButton
        icon={<Download />}
        title="Download"
        onClick={onDownload}
      />
    </div>
  );
};

export default CanvasToolbar;
