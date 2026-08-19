import React from 'react';
import { Link } from 'react-router-dom';
import { User, Award, BookOpen } from 'lucide-react';
import SEOHead from '../../components/Common/SEOHead';

const FacultyProfile = () => {
  const mentors = [
    {
      name: "Sample Faculty A",
      role: "Board Effectiveness & Corporate Governance Lead",
      segment: "CEP",
      school: "School of Management & Governance",
      bio: "Distinguished academic lead with expertise in corporate compliance, ESG frameworks, and strategic board advisory services across continuing education programs."
    },
    {
      name: "Sample Faculty B",
      role: "ESG Strategy & Environmental Policy Mentor",
      segment: "CEP",
      school: "School of Environmental Studies",
      bio: "Leading researcher specializing in environmental sustainability policies, circular economics, and corporate social responsibility standards."
    },
    {
      name: "Sample Faculty C",
      role: "Digital Literacy & Community Education Coordinator",
      segment: "ALS",
      school: "Alternative Learning Academy",
      bio: "Grassroots educator leading digital tools integration, community communication circles, and vocational skill pathways under the Alternative Learning System."
    },
    {
      name: "Sample Faculty D",
      role: "Vocational Skills & Entrepreneurship Mentor",
      segment: "ALS",
      school: "Vedic & Modern Business Institute",
      bio: "Dedicated practitioner blending foundational wisdom with contemporary business practices to foster self-directed learning and practical startup skills."
    },
    {
      name: "Sample Faculty E",
      role: "Employability & Professional Communication Specialist",
      segment: "CLS",
      school: "Complementary Skills Institute",
      bio: "Passionate educator coaching learners on interview preparation, presentation design, workplace readiness, and advanced communication competencies."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <SEOHead 
        title="Academic Faculty & Mentors" 
        description="Faculty profiles and academic mentors across Yogbodhi Global Institute's six schools and CEP, ALS, and CLS learning systems." 
      />
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-[#0a1b4d] border border-blue-100 uppercase tracking-widest">
            Yogbodhi Academic Board
          </span>
          <h1 className="text-4xl md:text-5xl font-black mt-4 tracking-tight text-gray-900">
            Academic <span className="text-orange-600">Faculty & Mentors</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mt-4 font-medium">
            Academicians, industry practitioners, and community educators guiding our Continuing (CEP), Alternative (ALS), and Complementary (CLS) learning pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#0a1b4d] text-white flex items-center justify-center font-black text-xl">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{mentor.name}</h3>
                    <p className="text-xs text-orange-600 font-bold uppercase tracking-wider">{mentor.segment} Faculty</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-start gap-2">
                    <Award size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-semibold text-xs">{mentor.role}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <BookOpen size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500 font-medium text-xs">{mentor.school}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {mentor.bio}
                </p>
              </div>

              <div className="mt-8">
                <Link to={`/enquiry?type=${mentor.segment.toLowerCase().split(' ')[0]}&subject=mentor`}>
                  <button className="w-full py-2.5 rounded-xl border border-gray-200 hover:border-[#0a1b4d] hover:bg-gray-50 text-[#0a1b4d] font-bold text-xs transition-all">
                    Institutional Consultation Request
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
