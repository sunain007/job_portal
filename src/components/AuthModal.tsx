import { X } from 'lucide-react';
import { useState } from 'react';

interface AuthModalProps {
  mode: 'login' | 'register';
  onClose: () => void;
  onSuccess: (role: 'employee' | 'employer') => void;
}

export default function AuthModal({ mode, onClose, onSuccess }: AuthModalProps) {
  const [authMode, setAuthMode] = useState(mode);
  const [userRole, setUserRole] = useState<'employee' | 'employer'>('employee');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess(userRole);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 fade-in">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full slide-in">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-xl">
          <h3 className="font-semibold">
            {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">I am a:</p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setUserRole('employee')}
                className={`p-4 border-2 rounded-lg transition-all ${
                  userRole === 'employee'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <p className="font-semibold text-gray-900">Job Seeker</p>
                <p className="text-xs text-gray-600 mt-1">Looking for jobs</p>
              </button>
              <button
                onClick={() => setUserRole('employer')}
                className={`p-4 border-2 rounded-lg transition-all ${
                  userRole === 'employer'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <p className="font-semibold text-gray-900">Employer</p>
                <p className="text-xs text-gray-600 mt-1">Hiring talent</p>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {authMode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {userRole === 'employer' ? 'Company Name' : 'Full Name'}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={userRole === 'employer' ? 'Your company name' : 'Your full name'}
                  className="input-field"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input-field"
                required
              />
            </div>

            {authMode === 'login' && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button type="submit" className="btn btn-primary w-full">
              {authMode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {authMode === 'login' ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {authMode === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t">
            <p className="text-xs text-gray-500 text-center">
              This is a demo prototype. Authentication is simulated for demonstration purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
