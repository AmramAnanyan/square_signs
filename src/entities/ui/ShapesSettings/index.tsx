import { ChangeEvent, FC, useEffect, useState } from 'react';
import Input from '../../../components/Input';
import { ALLOWED_SHAPES, AllowedShapes, SETTINGS_SELECTION } from './constants';
import { Canvas } from 'fabric';
import { ShapesValues } from '../../../utils/canvashelpers/drawHelpers';
import { CanvasTool } from '../../../constants/toolbarConstants';
export interface IShapeSettingsProps {
  shape: AllowedShapes;
  canvas: Canvas | null;
  activeColor?: string;
}
const ShapeSettings: FC<IShapeSettingsProps> = ({
  shape,
  canvas,
  activeColor,
}) => {
  const [settingsValues, setSettingsValues] = useState<any>({
    width: ShapesValues.WIDTH,
    height: ShapesValues.HEIGHT,
    fontSize: ShapesValues.fontSize,
    radius: ShapesValues.radius,
    fill: activeColor,
  });

  useEffect(() => {
    setSettingsValues({ ...settingsValues, fill: activeColor });
  }, [activeColor]);
  console.log(activeColor, 'active color');
  useEffect(() => {
    if (canvas) {
      const activeObject = canvas.getActiveObject();
      activeObject?.set({ ...settingsValues });
      canvas.renderAll();
    }
  }, [canvas, settingsValues]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (e.target.name !== 'fill') {
      const intValue = Number(e.target.value);
      setSettingsValues({
        ...settingsValues,
        [name]: intValue ? intValue : '',
      });
    } else {
      setSettingsValues({ ...settingsValues, [name]: value });
    }
  };
  return (
    <div>
      {SETTINGS_SELECTION[shape].map((settings) => {
        return (
          <Input
            key={settings.id}
            {...settings}
            onChange={handleChange}
            value={settingsValues?.[settings.name]}
          />
        );
      })}
    </div>
  );
};

export default ShapeSettings;
