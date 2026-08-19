import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, GraduationCap, FileText, ArrowRight } from 'lucide-react';
import SEOHead from '../../components/Common/SEOHead';

const Scholarship = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 font-sans">
      <SEOHead 
        title="Institutional Scholarship & Fellowship Policy" 
        description="Official institutional scholarship, fellowship, and financial support policy under review by Yogbodhi Global Institute." 
      />

      <div className="max-w-4xl mx-auto">
        {/* Header Badge */}
        <div className="text-center mb-12">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-orange-50 text-orange-600 border border-orange-200 uppercase tracking-widest">
            YGI Institutional Disclosure
          </span>
          <h1 className="text-4xl md:text-5xl font-black mt-4 tracking-tight text-[#0a1b4d]">
            Scholarship & <span className="text-orange-600">Fellowship Policy</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mt-4 max-w-2xl mx-auto font-medium">
            Financial aid, merit grants, and research fellowships supporting learners across Continuing (CEP), Alternative (ALS), and Complementary (CLS) learning pathways.
          </p>
        </div>

        {/* Policy Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl space-y-8">
          <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#0a1b4d] text-orange-400 flex items-center justify-center font-bold text-2xl flex-shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Policy Status: Under Institutional Review</h2>
              <p className="text-xs text-orange-600 font-bold uppercase tracking-wider mt-0.5">Yogbodhi Board of Governors</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              In accordance with institutional governance directives, all former coaching-oriented exam policies (including NEET/JEE, Class 8–12 school testing, and regional test centres) have been withdrawn.
            </p>
            <p>
              Yogbodhi Global Institute is formulating a comprehensive, merit-and-need-based institutional scholarship framework. The new policy will cover:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-medium text-gray-800">
              <li>Executive & Professional Continuing Education (CEP) Grant Schemes</li>
              <li>Rural, Underserved & Grassroots Alternative Education (ALS) Support</li>
              <li>Student Employability & Complementary Skill (CLS) Financial Assistance</li>
              <li>Research Fellowships for Policy, Governance & Consciousness Studies</li>
            </ul>
            <p className="pt-2 text-gray-500 italic text-xs">
              Official application guidelines, eligibility criteria, and award schedules will be published here upon formal approval by the Yogbodhi Academic Board.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <Link to="/enquiry" className="px-6 py-3 rounded-xl bg-[#0a1b4d] text-white text-xs font-bold hover:bg-blue-900 transition-all flex items-center gap-2">
              Submit Institutional Query <ArrowRight size={14} />
            </Link>
            <Link to="/about" className="text-xs font-bold text-orange-600 hover:underline">
              Learn About YGI Governance & Legal Status →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;