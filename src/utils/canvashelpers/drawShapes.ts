import { Circle, Text, Canvas as FabricCanvas, Rect, Textbox } from 'fabric';
import { FC } from 'react';
export interface IRectangle {
  top: number;
  left: number;
  width: number;
  height: number;
  fill: string;
}
export const addRectangle = (
  canvas: FabricCanvas,
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
export const addCircle = (canvas: FabricCanvas, options: ICircle) => {
  if (!canvas) return;
  const circle = new Circle({
    ...options,
  });
  canvas.add(circle);
};
export interface ITextBox {
  top: number;
  left: number;
  radius: number;
  fill: string;
}
export const addTextbox = (canvas: FabricCanvas) => {
  if (canvas) {
    const text = new Textbox('Hello, Fabric.js!', {
      top: 200,
      left: 50,
      fill: 'black',
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

export const clearCanvas = (canvas: FabricCanvas) => {
  if (!canvas) return;
  canvas.clear();
};
