import React from "react";
import Image from "next/image";
import { StaffMemberType } from "@/types/office";

interface StaffMemberProps {
  staffMember: StaffMemberType;
  onClick: (staffMember: StaffMemberType) => void;
}

const StaffMember: React.FC<StaffMemberProps> = ({ staffMember, onClick }) => {
  const handleClick = () => {
    onClick(staffMember);
  };

  return (
    <div className="flex justify-between mb-2 justify-items-center">
      <div className="flex gap-10 justify-items-center items-center">
        <Image src={staffMember.avatar} width={52} height={52} alt="avatar" />
        <p className="text-base font-medium">{`${staffMember.firstName} ${staffMember.lastName}`}</p>
      </div>
      <div className="cursor-pointer" onClick={handleClick}>
        <Image src="/icons/menu-icon.png" width={6} height={6} alt="action" />
      </div>
    </div>
  );
};

export default StaffMember;
