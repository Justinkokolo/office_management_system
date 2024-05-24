import { ChangeEvent } from 'react';

interface StaffMembersSearchProps {
  setQuery: (query: string) => void;
  query: string;
  staffMembers: any; 
}

const StaffMembersSearch: React.FC<StaffMembersSearchProps> = ({ setQuery, query, staffMembers }) => {

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        className="p-2 border rounded"
        placeholder="Search"
      />
    </div>
  );
};

export default StaffMembersSearch;
