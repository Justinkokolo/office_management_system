import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface BackButtonProps {
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  const router = useRouter();

  const handleOnclick = () => {
    if (onClick) {
      onClick();
    } else {
      router.back();
    }
  };

  return (
    <button className="cursor-pointer" onClick={handleOnclick}>
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
