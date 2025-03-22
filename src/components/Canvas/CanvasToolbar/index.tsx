import ToolbarButton from '../../ToolbarButton';
import {
  CanvasTool,
  TOOL_BAR_GROUPS,
} from '../../../constants/toolbarConstants';
import Input from '../../Input';
import { createPortal } from 'react-dom';

export interface ToolbarProps {
  activeTool: CanvasTool;
  isPanMode: boolean;
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
  onToolClick,
  onPanModeToggle,
  onUndo,
  onRedo,
  onClear,
  onDownload,
}: ToolbarProps) => {
  return (
    <div className="glass-panel p-5 flex flex-col items-center justify-center gap-7 animate-fade-in">
      {TOOL_BAR_GROUPS.map((btn, index) => {
        return (
          <div className="relative" key={index}>
            <ToolbarButton
              key={index}
              icon={btn.icon}
              active={
                activeTool === btn.tool || (isPanMode && btn.tool === 'pan')
              }
              title={btn.title}
              onClick={() => {
                if (btn.tool) onToolClick(btn.tool as CanvasTool);
                if (btn.action === 'undo') onUndo();
                if (btn.action === 'redo') onRedo();
                if (btn.action === 'clear') onClear();
                if (btn.action === 'download') onDownload();
              }}
            />
            {index > 5 && index < TOOL_BAR_GROUPS.length - 1 && (
              <hr className="my-1 w-full font-bold border border-muted" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CanvasToolbar;
