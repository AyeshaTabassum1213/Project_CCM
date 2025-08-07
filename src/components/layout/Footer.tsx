import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg mr-3">
                <i className="bi bi-heart-fill text-white text-lg"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif">Chishti Marriage Consultants</h3>
                <p className="text-sm text-accent-300">چشتی میرج کنسلٹنٹ اینڈ چشتی میرج گروپس</p>
              </div>
            </div>
            <p className="text-accent-300 text-sm leading-relaxed">
              Professional matrimonial services connecting families with trust and dignity.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <i className="bi bi-whatsapp text-green-400"></i>
                <div>
                  <p className="text-sm text-accent-300">WhatsApp Only</p>
                  <p className="text-white">+92 327 7652785</p>
                  <p className="text-white">+92 314 2441480</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="bi bi-telephone text-primary-400"></i>
                <div>
                  <p className="text-sm text-accent-300">SIM Call Only</p>
                  <p className="text-white">0336-7690594</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Important Notice</h4>
            <div className="bg-accent-800 p-4 rounded-lg">
              <p className="text-sm text-accent-200 mb-2">
                کسی بھی پروفائل پہ ری ایکٹ نہ کریں پلیز۔ اگر کوئی پروفائل پسند آتی ہے تو ہم سے رابطہ کریں۔
              </p>
              <p className="text-sm text-accent-200">
                Please do not react to any profile. If you like any profile, contact us directly.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-700 mt-8 pt-8 text-center">
          <p className="text-accent-400 text-sm">
            © 2025 Chishti Marriage Consultants & Marriage Groups. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
