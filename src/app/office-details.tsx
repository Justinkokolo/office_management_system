import React, { useState } from "react";
import Image from "next/image";

import OfficeCard from "@/components/OfficeCard";

const OfficeDetails = () => {

  const [query, setQuery] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<any>();

  return (
     <>
         <div>
      <h1>Office</h1>
      <Image
              src="icons/arrow_left.svg"
              width={24}
              height={24}
              alt="back button"
            />
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
              <h1>Staff Members in Office <span>11</span></h1>
        
        </div>
     </>
  );
};

export default OfficeDetails;

const offices : any = [
  {
    officeName: "Main Office",
    staffMembers: "John Doe, Jane Smith, Bob Johnson",
    phoneNumber: "123-456-7890",
    emailAddress: "main.office@example.com",
    officeCapacity: 50,
    address: "123 Main St, Anytown, USA",
  }, ]