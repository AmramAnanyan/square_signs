import { Circle, Rect, Textbox } from 'fabric';
import { AllowedShapes } from '../../components/ShapesSettings/constants';
import { CanvasTool } from '../../constants/toolbarConstants';

const setActiveShape = (
  obj: Rect | Circle | Textbox,
  callback: (tool: AllowedShapes) => void
) => {
  if (obj instanceof Rect) {
    callback(CanvasTool.RECTANGLE);
  } else if (obj instanceof Circle) {
    callback(CanvasTool.CIRCLE);
  } else if (obj instanceof Textbox) {
    callback(CanvasTool.TEXT);
  }
};
export default setActiveShape;
