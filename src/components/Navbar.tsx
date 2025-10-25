import { Menu, X, Briefcase, User, LogIn } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  userRole: 'employee' | 'employer' | null;
  onRoleSwitch: (role: 'employee' | 'employer' | null) => void;
  onShowAuth: (mode: 'login' | 'register') => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ userRole, onRoleSwitch, onShowAuth, currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 text-blue-600 font-bold text-xl"
            >
              <Briefcase size={28} />
              JobPortal
            </button>

            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => handleNavClick('jobs')}
                className={`${currentPage === 'jobs' ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
              >
                Find Jobs
              </button>
              {userRole === 'employer' && (
                <button
                  onClick={() => handleNavClick('employer-dashboard')}
                  className={`${currentPage === 'employer-dashboard' ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
                >
                  Dashboard
                </button>
              )}
              {userRole === 'employee' && (
                <button
                  onClick={() => handleNavClick('employee-dashboard')}
                  className={`${currentPage === 'employee-dashboard' ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors`}
                >
                  My Dashboard
                </button>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {userRole ? (
              <>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full text-sm">
                  <span className="text-gray-600">Demo as:</span>
                  <span className="font-semibold text-blue-600 capitalize">{userRole}</span>
                </div>
                <button
                  onClick={() => handleNavClick(userRole === 'employer' ? 'employer-profile' : 'employee-profile')}
                  className="btn btn-ghost flex items-center gap-2"
                >
                  <User size={18} />
                  Profile
                </button>
                <button
                  onClick={() => onRoleSwitch(null)}
                  className="btn btn-secondary text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onShowAuth('login')}
                  className="btn btn-ghost flex items-center gap-2"
                >
                  <LogIn size={18} />
                  Login
                </button>
                <button
                  onClick={() => onShowAuth('register')}
                  className="btn btn-primary"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t fade-in">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => handleNavClick('jobs')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Find Jobs
            </button>
            {userRole === 'employer' && (
              <button
                onClick={() => handleNavClick('employer-dashboard')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                Dashboard
              </button>
            )}
            {userRole === 'employee' && (
              <button
                onClick={() => handleNavClick('employee-dashboard')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                My Dashboard
              </button>
            )}
            {userRole ? (
              <>
                <div className="px-4 py-2 bg-blue-50 rounded-lg">
                  <span className="text-sm text-gray-600">Demo as: </span>
                  <span className="text-sm font-semibold text-blue-600 capitalize">{userRole}</span>
                </div>
                <button
                  onClick={() => handleNavClick(userRole === 'employer' ? 'employer-profile' : 'employee-profile')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  Profile
                </button>
                <button
                  onClick={() => onRoleSwitch(null)}
                  className="block w-full btn btn-secondary"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onShowAuth('login')}
                  className="block w-full btn btn-ghost"
                >
                  Login
                </button>
                <button
                  onClick={() => onShowAuth('register')}
                  className="block w-full btn btn-primary"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
