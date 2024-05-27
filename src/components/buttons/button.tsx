import React from "react";

interface ButtonProps {
  onClick: any;
  name: string;
  color?: "red" | "white" | "blue";
}

const Button: React.FC<ButtonProps> = ({ onClick, name, color = "blue" }) => {
  const getColorClass = () => {
    switch (color) {
      case "red":
        return "bg-red-500 text-white hover:bg-red-700";
      case "white":
        return " text-[#489DDA] hover:bg-gray-200";
      case "blue":
        return "text-white bg-[#489DDA] hover:bg-blue-700";
      default:
        return "";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`py-3  rounded-3xl mx-8 transition-colors  ${getColorClass()}`}
    >
      {name}
    </button>
  );
};

export default Button;
