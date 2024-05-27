export interface StaffMemberType {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface OfficeData {
  officeId: string;
  officeName: string;
  address: string;
  emailAddress: string;
  phoneNumber: string;
  maxCapacity: number;
  color: string;
  staffMembersList: StaffMemberType[];
}


