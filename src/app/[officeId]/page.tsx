"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import OfficeCard from "@/components/office/office-card";
import StaffMember from "@/components/staff-member/staff-member";
import RoundButton from "@/components/buttons/round-button";
import AddStaffModal from "@/components/modals/add-staff-member-modal";
import DeleteStaffMemberModal from "@/components/modals/delete-staff-member";
import BackButton from "@/components/buttons/back-button";
import StaffMembersSearch from "@/components/staff-member/staff-members-search";

import { OfficeData, StaffMemberType } from "@/types/office";

const OfficeDetails = ({ params }: { params: { officeId: string } }) => {
  const { officeId } = params;
  const [office, setOffice] = useState<OfficeData | null>(null);
  const [selectedStaffMember, setSelectedStaffMember] = useState<
    StaffMemberType | undefined
  >(undefined);

  const [query, setQuery] = useState<string>("");
  const [filteredStaffMembers, setFilteredStaffMembers] = useState<
    StaffMemberType[]
  >([]);
  const [editStaffMembers, setEditStaffMembers] = useState<boolean>(false);

  const [isAddStaffMemberModalOpen, setIsAddStaffMemberModalOpen] =
    useState(false);
  const [isDeleteStaffMemberModalOpen, setIsDeleteStaffMemberModalOpen] =
    useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedOffices = localStorage.getItem("offices");
    if (storedOffices) {
      const offices: OfficeData[] = JSON.parse(storedOffices);
      const foundOffice = offices.find(
        (office) => office.officeId === officeId
      );
      if (foundOffice) {
        setOffice(foundOffice);
        setFilteredStaffMembers(foundOffice.staffMembersList);
      }
    }
  }, [officeId, isAddStaffMemberModalOpen]);

  const onEditStaffMember = () => {
    setIsDeleteStaffMemberModalOpen(false);
    setEditStaffMembers(true);
    setIsAddStaffMemberModalOpen(true);
  };

  const handleAddButtonClick = () => {
    setIsAddStaffMemberModalOpen(true);
  };

  const handleStaffMemberClick = (staffMember: StaffMemberType) => {
    setSelectedStaffMember(staffMember);
    setIsDeleteStaffMemberModalOpen(true);
  };

  const handleCloseAddStaffMemberModal = () => {
    setIsAddStaffMemberModalOpen(false);
  };

  const handleCloseDeleteStaffMemberModal = () => {
    setIsDeleteStaffMemberModalOpen(false);
  };

  const onDeleteStaffMember = () => {
    if (!office) return;

    const updatedStaffMembers = office.staffMembersList.filter(
      (staffMember) => staffMember.id !== selectedStaffMember?.id
    );

    const updatedOffice: OfficeData = {
      ...office,
      staffMembersList: updatedStaffMembers,
    };

    const storedOffices = localStorage.getItem("offices");
    if (storedOffices) {
      const offices: OfficeData[] = JSON.parse(storedOffices);
      const updatedOffices = offices.map((off) =>
        off.officeId === updatedOffice.officeId ? updatedOffice : off
      );
      localStorage.setItem("offices", JSON.stringify(updatedOffices));
      setIsDeleteStaffMemberModalOpen(false);
    }

    setOffice(updatedOffice);
    setFilteredStaffMembers(updatedStaffMembers);
  };

  if (!office) {
    return (
      <div className="m-5">
        <BackButton onClick={() => router.back()} />
        <h1 className="text-2xl font-semibold my-10">Loading...</h1>
        <RoundButton onClick={handleAddButtonClick} />
      </div>
    );
  }

  return (
    <div className="page-width relative">
      <div className=" grid grid-cols-2 mt-5  md:my-7">
        <BackButton onClick={() => router.back()} />
        <h4>Office</h4>
      </div>
      <div className="flex flex-col gap-5">
        <OfficeCard officeData={office} />
        <StaffMembersSearch
          setQuery={setQuery}
          query={query}
          setFilteredStaffMembers={setFilteredStaffMembers}
          staffMembersList={office.staffMembersList}
        />
        <div className="flex text-2xl font-semibold justify-between mb-10">
          <h1>Staff Members in Office</h1>
          <h2>{office.staffMembersList.length}</h2>
        </div>

        {filteredStaffMembers.length > 0 ? (
          filteredStaffMembers.map((staffMember) => (
            <StaffMember
              key={staffMember.id}
              staffMember={staffMember}
              onClick={handleStaffMemberClick}
            />
          ))
        ) : (
          <p>No staff members found.</p>
        )}
      </div>
      <RoundButton onClick={handleAddButtonClick} />
      <AddStaffModal
        isOpen={isAddStaffMemberModalOpen}
        onClose={handleCloseAddStaffMemberModal}
        officeId={officeId}
        staffData={selectedStaffMember}
        isEditMode={editStaffMembers}
      />
      <DeleteStaffMemberModal
        isOpen={isDeleteStaffMemberModalOpen}
        onClose={handleCloseDeleteStaffMemberModal}
        onEditStaffMember={onEditStaffMember}
        onDeleteStaffMember={onDeleteStaffMember}
      />
    </div>
  );
};

export default OfficeDetails;
