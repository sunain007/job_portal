import { User, FileText, Bookmark, Briefcase, Upload, Eye } from 'lucide-react';
import { mockApplications, mockResumes, mockJobs } from '../data/mockData';

interface EmployeeDashboardProps {
  onNavigate: (page: string, data?: any) => void;
}

export default function EmployeeDashboard({ onNavigate }: EmployeeDashboardProps) {
  const savedJobs = mockJobs.slice(2, 5);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Shortlisted':
        return 'badge-warning';
      case 'Interview':
        return 'badge-success';
      default:
        return 'badge-info';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="mb-2">My Dashboard</h2>
          <p className="text-gray-600">Track your job applications and manage your profile</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Briefcase className="text-blue-600" size={24} />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{mockApplications.length}</p>
            <p className="text-sm text-gray-600">Applications</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Eye className="text-yellow-600" size={24} />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {mockApplications.filter((app) => app.status === 'Shortlisted').length}
            </p>
            <p className="text-sm text-gray-600">Shortlisted</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <User className="text-green-600" size={24} />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {mockApplications.filter((app) => app.status === 'Interview').length}
            </p>
            <p className="text-sm text-gray-600">Interviews</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Bookmark className="text-purple-600" size={24} />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{savedJobs.length}</p>
            <p className="text-sm text-gray-600">Saved Jobs</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="card p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">My Applications</h3>
                <button
                  onClick={() => onNavigate('jobs')}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Browse Jobs
                </button>
              </div>

              {mockApplications.length === 0 ? (
                <div className="text-center py-8">
                  <Briefcase className="mx-auto text-gray-400 mb-3" size={48} />
                  <p className="text-gray-500 mb-4">No applications yet</p>
                  <button
                    onClick={() => onNavigate('jobs')}
                    className="btn btn-primary"
                  >
                    Start Applying
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {mockApplications.map((app) => (
                    <div
                      key={app.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                            {app.logo}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{app.jobTitle}</h4>
                            <p className="text-sm text-gray-600">{app.company}</p>
                          </div>
                        </div>
                        <span className={`badge ${getStatusColor(app.status)}`}>
                          {app.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Applied on {app.appliedDate}</span>
                        <button
                          onClick={() => {
                            const job = mockJobs.find((j) => j.id === app.jobId);
                            if (job) onNavigate('job-detail', job);
                          }}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          View Job
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="card p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Saved Jobs</h3>
              </div>

              {savedJobs.length === 0 ? (
                <div className="text-center py-8">
                  <Bookmark className="mx-auto text-gray-400 mb-3" size={48} />
                  <p className="text-gray-500">No saved jobs yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {savedJobs.map((job) => (
                    <div
                      key={job.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer"
                      onClick={() => onNavigate('job-detail', job)}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                          {job.logo}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{job.title}</h4>
                          <p className="text-sm text-gray-600">{job.company}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="badge badge-gray text-xs">{job.location}</span>
                            <span className="badge badge-info text-xs">{job.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">{job.salary}</span>
                        <button className="text-blue-600 hover:text-blue-700 font-medium">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  JD
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">John Doe</h4>
                  <p className="text-sm text-gray-600">john.doe@email.com</p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('employee-profile')}
                className="btn btn-secondary w-full"
              >
                Edit Profile
              </button>
            </div>

            <div className="card p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold">My Resumes</h4>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  <Upload size={16} className="inline mr-1" />
                  Upload
                </button>
              </div>

              <div className="space-y-3">
                {mockResumes.map((resume) => (
                  <div
                    key={resume.id}
                    className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-start gap-2">
                      <FileText className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {resume.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {resume.uploadDate} • {resume.size}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6 bg-gradient-to-br from-blue-50 to-blue-100">
              <h4 className="font-semibold mb-2 text-gray-900">Complete Your Profile</h4>
              <p className="text-sm text-gray-600 mb-4">
                A complete profile gets 3x more views from employers
              </p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">Profile Strength</span>
                  <span className="font-semibold text-blue-600">75%</span>
                </div>
                <div className="w-full bg-white rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('employee-profile')}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Complete Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
