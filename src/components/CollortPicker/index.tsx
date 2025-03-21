import { Check } from 'lucide-react';

export interface IColorPickerProps {
  activeColor: string;
  colorOptions: string[];
  onColorChange: (color: string) => void;
}

export const ColorPicker = ({
  activeColor,
  colorOptions,
  onColorChange,
}: IColorPickerProps) => {
  return (
    <div className="glass-panel p-3 flex flex-col items-center gap-3 animate-fade-in w-16">
      <div className="flex flex-col gap-3">
        <div className="mb-1 text-xs font-medium text-center text-muted-foreground">
          Colors
        </div>
        {colorOptions.map((color) => (
          <div
            key={color}
            className={`w-6 h-6 relative cursor-pointer border rounded-full ${
              color === activeColor
                ? 'border-primary ring-2 ring-primary/20'
                : 'border-transparent'
            }`}
            style={{ backgroundColor: color }}
            onClick={() => onColorChange(color)}
          >
            {color === activeColor && (
              <Check className="h-3 w-3 text-white absolute inset-0 m-auto" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
