import { Plus, Eye, Users, Briefcase, TrendingUp, MoreVertical } from 'lucide-react';
import { mockEmployerJobs, mockCandidates } from '../data/mockData';

interface EmployerDashboardProps {
  onNavigate: (page: string, data?: any) => void;
}

export default function EmployerDashboard({ onNavigate }: EmployerDashboardProps) {
  const totalApplicants = mockEmployerJobs.reduce((sum, job) => sum + job.applicants, 0);
  const totalViews = mockEmployerJobs.reduce((sum, job) => sum + job.views, 0);
  const totalShortlisted = mockEmployerJobs.reduce((sum, job) => sum + job.shortlisted, 0);

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'badge-success' : 'badge-gray';
  };

  const getCandidateStatusColor = (status: string) => {
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
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="mb-2">Employer Dashboard</h2>
            <p className="text-gray-600">Manage your job postings and candidates</p>
          </div>
          <button className="btn btn-primary flex items-center gap-2">
            <Plus size={20} />
            Post New Job
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Briefcase className="text-blue-600" size={24} />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {mockEmployerJobs.filter((j) => j.status === 'Active').length}
            </p>
            <p className="text-sm text-gray-600">Active Jobs</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="text-green-600" size={24} />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{totalApplicants}</p>
            <p className="text-sm text-gray-600">Total Applicants</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Eye className="text-yellow-600" size={24} />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{totalViews}</p>
            <p className="text-sm text-gray-600">Total Views</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-purple-600" size={24} />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{totalShortlisted}</p>
            <p className="text-sm text-gray-600">Shortlisted</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="card p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">My Job Postings</h3>
              </div>

              <div className="space-y-4">
                {mockEmployerJobs.map((job) => (
                  <div
                    key={job.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{job.title}</h4>
                          <span className={`badge ${getStatusColor(job.status)} text-xs`}>
                            {job.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">Posted on {job.postedDate}</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical size={20} />
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-3">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-gray-900">{job.applicants}</p>
                        <p className="text-xs text-gray-600">Applicants</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-gray-900">{job.views}</p>
                        <p className="text-xs text-gray-600">Views</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-gray-900">{job.shortlisted}</p>
                        <p className="text-xs text-gray-600">Shortlisted</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="btn btn-primary flex-1 text-sm">
                        View Applicants
                      </button>
                      <button className="btn btn-ghost text-sm">Edit</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Recent Analytics</h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Eye className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Job Views</p>
                      <p className="text-sm text-gray-600">Last 7 days</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">1,234</p>
                    <p className="text-sm text-green-600">+12%</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Users className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">New Applications</p>
                      <p className="text-sm text-gray-600">Last 7 days</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">87</p>
                    <p className="text-sm text-green-600">+8%</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Profile Views</p>
                      <p className="text-sm text-gray-600">Last 7 days</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">456</p>
                    <p className="text-sm text-green-600">+15%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  TC
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">TechCorp Solutions</h4>
                  <p className="text-sm text-gray-600">Technology Company</p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('employer-profile')}
                className="btn btn-secondary w-full"
              >
                Edit Company Profile
              </button>
            </div>

            <div className="card p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold">Shortlisted Candidates</h4>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </button>
              </div>

              <div className="space-y-3">
                {mockCandidates.map((candidate) => (
                  <div
                    key={candidate.id}
                    className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {candidate.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {candidate.name}
                        </p>
                        <p className="text-xs text-gray-600">{candidate.position}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`badge ${getCandidateStatusColor(candidate.status)} text-xs`}>
                        {candidate.status}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6 bg-gradient-to-br from-blue-50 to-blue-100">
              <h4 className="font-semibold mb-2 text-gray-900">Upgrade Your Plan</h4>
              <p className="text-sm text-gray-600 mb-4">
                Get access to premium features and unlimited job postings
              </p>
              <button className="btn btn-primary w-full">
                View Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
