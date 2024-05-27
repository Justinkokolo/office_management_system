"use client";

import React, { useState } from "react";
import Image from "next/image";

interface StaffMemberProps {
  name: string;
  avatar: string;
  onClick: () => void;
}

const StaffMember: React.FC<StaffMemberProps> = ({ name, avatar, onClick }) => {
  return (
    <div className="flex justify-between mb-7 justify-items-center">
      <div className="flex gap-10 justify-items-center items-center">
        <Image src={avatar} width={52} height={52} alt="avatar" />
        <p className="text-base font-medium">{name}</p>
      </div>
      <div onClick={onClick}>
        <Image
          src="icons/tree_dots_icon.svg"
          width={6}
          height={6}
          alt="action"
        />
      </div>
    </div>
  );
};

export default StaffMember;
