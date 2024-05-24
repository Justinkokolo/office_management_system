import OfficeCard from "@/components/OfficeCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-5">
      <h1>All Offices</h1>
      {offices.map((office, index) => (
        <OfficeCard
          key={index}
          officeName={office.officeName}
          staffMembers={office.staffMembers}
          phoneNumber={office.phoneNumber}
          emailAddress={office.emailAddress}
          officeCapacity={office.officeCapacity}
          address={office.address}
        />
      ))}
    </div>
  );
}

const offices = [
  {
    officeName: "Main Office",
    staffMembers: "John Doe, Jane Smith, Bob Johnson",
    phoneNumber: "123-456-7890",
    emailAddress: "main.office@example.com",
    officeCapacity: 50,
    address: "123 Main St, Anytown, USA",
  },
  {
    officeName: "Branch Office 1",
    staffMembers: "Alice Brown, Chris Green, Dana White",
    phoneNumber: "234-567-8901",
    emailAddress: "branch1.office@example.com",
    officeCapacity: 30,
    address: "456 Oak St, Othertown, USA",
  },
  {
    officeName: "Branch Office 2",
    staffMembers: "Eve Black, Frank Blue, Grace Gray",
    phoneNumber: "345-678-9012",
    emailAddress: "branch2.office@example.com",
    officeCapacity: 40,
    address: "789 Pine St, Sometown, USA",
  },
  {
    officeName: "Branch Office 3",
    staffMembers: "Henry Yellow, Irene Orange, Jack Purple",
    phoneNumber: "456-789-0123",
    emailAddress: "branch3.office@example.com",
    officeCapacity: 35,
    address: "101 Maple St, Thistown, USA",
  },
  {
    officeName: "Branch Office 4",
    staffMembers: "Karen Red, Leo Lime, Mike Maroon",
    phoneNumber: "567-890-1234",
    emailAddress: "branch4.office@example.com",
    officeCapacity: 45,
    address: "202 Cedar St, Thatown, USA",
  },
  {
    officeName: "Branch Office 5",
    staffMembers: "Nina Pink, Oliver Olive, Paul Peach",
    phoneNumber: "678-901-2345",
    emailAddress: "branch5.office@example.com",
    officeCapacity: 60,
    address: "303 Birch St, Anothertown, USA",
  },
];
