import React from 'react';
import { GraduationCap, BookOpen, User, Atom, ArrowRight, PlayCircle, Star, ShieldCheck, Landmark, Cpu, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden min-h-[540px] md:min-h-[580px] flex items-center pb-12 pt-2">

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-orange-200/40 to-yellow-200/40 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNlN2U1ZTQiLz48L3N2Zz4=')] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-20 pt-2 pb-6 md:pb-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center lg:items-start">

          {/* Left Content Area */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 lg:pt-0">

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-orange-200 shadow-sm animate-fade-in-up">
              <span className="flex h-2.5 w-2.5 rounded-full bg-orange-500 animate-ping"></span>
              <span className="text-xs md:text-sm font-bold text-orange-600 tracking-wide uppercase">Yogbodhi Global Institute — Under Development</span>
            </div>

            {/* Main Title & Slogan */}
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <h1 className="text-3xl md:text-5xl lg:text-6xl my-3 font-black tracking-tight text-[#0a1b4d]" style={{ fontFamily: 'Times New Roman, serif' }}>
                  YOGBODHI <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 italic">GLOBAL INSTITUTE</span>
                </h1>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Learning for Life. <br className="hidden lg:block" />
                <span className="relative inline-block mt-2 text-orange-600">
                  Leadership for the Future.
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-orange-200/60 -z-10 rounded-sm transform -rotate-1"></div>
                </span>
              </h2>

              <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                A multidisciplinary global platform for continuing, alternative and complementary learning (CEP, ALS & CLS) across six academic schools.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 my-2">
              <Link to="/course" className="px-6 py-3 rounded-full bg-[#0a1b4d] text-white font-semibold text-sm md:text-base hover:bg-blue-900 transition-all duration-300 shadow-md hover:-translate-y-0.5 flex items-center gap-2 group">
                Explore Learning Systems
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="px-6 py-3 rounded-full bg-white text-[#0a1b4d] border-2 border-[#0a1b4d] font-semibold text-sm md:text-base hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-sm flex items-center gap-2 group">
                <PlayCircle size={20} className="group-hover:scale-110 transition-transform" />
                Institutional Enquiries
              </Link>
            </div>

            {/* Verified Institutional Pillar Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-5 border-t border-gray-200/60 w-full justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[
                  { icon: BookOpen, bg: 'bg-blue-600' },
                  { icon: GraduationCap, bg: 'bg-orange-500' },
                  { icon: Atom, bg: 'bg-amber-600' },
                  { icon: ShieldCheck, bg: 'bg-indigo-600' }
                ].map((item, i) => (
                  <div key={i} className={`w-9 h-9 rounded-full border-2 border-white ${item.bg} text-white flex items-center justify-center shadow-sm z-10`}>
                    <item.icon size={16} />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1 text-orange-500 font-bold text-xs uppercase tracking-wider">
                  <Star size={14} fill="currentColor" />
                  <span>Verified Learning Ecosystem</span>
                </div>
                <span className="text-xs font-semibold text-gray-700">Future-Ready LMS Facilities & Academic Governance</span>
              </div>
            </div>

          </div>

          {/* Right Visual Area - Glassmorphism Floating Domain Cards */}
          <div className="relative h-[500px] w-full hidden lg:flex items-center justify-center lg:mt-4">
            {/* Center Core */}
            <div className="absolute z-20 w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-orange-50">
              <img src="/assets/yogbodhi.png" alt="Yogbodhi Logo" className="w-full h-auto object-contain drop-shadow-md" />
            </div>

            {/* Orbiting rings */}
            <div className="absolute w-[300px] h-[300px] border border-gray-300/40 rounded-full animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute w-[450px] h-[450px] border border-dashed border-gray-300/40 rounded-full animate-[spin_60s_linear_infinite_reverse]"></div>

            {/* Floating Learning Domain Cards */}
            {/* 1. Governance */}
            <div className="absolute top-[8%] left-[5%] bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 animate-[bounce_4s_infinite] hover:scale-105 transition-transform cursor-pointer z-30">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#0a1b4d]"><ShieldCheck size={24} /></div>
              <div><p className="font-bold text-gray-900 text-sm">Governance</p><p className="text-xs text-gray-500 font-medium">Leadership & Ethics</p></div>
            </div>

            {/* 2. Business */}
            <div className="absolute top-[12%] right-[2%] bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 animate-[bounce_5s_infinite_0.5s] hover:scale-105 transition-transform cursor-pointer z-30">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700"><Landmark size={24} /></div>
              <div><p className="font-bold text-gray-900 text-sm">Business</p><p className="text-xs text-gray-500 font-medium">Finance & Enterprise</p></div>
            </div>

            {/* 3. Technology */}
            <div className="absolute bottom-[16%] left-[2%] bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 animate-[bounce_6s_infinite_1s] hover:scale-105 transition-transform cursor-pointer z-30">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700"><Cpu size={24} /></div>
              <div><p className="font-bold text-gray-900 text-sm">Technology</p><p className="text-xs text-gray-500 font-medium">AI & Digital Innovation</p></div>
            </div>

            {/* 4. Wellness */}
            <div className="absolute bottom-[18%] right-[5%] bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 animate-[bounce_4.5s_infinite_1.5s] hover:scale-105 transition-transform cursor-pointer z-30">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600"><GraduationCap size={24} /></div>
              <div><p className="font-bold text-gray-900 text-sm">Wellness</p><p className="text-xs text-gray-500 font-medium">Yoga & Human Dev.</p></div>
            </div>

            {/* Top Principal Learning Systems Badge */}
            <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-[#0a1b4d] text-white px-6 py-2 rounded-full shadow-lg border-2 border-white z-30">
              <span className="font-bold text-sm tracking-widest uppercase text-orange-400">CEP | ALS | CLS</span>
            </div>

          </div>

          {/* Mobile Grid for Learning Domains (only shows on mobile/tablet) */}
          <div className="lg:hidden grid grid-cols-2 gap-3 w-full px-2 mt-4">
            {[
              { icon: ShieldCheck, title: 'Governance', desc: 'Leadership & Ethics', bg: 'bg-blue-50', textCol: 'text-[#0a1b4d]' },
              { icon: Landmark, title: 'Business', desc: 'Finance & Enterprise', bg: 'bg-amber-50', textCol: 'text-amber-700' },
              { icon: Cpu, title: 'Technology', desc: 'AI & Digital Innovation', bg: 'bg-indigo-50', textCol: 'text-indigo-700' },
              { icon: GraduationCap, title: 'Wellness', desc: 'Yoga & Human Dev.', bg: 'bg-orange-50', textCol: 'text-orange-600' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-1.5 text-center hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-full ${item.bg} ${item.textCol} flex items-center justify-center`}>
                  <item.icon size={20} />
                </div>
                <span className="text-xs font-bold text-gray-900">{item.title}</span>
                <span className="text-[10px] text-gray-500">{item.desc}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Wave Pattern */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none transform translate-y-[1px]">
        <svg viewBox="0 0 1440 120" className="w-full h-auto block" preserveAspectRatio="none">
          <path d="M0,60 C320,120 420,0 720,60 C1020,120 1120,0 1440,60 L1440,70 L0,70 Z" fill="#f28e2b" />
          <path d="M0,65 C320,125 420,5 720,65 C1020,125 1120,5 1440,65 L1440,120 L0,120 Z" fill="#0a1b4d" />
        </svg>
      </div>

    </div>
  );
};

export default HeroBanner;
