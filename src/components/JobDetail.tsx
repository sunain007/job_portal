import { MapPin, Briefcase, DollarSign, Clock, X, Upload, Check } from 'lucide-react';
import { useState } from 'react';
import { mockResumes } from '../data/mockData';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  remote: boolean;
  salary: string;
  experience: string;
  category: string;
  logo: string;
  postedDate: string;
  description: string;
  skills: string[];
}

interface JobDetailProps {
  job: Job;
  onClose: () => void;
  userRole: 'employee' | 'employer' | null;
  onShowAuth: () => void;
}

export default function JobDetail({ job, onClose, userRole, onShowAuth }: JobDetailProps) {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedResume, setSelectedResume] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const handleApply = () => {
    if (!userRole) {
      onShowAuth();
      return;
    }
    setShowApplyModal(true);
  };

  const handleSubmitApplication = () => {
    setApplicationSubmitted(true);
    setTimeout(() => {
      setShowApplyModal(false);
      setApplicationSubmitted(false);
      setSelectedResume('');
      setCoverLetter('');
    }, 2000);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto fade-in">
        <div className="min-h-screen px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl slide-in">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-xl z-10">
              <h3 className="font-semibold">Job Details</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {job.logo}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h2>
                  <h4 className="text-gray-600 mb-3">{job.company}</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge badge-gray flex items-center gap-1">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                    <span className="badge badge-info flex items-center gap-1">
                      <Briefcase size={14} />
                      {job.type}
                    </span>
                    {job.remote && <span className="badge badge-success">Remote</span>}
                    <span className="badge badge-gray">{job.experience}</span>
                  </div>
                </div>
                <button
                  onClick={handleApply}
                  className="btn btn-primary hidden md:block"
                >
                  Apply Now
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Salary Range</p>
                    <p className="font-semibold text-gray-900">{job.salary}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="font-semibold text-gray-900">{job.experience}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Posted</p>
                    <p className="font-semibold text-gray-900">{job.postedDate}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4">Job Description</h4>
                <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                  {job.description}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <button
                  onClick={handleApply}
                  className="btn btn-primary w-full md:w-auto"
                >
                  Apply for this Position
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showApplyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4 fade-in">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto slide-in">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-xl">
              <h3 className="font-semibold">Apply for {job.title}</h3>
              <button
                onClick={() => setShowApplyModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {applicationSubmitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Application Submitted!
                </h3>
                <p className="text-gray-600">
                  Your application has been successfully submitted. The employer will review it and contact you soon.
                </p>
              </div>
            ) : (
              <div className="p-6">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Resume
                  </label>
                  <div className="space-y-2">
                    {mockResumes.map((resume) => (
                      <label
                        key={resume.id}
                        className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
                        style={{
                          borderColor: selectedResume === resume.id ? '#3b82f6' : '#e5e7eb',
                        }}
                      >
                        <input
                          type="radio"
                          name="resume"
                          value={resume.id}
                          checked={selectedResume === resume.id}
                          onChange={(e) => setSelectedResume(e.target.value)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{resume.name}</p>
                          <p className="text-sm text-gray-500">
                            Uploaded {resume.uploadDate} • {resume.size}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                  <button className="mt-3 text-sm text-blue-600 hover:text-blue-700 flex items-center gap-2">
                    <Upload size={16} />
                    Upload New Resume
                  </button>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cover Letter (Optional)
                  </label>
                  <textarea
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    placeholder="Tell the employer why you're a great fit for this role..."
                    rows={6}
                    className="input-field resize-none"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    {coverLetter.length} / 500 characters
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowApplyModal(false)}
                    className="btn btn-ghost flex-1"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmitApplication}
                    disabled={!selectedResume}
                    className="btn btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
