import { Circle, Canvas as FabricCanvas, Rect, Textbox } from 'fabric';
import { CanvasTool } from '../../constants/toolbarConstants';
export interface IRectangle {
  top: number;
  left: number;
  width: number;
  height: number;
  fill: string;
}
export const addRectangle = (
  canvas: FabricCanvas | null,
  options: IRectangle
): void => {
  if (!canvas) return;
  const rect = new Rect({
    ...options,
  });
  canvas.add(rect);
};
export interface ICircle {
  top: number;
  left: number;
  radius: number;
  fill: string;
}
export const addCircle = (canvas: FabricCanvas | null, options: ICircle) => {
  if (!canvas) return;
  const circle = new Circle({
    ...options,
  });
  canvas.add(circle);
};
export interface ITextBox {
  fill: string;
}
export const addTextbox = (canvas: FabricCanvas | null, options: ITextBox) => {
  if (canvas) {
    const text = new Textbox('Hello, Fabric.js!', {
      top: 200,
      left: 50,
      fill: options.fill,
      fontFamily: 'Inter, sans-serif',
      fontSize: 24,
      cornerColor: '#0050FF',
      borderColor: '#0050FF',
      cornerSize: 12,
      transparentCorners: false,
      borderDashArray: [5, 5],
    });
    canvas.add(text);
  }
};

export const clearCanvas = (canvas: FabricCanvas | null) => {
  if (!canvas) return;
  canvas.clear();
};
