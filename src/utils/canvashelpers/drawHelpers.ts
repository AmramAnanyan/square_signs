import { Circle, Canvas as FabricCanvas, Image, Rect, Textbox } from 'fabric';
import { useEffect } from 'react';
import { scaleImage } from '../helpers/global';
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
}
export const addRectangle = (
  canvas: FabricCanvas | null,
  options: IRectangle
): void => {
  if (!canvas) return;
  const rect = new Rect({
    width: ShapesValues.WIDTH,
    height: ShapesValues.HEIGHT,
    ...options,
  });
  canvas.add(rect);
};
export interface ICircle {
  top: number;
  left: number;
  radius?: number;
  fill: string;
}
export const addCircle = (canvas: FabricCanvas | null, options: ICircle) => {
  if (!canvas) return;
  const circle = new Circle({
    radius: ShapesValues.radius,
    ...options,
  });
  canvas.add(circle);
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
