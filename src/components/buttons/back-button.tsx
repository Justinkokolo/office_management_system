import React from "react";
import Image from "next/image";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button className="cursor-pointer" onClick={onClick}>
      <Image
        src="/icons/arrow_left.svg"
        width={24}
        height={24}
        alt="back button"
      />
    </button>
  );
};

export default BackButton;
