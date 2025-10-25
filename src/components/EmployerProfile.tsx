import { Building, Mail, Phone, MapPin, Users, Globe, Upload, Save } from 'lucide-react';
import { useState } from 'react';

interface EmployerProfileProps {
  onNavigate: (page: string) => void;
}

export default function EmployerProfile({ onNavigate }: EmployerProfileProps) {
  const [profile, setProfile] = useState({
    companyName: 'TechCorp Solutions',
    email: 'contact@techcorp.com',
    phone: '+1 (555) 987-6543',
    location: 'San Francisco, CA',
    website: 'www.techcorp.com',
    industry: 'Technology',
    companySize: '100-500',
    description: 'TechCorp Solutions is a leading technology company specializing in innovative software solutions. We are committed to building cutting-edge products that solve real-world problems and empower businesses to succeed in the digital age.',
    benefits: ['Health Insurance', 'Remote Work', '401(k) Matching', 'Unlimited PTO', 'Learning Budget'],
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={() => onNavigate('employer-dashboard')}
            className="text-gray-600 hover:text-gray-900"
          >
            ← Back to Dashboard
          </button>
        </div>

        <div className="card p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <h2>Company Profile</h2>
            <button
              onClick={handleSave}
              className={`btn ${saved ? 'bg-green-600 hover:bg-green-700' : 'btn-primary'} flex items-center gap-2`}
            >
              {saved ? (
                <>
                  <Save size={18} />
                  Saved!
                </>
              ) : (
                <>
                  <Save size={18} />
                  Save Changes
                </>
              )}
            </button>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-6 mb-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-3xl">
                  TC
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <Upload size={16} />
                </button>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Company Logo</h4>
                <p className="text-sm text-gray-600 mb-2">
                  JPG, PNG or SVG. Max size 2MB
                </p>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Upload new logo
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={profile.companyName}
                    onChange={(e) => setProfile({ ...profile, companyName: e.target.value })}
                    className="input-field pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="input-field pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="input-field pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="input-field pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Website
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={profile.website}
                    onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                    className="input-field pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={profile.industry}
                  onChange={(e) => setProfile({ ...profile, industry: e.target.value })}
                  className="input-field"
                >
                  <option value="Technology">Technology</option>
                  <option value="Finance">Finance</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Retail">Retail</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Size
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <select
                    value={profile.companySize}
                    onChange={(e) => setProfile({ ...profile, companySize: e.target.value })}
                    className="input-field pl-10"
                  >
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-100">51-100 employees</option>
                    <option value="100-500">100-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Company Description
              </label>
              <textarea
                value={profile.description}
                onChange={(e) => setProfile({ ...profile, description: e.target.value })}
                rows={6}
                className="input-field resize-none"
                placeholder="Tell candidates about your company..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Benefits & Perks
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {profile.benefits.map((benefit, index) => (
                  <span key={index} className="badge badge-success">
                    {benefit}
                    <button className="ml-2 hover:text-green-900">×</button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                placeholder="Add a benefit and press Enter"
                className="input-field"
              />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <h4 className="font-semibold mb-4">Company Media</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="aspect-video border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-blue-400 transition-colors cursor-pointer">
                <Upload className="text-gray-400 mb-2" size={24} />
                <p className="text-sm text-gray-600">Upload photo</p>
              </div>
              <div className="aspect-video border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-blue-400 transition-colors cursor-pointer">
                <Upload className="text-gray-400 mb-2" size={24} />
                <p className="text-sm text-gray-600">Upload photo</p>
              </div>
              <div className="aspect-video border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-blue-400 transition-colors cursor-pointer">
                <Upload className="text-gray-400 mb-2" size={24} />
                <p className="text-sm text-gray-600">Upload photo</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Add photos of your office, team, or company events to attract candidates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
