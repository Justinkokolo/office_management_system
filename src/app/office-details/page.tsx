"use client";

import React, { useState } from "react";
import Image from "next/image";

import OfficeCard from "@/components/OfficeCard";
import StaffMembersSearch from "@/components/StaffMembersSearch";
import StaffMember from "@/components/StaffMember";
import RoundButton from "@/components/buttons/round-button";
import AddStaffModal from "@/components/modal/add-staff-member-modal";
import DeleteStaffMemberModal from "@/components/modal/delete-staff-member";

const OfficeDetails = () => {
  const [query, setQuery] = useState<string>("");
  const [filteredStaffMembers, setFilteredStaffMembers] = useState<any>();
  const [isAddStaffMemberModalOpen, setIsAddStaffMemberModalOpen] =
    useState(false);
  const [isDeleteStaffMemberModalOpen, setIsDeleteStaffMemberModalOpen] =
    useState(false);

  const handleAddButtonClick = () => {
    setIsAddStaffMemberModalOpen(true);
  };
  const handleStaffMemberClick = () => {
    setIsDeleteStaffMemberModalOpen(true);
  };

  const handleCloseAddStaffMemberModal = () => {
    setIsAddStaffMemberModalOpen(false);
  };

  const handleCloseDeleteStaffMemberModal = () => {
    setIsDeleteStaffMemberModalOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-2 mt-5">
        <Image
          src="/icons/arrow_left.svg"
          width={24}
          height={24}
          alt="back button"
        />
        <h1>Office</h1>
      </div>
      <div>
        <OfficeCard
          officeName={offices.officeName}
          staffMembers={offices.staffMembers}
          phoneNumber={offices.phoneNumber}
          emailAddress={offices.emailAddress}
          officeCapacity={offices.officeCapacity}
          address={offices.address}
        />
        <StaffMembersSearch
          setQuery={setQuery}
          query={query}
          setFilteredStaffMembers={setFilteredStaffMembers}
          staffMembersList={offices.staffMembers}
        />
        <div className=" flex text-2xl font-semibold justify-between mb-10">
          <h1>Staff Members in Office</h1>
          <h2>{offices.staffMembersList.length}</h2>
        </div>

        {offices.staffMembersList.map(({ name, avatar }: any) => (
          <StaffMember
            key={name}
            name={name}
            avatar={avatar}
            onClick={handleStaffMemberClick}
          />
        ))}
      </div>
      <RoundButton onClick={handleAddButtonClick} />
      <AddStaffModal
        isOpen={isAddStaffMemberModalOpen}
        onClose={handleCloseAddStaffMemberModal}
        isEditMode={true}
      />
      <DeleteStaffMemberModal
        isOpen={isDeleteStaffMemberModalOpen}
        onClose={handleCloseDeleteStaffMemberModal}
      />
    </>
  );
};

export default OfficeDetails;

const offices: any = {
  officeName: "Main Office",
  staffMembersList: [
    { name: "Neville ", avatar: "/avatars/avatar_1.png" },
    { name: "John ", avatar: "/avatars/avatar_2.png" },
    { name: "Kiki ", avatar: "/avatars/avatar_3.png" },
    { name: "Neville ", avatar: "/avatars/avatar_4.png" },
    { name: "John ", avatar: "/avatars/avatar_5.png" },
    { name: "Kiki ", avatar: "/avatars/avatar_6.png" },
    { name: "Kiki ", avatar: "/avatars/avatar_7.png" },
  ],
  phoneNumber: "123-456-7890",
  emailAddress: "main.office@example.com",
  officeCapacity: 50,
  address: "123 Main St, Anytown, USA",
};
