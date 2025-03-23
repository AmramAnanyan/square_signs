import { Circle, Rect, Textbox } from 'fabric';
import { CanvasTool } from '../../constants/toolbarConstants';
import { AllowedShapes } from '../../constants/shapeSettings';

const setActiveShape = (
  obj: Rect | Circle | Textbox,
  callback: (tool: AllowedShapes | CanvasTool.SELECT) => void
) => {
  if (obj instanceof Rect) {
    callback(CanvasTool.RECTANGLE);
  } else if (obj instanceof Circle) {
    callback(CanvasTool.CIRCLE);
  } else if (obj instanceof Textbox) {
    callback(CanvasTool.TEXT);
  } else {
    callback(CanvasTool.SELECT);
  }
};
export default setActiveShape;
