"use client";

import React, { useState } from "react";
import Image from "next/image";

import OfficeCard from "@/components/OfficeCard";
import StaffMembersSearch from "@/components/StaffMembersSearch";
import StaffMember from "@/components/StaffMember";
import RoundButton from "@/components/round-button";


const OfficeDetails = () => {
  const [query, setQuery] = useState<string>("");
  const [filteredStaffMembers, setFilteredStaffMembers] = useState<any>();

  const handleClick = () => {
    alert('Button clicked!');
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
          <StaffMember key={name} name={name} avatar={avatar} />
        ))}
      </div>
      <RoundButton onClick={handleClick} />
    </>
  );
};

export default OfficeDetails;

const offices: any = {
  officeName: "Main Office",
  staffMembersList: [
    { name: "Neville ", avatar: "/avatars/Avatar_1.png" },
    { name: "John ", avatar: "/avatars/Avatar_2.png" },
    { name: "Kiki ", avatar: "/avatars/Avatar_3.png" },
    { name: "Neville ", avatar: "/avatars/Avatar_4.png" },
    { name: "John ", avatar: "/avatars/Avatar_5.png" },
    { name: "Kiki ", avatar: "/avatars/Avatar_6.png" },
    { name: "Kiki ", avatar: "/avatars/Avatar_7.png" },
  ],
  phoneNumber: "123-456-7890",
  emailAddress: "main.office@example.com",
  officeCapacity: 50,
  address: "123 Main St, Anytown, USA",
};
