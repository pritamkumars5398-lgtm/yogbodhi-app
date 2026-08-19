import React from 'react';
import { BookOpen, Compass, GraduationCap, ShieldCheck } from 'lucide-react';

const pillars = [
  { num: '01', title: 'Multidisciplinary Global Curriculum', desc: 'Comprehensive learning systems (CEP, ALS, CLS) designed for professionals, directors, adult learners, and students.', icon: GraduationCap, bg: 'bg-blue-50', textCol: 'text-[#0a1b4d]' },
  { num: '02', title: 'Six Academic Schools & Institutes', desc: 'Specialized institutes covering corporate governance, law, public policy, management, technology, philosophy, yoga, and social sciences.', icon: BookOpen, bg: 'bg-orange-50', textCol: 'text-orange-600' },
  { num: '03', title: 'Technology-Enabled LMS Facilities', desc: 'Modern, future-ready digital platforms providing flexible access to course materials, modules, and self-directed learning paths.', icon: Compass, bg: 'bg-emerald-50', textCol: 'text-emerald-600' },
  { num: '04', title: 'Institutional Governance & Ethics', desc: 'Strong institutional governance backed by Yogbodhi Private Limited, Yogbodhi Global Limited, and Yogbodhi Foundation Limited.', icon: ShieldCheck, bg: 'bg-indigo-50', textCol: 'text-indigo-700' },
];

const WhyChooseUs = () => (
  <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100 font-sans">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left sticky */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">The YGI Foundation</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1b4d] leading-tight">
            Institutional Excellence for
            <span className="block mt-1 text-orange-600">
              Future Leadership.
            </span>
          </h2>
          <p className="text-sm text-gray-600 mt-6 leading-relaxed font-medium">
            Bridging traditional wisdom, continuing education, flexible community pathways, and practical workplace competencies.
          </p>
        </div>

        {/* Right numbered list */}
        <div className="lg:col-span-8 space-y-4">
          {pillars.map((item) => (
            <div key={item.num} className="flex items-start gap-5 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${item.bg} ${item.textCol} flex items-center justify-center font-bold`}>
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
);

export default WhyChooseUs;
