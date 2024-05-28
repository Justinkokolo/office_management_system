import React, { ReactNode } from "react";
import Image from "next/image";
import BackButton from "../buttons/back-button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClickBackButton: () => void;
  children: ReactNode;
  title?: string;
  hasBackButton?: boolean;
  hideCloseButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  hasBackButton,
  onClickBackButton,
  hideCloseButton,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white mx-5 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-7">
          <div className="flex gap-5">
            {hasBackButton && <BackButton onClick={onClickBackButton} />}
            {title && <h1 className="text-2xl font-extrabold">{title}</h1>}
          </div>
          {!hideCloseButton && (
            <button onClick={onClose} className=" hover:text-gray-700">
              <Image
                src="/icons/close-circle.svg"
                width={24}
                height={24}
                alt="back button"
              />
            </button>
          )}
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
