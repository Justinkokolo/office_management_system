// components/AddStaffModal.tsx
import React, { useState } from "react";
import Button from "../buttons/button";
import Modal from "./modal";

interface DeleteStaffMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEditStaffMember: () => void;
  onDeleteStaffMember: () => void;
}

const DeleteStaffMemberModal: React.FC<DeleteStaffMemberModalProps> = ({
  isOpen,
  onClose,
  onEditStaffMember,
  onDeleteStaffMember,
}) => {
  const [step, setStep] = useState(1);

  const handleEditStaffMember = () => {
    //setStep(step + 1);
    // setIsAddStaffMemberModalOpen(true);
  };

  const handleDeleteStaffMemberStepOne = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  // const onDeleteStaffMember = () => {

  //}

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onClickBackButton={handleBack}
      title={step === 2 ? "Are you sure you want to Delete Staff Member?" : ""}
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
          <Button onClick={onEditStaffMember} name="EDIT STAFF MEMBER" />
          <Button
            onClick={handleDeleteStaffMemberStepOne}
            name="DELETE STAFF MEMBER"
            color="white"
          />
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-7 w-full">
          <Button
            onClick={onDeleteStaffMember}
            name="DELETE STAFF MEMBER"
            color="red"
          />
          <Button
            onClick={onClose}
            name="KEEP STAFF MEMBER"
            color="white"
          />
        </div>
      )}
    </Modal>
  );
};

export default DeleteStaffMemberModal;
