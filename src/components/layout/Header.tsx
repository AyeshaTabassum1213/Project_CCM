import React, { useState } from 'react';
import Button from '../ui/Button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: 'bi-house' },
    { id: 'fill-form', label: 'Fill Form', icon: 'bi-file-earmark-text' },
    { id: 'profiles', label: 'View Profiles', icon: 'bi-people' },
    { id: 'contact', label: 'Contact Us', icon: 'bi-whatsapp' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-gradient-to-r from-primary-600 to-secondary-500 p-3 rounded-xl mr-4">
              <i className="bi bi-heart-fill text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-accent-800 font-serif">
                Chishti Marriage Consultants
              </h1>
              <p className="text-sm text-accent-600 font-sans">
                چشتی میرج کنسلٹنٹ اینڈ چشتی میرج گروپس
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-accent-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                <i className={item.icon}></i>
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-accent-600 hover:bg-accent-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-accent-200">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-accent-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <i className={item.icon}></i>
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
