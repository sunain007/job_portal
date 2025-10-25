import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Upload, Save } from 'lucide-react';
import { useState } from 'react';

interface EmployeeProfileProps {
  onNavigate: (page: string) => void;
}

export default function EmployeeProfile({ onNavigate }: EmployeeProfileProps) {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    title: 'Senior Frontend Developer',
    bio: 'Passionate frontend developer with 5+ years of experience building modern web applications using React, TypeScript, and cutting-edge technologies.',
    experience: [
      {
        id: '1',
        title: 'Senior Frontend Developer',
        company: 'Tech Innovations Inc',
        location: 'San Francisco, CA',
        startDate: '2021-01',
        endDate: 'Present',
        current: true,
        description: 'Leading frontend development for enterprise web applications.',
      },
      {
        id: '2',
        title: 'Frontend Developer',
        company: 'StartupXYZ',
        location: 'New York, NY',
        startDate: '2019-06',
        endDate: '2020-12',
        current: false,
        description: 'Built responsive web applications using React and Redux.',
      },
    ],
    education: [
      {
        id: '1',
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of California',
        location: 'Berkeley, CA',
        startDate: '2015',
        endDate: '2019',
      },
    ],
    skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Git', 'Node.js', 'Redux'],
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
            onClick={() => onNavigate('employee-dashboard')}
            className="text-gray-600 hover:text-gray-900"
          >
            ← Back to Dashboard
          </button>
        </div>

        <div className="card p-6 md:p-8 mb-6">
          <div className="flex justify-between items-start mb-6">
            <h2>Edit Profile</h2>
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
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-3xl">
                  JD
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <Upload size={16} />
                </button>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Profile Photo</h4>
                <p className="text-sm text-gray-600 mb-2">
                  JPG, PNG or GIF. Max size 2MB
                </p>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Upload new photo
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
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
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Professional Title
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={profile.title}
                  onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                  className="input-field pl-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                About Me
              </label>
              <textarea
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                rows={4}
                className="input-field resize-none"
                placeholder="Tell employers about yourself..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Skills
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {profile.skills.map((skill, index) => (
                  <span key={index} className="badge badge-info">
                    {skill}
                    <button className="ml-2 hover:text-blue-900">×</button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                placeholder="Add a skill and press Enter"
                className="input-field"
              />
            </div>
          </div>
        </div>

        <div className="card p-6 md:p-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Briefcase className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>
            <button className="btn btn-secondary text-sm">
              Add Experience
            </button>
          </div>

          <div className="space-y-6">
            {profile.experience.map((exp) => (
              <div key={exp.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Edit
                  </button>
                </div>
                <p className="text-sm text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="text-blue-600" size={24} />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <button className="btn btn-secondary text-sm">
              Add Education
            </button>
          </div>

          <div className="space-y-6">
            {profile.education.map((edu) => (
              <div key={edu.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">
                      {edu.startDate} - {edu.endDate}
                    </p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
