import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import GenderSelection from './components/pages/GenderSelection';
import ProfileForm from './components/pages/ProfileForm';
import ProfilesPage from './components/pages/ProfilesPage';
import SuccessPage from './components/pages/SuccessPage';
import { ProfileData } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);
  const [profiles, setProfiles] = useState<ProfileData[]>([]);

  // Load profiles from localStorage on component mount
  useEffect(() => {
    const savedProfiles = localStorage.getItem('matrimonial-profiles');
    if (savedProfiles) {
      try {
        setProfiles(JSON.parse(savedProfiles));
      } catch (error) {
        console.error('Error loading profiles:', error);
      }
    } else {
      // Add some sample profiles for demonstration
      const sampleProfiles: ProfileData[] = [
        {
          id: 'PROF001',
          personalInfo: {
            gender: 'male',
            name: 'Ahmed Khan',
            maritalStatus: 'never-married',
            age: 28,
            height: '5\'10"',
            disability: 'None',
            sect: 'sunni',
            caste: 'Sheikh',
            motherTongue: 'Urdu',
            nationality: 'Pakistani',
            qualifications: 'MBA - Finance',
            jobBusiness: 'Banking',
            jobLocation: 'Karachi',
            jobDescription: 'Senior Manager at National Bank',
            income: '150,000 PKR/month'
          },
          familyInfo: {
            fatherOccupation: 'Retired Government Officer',
            motherOccupation: 'Housewife',
            brothers: 2,
            sisters: 1,
            marriedSiblings: 1,
            familyStatus: 'middle-class'
          },
          residenceInfo: {
            city: 'Karachi',
            area: 'Defence',
            homeSize: '10 Marla',
            ownRent: 'own',
            ethnicity: 'Punjabi',
            visaStatus: 'Citizen'
          },
          partnerRequirements: {
            ageRange: '22-28',
            maritalStatus: 'never-married',
            sect: 'sunni',
            height: '5\'4" or above',
            caste: 'Any',
            qualification: 'Graduate minimum',
            cityArea: 'Karachi preferred',
            otherRequirements: 'Religious, family-oriented'
          },
          contactDetails: {
            contactName: 'Ahmed Khan',
            whatsappNumber: '+92 300 1234567',
            email: 'ahmed@example.com'
          },
          adminNotes: 'Verified profile, good family background',
          submittedAt: '2024-01-15',
          approved: true
        },
        {
          id: 'PROF002',
          personalInfo: {
            gender: 'female',
            name: 'Fatima Ali',
            maritalStatus: 'never-married',
            age: 25,
            height: '5\'5"',
            disability: 'None',
            sect: 'sunni',
            caste: 'Syed',
            motherTongue: 'Urdu',
            nationality: 'British',
            qualifications: 'Masters in Computer Science',
            jobBusiness: 'Software Engineer',
            jobLocation: 'London, UK',
            jobDescription: 'Senior Software Developer at Tech Company',
            income: '£45,000/year'
          },
          familyInfo: {
            fatherOccupation: 'Doctor',
            motherOccupation: 'Teacher',
            brothers: 1,
            sisters: 2,
            marriedSiblings: 0,
            familyStatus: 'upper-middle'
          },
          residenceInfo: {
            city: 'London',
            area: 'East London',
            homeSize: '3 Bedroom House',
            ownRent: 'own',
            ethnicity: 'Pakistani',
            visaStatus: 'British Citizen'
          },
          partnerRequirements: {
            ageRange: '26-35',
            maritalStatus: 'never-married',
            sect: 'sunni',
            height: '5\'8" or above',
            caste: 'Syed preferred',
            qualification: 'Masters minimum',
            cityArea: 'UK or willing to relocate',
            otherRequirements: 'Educated, practicing Muslim'
          },
          contactDetails: {
            contactName: 'Fatima Ali',
            whatsappNumber: '+44 7700 123456',
            email: 'fatima@example.com'
          },
          adminNotes: 'UK based, excellent profile',
          submittedAt: '2024-01-20',
          approved: true
        }
      ];
      setProfiles(sampleProfiles);
      localStorage.setItem('matrimonial-profiles', JSON.stringify(sampleProfiles));
    }
  }, []);

  const handleNavigation = (page: string) => {
    if (page === 'fill-form') {
      setCurrentPage('gender-selection');
    } else if (page === 'contact') {
      window.open('https://wa.me/923277652785', '_blank');
    } else {
      setCurrentPage(page);
    }
    setSelectedGender(null);
  };

  const handleGenderSelect = (gender: 'male' | 'female') => {
    setSelectedGender(gender);
    setCurrentPage('profile-form');
  };

  const handleFormSubmit = (formData: Omit<ProfileData, 'id' | 'submittedAt' | 'approved'>) => {
    const newProfile: ProfileData = {
      ...formData,
      id: `PROF${String(profiles.length + 1).padStart(3, '0')}`,
      submittedAt: new Date().toISOString().split('T')[0],
      approved: false // Profiles need admin approval
    };

    const updatedProfiles = [...profiles, newProfile];
    setProfiles(updatedProfiles);
    localStorage.setItem('matrimonial-profiles', JSON.stringify(updatedProfiles));
    
    setCurrentPage('success');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'gender-selection':
        return <GenderSelection onGenderSelect={handleGenderSelect} />;
      case 'profile-form':
        return selectedGender ? (
          <ProfileForm
            gender={selectedGender}
            onSubmit={handleFormSubmit}
            onBack={() => setCurrentPage('gender-selection')}
          />
        ) : (
          <GenderSelection onGenderSelect={handleGenderSelect} />
        );
      case 'profiles':
        return <ProfilesPage profiles={profiles} />;
      case 'success':
        return <SuccessPage onNavigate={handleNavigation} />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
