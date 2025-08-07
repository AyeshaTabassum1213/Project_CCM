import React, { useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Select from '../ui/Select';
import { ProfileData } from '../../types';

interface ProfilesPageProps {
  profiles: ProfileData[];
}

const ProfilesPage: React.FC<ProfilesPageProps> = ({ profiles }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');

  const approvedProfiles = profiles.filter(profile => profile.approved);

  const filteredProfiles = approvedProfiles.filter(profile => {
    const matchesSearch = profile.personalInfo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.residenceInfo.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.personalInfo.qualifications.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesGender = !genderFilter || profile.personalInfo.gender === genderFilter;
    const matchesCity = !cityFilter || profile.residenceInfo.city.toLowerCase().includes(cityFilter.toLowerCase());
    const matchesAge = !ageFilter || (
      ageFilter === '18-25' && profile.personalInfo.age >= 18 && profile.personalInfo.age <= 25 ||
      ageFilter === '26-35' && profile.personalInfo.age >= 26 && profile.personalInfo.age <= 35 ||
      ageFilter === '36-45' && profile.personalInfo.age >= 36 && profile.personalInfo.age <= 45 ||
      ageFilter === '46+' && profile.personalInfo.age >= 46
    );

    return matchesSearch && matchesGender && matchesCity && matchesAge;
  });

  const genderOptions = [
    { value: '', label: 'All Genders' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ];

  const ageOptions = [
    { value: '', label: 'All Ages' },
    { value: '18-25', label: '18-25 years' },
    { value: '26-35', label: '26-35 years' },
    { value: '36-45', label: '36-45 years' },
    { value: '46+', label: '46+ years' }
  ];

  const handleContactClick = (profileId: string) => {
    const message = `Profile ID ${profileId} ke baare mein maloomat chahiye`;
    const whatsappUrl = `https://wa.me/923426941091?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-accent-900 mb-4 font-serif">
            Browse Profiles
          </h1>
          <p className="text-lg text-accent-600 max-w-2xl mx-auto">
            Find your perfect match from our verified profiles. Contact us for more details about any profile.
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <h2 className="text-xl font-semibold text-accent-800 mb-4">Search & Filter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Input
              label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Name, city, qualification..."
            />
            <Select
              label="Gender"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              options={genderOptions}
            />
            <Input
              label="City"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              placeholder="Filter by city"
            />
            <Select
              label="Age Range"
              value={ageFilter}
              onChange={(e) => setAgeFilter(e.target.value)}
              options={ageOptions}
            />
          </div>
        </Card>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <i className="bi bi-exclamation-triangle-fill text-red-500 text-xl mt-1"></i>
            <div>
              <h3 className="font-semibold text-red-800 mb-2">Important Notice / اہم نوٹس</h3>
              <p className="text-red-700 mb-2">
                کسی بھی پروفائل پہ ری ایکٹ نہ کریں پلیز۔ اگر کوئی پروفائل پسند آتی ہے تو ہم سے رابطہ کریں۔
              </p>
              <p className="text-red-700">
                Please do not react to any profile. If you like any profile, contact us directly through WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Profiles Grid */}
        {filteredProfiles.length === 0 ? (
          <Card className="text-center py-12">
            <i className="bi bi-search text-4xl text-accent-400 mb-4"></i>
            <h3 className="text-xl font-semibold text-accent-700 mb-2">No profiles found</h3>
            <p className="text-accent-600">Try adjusting your search criteria or check back later for new profiles.</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfiles.map((profile) => (
              <Card key={profile.id} hover className="h-full">
                <div className="flex flex-col h-full">
                  {/* Profile Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      profile.personalInfo.gender === 'male' 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-pink-100 text-pink-600'
                    }`}>
                      <i className={`bi ${profile.personalInfo.gender === 'male' ? 'bi-person' : 'bi-person-dress'} text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-accent-800">
                        {profile.residenceInfo.nationality} Nationality Holder | {profile.personalInfo.gender === 'male' ? 'Male' : 'Female'}
                      </h3>
                      <p className="text-sm text-accent-600">Profile ID: {profile.id}</p>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="space-y-3 flex-grow">
                    <div className="flex items-center gap-2">
                      <i className="bi bi-calendar text-primary-600"></i>
                      <span className="text-sm text-accent-700">
                        Age: {profile.personalInfo.age} | Height: {profile.personalInfo.height}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <i className="bi bi-mortarboard text-primary-600"></i>
                      <span className="text-sm text-accent-700">
                        {profile.personalInfo.qualifications}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <i className="bi bi-briefcase text-primary-600"></i>
                      <span className="text-sm text-accent-700">
                        {profile.personalInfo.jobBusiness} - {profile.personalInfo.jobLocation}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <i className="bi bi-geo-alt text-primary-600"></i>
                      <span className="text-sm text-accent-700">
                        {profile.residenceInfo.city}, {profile.residenceInfo.area} | {profile.residenceInfo.ownRent} House
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <i className="bi bi-search-heart text-primary-600"></i>
                      <span className="text-sm text-accent-700">
                        Looking for: {profile.partnerRequirements.maritalStatus} | Age {profile.partnerRequirements.ageRange} | {profile.partnerRequirements.sect} | {profile.partnerRequirements.qualification}
                      </span>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div className="mt-6 pt-4 border-t border-accent-200">
                    <Button
                      onClick={() => handleContactClick(profile.id)}
                      className="w-full"
                      variant="secondary"
                    >
                      <i className="bi bi-whatsapp"></i>
                      Contact Us on WhatsApp
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-accent-800 mb-4">For More Information</h3>
            <div className="space-y-2 text-accent-600">
              <p><strong>WhatsApp Only:</strong> +92 327 7652785, +92 314 2441480</p>
              <p><strong>SIM Call Only:</strong> 0336-7690594</p>
            </div>
            <div className="mt-4">
              <Button
                onClick={() => window.open('https://wa.me/923277652785', '_blank')}
                variant="secondary"
              >
                <i className="bi bi-whatsapp"></i>
                Contact on WhatsApp
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilesPage;
