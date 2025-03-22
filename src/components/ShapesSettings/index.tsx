import { ChangeEvent, FC } from 'react';
import Input from '../Input';
import { ALLOWED_SHAPES, AllowedShapes, SETTINGS_SELECTION } from './constants';
export interface IShapeSettingsProps {
  shape: AllowedShapes;
  onChange: ({ name, value }: { name: string; value: string | number }) => void;
}
const ShapeSettings: FC<IShapeSettingsProps> = ({ shape, onChange }) => {
  console.log(shape, 'shape');
  if (!ALLOWED_SHAPES[shape]) {
    return null;
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (e.target.name !== 'color') {
      const intValue = Number(e.target.value);
      onChange({ name, value: intValue });
    } else {
      onChange({ name, value });
    }
  };
  return (
    <div>
      {SETTINGS_SELECTION[shape].map((settings) => {
        return <Input {...settings} onChange={handleChange} />;
      })}
    </div>
  );
};

export default ShapeSettings;
