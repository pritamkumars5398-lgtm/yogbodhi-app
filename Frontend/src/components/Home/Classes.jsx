import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Compass, BookOpen, ArrowRight } from 'lucide-react';

const programs = [
  {
    num: '01', tag: 'Executive & Professional', title: 'Continuing Education Programme (CEP)',
    desc: 'Structured certifications in corporate governance, legal compliance, ESG policy, financial literacy, and technology leadership.',
    courses: [
      'Institute of Corporate Governance & Directorship (IOCGD)',
      'Institute of Corporate Laws & Regulations (IOCLR)',
      'Institute of Artificial Intelligence & Digital Governance (IOAI)',
    ],
    dark: false, accent: '#0a1b4d', link: '/cep'
  },
  {
    num: '02', tag: 'Flexible & Community', title: 'Alternative Learning System (ALS)',
    desc: 'Experiential, self-directed, and technology-enabled learning designed for adult learners, dropouts, and rural communities.',
    courses: [
      'Alternative Learning Academy & Digital Literacy Circles',
      'Vedic & Modern Business Institute (VMBI)',
      'Rural Development & Social Empowerment Institute (IRDSE)',
    ],
    dark: true, accent: '#ea580c', link: '/als'
  },
  {
    num: '03', tag: 'Workplace & Skill Support', title: 'Complementary Learning System (CLS)',
    desc: 'Practical skill enhancement, employability coaching, workplace communication, and mentoring supplementing formal education.',
    courses: [
      'Complementary Skills Institute for Workplace Readiness',
      'Professional Communication & Interview Mentoring',
      'Interdisciplinary Life Skills & Values Education',
    ],
    dark: false, accent: '#059669', link: '/cls'
  },
];

const ProgramPage = () => (
  <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100 font-sans">
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Three Principal Learning Systems</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1b4d]">Choose Your Learning Pathway</h2>
        </div>
        <Link to="/course" className="text-xs font-bold text-[#0a1b4d] border-b-2 border-orange-500 hover:text-orange-600 transition-all pb-0.5 group flex items-center gap-1">
          Explore Approved Programmes <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-orange-500" />
        </Link>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Card 01 — CEP */}
        <div className="md:col-span-5 bg-white rounded-3xl p-8 flex flex-col justify-between border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#0a1b4d] border border-blue-100">{programs[0].tag}</span>
              <span className="text-6xl font-black text-gray-100 group-hover:text-blue-100 transition-colors leading-none">{programs[0].num}</span>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">{programs[0].title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 font-medium">{programs[0].desc}</p>
            <ul className="space-y-3">
              {programs[0].courses.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0a1b4d] flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link to={programs[0].link} className="mt-8">
            <button className="w-full py-3 rounded-xl text-xs font-bold bg-[#0a1b4d] text-white hover:bg-blue-900 transition-all duration-300 shadow-md">
              Explore CEP System →
            </button>
          </Link>
        </div>

        {/* Right column */}
        <div className="md:col-span-7 grid grid-rows-2 gap-6">

          {/* Card 02 — ALS */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between group border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-100">{programs[1].tag}</span>
                <span className="text-6xl font-black text-gray-100 group-hover:text-orange-100 transition-colors leading-none">{programs[1].num}</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">{programs[1].title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">{programs[1].desc}</p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <span className="text-xs font-bold text-gray-500">Flexible & Self-Directed</span>
              <Link to={programs[1].link}>
                <button className="px-5 py-2.5 rounded-xl text-xs font-bold bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 shadow-sm">
                  Explore ALS →
                </button>
              </Link>
            </div>
          </div>

          {/* Card 03 — CLS */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">{programs[2].tag}</span>
                <span className="text-6xl font-black text-gray-100 group-hover:text-emerald-100 transition-colors leading-none">{programs[2].num}</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">{programs[2].title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">{programs[2].desc}</p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <span className="text-xs font-bold text-gray-500">Workplace Skill Enhancement</span>
              <Link to={programs[2].link}>
                <button className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 shadow-sm">
                  Explore CLS →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default ProgramPage;
