export interface PersonalInfo {
  gender: 'male' | 'female';
  name: string;
  maritalStatus: string;
  age: number;
  height: string;
  disability: string;
  sect: string;
  caste: string;
  motherTongue: string;
  nationality: string;
  qualifications: string;
  jobBusiness: string;
  jobLocation: string;
  jobDescription: string;
  income: string;
}

export interface FamilyInfo {
  fatherOccupation: string;
  motherOccupation: string;
  brothers: number;
  sisters: number;
  marriedSiblings: number;
  familyStatus: string;
}

export interface ResidenceInfo {
  city: string;
  area: string;
  homeSize: string;
  ownRent: string;
  ethnicity: string;
  visaStatus: string;
}

export interface PartnerRequirements {
  ageRange: string;
  maritalStatus: string;
  sect: string;
  height: string;
  caste: string;
  qualification: string;
  cityArea: string;
  otherRequirements: string;
}

export interface ContactDetails {
  contactName: string;
  whatsappNumber: string;
  email: string;
}

export interface ProfileData {
  id: string;
  personalInfo: PersonalInfo;
  familyInfo: FamilyInfo;
  residenceInfo: ResidenceInfo;
  partnerRequirements: PartnerRequirements;
  contactDetails: ContactDetails;
  adminNotes: string;
  submittedAt: string;
  approved: boolean;
}
