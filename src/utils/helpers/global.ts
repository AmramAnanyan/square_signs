import { Image, Canvas } from 'fabric';
import { DownloadTypes } from '../../constants/toolbarConstants';

export const scaleImage = (
  img: Image | any,
  targetWidth: number,
  targetHeight: number
) => {
  const scaleX = targetWidth / img.width;
  const scaleY = targetHeight / img.height;
  const scale = Math.min(scaleX, scaleY);
  return scale;
};

export const createDownloadLink = (name: string, href: string) => {
  const link = document.createElement('a');
  link.href = href;
  link.download = name;
  link.click();
};

export const downloadWebp = (canvas: Canvas | null) => {
  if (!canvas) return;
  const dataUrl = canvas.toDataURL({ format: 'webp', multiplier: 1 });
  createDownloadLink('canvas_img.png', dataUrl);
};

export const downloadPNG = (canvas: Canvas | null) => {
  if (!canvas) return;
  const dataUrl = canvas.toDataURL({ format: 'png', multiplier: 1 });
  createDownloadLink('canvas_img.png', dataUrl);
};

export const downloadJPEG = (canvas: Canvas | null) => {
  if (!canvas) return;
  const dataUrl = canvas.toDataURL({ format: 'jpeg', multiplier: 1 });
  createDownloadLink('canvas_img.jpeg', dataUrl);
};

export const downloadCanvasAsImage = (
  type: DownloadTypes,
  canvas: Canvas | null
) => {
  if (!canvas) return;
  switch (type) {
    case DownloadTypes.JPEG:
      downloadJPEG(canvas);
      break;
    case DownloadTypes.PNG:
      downloadPNG(canvas);
      break;
    case DownloadTypes.WEBP:
      downloadWebp(canvas);
      break;
    default:
  }
};
