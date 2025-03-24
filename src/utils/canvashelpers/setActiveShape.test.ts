import { CanvasTool } from '../../constants/toolbarConstants';
import setActiveShape from './setActiveSHape';
import { Rect, Circle } from 'fabric';

describe('setActiveShape', () => {
  it('should call the callback with CanvasTool.RECTANGLE when a Rect is passed', () => {
    const mockCallback = jest.fn();
    const rect = new Rect();

    setActiveShape(rect, mockCallback);

    expect(mockCallback).toHaveBeenCalledWith(CanvasTool.RECTANGLE);
  });

  it('should call the callback with CanvasTool.CIRCLE when a Circle is passed', () => {
    const mockCallback = jest.fn();
    const circle = new Circle();

    setActiveShape(circle, mockCallback);

    expect(mockCallback).toHaveBeenCalledWith(CanvasTool.CIRCLE);
  });

  it('should call the callback with CanvasTool.SELECT when an unknown object is passed', () => {
    const mockCallback = jest.fn();
    const unknownObject = {} as Rect;

    setActiveShape(unknownObject, mockCallback);

    expect(mockCallback).toHaveBeenCalledWith(CanvasTool.SELECT);
  });
});
