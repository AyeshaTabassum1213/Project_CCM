import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface SuccessPageProps {
  onNavigate: (page: string) => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ onNavigate }) => {
  const handleWhatsAppContact = () => {
    const message = 'Maine form submit kardia please check';
    const whatsappUrl = `https://wa.me/923426941091?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center py-12">
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="bi bi-check-circle-fill text-green-600 text-4xl"></i>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-accent-900 mb-4 font-serif">
            Form Submitted Successfully!
          </h1>
          
          <p className="text-lg text-accent-600 mb-8 leading-relaxed">
            Thank you for submitting your profile. We have received your information and will contact you shortly.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-blue-800 mb-3">What happens next?</h3>
            <div className="text-left space-y-2 text-blue-700">
              <div className="flex items-center gap-3">
                <i className="bi bi-1-circle-fill text-blue-600"></i>
                <span>Our team will review your profile</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="bi bi-2-circle-fill text-blue-600"></i>
                <span>We will contact you for verification</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="bi bi-3-circle-fill text-blue-600"></i>
                <span>Your profile will be added to our database</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="bi bi-4-circle-fill text-blue-600"></i>
                <span>We will start looking for suitable matches</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button onClick={handleWhatsAppContact} size="lg" className="w-full sm:w-auto">
              <i className="bi bi-whatsapp"></i>
              Contact Us on WhatsApp
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => onNavigate('home')} variant="outline">
                <i className="bi bi-house"></i>
                Back to Home
              </Button>
              <Button onClick={() => onNavigate('profiles')} variant="outline">
                <i className="bi bi-people"></i>
                View Profiles
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-accent-200">
            <p className="text-sm text-accent-500">
              For any queries, contact us on WhatsApp: +92 327 7652785
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SuccessPage;
