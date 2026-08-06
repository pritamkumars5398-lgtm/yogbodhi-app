import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap, Award, Users, CheckCircle, Calendar, ShieldCheck,
  ChevronDown, BookOpen, Target, Briefcase, Scale, Heart, Cpu,
  Globe, Landmark, ArrowRight, HelpCircle
} from 'lucide-react';

const CEP = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const cepInstitutes = [
    {
      category: "A. Corporate Governance, Law & Management",
      icon: <Landmark className="text-[#ba9d25] w-5 h-5" />,
      institutes: [
        "Institute of Corporate Governance & Directorship (IOCGD)",
        "Institute of Corporate Laws & Regulations (IOCLR)",
        "Institute of Corporate Directors (IOCD)",
        "Institute of Business Leadership & Management (IOBLM)",
        "Institute of Finance, Accounting & Taxation (IOFAT)",
        "Institute of Entrepreneurship & Innovation (IOEI)",
        "Institute of Public Policy & Governance (IOPPG)"
      ]
    },
    {
      category: "B. Law, Justice & Public Administration",
      icon: <Scale className="text-[#ba9d25] w-5 h-5" />,
      institutes: [
        "Institute of Legal Studies & Justice (IOLSJ)"
      ]
    },
    {
      category: "C. Environment, Sustainability & Climate",
      icon: <Globe className="text-[#ba9d25] w-5 h-5" />,
      institutes: [
        "Institute of Environment, Social & Governance (IOESG)"
      ]
    },
    {
      category: "D. Social Sciences & Humanities",
      icon: <Users className="text-[#ba9d25] w-5 h-5" />,
      institutes: [
        "Institute of Social Sciences (IOSS)",
        "Institute of Psychology & Human Behaviour (IOPHB)",
        "Institute of Economics & Development Studies (IOEDS)",
        "Institute of History, Culture & Civilization (IOHCC)",
        "Institute of Philosophy, Ethics & Consciousness Studies (IOPECS)",
        "Institute of Peace, Conflict & Strategic Studies (IOPCSS)"
      ]
    },
    {
      category: "E. Education & Skill Development",
      icon: <GraduationCap className="text-[#ba9d25] w-5 h-5" />,
      institutes: [
        "Institute of Education & Teacher Development (IOETD)",
        "Institute of Digital Learning & Educational Technology (IODLET)"
      ]
    },
    {
      category: "F. Technology, AI & Data",
      icon: <Cpu className="text-[#ba9d25] w-5 h-5" />,
      institutes: [
        "Institute of Artificial Intelligence & Emerging Technologies (IOAIET)"
      ]
    },
    {
      category: "G. Health, Yoga & Wellness",
      icon: <Heart className="text-[#ba9d25] w-5 h-5" />,
      institutes: [
        "Institute of Yoga & Integrative Wellness (IOYIW)",
        "Institute of Public Health & Healthcare Management (IOPHHM)"
      ]
    },
    {
      category: "H. Agriculture, Rural Development & Livelihood",
      icon: <Briefcase className="text-[#ba9d25] w-5 h-5" />,
      institutes: [
        "Institute of Rural Development & Panchayati Raj (IORDPR)"
      ]
    },
    {
      category: "I. Media, Communication & Creative Industries",
      icon: <Globe className="text-[#ba9d25] w-5 h-5" />,
      institutes: [
        "Institute of Journalism & Digital Media (IOJDM)"
      ]
    },
    {
      category: "J. Infrastructure, Real Estate & Urban Development",
      icon: <Landmark className="text-[#ba9d25] w-5 h-5" />,
      institutes: [
        "Institute of Real Estate & Infrastructure Management (IOREIM)"
      ]
    }
  ];

  const objectives = [
    "Continuous professional development",
    "Professional knowledge enhancement",
    "Skill development and upskilling",
    "Leadership and managerial development",
    "Regulatory and legal updates",
    "Career advancement",
    "Industry-oriented learning",
    "Lifelong professional learning"
  ];

  const targetParticipants = [
    "Directors and Independent Directors",
    "CEOs, CFOs and senior executives",
    "Company Secretaries and Chartered Accountants",
    "Governance and compliance professionals",
    "Lawyers and legal professionals",
    "Entrepreneurs and startup founders",
    "Teachers and academic professionals",
    "Government and public-sector officials",
    "Working professionals",
    "Graduates seeking professional development"
  ];

  const formats = [
    "Certificate programmes",
    "Executive education programmes",
    "Professional development programmes",
    "Refresher courses",
    "Masterclasses",
    "Workshops and seminars",
    "Short-term courses",
    "Annual learningcredit programmes",
    "Fellowships",
    "Leadership development programmes"
  ];

  const subjects = [
    "Corporate governance",
    "Board effectiveness",
    "ESG and sustainability",
    "Risk management",
    "Corporate laws and regulations",
    "Financial reporting and analysis",
    "Leadership and strategic management",
    "Artificial intelligence and digital governance",
    "Public policy",
    "Legal and regulatory studies",
    "Yoga, wellness and human development"
  ];

  const availableCourses = [
    {
      title: "Advanced Corporate Governance & Board Effectiveness",
      duration: "8 Weeks",
      mode: "Hybrid",
      image: "/assets/cep_course1.jpg"
    },
    {
      title: "ESG Strategy, Sustainability & Risk Management",
      duration: "12 Weeks",
      mode: "Live Online",
      image: "/assets/cep_course2.jpg"
    },
    {
      title: "AI Leadership & Digital Governance Masterclass",
      duration: "4 Weeks",
      mode: "Weekend Live",
      image: "/assets/cep_course3.jpg"
    }
  ];

  const faqs = [
    { q: "Who is eligible for the CEP programmes?", a: "Graduates, corporate executives, directors, Company Secretaries, Chartered Accountants, and working professionals looking for professional development are eligible." },
    { q: "What is the mode of learning for CEP?", a: "CEP programmes are offered in hybrid, live online, and weekend workshop modes to suit working professionals' schedules." },
    { q: "Are these degree programmes?", a: "No. As per the institutional disclaimer, these are intended for professional development, skill enhancement, and continuing education. They do not constitute government-recognised degrees." },
    { q: "What is the certification structure?", a: "Learners receive a Professional Certificate of Completion or Executive Credit Certificate upon meeting the credit and attendance criteria." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Banner Section */}
      <section className="relative py-10 bg-cover bg-center overflow-hidden text-white" style={{ backgroundImage: "linear-gradient(to right, rgba(15, 23, 42, 0.9) 40%, rgba(15, 23, 42, 0) 100%), url('/assets/cep_hero.jpg')" }}>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ba9d25]/10 rounded-l-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex px-3.5 py-1 rounded-full text-xs font-black bg-[#ba9d25]/20 text-[#ba9d25] border border-[#ba9d25]/30 uppercase tracking-widest">
              Continuing Education Programme (CEP)
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              Advance Your <br />
              <span className="text-[#ba9d25] font-black">Professional Competence</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
              <strong>Overview:</strong> The Continuing Education Programme refers to structured learning, professional training and development activities undertaken after or alongside formal education. CEP programmes are intended to help professionals, directors, entrepreneurs, employees, teachers and other learners update their knowledge, develop new competencies and remain professionally relevant.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/enquiry?type=cep&subject=admission" className="px-6 py-3 bg-gradient-to-r from-[#ba9d25] to-[#a88c21] text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-yellow-900/10 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Apply for Admission <ArrowRight size={14} />
              </Link>
              <Link to="/course?segment=CEP" className="px-6 py-3 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold rounded-xl text-xs transition-all">
                Explore CEP Programmes
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Metrics Bar */}
        <div className="border-t border-white/10 mt-16 bg-[#030712]/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ba9d25]">
                  <BookOpen size={20} />
                </div>
                <div className="text-left">
                  <div className="text-lg font-black">25+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Programmes</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ba9d25]">
                  <Landmark size={20} />
                </div>
                <div className="text-left">
                  <div className="text-lg font-black">10+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Institutes</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ba9d25]">
                  <Users size={20} />
                </div>
                <div className="text-left">
                  <div className="text-lg font-black">5K+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Learners</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ba9d25]">
                  <Award size={20} />
                </div>
                <div className="text-left">
                  <div className="text-lg font-black">Industry</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Recognised</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialised Institutes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black text-[#ba9d25] uppercase tracking-widest">Our Academic Network</span>
            <h2 className="text-3xl font-black text-gray-900">Specialised Institutes</h2>
            <div className="w-12 h-1 bg-[#ba9d25] mx-auto rounded-full" />
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Our academic network brings together expert faculty, modern infrastructure and practical learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cepInstitutes.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#ba9d25]/30 transition-all space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xs uppercase text-gray-900 tracking-wider leading-tight">{item.category}</h3>
                </div>
                <ul className="space-y-2 text-[11px] text-gray-600 font-semibold pl-1.5 border-l-2 border-gray-100">
                  {item.institutes.map((inst, index) => (
                    <li key={index} className="flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#ba9d25] mt-1.5 flex-shrink-0" />
                      <span>{inst}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives and Target Participants Banner (Full Width Dark Navy) */}
      <section className="py-20 bg-[#0b1528] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Objectives */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#ba9d25]/20 flex items-center justify-center text-[#ba9d25]"><Target size={18} /></span>
                Main Objectives
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                    <CheckCircle className="text-[#ba9d25] w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-semibold text-gray-200">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Participants */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#ba9d25]/20 flex items-center justify-center text-[#ba9d25]"><Users size={18} /></span>
                Target Participants
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {targetParticipants.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                    <CheckCircle className="text-[#ba9d25] w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-semibold text-gray-200">{p}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Available Courses & Why Choose YGI Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Courses Grid */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl font-black text-gray-900">Available Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {availableCourses.map((c, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="h-40 overflow-hidden relative">
                        <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                        <span className="absolute top-3 left-3 bg-[#ba9d25] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full">
                          Certificate Program
                        </span>
                      </div>
                      <div className="p-4 space-y-2">
                        <h4 className="font-bold text-xs text-gray-900 leading-snug h-10 overflow-hidden">{c.title}</h4>
                      </div>
                    </div>
                    <div className="p-4 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500 font-bold uppercase">
                      <span>Duration: {c.duration}</span>
                      <span className="text-[#ba9d25]">{c.mode}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 text-center">
                <Link to="/course?segment=CEP" className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#ba9d25] hover:bg-[#a88c21] text-white font-bold rounded-xl text-xs transition-colors">
                  View All Courses <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#0b1528] to-[#1e293b] text-white rounded-3xl p-8 shadow-xl border border-white/5 space-y-6">
              <h3 className="text-xl font-black">Why Choose Our Programmes?</h3>
              <ul className="space-y-4 text-xs font-semibold text-gray-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-[#ba9d25] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Industry-relevant curriculum tailored for professional leadership</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-[#ba9d25] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Expert faculty and corporate mentors directory mapping</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-[#ba9d25] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Flexible learning options suited for working individuals</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-[#ba9d25] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Practical and hands-on, case-study based approach</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-[#ba9d25] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Recognised, credit-aligned skill credentials</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Triple Summary Cards Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Format card */}
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 relative flex flex-col justify-between h-96">
              <div>
                <h3 className="text-lg font-black text-gray-900 flex items-center gap-2 mb-4">
                  <GraduationCap className="text-[#ba9d25] w-6 h-6" /> Programme Formats
                </h3>
                <ul className="space-y-2 text-xs font-semibold text-gray-600 overflow-y-auto max-h-56 pr-2">
                  {formats.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ba9d25]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end opacity-20">
                <GraduationCap size={48} className="text-[#ba9d25]" />
              </div>
            </div>

            {/* Subject Area card */}
            <div className="bg-[#ba9d25] text-white rounded-3xl p-8 h-96 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black flex items-center gap-2 mb-4">
                  <BookOpen className="text-white w-6 h-6" /> Indicative Subject Areas
                </h3>
                <ul className="space-y-2 text-xs font-semibold overflow-y-auto max-h-64 pr-2">
                  {subjects.map((sub, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Promotion card */}
            <div className="bg-cover bg-center rounded-3xl overflow-hidden h-96 relative flex flex-col justify-end p-8 text-white border border-gray-100" style={{ backgroundImage: "linear-gradient(to top, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.3)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80')" }}>
              <div className="space-y-4">
                <h3 className="text-xl font-black leading-tight">Empowering Professionals. Building a Better Tomorrow.</h3>
                <Link to="/enquiry?type=cep&subject=admission" className="inline-flex items-center gap-1 px-4 py-2.5 bg-gradient-to-r from-[#ba9d25] to-[#a88c21] text-white font-bold rounded-xl text-[10px] hover:shadow-lg transition-all">
                  Apply for Admission <ArrowRight size={12} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stay Updated (Newsletter Bar) */}
      <section className="py-12 bg-[#0b1528] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-black">Stay Updated</h3>
            <p className="text-xs text-gray-400 mt-1">Subscribe to our newsletter for the latest programmes, events and updates.</p>
          </div>
          <div className="flex w-full md:w-auto max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#ba9d25] w-full"
            />
            <button className="px-5 py-2.5 bg-[#ba9d25] hover:bg-[#a88c21] text-white text-xs font-bold rounded-xl flex-shrink-0 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center font-bold text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeFaq === idx ? 'rotate-180 text-[#ba9d25]' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 py-4 border-t border-gray-100 text-xs text-gray-600 leading-relaxed bg-gray-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Disclaimer */}
      <section className="bg-gray-100 py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 leading-relaxed text-justify">
            <span className="font-bold">Disclaimer:</span> Yogbodhi Global Institute is a multidisciplinary learning and professional-development platform offering continuing education, alternative learning and complementary learning programmes. Unless specifically stated otherwise, its programmes and certificates are intended for professional development, skill enhancement, continuing education and personal enrichment. They should not be represented as government-recognised degrees, university qualifications or statutory professional licences. Any programme offered in collaboration with a recognised university, professional body or authorised institution should separately display the name, role and recognition status of the collaborating institution.
          </p>
        </div>
      </section>

    </div>
  );
};

export default CEP;
