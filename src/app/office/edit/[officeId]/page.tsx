"use client";
import React from "react";
import ManageOfficePage from "@/components/office/manage-office";

const EditOfficePage = ({ params }: { params: { officeId: string } }) => {
  const { officeId } = params;

  return (
    <>
      <ManageOfficePage isEditMode={true} officeId={officeId} />
    </>
  );
};

export default EditOfficePage;
