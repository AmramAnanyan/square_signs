import ToolbarButton from '../../ToolbarButton';
import {
  CanvasTool,
  DOWNLOAD_POP,
  DownloadTypes,
  TOOL_BAR_GROUPS,
} from '../../../constants/toolbarConstants';
import { useState } from 'react';
import { Download, SquareX } from 'lucide-react';

export interface ToolbarProps {
  activeTool: CanvasTool;
  onToolClick: (tool: CanvasTool) => void;
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;
  onDownload: (type: DownloadTypes) => void;
}

const CanvasToolbar = ({
  activeTool,
  onToolClick,
  onUndo,
  onRedo,
  onClear,
  onDownload,
}: ToolbarProps) => {
  const [openDownloadModal, setOpenDownloadModal] = useState(false);
  return (
    <div className="glass-panel p-5 flex flex-col items-center justify-center gap-7 animate-fade-in">
      {TOOL_BAR_GROUPS.map((btn, index) => {
        return (
          <div className="relative" key={index}>
            <ToolbarButton
              key={index}
              icon={btn.icon}
              active={activeTool === btn.tool}
              title={btn.title}
              onClick={() => {
                if (btn.tool) onToolClick(btn.tool as CanvasTool);
                if (btn.action === 'undo') onUndo();
                if (btn.action === 'redo') onRedo();
                if (btn.action === 'clear') onClear();
                if (btn.action === 'download') {
                  setOpenDownloadModal(true);
                }
              }}
            />
            {index > 5 && index < TOOL_BAR_GROUPS.length - 1 && (
              <hr className="my-1 w-full font-bold border border-muted" />
            )}
          </div>
        );
      })}
      {openDownloadModal && (
        <div className="absolute bottom-0 min-h-16 w-20 bg-white shadow-xl rounded-xl -right-2 transition-all animate-fade-in">
          <SquareX
            className="cursor-pointer absolute right-0 top-3 text-muted"
            onClick={() => {
              setOpenDownloadModal(false);
            }}
          />
          <div className="flex flex-col justify-center items-center mx-2 pt-12 text-primary">
            {DOWNLOAD_POP.map((item) => {
              return (
                <div
                  key={item.title}
                  className="flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => {
                    onDownload(item.type);
                  }}
                >
                  <Download />
                  <div>{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CanvasToolbar;
