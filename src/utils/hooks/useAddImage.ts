import { useEffect } from 'react';
import { scaleImage } from '../helpers/global';
import { Canvas as FabricCanvas, Image } from 'fabric';

export const useAddImage = (canvas: FabricCanvas | null, file: null | File) => {
  useEffect(() => {
    if (file && canvas) {
      const url = URL.createObjectURL(file);
      if (typeof url === 'string') {
        Image.fromURL(url)
          .then((img) => {
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
            canvas.add(img);
          })
          .catch(() => alert('Cannot Load png or jpeg file'));
      }
    }
  }, [canvas, file]);
};
