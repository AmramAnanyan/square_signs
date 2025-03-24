import { Circle, Canvas as FabricCanvas, Rect, Textbox } from 'fabric';
import { CanvasTool } from '../../constants/toolbarConstants';

export const enum ShapesValues {
  WIDTH = 100,
  HEIGHT = 100,
  radius = 60,
  fontSize = 22,
}

export interface IRectangle {
  top: number;
  left: number;
  width?: number;
  height?: number;
  fill: string;
  selectable?: boolean;
}

export const addRectangle = (
  canvas: FabricCanvas | null,
  options: IRectangle
): Rect | undefined => {
  if (!canvas) return;
  const rect = new Rect({
    width: ShapesValues.WIDTH,
    height: ShapesValues.HEIGHT,
    ...options,
  });
  canvas.add(rect);
  return rect;
};
export interface ICircle {
  top: number;
  left: number;
  radius?: number;
  fill: string;
  selectable?: boolean;
}

export const addCircle = (
  canvas: FabricCanvas | null,
  options: ICircle
): Circle | undefined => {
  if (!canvas) return;
  const circle = new Circle({
    radius: ShapesValues.radius,
    ...options,
  });
  canvas.add(circle);
  return circle;
};
export interface ITextBox {
  fill: string;
}

export const addTextbox = (canvas: FabricCanvas | null, options: ITextBox) => {
  if (canvas) {
    const text = new Textbox('Edit Me!', {
      top: 200,
      left: 50,
      fill: options.fill,
      fontFamily: 'Inter, sans-serif',
      width: ShapesValues.WIDTH,
      height: ShapesValues.HEIGHT,
      fontSize: ShapesValues.fontSize,
    });
    canvas.add(text);
  }
};

export const clearCanvas = (canvas: FabricCanvas | null) => {
  if (!canvas) return;
  canvas.clear();
};

export const addImage = (canvas: FabricCanvas | null) => {
  if (!canvas) return;
};

export const drawGeometricFigureTools = (
  canvas: FabricCanvas | null,
  tool: CanvasTool,
  fill: string
) => {
  switch (tool) {
    case CanvasTool.RECTANGLE:
      addRectangle(canvas, {
        top: 100,
        left: 200,
        fill: fill,
      });
      break;
    case CanvasTool.CIRCLE:
      addCircle(canvas, {
        fill: fill,
        top: 105,
        left: 100,
      });
      break;
    case CanvasTool.TEXT:
      addTextbox(canvas, { fill: fill });
      break;
    default:
      break;
  }
};
