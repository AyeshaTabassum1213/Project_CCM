import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface GenderSelectionProps {
  onGenderSelect: (gender: 'male' | 'female') => void;
}

const GenderSelection: React.FC<GenderSelectionProps> = ({ onGenderSelect }) => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-accent-900 mb-4 font-serif">
            Who is filling this form?
          </h1>
          <p className="text-lg text-accent-600">
            Please select the gender to proceed with the appropriate form
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card hover className="text-center cursor-pointer" onClick={() => onGenderSelect('female')}>
            <div className="py-8">
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-person-dress text-pink-600 text-4xl"></i>
              </div>
              <h2 className="text-2xl font-semibold text-accent-800 mb-4">Female</h2>
              <p className="text-accent-600 mb-6">Fill form for female candidate</p>
              <Button onClick={() => onGenderSelect('female')} className="w-full">
                <i className="bi bi-arrow-right"></i>
                Continue as Female
              </Button>
            </div>
          </Card>

          <Card hover className="text-center cursor-pointer" onClick={() => onGenderSelect('male')}>
            <div className="py-8">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-person text-blue-600 text-4xl"></i>
              </div>
              <h2 className="text-2xl font-semibold text-accent-800 mb-4">Male</h2>
              <p className="text-accent-600 mb-6">Fill form for male candidate</p>
              <Button onClick={() => onGenderSelect('male')} className="w-full">
                <i className="bi bi-arrow-right"></i>
                Continue as Male
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto shadow-lg">
            <div className="flex items-start gap-4">
              <i className="bi bi-info-circle-fill text-primary-600 text-xl mt-1"></i>
              <div className="text-left">
                <h3 className="font-semibold text-accent-800 mb-2">Information</h3>
                <p className="text-accent-600">
                  Your information will be kept confidential and only shared with potential matches after your approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderSelection;
