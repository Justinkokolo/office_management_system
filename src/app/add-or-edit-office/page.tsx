"use client";
import React, { useState } from "react";
import Image from "next/image";
import ManageOfficePage from "@/components/manage_office";



const CreateOfficePage: React.FC = () => {

  return (
    <>
     <ManageOfficePage isEditMode={true} />
    </>
  );
};

export default CreateOfficePage;
