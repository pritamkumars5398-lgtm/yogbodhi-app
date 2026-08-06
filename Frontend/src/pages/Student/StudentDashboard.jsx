import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Award, BookOpen, Clock, Activity, CheckCircle, ArrowRight } from 'lucide-react';

const StudentDashboard = () => {
  const stats = [
    { label: "Enrolled Courses", val: "2", icon: <BookOpen className="text-[#ba9d25]" /> },
    { label: "Completed Topics", val: "8", icon: <CheckCircle className="text-green-500" /> },
    { label: "Learning Hours", val: "14 hrs", icon: <Clock className="text-blue-500" /> },
    { label: "Earned Certificates", val: "1", icon: <Award className="text-purple-500" /> }
  ];

  const ongoingCourses = [
    {
      title: "Advanced Corporate Governance & Board Effectiveness",
      segment: "CEP",
      progress: 65,
      nextChapter: "Module 3: Board Diversity & Stakeholder ESG"
    },
    {
      title: "Digital Literacy & Smart Communication Circle",
      segment: "ALS",
      progress: 20,
      nextChapter: "Module 1: Collaborative Digital Workspaces"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900">Student Learning Portal</h1>
            <p className="text-gray-400 text-sm mt-1">Welcome back. Track your learning segments, credits, and certifications.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/course" className="px-5 py-2.5 bg-gradient-to-r from-[#ba9d25] to-[#a88c21] hover:from-[#a88c21] hover:to-[#947b1c] text-white font-bold rounded-xl text-xs shadow-md transition-all">
              Explore More Courses
            </Link>
            <Link to="/verify-certificate" className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-xs transition-all border border-gray-200">
              Verify Credentials
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                {stat.icon}
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                <p className="text-xl font-black text-gray-900 mt-1">{stat.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Ongoing Courses */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-gray-900">My Registered Programmes</h2>
            
            <div className="space-y-4">
              {ongoingCourses.map((c, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-gray-900 text-[#ba9d25]">
                        {c.segment} Programme
                      </span>
                      <h3 className="font-bold text-gray-900 text-base mt-2">{c.title}</h3>
                    </div>
                    <span className="text-sm font-black text-gray-900">{c.progress}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#ba9d25] h-full transition-all duration-500" style={{ width: `${c.progress}%` }}></div>
                  </div>

                  <div className="flex justify-between items-center pt-2 text-xs text-gray-400 font-medium">
                    <span>Next: {c.nextChapter}</span>
                    <button className="text-[#ba9d25] font-bold hover:underline flex items-center gap-1">
                      Resume <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate & Credits Summary */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Certificates Earned</h2>
            
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-[#ba9d25] flex-shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Professional Development Credential</h4>
                  <p className="text-xs text-gray-400 mt-0.5">ID: YGI-CEP-2025-091</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 text-xs space-y-2.5 text-gray-600">
                <div className="flex justify-between">
                  <span>Programme:</span>
                  <span className="font-bold text-gray-900">Advanced Corporate Governance</span>
                </div>
                <div className="flex justify-between">
                  <span>Category:</span>
                  <span className="font-bold text-gray-900">CEP</span>
                </div>
                <div className="flex justify-between">
                  <span>Verified status:</span>
                  <span className="text-green-600 font-bold">Verified</span>
                </div>
              </div>

              <Link to="/verify-certificate?id=YGI-CEP-2025-091" className="block text-center w-full py-3 rounded-xl border border-[#ba9d25] text-[#ba9d25] hover:bg-yellow-50/50 font-bold transition-all text-xs">
                View Certificate Verification Details
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;
