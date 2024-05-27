"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import OfficeCard from "@/components/office/office-card";
import StaffMember from "@/components/staff-member/staff-member";
import RoundButton from "@/components/buttons/round-button";
import AddStaffModal from "@/components/modal/add-staff-member-modal";
import DeleteStaffMemberModal from "@/components/modal/delete-staff-member";
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
  }, [officeId]);

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
    console.log(selectedStaffMember);

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
        <BackButton />
        <h1 className="text-2xl font-semibold my-10">No Office Found</h1>
        <RoundButton onClick={handleAddButtonClick} />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 mt-5">
        <BackButton />
        <h1>Office {office.officeName}</h1>
      </div>
      <div>
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
    </>
  );
};

export default OfficeDetails;
