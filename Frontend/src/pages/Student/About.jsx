import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, Award, Shield, Users, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      title: "Continuing Education Programme (CEP)",
      desc: "Advance professional knowledge, leadership capabilities and industry competence through structured continuing education. Perfect for professionals, executives, and directors.",
      icon: <GraduationCap className="text-[#ba9d25] w-6 h-6" />,
      link: "/cep"
    },
    {
      title: "Alternative Learning System (ALS)",
      desc: "Learn beyond conventional boundaries through flexible, experiential, digital and community-based education. Built for self-directed, rural, and adult learners.",
      icon: <Compass className="text-[#ba9d25] w-6 h-6" />,
      link: "/als"
    },
    {
      title: "Complementary Learning System (CLS)",
      desc: "Strengthen formal education with practical skills, mentoring, interdisciplinary learning and career development. Designed for school/college students and job seekers.",
      icon: <BookOpen className="text-[#ba9d25] w-6 h-6" />,
      link: "/cls"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Banner */}
      <section className="relative py-16 bg-cover bg-center overflow-hidden text-white" style={{ backgroundImage: "linear-gradient(to right, rgba(15, 23, 42, 0.95) 45%, rgba(15, 23, 42, 0.8) 100%), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80')" }}>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ba9d25]/10 rounded-l-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#ba9d25]/20 text-[#ba9d25] border border-[#ba9d25]/30 uppercase tracking-widest">
            About Yogbodhi Global Institute
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-6 tracking-tight">
            Connecting Wisdom with <span className="text-[#ba9d25]">Contemporary Knowledge</span>
          </h1>
          <p className="mt-6 text-sm md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            A Global Platform for Continuing, Alternative and Complementary Learning. We bridge the gap between traditional wisdom, professional education, flexible pathways, and practical life skills.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-gray-900 leading-tight">
                Our Philosophical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ba9d25] to-[#a88c21]">Foundation</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#ba9d25] to-[#a88c21] rounded-full"></div>
              <p className="text-gray-600 leading-relaxed text-sm">
                Yogbodhi Global Institute (YGI) was established with a singular vision: to break the barriers of traditional, rigid education frameworks and offer modular, flexible, and career-oriented learning spaces. We strongly believe that learning is a lifelong pursuit that should happen continuously, differently, and beyond conventional boundaries.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                By integrating specialized academic schools, advanced technological modules, and values of ethics and consciousness, we prepare our learners to take on modern leadership roles while staying grounded in wellness and responsible citizenship.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3">
                  <Target className="text-[#ba9d25] w-5 h-5 flex-shrink-0" />
                  <span className="text-xs font-bold text-gray-700">Self-Directed Learning</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3">
                  <Award className="text-[#ba9d25] w-5 h-5 flex-shrink-0" />
                  <span className="text-xs font-bold text-gray-700">Skill Upskilling</span>
                </div>
              </div>
            </div>
            {/* Visual representation card */}
            <div className="bg-gradient-to-br from-gray-950 to-gray-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ba9d25]/10 rounded-full blur-3xl" />
              <h3 className="text-2xl font-black mb-4">Learn Continuously. Learn Differently. Learn Beyond Boundaries.</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Connecting professional education, flexible learning, practical skills, traditional wisdom and contemporary knowledge.
              </p>
              <ul className="space-y-3.5 text-xs">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#ba9d25] rounded-full" />
                  <span>Multidisciplinary learning models</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#ba9d25] rounded-full" />
                  <span>Flexible online and community classrooms</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#ba9d25] rounded-full" />
                  <span>Accreditation-aligned skill certificates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-gray-900">Our Three Educational Pillars</h2>
            <p className="text-gray-500 text-sm mt-3">Three distinct but interconnected systems designed to support every phase of your learning journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:border-[#ba9d25]/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6">
                    {p.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{p.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-6">{p.desc}</p>
                </div>
                <Link to={p.link} className="text-xs font-bold text-[#ba9d25] hover:underline flex items-center gap-1 group">
                  Explore Learning System <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 leading-tight">Values That Guide Us</h2>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">We hold ourselves to strict educational principles, emphasizing accessibility, verified quality, and holistic human growth.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">Inclusivity & Accessibility</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Providing high-quality learning resources to students, dropouts, rural populations, and working professionals without boundaries.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">Ethical Leadership</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Encouraging corporate laws compliance, ESG strategies, risk management, and environmental awareness across programs.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">Holistic Development</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Balancing technological skills like Artificial Intelligence with human values, wellness, stress management, and Yoga.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">Academic Collaborations</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Cooperating with statutory professional bodies and autorised institutions to deliver verified certificates and career ready credentials.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-gradient-to-r from-gray-950 to-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-black">Begin Your Custom Learning Path Today</h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">Whether you are looking to upskill as a director, start a self-directed digital course, or enhance your academic presentation skills, YGI has a pathway for you.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/course" className="px-6 py-3 bg-gradient-to-r from-[#ba9d25] to-[#a88c21] text-white font-bold rounded-xl text-xs transition-all shadow-md">
              Explore Programmes
            </Link>
            <Link to="/enquiry" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold rounded-xl text-xs transition-all">
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>

      {/* Institutional Disclaimer */}
      <section className="bg-gray-100 py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 leading-relaxed text-justify">
            <span className="font-bold">Disclaimer:</span> Yogbodhi Global Institute is a multidisciplinary learning and professional-development platform offering continuing education, alternative learning and complementary learning programmes. Unless specifically stated otherwise, its programmes and certificates are intended for professional development, skill enhancement, continuing education and personal enrichment. They should not be represented as government-recognized degrees, university qualifications or statutory professional licences. Any programme offered in collaboration with a recognised university, professional body or authorised institution should separately display the name, role and recognition status of the collaborating institution.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
