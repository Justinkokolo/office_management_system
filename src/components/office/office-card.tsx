//"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { OfficeData } from "@/types/office";

interface OfficeCardProps {
  officeData: OfficeData;
}

const OfficeCard: React.FC<OfficeCardProps> = ({ officeData }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleToggleMoreInfo = () => {
    setShowMoreInfo((prev) => !prev);
  };

  return (
    <div
      className={`flex flex-col gap-5 mt-7 bg-white	p-7 rounded-md`}
      style={{ borderLeft: `15px solid ${officeData.color}` }}
    >
      <div className=" flex flex-col gap-3">
        <div className="flex justify-between">
          <Link href={`office/${officeData.officeId}`}>
            <h1 className="text-2xl font-bold">{officeData.officeName}</h1>
          </Link>
          <Link href={`office/edit/${officeData.officeId}`}>
            <Image
              src="icons/edit_icon.svg"
              width={24}
              height={24}
              alt="Edit"
            />
          </Link>
        </div>
        <div className="flex  gap-5">
          <Image
            src="icons/people_icon.svg"
            width={24}
            height={24}
            alt="people"
          />
          <p>
            <strong>{officeData?.staffMembersList?.length}</strong> Staff
            Members in Office
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
            <p>{officeData.phoneNumber}</p>
          </div>
          <div className="flex  gap-5">
            <Image
              src="icons/email_icon.svg"
              width={24}
              height={24}
              alt="Staff Icon"
            />
            <p>{officeData.emailAddress}</p>
          </div>
          <div className="flex  gap-5">
            <Image
              src="icons/people_2_icon.svg"
              width={24}
              height={24}
              alt="Staff Icon"
            />
            <p>Office Capacity: {officeData.maxCapacity}</p>
          </div>
          <div className="flex  gap-5">
            <Image
              src="icons/location_icon.svg"
              width={24}
              height={24}
              alt="Staff Icon"
            />
            <p>{officeData.address}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfficeCard;
//"use client";
