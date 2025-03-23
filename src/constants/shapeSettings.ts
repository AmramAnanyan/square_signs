import { CanvasTool } from './toolbarConstants';
export type AllowedShapes =
  | CanvasTool.RECTANGLE
  | CanvasTool.CIRCLE
  | CanvasTool.TEXT;

export const ALLOWED_SHAPES = {
  [CanvasTool.CIRCLE]: true,
  [CanvasTool.RECTANGLE]: true,
  [CanvasTool.TEXT]: true,
};
export const RECT_SETTINGS = [
  { id: 'width', label: 'Width', type: 'number', name: 'width' },
  { id: 'height', label: 'Height', type: 'number', name: 'height' },
  { id: 'color', label: 'Color', type: 'color', name: 'fill' },
];

export const CIRCLE_SETTINGS = [
  { id: 'radius', label: 'Radius', type: 'number', name: 'radius' },
  { id: 'color', label: 'Color', type: 'color', name: 'fill' },
];
export const TEXTBOX_SETTINGS = [
  { id: 'FontSize', label: 'Font Size', type: 'number', name: 'fontSize' },
  { id: 'color', label: 'Color', type: 'color', name: 'fill' },
];

export const SETTINGS_SELECTION: Record<
  AllowedShapes,
  { id: string; label: string; type: string; name: string }[]
> = {
  [CanvasTool.RECTANGLE]: RECT_SETTINGS,
  [CanvasTool.CIRCLE]: CIRCLE_SETTINGS,
  [CanvasTool.TEXT]: TEXTBOX_SETTINGS,
};
