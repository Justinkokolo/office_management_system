import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { StaffMemberType } from "@/types/office";

interface StaffMembersSearchProps {
  setQuery: (query: string) => void;
  query: string;
  setFilteredStaffMembers: any;
  staffMembersList: StaffMemberType[];
}

const StaffMembersSearch: React.FC<StaffMembersSearchProps> = ({
  setQuery,
  query,
  setFilteredStaffMembers,
  staffMembersList,
}) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);
    setFilteredStaffMembers(
      staffMembersList.filter((staffMember: StaffMemberType) =>
        staffMember.firstName.toLowerCase().includes(value)
      )
    );
  };

  return (
    <div className="relative bg-white rounded mt-3 my-5">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        className="w-full pl-3 pr-10 py-3  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search"
      />
      <Image
        src="/icons/search_icon.svg"
        alt="Search Icon"
        width={24}
        height={24}
        className="absolute top-4 right-2"
      />
    </div>
  );
};

export default StaffMembersSearch;
