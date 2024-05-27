import { officeColors } from "@/consts/office";
import React from "react";

interface ColorPickerProps {
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  selectedColor,
  onSelectColor,
}) => (
  <div className="mb-4 flex flex-col gap-5">
    <h1 className="text-2xl font-extrabold">Office Colour</h1>
    <div className="flex flex-wrap justify-center gap-5">
      {officeColors.map((color) => (
        <div
          key={color}
          className={`w-10 h-10 cursor-pointer rounded-full ${
            selectedColor === color ? "border-4 border-[#475569]" : "border"
          }`}
          style={{ backgroundColor: color }}
          onClick={() => onSelectColor(color)}
        ></div>
      ))}
    </div>
  </div>
);

export default ColorPicker;
