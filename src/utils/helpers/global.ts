import { Image } from 'fabric';
export const fileToUrl = (
  file: File,
  callback: (url: string | ArrayBuffer | null | undefined) => void
) => {
  const fileReader = new FileReader();
  fileReader.onload = (event) => {
    callback(event.target?.result);
  };
  if (file) {
    fileReader.readAsDataURL(file);
  }
};

export const scaleImage = (
  img: Image,
  targetWidth: number,
  targetHeight: number
) => {
  const scaleX = targetWidth / img.width;
  const scaleY = targetHeight / img.height;
  const scale = Math.min(scaleX, scaleY);
  return scale;
};
