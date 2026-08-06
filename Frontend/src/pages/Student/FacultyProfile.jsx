import React from 'react';
import { Link } from 'react-router-dom';
import { User, Award, Mail, BookOpen } from 'lucide-react';

const FacultyProfile = () => {
  const mentors = [
    {
      name: "Dr. Arvind Sharma",
      role: "Board Effectiveness & Corporate Governance Specialist",
      segment: "CEP",
      school: "School of Management & Governance",
      email: "arvind.sharma@ygi.org",
      bio: "Former Director at various public sector undertakings with 25+ years in corporate compliance, ESG frameworks, and strategic board advisory services."
    },
    {
      name: "Prof. Meera Sen",
      role: "ESG Strategy Lead & Public Policy Expert",
      segment: "CEP",
      school: "School of Environmental Studies",
      email: "meera.sen@ygi.org",
      bio: "Leading researcher in environmental sustainability policies, circular economics, and corporate social responsibility standards."
    },
    {
      name: "Guru Rajeshwar Dev",
      role: "Yoga & Consciousness Mentor",
      segment: "ALS / CEP",
      school: "Vedic & Modern Business Institute",
      email: "rajeshwar.dev@ygi.org",
      bio: "Dedicated practitioner blending traditional yogic wisdom with contemporary psychology to promote emotional intelligence, wellness, and self-directed growth."
    },
    {
      name: "Sandeep Roy",
      role: "Community Education coordinator & Digital Literacy mentor",
      segment: "ALS",
      school: "Alternative Learning Academy",
      email: "sandeep.roy@ygi.org",
      bio: "Grassroots worker implementing digital tools, communication loops, and vocational training across rural and underserved areas."
    },
    {
      name: "Trainer Ananya Iyer",
      role: "Employability & Professional Communication Specialist",
      segment: "CLS",
      school: "Complementary Skills Institute",
      email: "ananya.iyer@ygi.org",
      bio: "Passionate educator coaching graduates on interview preparation, presentation design, and advanced writing skill sets."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#ba9d25]/20 text-[#ba9d25] border border-[#ba9d25]/30 uppercase tracking-widest">
            Academic Faculty
          </span>
          <h1 className="text-4xl md:text-5xl font-black mt-6 tracking-tight text-gray-900">
            Meet Our <span className="text-[#ba9d25]">Faculty & Mentors</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mt-4">
            Distinguished academicians, industry practitioners, and community educators leading our Continuing, Alternative, and Complementary learning paths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-yellow-50 flex items-center justify-center text-[#ba9d25] font-black text-2xl">
                    {mentor.name.split(' ').pop().charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{mentor.name}</h3>
                    <p className="text-xs text-[#ba9d25] font-bold uppercase tracking-wider">{mentor.segment} Faculty</p>
                  </div>
                </div>

                <div className="space-y-3.5 mb-6 text-sm">
                  <div className="flex items-start gap-2">
                    <Award size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 font-medium">{mentor.role}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <BookOpen size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 font-semibold text-xs">{mentor.school}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <a href={`mailto:${mentor.email}`} className="text-blue-600 hover:underline text-xs">{mentor.email}</a>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {mentor.bio}
                </p>
              </div>

              <div className="mt-8">
                <Link to={`/enquiry?type=${mentor.segment.toLowerCase().split(' ')[0]}&subject=mentor`}>
                  <button className="w-full py-2.5 rounded-xl border border-gray-100 hover:border-[#ba9d25] hover:text-[#ba9d25] hover:bg-yellow-50/50 text-gray-600 font-bold text-xs transition-all">
                    Connect / Message Mentor
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
