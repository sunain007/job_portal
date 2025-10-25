import { Search, MapPin, Briefcase, TrendingUp, Users, Building } from 'lucide-react';
import { mockJobs, mockCompanies } from '../data/mockData';
import { useState } from 'react';

interface HomePageProps {
  onNavigate: (page: string, data?: any) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = () => {
    onNavigate('jobs', { searchTitle, searchLocation });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-white mb-6 slide-in">
              Find Your Dream Job Today
            </h1>
            <p className="text-xl text-blue-100 mb-10 slide-in">
              Connect with top employers and discover opportunities that match your skills and ambitions
            </p>

            <div className="bg-white rounded-xl shadow-2xl p-6 fade-in">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="City or state"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="btn btn-primary w-full"
                >
                  Search Jobs
                </button>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-blue-100">
              <span>Popular searches:</span>
              <button
                onClick={() => {
                  setSearchTitle('Frontend Developer');
                  handleSearch();
                }}
                className="hover:text-white underline"
              >
                Frontend Developer
              </button>
              <button
                onClick={() => {
                  setSearchTitle('Product Manager');
                  handleSearch();
                }}
                className="hover:text-white underline"
              >
                Product Manager
              </button>
              <button
                onClick={() => {
                  setSearchTitle('UX Designer');
                  handleSearch();
                }}
                className="hover:text-white underline"
              >
                UX Designer
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Briefcase className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Thousands of Jobs</h3>
              <p className="text-gray-600">
                Browse through thousands of job opportunities from top companies
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Users className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Top Employers</h3>
              <p className="text-gray-600">
                Connect directly with hiring managers from leading organizations
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <TrendingUp className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-600">
                Find opportunities that align with your career goals and aspirations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Jobs</h2>
            <p className="text-gray-600 text-lg">
              Hand-picked opportunities from top companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mockJobs.slice(0, 6).map((job) => (
              <div
                key={job.id}
                className="card p-6 cursor-pointer"
                onClick={() => onNavigate('job-detail', job)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {job.logo}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{job.company}</h4>
                      <p className="text-sm text-gray-500">{job.location}</p>
                    </div>
                  </div>
                </div>

                <h5 className="text-lg font-semibold text-gray-900 mb-2">
                  {job.title}
                </h5>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge badge-info">{job.type}</span>
                  {job.remote && <span className="badge badge-success">Remote</span>}
                  <span className="badge badge-gray">{job.experience}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{job.salary}</span>
                  <span className="text-gray-500">{job.postedDate}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('jobs')}
              className="btn btn-primary"
            >
              View All Jobs
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Trusted by Leading Companies</h2>
            <p className="text-gray-600 text-lg">
              Join thousands of companies hiring on our platform
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {mockCompanies.map((company) => (
              <div
                key={company.name}
                className="card p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-3">
                  {company.logo}
                </div>
                <p className="text-sm font-medium text-gray-900 text-center mb-1">
                  {company.name}
                </p>
                <p className="text-xs text-gray-500">{company.jobs} jobs</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building className="mx-auto mb-6 text-blue-200" size={48} />
          <h2 className="text-white mb-4">Are You an Employer?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Post jobs, find qualified candidates, and build your dream team
          </p>
          <button
            onClick={() => onNavigate('jobs')}
            className="btn bg-white text-blue-600 hover:bg-blue-50"
          >
            Post a Job
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
                <Briefcase size={24} />
                JobPortal
              </div>
              <p className="text-sm">
                Your trusted partner in finding the perfect career opportunity
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">For Job Seekers</h5>
              <ul className="space-y-2 text-sm">
                <li><button className="hover:text-white">Browse Jobs</button></li>
                <li><button className="hover:text-white">Career Advice</button></li>
                <li><button className="hover:text-white">Resume Tips</button></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">For Employers</h5>
              <ul className="space-y-2 text-sm">
                <li><button className="hover:text-white">Post a Job</button></li>
                <li><button className="hover:text-white">Pricing</button></li>
                <li><button className="hover:text-white">Resources</button></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><button className="hover:text-white">About Us</button></li>
                <li><button className="hover:text-white">Contact</button></li>
                <li><button className="hover:text-white">Privacy Policy</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 JobPortal. All rights reserved. Demo prototype for client presentation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
