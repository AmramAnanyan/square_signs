import {
  Circle,
  Canvas as FabricCanvas,
  FabricImage,
  Image,
  Rect,
  Textbox,
} from 'fabric';
import { RefObject, useEffect } from 'react';
import { fileToUrl, scaleImage } from '../helpers/global';
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

export const useAddImage = (canvas: FabricCanvas | null, file: null | File) => {
  useEffect(() => {
    if (file && canvas) {
      fileToUrl(file, (url) => {
        if (typeof url === 'string') {
          const image = Image.fromURL(url).then((img) => {
            img.set({
              left: 100,
              top: 100,
              originX: 'center',
              originY: 'center',
            });
            const scale = scaleImage(img, 200, 200);
            img.set({
              scaleX: scale,
              scaleY: scale,
            });
            if (canvas) canvas.add(img);
          });
        }
      });
    }
  }, [canvas, file]);
};
