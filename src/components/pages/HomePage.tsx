import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: 'bi-shield-check',
      title: 'Trusted Service',
      description: 'Professional matrimonial consultancy with years of experience'
    },
    {
      icon: 'bi-people-fill',
      title: 'Quality Profiles',
      description: 'Verified profiles from respectable families'
    },
    {
      icon: 'bi-heart-fill',
      title: 'Successful Matches',
      description: 'Hundreds of successful marriages facilitated'
    },
    {
      icon: 'bi-telephone-fill',
      title: '24/7 Support',
      description: 'Always available for consultation and guidance'
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full mb-6">
                <i className="bi bi-heart-fill text-white text-3xl"></i>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-900 mb-4 font-serif">
                Chishti Marriage Consultants
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-accent-700 mb-6 font-sans">
                چشتی میرج کنسلٹنٹ اینڈ چشتی میرج گروپس
              </h2>
              <p className="text-lg sm:text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed">
                Professional matrimonial services connecting hearts and families with trust, dignity, and Islamic values.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={() => onNavigate('fill-form')}
                size="lg"
                className="w-full sm:w-auto"
              >
                <i className="bi bi-file-earmark-text"></i>
                Fill Form
              </Button>
              <Button
                onClick={() => onNavigate('profiles')}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <i className="bi bi-people"></i>
                View Profiles
              </Button>
              <Button
                onClick={() => window.open('https://wa.me/923277652785', '_blank')}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <i className="bi bi-whatsapp"></i>
                Contact Us
              </Button>
            </div>

            {/* Important Notice */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <i className="bi bi-exclamation-triangle-fill text-red-500 text-xl mt-1"></i>
                <div className="text-left">
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-accent-900 mb-4 font-serif">
              Why Choose Us?
            </h2>
            <p className="text-lg text-accent-600 max-w-2xl mx-auto">
              We provide professional matrimonial services with complete confidentiality and Islamic values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="text-center">
                <div className="bg-gradient-to-r from-primary-100 to-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-primary-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-accent-800 mb-3">{feature.title}</h3>
                <p className="text-accent-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Successful Marriages</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Registered Families</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
