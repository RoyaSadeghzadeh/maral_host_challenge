// components/CustomCheckbox.tsx
import React from "react";

interface CustomCheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="bg-white text-primary-1 focus:ring-white rounded-full transition-all duration-300 w-6 h-6 gorup"
      />
      <span className="ml-2 font-manrope text-typograhy-1 text-sm">{label}</span>
    </label>
  );
};
