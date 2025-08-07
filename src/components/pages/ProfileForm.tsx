import React, { useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import { ProfileData } from '../../types';

interface ProfileFormProps {
  gender: 'male' | 'female';
  onSubmit: (data: Omit<ProfileData, 'id' | 'submittedAt' | 'approved'>) => void;
  onBack: () => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ gender, onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    personalInfo: {
      gender,
      name: '',
      maritalStatus: '',
      age: 0,
      height: '',
      disability: '',
      sect: '',
      caste: '',
      motherTongue: '',
      nationality: '',
      qualifications: '',
      jobBusiness: '',
      jobLocation: '',
      jobDescription: '',
      income: ''
    },
    familyInfo: {
      fatherOccupation: '',
      motherOccupation: '',
      brothers: 0,
      sisters: 0,
      marriedSiblings: 0,
      familyStatus: ''
    },
    residenceInfo: {
      city: '',
      area: '',
      homeSize: '',
      ownRent: '',
      ethnicity: '',
      visaStatus: ''
    },
    partnerRequirements: {
      ageRange: '',
      maritalStatus: '',
      sect: '',
      height: '',
      caste: '',
      qualification: '',
      cityArea: '',
      otherRequirements: ''
    },
    contactDetails: {
      contactName: '',
      whatsappNumber: '',
      email: ''
    },
    adminNotes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const maritalStatusOptions = [
    { value: 'never-married', label: 'Never Married' },
    { value: 'divorced', label: 'Divorced' },
    { value: 'widowed', label: 'Widowed' }
  ];

  const sectOptions = [
    { value: 'sunni', label: 'Sunni' },
    { value: 'shia', label: 'Shia' },
    { value: 'other', label: 'Other' }
  ];

  const familyStatusOptions = [
    { value: 'upper-class', label: 'Upper Class' },
    { value: 'upper-middle', label: 'Upper Middle Class' },
    { value: 'middle-class', label: 'Middle Class' },
    { value: 'lower-middle', label: 'Lower Middle Class' }
  ];

  const ownRentOptions = [
    { value: 'own', label: 'Own' },
    { value: 'rent', label: 'Rent' },
    { value: 'family-owned', label: 'Family Owned' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <Button onClick={onBack} variant="outline" className="mb-4">
            <i className="bi bi-arrow-left"></i>
            Back to Gender Selection
          </Button>
          <h1 className="text-3xl sm:text-4xl font-bold text-accent-900 mb-4 font-serif">
            {gender === 'male' ? 'Male' : 'Female'} Profile Form
          </h1>
          <p className="text-lg text-accent-600">
            Please fill out all the required information accurately
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <Card>
            <h2 className="text-2xl font-semibold text-accent-800 mb-6 flex items-center gap-3">
              <i className="bi bi-person-circle text-primary-600"></i>
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                value={formData.personalInfo.name}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, name: e.target.value }
                })}
                required
              />
              <Select
                label="Marital Status"
                value={formData.personalInfo.maritalStatus}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, maritalStatus: e.target.value }
                })}
                options={maritalStatusOptions}
                required
              />
              <Input
                label="Age"
                type="number"
                value={formData.personalInfo.age}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, age: parseInt(e.target.value) }
                })}
                required
              />
              <Input
                label="Height"
                value={formData.personalInfo.height}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, height: e.target.value }
                })}
                placeholder="e.g., 5'6\"
                required
              />
              <Input
                label="Any Disability"
                value={formData.personalInfo.disability}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, disability: e.target.value }
                })}
                placeholder="None or specify"
              />
              <Select
                label="Sect / Maslak"
                value={formData.personalInfo.sect}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, sect: e.target.value }
                })}
                options={sectOptions}
                required
              />
              <Input
                label="Caste"
                value={formData.personalInfo.caste}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, caste: e.target.value }
                })}
                required
              />
              <Input
                label="Mother Tongue"
                value={formData.personalInfo.motherTongue}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, motherTongue: e.target.value }
                })}
                required
              />
              <Input
                label="Nationality"
                value={formData.personalInfo.nationality}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, nationality: e.target.value }
                })}
                required
              />
              <Input
                label="Qualification(s)"
                value={formData.personalInfo.qualifications}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, qualifications: e.target.value }
                })}
                required
              />
              <Input
                label="Job/Business"
                value={formData.personalInfo.jobBusiness}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, jobBusiness: e.target.value }
                })}
                required
              />
              <Input
                label="Job Location"
                value={formData.personalInfo.jobLocation}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, jobLocation: e.target.value }
                })}
                required
              />
            </div>
            <Textarea
              label="Job Description"
              value={formData.personalInfo.jobDescription}
              onChange={(e) => setFormData({
                ...formData,
                personalInfo: { ...formData.personalInfo, jobDescription: e.target.value }
              })}
              required
            />
            <Input
              label="Income"
              value={formData.personalInfo.income}
              onChange={(e) => setFormData({
                ...formData,
                personalInfo: { ...formData.personalInfo, income: e.target.value }
              })}
              placeholder="e.g., 50,000 PKR/month"
              required
            />
          </Card>

          {/* Family Information */}
          <Card>
            <h2 className="text-2xl font-semibold text-accent-800 mb-6 flex items-center gap-3">
              <i className="bi bi-house-heart text-primary-600"></i>
              Family Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Father Occupation"
                value={formData.familyInfo.fatherOccupation}
                onChange={(e) => setFormData({
                  ...formData,
                  familyInfo: { ...formData.familyInfo, fatherOccupation: e.target.value }
                })}
                required
              />
              <Input
                label="Mother Occupation"
                value={formData.familyInfo.motherOccupation}
                onChange={(e) => setFormData({
                  ...formData,
                  familyInfo: { ...formData.familyInfo, motherOccupation: e.target.value }
                })}
                required
              />
              <Input
                label="Number of Brothers"
                type="number"
                value={formData.familyInfo.brothers}
                onChange={(e) => setFormData({
                  ...formData,
                  familyInfo: { ...formData.familyInfo, brothers: parseInt(e.target.value) }
                })}
                required
              />
              <Input
                label="Number of Sisters"
                type="number"
                value={formData.familyInfo.sisters}
                onChange={(e) => setFormData({
                  ...formData,
                  familyInfo: { ...formData.familyInfo, sisters: parseInt(e.target.value) }
                })}
                required
              />
              <Input
                label="Married Siblings"
                type="number"
                value={formData.familyInfo.marriedSiblings}
                onChange={(e) => setFormData({
                  ...formData,
                  familyInfo: { ...formData.familyInfo, marriedSiblings: parseInt(e.target.value) }
                })}
                required
              />
              <Select
                label="Family Status"
                value={formData.familyInfo.familyStatus}
                onChange={(e) => setFormData({
                  ...formData,
                  familyInfo: { ...formData.familyInfo, familyStatus: e.target.value }
                })}
                options={familyStatusOptions}
                required
              />
            </div>
          </Card>

          {/* Residence Information */}
          <Card>
            <h2 className="text-2xl font-semibold text-accent-800 mb-6 flex items-center gap-3">
              <i className="bi bi-geo-alt text-primary-600"></i>
              Residence Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="City"
                value={formData.residenceInfo.city}
                onChange={(e) => setFormData({
                  ...formData,
                  residenceInfo: { ...formData.residenceInfo, city: e.target.value }
                })}
                required
              />
              <Input
                label="Area"
                value={formData.residenceInfo.area}
                onChange={(e) => setFormData({
                  ...formData,
                  residenceInfo: { ...formData.residenceInfo, area: e.target.value }
                })}
                required
              />
              <Input
                label="Home Size"
                value={formData.residenceInfo.homeSize}
                onChange={(e) => setFormData({
                  ...formData,
                  residenceInfo: { ...formData.residenceInfo, homeSize: e.target.value }
                })}
                placeholder="e.g., 10 Marla, 1 Kanal"
                required
              />
              <Select
                label="Own or Rent"
                value={formData.residenceInfo.ownRent}
                onChange={(e) => setFormData({
                  ...formData,
                  residenceInfo: { ...formData.residenceInfo, ownRent: e.target.value }
                })}
                options={ownRentOptions}
                required
              />
              <Input
                label="Ethnicity"
                value={formData.residenceInfo.ethnicity}
                onChange={(e) => setFormData({
                  ...formData,
                  residenceInfo: { ...formData.residenceInfo, ethnicity: e.target.value }
                })}
                required
              />
              <Input
                label="Visa Status"
                value={formData.residenceInfo.visaStatus}
                onChange={(e) => setFormData({
                  ...formData,
                  residenceInfo: { ...formData.residenceInfo, visaStatus: e.target.value }
                })}
                placeholder="e.g., Citizen, PR, Work Visa"
                required
              />
            </div>
          </Card>

          {/* Partner Requirements */}
          <Card>
            <h2 className="text-2xl font-semibold text-accent-800 mb-6 flex items-center gap-3">
              <i className="bi bi-heart text-primary-600"></i>
              Partner Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Required Age Range"
                value={formData.partnerRequirements.ageRange}
                onChange={(e) => setFormData({
                  ...formData,
                  partnerRequirements: { ...formData.partnerRequirements, ageRange: e.target.value }
                })}
                placeholder="e.g., 25-35"
                required
              />
              <Select
                label="Marital Status"
                value={formData.partnerRequirements.maritalStatus}
                onChange={(e) => setFormData({
                  ...formData,
                  partnerRequirements: { ...formData.partnerRequirements, maritalStatus: e.target.value }
                })}
                options={maritalStatusOptions}
                required
              />
              <Select
                label="Sect / Maslak"
                value={formData.partnerRequirements.sect}
                onChange={(e) => setFormData({
                  ...formData,
                  partnerRequirements: { ...formData.partnerRequirements, sect: e.target.value }
                })}
                options={sectOptions}
                required
              />
              <Input
                label="Preferred Height"
                value={formData.partnerRequirements.height}
                onChange={(e) => setFormData({
                  ...formData,
                  partnerRequirements: { ...formData.partnerRequirements, height: e.target.value }
                })}
                placeholder={`e.g., 5'8" or above`}
              />
              <Input
                label="Caste Preference"
                value={formData.partnerRequirements.caste}
                onChange={(e) => setFormData({
                  ...formData,
                  partnerRequirements: { ...formData.partnerRequirements, caste: e.target.value }
                })}
              />
              <Input
                label="Qualification"
                value={formData.partnerRequirements.qualification}
                onChange={(e) => setFormData({
                  ...formData,
                  partnerRequirements: { ...formData.partnerRequirements, qualification: e.target.value }
                })}
                placeholder="e.g., Graduate, Masters"
                required
              />
            </div>
            <Input
              label="City / Area Preference"
              value={formData.partnerRequirements.cityArea}
              onChange={(e) => setFormData({
                ...formData,
                partnerRequirements: { ...formData.partnerRequirements, cityArea: e.target.value }
              })}
              required
            />
            <Textarea
              label="Other Requirements"
              value={formData.partnerRequirements.otherRequirements}
              onChange={(e) => setFormData({
                ...formData,
                partnerRequirements: { ...formData.partnerRequirements, otherRequirements: e.target.value }
              })}
              placeholder="Any additional requirements or preferences"
            />
          </Card>

          {/* Contact Details */}
          <Card>
            <h2 className="text-2xl font-semibold text-accent-800 mb-6 flex items-center gap-3">
              <i className="bi bi-telephone text-primary-600"></i>
              Contact Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Contact Name"
                value={formData.contactDetails.contactName}
                onChange={(e) => setFormData({
                  ...formData,
                  contactDetails: { ...formData.contactDetails, contactName: e.target.value }
                })}
                required
              />
              <Input
                label="WhatsApp Number"
                value={formData.contactDetails.whatsappNumber}
                onChange={(e) => setFormData({
                  ...formData,
                  contactDetails: { ...formData.contactDetails, whatsappNumber: e.target.value }
                })}
                placeholder="+92 XXX XXXXXXX"
                required
              />
            </div>
            <Input
              label="Email Address (Optional)"
              type="email"
              value={formData.contactDetails.email}
              onChange={(e) => setFormData({
                ...formData,
                contactDetails: { ...formData.contactDetails, email: e.target.value }
              })}
            />
          </Card>

          {/* Admin Notes */}
          <Card>
            <h2 className="text-2xl font-semibold text-accent-800 mb-6 flex items-center gap-3">
              <i className="bi bi-chat-text text-primary-600"></i>
              Additional Notes (Optional)
            </h2>
            <Textarea
              label="Admin Notes"
              value={formData.adminNotes}
              onChange={(e) => setFormData({
                ...formData,
                adminNotes: e.target.value
              })}
              placeholder="Any additional information you would like to share"
            />
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              <i className="bi bi-check-circle"></i>
              Submit Profile
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
