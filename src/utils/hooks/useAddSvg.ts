import { useEffect } from 'react';
import { Canvas, loadSVGFromURL, Image, filters } from 'fabric';
import { util } from 'fabric';
import { scaleImage } from '../helpers/global';

const useAddSvg = (canvas: Canvas | null, file: File | null) => {
  useEffect(() => {
    if (!(canvas && file)) return;
    const url = URL.createObjectURL(file);
    const svg = loadSVGFromURL(url)
      .then((svgResult: any) => {
        const svgGroup = util.groupSVGElements(
          svgResult.objects,
          svgResult.options
        );
        const scale = scaleImage(svgGroup, 200, 200);
        svgGroup.set({
          scaleX: scale,
          scaleY: scale,
        });
        svgGroup.fillRule = 'nonzero';
        canvas.add(svgGroup);
      })
      .catch(() => alert('Cannot Load Svg'));
  }, [canvas, file]);
};

export default useAddSvg;
