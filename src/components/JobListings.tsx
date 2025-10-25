import { useState } from 'react';
import { Search, MapPin, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { mockJobs } from '../data/mockData';

interface JobListingsProps {
  onNavigate: (page: string, data?: any) => void;
  initialSearch?: { searchTitle?: string; searchLocation?: string };
}

export default function JobListings({ onNavigate, initialSearch }: JobListingsProps) {
  const [searchTitle, setSearchTitle] = useState(initialSearch?.searchTitle || '');
  const [searchLocation, setSearchLocation] = useState(initialSearch?.searchLocation || '');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [filters, setFilters] = useState({
    category: [] as string[],
    type: [] as string[],
    remote: false,
    experience: [] as string[],
  });

  const categories = ['Engineering', 'Product', 'Design', 'Data', 'Marketing'];
  const types = ['Full-time', 'Part-time', 'Contract'];
  const experiences = ['Entry-level', 'Mid-level', 'Senior'];

  const filteredJobs = mockJobs.filter((job) => {
    const matchesTitle = !searchTitle || job.title.toLowerCase().includes(searchTitle.toLowerCase());
    const matchesLocation = !searchLocation || job.location.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesCategory = filters.category.length === 0 || filters.category.includes(job.category);
    const matchesType = filters.type.length === 0 || filters.type.includes(job.type);
    const matchesRemote = !filters.remote || job.remote;
    const matchesExperience = filters.experience.length === 0 || filters.experience.includes(job.experience);

    return matchesTitle && matchesLocation && matchesCategory && matchesType && matchesRemote && matchesExperience;
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === 'newest') return 0;
    if (sortBy === 'salary') return 0;
    return 0;
  });

  const toggleFilter = (type: 'category' | 'type' | 'experience', value: string) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      type: [],
      remote: false,
      experience: [],
    });
  };

  const activeFiltersCount = filters.category.length + filters.type.length + filters.experience.length + (filters.remote ? 1 : 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="mb-6">Find Your Perfect Job</h2>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Job title or keyword"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="City or state"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn btn-secondary flex items-center gap-2 relative"
            >
              <SlidersHorizontal size={18} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {showFilters && (
        <div className="bg-white border-b fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold">Filters</h4>
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Clear all
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h5 className="text-sm font-semibold mb-3">Category</h5>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.category.includes(cat)}
                        onChange={() => toggleFilter('category', cat)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-sm font-semibold mb-3">Job Type</h5>
                <div className="space-y-2">
                  {types.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.type.includes(type)}
                        onChange={() => toggleFilter('type', type)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-sm font-semibold mb-3">Experience Level</h5>
                <div className="space-y-2">
                  {experiences.map((exp) => (
                    <label key={exp} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.experience.includes(exp)}
                        onChange={() => toggleFilter('experience', exp)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{exp}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-sm font-semibold mb-3">Work Type</h5>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.remote}
                    onChange={() => setFilters((prev) => ({ ...prev, remote: !prev.remote }))}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Remote Only</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{sortedJobs.length}</span> jobs found
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="newest">Newest</option>
                <option value="relevance">Relevance</option>
                <option value="salary">Salary</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
          </div>
        </div>

        {sortedJobs.length === 0 ? (
          <div className="card p-12 text-center">
            <p className="text-gray-500 text-lg">No jobs found matching your criteria</p>
            <button
              onClick={clearFilters}
              className="btn btn-primary mt-4"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-4">
            {sortedJobs.map((job) => (
              <div
                key={job.id}
                className="card p-6 cursor-pointer hover:shadow-lg transition-all"
                onClick={() => onNavigate('job-detail', job)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {job.logo}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 hover:text-blue-600">
                          {job.title}
                        </h4>
                        <p className="text-gray-600 mb-3">{job.company}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="badge badge-gray flex items-center gap-1">
                            <MapPin size={14} />
                            {job.location}
                          </span>
                          <span className="badge badge-info">{job.type}</span>
                          {job.remote && <span className="badge badge-success">Remote</span>}
                          <span className="badge badge-gray">{job.experience}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.slice(0, 4).map((skill) => (
                            <span key={skill} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:text-right space-y-2">
                    <p className="text-lg font-semibold text-gray-900">{job.salary}</p>
                    <p className="text-sm text-gray-500">{job.postedDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
