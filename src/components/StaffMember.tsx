"use client";

import React, { useState } from "react";
import Image from "next/image";

interface StaffMemberProps {
  name: string;
  avatar: string; 
}

const StaffMember: React.FC<StaffMemberProps> = ({ name, avatar }) => {
  return (
    <div>
      <div>
        <div>
           <Image
              src="avatars/Avatar_1.png"
              width={24}
              height={24}
              alt="avatar"
            />
            <p></p>
          </div>
          <Image
              src="icons/tree_dots_icon.svg"
              width={24}
              height={24}
              alt="action"
            />
        </div>

    </div>
  );
};

export default StaffMember;
