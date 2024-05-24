"use client";

import React, { useState } from "react";
import Image from "next/image";

interface OfficeCardProps {
  officeName: string;
  staffMembers: string;
  phoneNumber: string;
  emailAddress: string;
  officeCapacity: number;
  address: string;
}

const OfficeCard: React.FC<OfficeCardProps> = ({
  officeName,
  staffMembers,
  phoneNumber,
  emailAddress,
  officeCapacity,
  address,
}) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleToggleMoreInfo = () => {
    setShowMoreInfo((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-5 mt-7 bg-white	p-7 rounded-md border-l-[15px] border-indigo-500">
      <div className=" flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">{officeName}</h1>
          <Image src="icons/edit_icon.svg" width={24} height={24} alt="Edit" />
        </div>
        <div className="flex  gap-5">
          <Image
            src="icons/people_icon.svg"
            width={24}
            height={24}
            alt="people"
          />
          <p>
            <strong>5</strong> Staff Members in Office
          </p>
        </div>
        <hr />
        <div
          className="flex  gap-5 cursor-pointer self-center"
          onClick={handleToggleMoreInfo}
        >
          <p>More Info</p>
          <Image
            src={`icons/chevron_up_icon.svg`}
            width={24}
            height={24}
            alt={`chevron ${showMoreInfo ? "down" : "up"}`}
            className={`${showMoreInfo ? "rotate-180" : "up"}`}
          />
        </div>
      </div>
      {showMoreInfo && (
        <div className="flex flex-col gap-5">
          <div className="flex  gap-5">
            <Image
              src="icons/phone_icon.svg"
              width={24}
              height={24}
              alt="Staff Icon"
            />
            <p>{phoneNumber}</p>
          </div>
          <div className="flex  gap-5">
            <Image
              src="icons/email_icon.svg"
              width={24}
              height={24}
              alt="Staff Icon"
            />
            <p>{emailAddress}</p>
          </div>
          <div className="flex  gap-5">
            <Image
              src="icons/people_2_icon.svg"
              width={24}
              height={24}
              alt="Staff Icon"
            />
            <p>Office Capacity: {officeCapacity}</p>
          </div>
          <div className="flex  gap-5">
            <Image
              src="icons/location_icon.svg"
              width={24}
              height={24}
              alt="Staff Icon"
            />
            <p>{address}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfficeCard;
