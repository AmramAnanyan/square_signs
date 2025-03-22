import { FC, InputHTMLAttributes, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}
const Input: FC<InputProps> = ({ id, label, className, ...props }) => {
  return (
    <div className={`relative z-30 ${className || ''}`}>
      <label
        htmlFor={id}
        className={`
          block text-sm font-medium mb-1 
        `}
      >
        {label}
      </label>
      <input
        {...props}
        id={id}
        className={`
          min-h-10
          block w-full px-3 py-2 text-sm
          rounded-lg border-2
          focus:outline-none focus:ring-0
          focus:border-blue-500
        `}
      />
    </div>
  );
};

export default Input;
