import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import JobListings from './components/JobListings';
import JobDetail from './components/JobDetail';
import EmployeeDashboard from './components/EmployeeDashboard';
import EmployerDashboard from './components/EmployerDashboard';
import EmployeeProfile from './components/EmployeeProfile';
import EmployerProfile from './components/EmployerProfile';
import AuthModal from './components/AuthModal';
import Toast from './components/Toast';

type Page = 'home' | 'jobs' | 'job-detail' | 'employee-dashboard' | 'employer-dashboard' | 'employee-profile' | 'employer-profile';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [userRole, setUserRole] = useState<'employee' | 'employer' | null>(null);
  const [showAuthModal, setShowAuthModal] = useState<'login' | 'register' | null>(null);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [searchParams, setSearchParams] = useState<any>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const handleNavigate = (page: Page, data?: any) => {
    if (page === 'job-detail') {
      setSelectedJob(data);
    } else if (page === 'jobs' && data) {
      setSearchParams(data);
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleRoleSwitch = (role: 'employee' | 'employer' | null) => {
    setUserRole(role);
    if (role === null) {
      setCurrentPage('home');
      setToast({ message: 'Logged out successfully', type: 'success' });
    } else {
      setToast({ message: `Logged in as ${role}`, type: 'success' });
    }
  };

  const handleAuthSuccess = (role: 'employee' | 'employer') => {
    setUserRole(role);
    setShowAuthModal(null);
    setToast({ message: `Welcome! Logged in as ${role}`, type: 'success' });
    if (role === 'employee') {
      handleNavigate('employee-dashboard');
    } else {
      handleNavigate('employer-dashboard');
    }
  };

  const handleShowAuth = (mode: 'login' | 'register' = 'login') => {
    if (selectedJob) {
      setSelectedJob(null);
    }
    setShowAuthModal(mode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'jobs':
        return <JobListings onNavigate={handleNavigate} initialSearch={searchParams} />;
      case 'employee-dashboard':
        return <EmployeeDashboard onNavigate={handleNavigate} />;
      case 'employer-dashboard':
        return <EmployerDashboard onNavigate={handleNavigate} />;
      case 'employee-profile':
        return <EmployeeProfile onNavigate={handleNavigate} />;
      case 'employer-profile':
        return <EmployerProfile onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        userRole={userRole}
        onRoleSwitch={handleRoleSwitch}
        onShowAuth={handleShowAuth}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {renderPage()}

      {selectedJob && (
        <JobDetail
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          userRole={userRole}
          onShowAuth={() => handleShowAuth('login')}
        />
      )}

      {showAuthModal && (
        <AuthModal
          mode={showAuthModal}
          onClose={() => setShowAuthModal(null)}
          onSuccess={handleAuthSuccess}
        />
      )}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default App;
