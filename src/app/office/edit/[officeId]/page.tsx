"use client";
import React from "react";
import ManageOfficePage from "@/components/office/manage-office";

const EditOfficePage = ({ params }: { params: { officeId: string } }) => {
  const { officeId } = params;

  return (
    <div>
      <ManageOfficePage isEditMode={true} officeId={officeId} />
    </div>
  );
};

export default EditOfficePage;
