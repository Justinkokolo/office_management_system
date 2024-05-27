"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/buttons/button";

const colors = [
  "#FF5733",
  "#FFBD33",
  "#DBFF33",
  "#75FF33",
  "#33FF57",
  "#33FFBD",
  "#33DBFF",
  "#3375FF",
  "#5733FF",
  "#BD33FF",
  "#FF33DB",
];

interface OfficeData {
  officeName: string;
  address: string;
  email: string;
  phoneNumber: string;
  maxCapacity: number;
  color: string;
}

interface ManageOfficePageProps {
  isEditMode?: boolean;
  officeData?: OfficeData;
  onDelete?: () => void;
}

const ManageOfficePage: React.FC<ManageOfficePageProps> = ({
  isEditMode = false,
  officeData,
  onDelete,
}) => {
  const [officeName, setOfficeName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [maxCapacity, setMaxCapacity] = useState<number | "">("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    if (isEditMode && officeData) {
      setOfficeName(officeData.officeName);
      setAddress(officeData.address);
      setEmail(officeData.email);
      setPhoneNumber(officeData.phoneNumber);
      setMaxCapacity(officeData.maxCapacity);
      setSelectedColor(officeData.color);
    } else {
      resetForm();
    }
  }, [isEditMode, officeData]);

  const resetForm = () => {
    setOfficeName("");
    setAddress("");
    setEmail("");
    setPhoneNumber("");
    setMaxCapacity("");
    setSelectedColor("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const officeDetails = {
      officeName,
      address,
      email,
      phoneNumber,
      maxCapacity,
      selectedColor,
    };

    if (isEditMode) {
      console.log("Updating Office:", officeDetails);
      // Handle update logic here
    } else {
      console.log("Creating New Office:", officeDetails);
      // Handle create logic here
    }

    resetForm();
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 mt-5">
        <Image
          src="/icons/arrow_left.svg"
          width={24}
          height={24}
          alt="back button"
        />
        <h1>{isEditMode ? "Edit Office" : "New Office"}</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          value={officeName}
          onChange={(e) => setOfficeName(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded-lg"
          placeholder="Office Name"
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded-lg"
          placeholder="Physical Address"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded-lg"
          placeholder="Email Address"
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded-lg"
          placeholder="Phone Number"
        />
        <input
          type="number"
          value={maxCapacity}
          onChange={(e) => setMaxCapacity(e.target.valueAsNumber || "")}
          className="w-full mb-4 px-3 py-2 border rounded-lg"
          placeholder="Maximum Capacity"
        />
        <div className="mb-4 flex flex-col gap-5">
          <h1 className="text-2xl font-extrabold">Office Colour</h1>

          <div className="flex flex-wrap justify-center gap-5">
            {colors.map((color) => (
              <div
                key={color}
                className={`w-10 h-10 cursor-pointer rounded-full ${
                  selectedColor === color ? "border-4 border-black" : "border"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        </div>
        <Button onClick={handleSubmit} name={isEditMode ? "UPDATE OFFICE" : "ADD OFFICE"} />
        {isEditMode && onDelete && (
          <Button onClick={onDelete} name="DELETE OFFICE" />
        )}
      </form>
    </div>
  );
};

export default ManageOfficePage;
