import {
  Move,
  Square,
  CircleIcon,
  Type,
  ImageIcon,
  Pencil,
  Hand,
  Undo,
  Redo,
  Trash2,
  Download,
} from 'lucide-react';
export const enum CanvasTool {
  SELECT = 'select',
  DRAW = 'draw',
  RECTANGLE = 'rectangle',
  CIRCLE = 'circle',
  TEXT = 'text',
  IMAGE = 'image',
  PAN = 'pan',
}
export const enum CanvasAction {
  UNDO = 'undo',
  REDO = 'redo',
  CLEAR = 'clear',
  DOWNLOAD = 'download',
}
export const TOOL_BAR_GROUPS = [
  { icon: <Move />, tool: CanvasTool.SELECT, title: 'Select Tool' },
  { icon: <Square />, tool: CanvasTool.RECTANGLE, title: 'Rectangle' },
  { icon: <CircleIcon />, tool: CanvasTool.CIRCLE, title: 'Circle' },
  { icon: <Type />, tool: CanvasTool.TEXT, title: 'Text' },
  { icon: <ImageIcon />, tool: CanvasTool.IMAGE, title: 'Image' },
  { icon: <Pencil />, tool: CanvasTool.DRAW, title: 'Draw' },

  { icon: <Hand />, tool: CanvasTool.PAN, title: 'Pan Canvas' },

  { icon: <Undo />, action: CanvasAction.UNDO, title: 'Undo' },
  { icon: <Redo />, action: CanvasAction.REDO, title: 'Redo' },

  { icon: <Trash2 />, action: CanvasAction.CLEAR, title: 'Clear Canvas' },
  { icon: <Download />, action: CanvasAction.DOWNLOAD, title: 'Download' },
];

export const COLOR_OPTIONS = [
  '#0050FF',
  '#FF3B30',
  '#34C759',
  '#FF9500',
  '#AF52DE',
  '#000000',
];
