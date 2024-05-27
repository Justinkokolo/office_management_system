import React, { useState, useEffect } from "react";
import Button from "../buttons/button";
import Modal from "./modal";
import StepIndicator from "./step-indicator";
import { StaffMemberType, OfficeData } from "@/types/office";
import { avatars } from "@/consts/office";

interface AddStaffModalProps {
  officeId: string;
  isOpen: boolean;
  onClose: () => void;
  isEditMode?: boolean;
  staffData?: StaffMemberType;
}

const AddStaffModal: React.FC<AddStaffModalProps> = ({
  officeId,
  isOpen,
  onClose,
  isEditMode = false,
  staffData,
}) => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");

  useEffect(() => {
    if (isEditMode && staffData) {
      setFirstName(staffData.firstName);
      setLastName(staffData.lastName);
      setSelectedAvatar(staffData.avatar);
    } else {
      setFirstName("");
      setLastName("");
      setSelectedAvatar("");
    }
  }, [isEditMode, staffData]);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    const newStaffMember: StaffMemberType = {
      id:
        isEditMode && staffData
          ? staffData.id
          : new Date().getTime().toString(),
      firstName,
      lastName,
      avatar: selectedAvatar,
    };

    const storedOffices = localStorage.getItem("offices");
    if (storedOffices) {
      const offices: OfficeData[] = JSON.parse(storedOffices);
      const updatedOffices = offices.map((office) => {
        if (office.officeId === officeId) {
          const updatedStaffMembersList = isEditMode
            ? office.staffMembersList.map((member) =>
                member.id === newStaffMember.id ? newStaffMember : member
              )
            : [...office.staffMembersList, newStaffMember];
          return { ...office, staffMembersList: updatedStaffMembersList };
        }
        return office;
      });
      localStorage.setItem("offices", JSON.stringify(updatedOffices));
    }

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onClickBackButton={handleBack}
      title={isEditMode ? "Edit Staff Member" : "New Staff Member"}
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
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="First Name"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Last Name"
          />
          <StepIndicator currentStep={step} totalSteps={2} />
          <Button onClick={handleNext} name="NEXT" />
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-7 w-full">
          <h1 className="text-2xl font-bold">Avatar</h1>
          <div className="flex flex-wrap justify-center gap-5">
            {avatars.map((avatar) => (
              <img
                key={avatar}
                src={avatar}
                alt="Avatar"
                className={`w-16 h-16 rounded-full cursor-pointer border-4 ${
                  selectedAvatar === avatar
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedAvatar(avatar)}
              />
            ))}
          </div>
          <StepIndicator currentStep={step} totalSteps={2} />
          <Button
            onClick={handleSubmit}
            name={isEditMode ? "UPDATE STAFF MEMBER" : "ADD STAFF MEMBER"}
          />
        </div>
      )}
    </Modal>
  );
};

export default AddStaffModal;
