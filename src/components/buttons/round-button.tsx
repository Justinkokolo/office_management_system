import React from "react";

interface RoundButtonProps {
  onClick: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 md:absolute md:top-0 w-16 h-16 bg-[#0D4477] text-white text-3xl rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
    >
      +
    </button>
  );
};

export default RoundButton;
