"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/buttons/button";
import BackButton from "@/components/buttons/back-button";

import { OfficeData, StaffMemberType } from "@/types/office";
import ColorPicker from "./color-picker";

interface ManageOfficePageProps {
  isEditMode?: boolean;
  officeId?: string;
}

const ManageOfficePage: React.FC<ManageOfficePageProps> = ({
  isEditMode = false,
  officeId,
}) => {
  const router = useRouter();

  const [officeName, setOfficeName] = useState("");
  const [address, setAddress] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [maxCapacity, setMaxCapacity] = useState<number | "">("");
  const [selectedColor, setSelectedColor] = useState("");
  const [staffMembersList, setStaffMembersList] = useState<StaffMemberType[]>(
    []
  );

  useEffect(() => {
    if (isEditMode && officeId) {
      const storedOffices = localStorage.getItem("offices");
      if (storedOffices) {
        const offices: OfficeData[] = JSON.parse(storedOffices);
        const officeData = offices.find(
          (office) => office.officeId === officeId
        );
        if (officeData) {
          setOfficeName(officeData.officeName);
          setAddress(officeData.address);
          setEmailAddress(officeData.emailAddress);
          setPhoneNumber(officeData.phoneNumber);
          setMaxCapacity(officeData.maxCapacity);
          setSelectedColor(officeData.color);
          setStaffMembersList(officeData.staffMembersList || []);
        }
      }
    } else {
      resetForm();
    }
  }, [isEditMode, officeId]);

  const resetForm = () => {
    setOfficeName("");
    setAddress("");
    setEmailAddress("");
    setPhoneNumber("");
    setMaxCapacity("");
    setSelectedColor("");
    setStaffMembersList([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const officeDetails: OfficeData = {
      officeId: officeId || new Date().getTime().toString(),
      officeName,
      address,
      emailAddress,
      phoneNumber,
      maxCapacity: maxCapacity as number,
      color: selectedColor,
      staffMembersList,
    };

    const storedOffices = localStorage.getItem("offices");
    let offices: OfficeData[] = storedOffices ? JSON.parse(storedOffices) : [];

    if (isEditMode && officeId) {
      offices = offices.map((office) =>
        office.officeId === officeId ? officeDetails : office
      );
    } else {
      offices.push(officeDetails);
    }

    localStorage.setItem("offices", JSON.stringify(offices));
    resetForm();
    router.push("/");
  };

  const handleOfficeDelete = () => {
    if (officeId) {
      const storedOffices = localStorage.getItem("offices");
      if (storedOffices) {
        let offices: OfficeData[] = JSON.parse(storedOffices);
        offices = offices.filter((office) => office.officeId !== officeId);
        localStorage.setItem("offices", JSON.stringify(offices));
        resetForm();
      }
    }
  };

  const inputFields = [
    {
      type: "text",
      value: officeName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setOfficeName(e.target.value),
      placeholder: "Office Name",
    },
    {
      type: "text",
      value: address,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setAddress(e.target.value),
      placeholder: "Physical Address",
    },
    {
      type: "email",
      value: emailAddress,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmailAddress(e.target.value),
      placeholder: "Email Address",
    },
    {
      type: "text",
      value: phoneNumber,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setPhoneNumber(e.target.value),
      placeholder: "Phone Number",
    },
    {
      type: "number",
      value: maxCapacity,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setMaxCapacity(e.target.valueAsNumber || ""),
      placeholder: "Maximum Capacity",
    },
  ];

  return (
    <div className="page-width flex flex-col gap-5">
      <div className="grid grid-cols-2 mt-5 mb-10">
        <BackButton onClick={() => router.back()} />
        <h4>{isEditMode ? "Edit Office" : "New Office"}</h4>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-5">
        {inputFields.map((field, index) => (
          <input
            key={index}
            type={field.type}
            value={field.value}
            onChange={field.onChange}
            className="w-full mb-4 px-3 py-2  rounded-lg"
            placeholder={field.placeholder}
          />
        ))}
        <ColorPicker
          selectedColor={selectedColor}
          onSelectColor={setSelectedColor}
        />
        <Button
          onClick={handleSubmit}
          name={isEditMode ? "UPDATE OFFICE" : "ADD OFFICE"}
        />
        {isEditMode && (
          <Button
            onClick={handleOfficeDelete}
            color="white"
            name="DELETE OFFICE"
          />
        )}
      </form>
    </div>
  );
};

export default ManageOfficePage;
