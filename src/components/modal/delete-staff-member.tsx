// components/AddStaffModal.tsx
import React, { useState } from "react";
import Button from "../buttons/button";
import Modal from "./modal";
import StepIndicator from "./step-indicator";

interface DeleteStaffMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const avatars = [
  "/avatars/avatar_1.png",
  "/avatars/avatar_2.png",
  "/avatars/avatar_3.png",
  "/avatars/avatar_4.png",
  "/avatars/avatar_5.png",
  "/avatars/avatar_6.png",
  "/avatars/avatar_7.png",
];

const DeleteStaffMemberModal: React.FC<DeleteStaffMemberModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState(1);

  const handleEditStaffMember = () => {
    //setStep(step + 1);
  };

  const handleDeleteStaffMember = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };


  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onClickBackButton={handleBack}
      title={step === 2 && "Are you sure you want to Delete Staff Member?"}
      hasBackButton={step === 1 ? false : true}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>

      {step === 1 && (
        <div className="flex flex-col gap-7 w-full">
          <Button onClick={handleEditStaffMember} name="EDIT STAFF MEMBER" />
          <Button
            onClick={handleDeleteStaffMember}
            name="DELETE STAFF MEMBER"
            color="white"
          />
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-7 w-full">
        <Button onClick={handleEditStaffMember} name="DELETE STAFF MEMBER" color="red" />
        <Button
          onClick={handleDeleteStaffMember}
          name="KEEP STAFF MEMBER"
          color="white"
        />
      </div>
      )}
    </Modal>
  );
};

export default DeleteStaffMemberModal;
