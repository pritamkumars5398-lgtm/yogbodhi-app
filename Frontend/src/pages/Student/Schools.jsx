import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, BookOpen, Compass, GraduationCap, Users, Layers, Award, Target, ChevronRight, Activity, Cpu, Briefcase, Scale, Heart } from 'lucide-react';
import SEOHead from '../../components/Common/SEOHead';

const Schools = () => {
  const schoolsData = [
    {
      id: 1,
      name: "School of Corporate Governance & Leadership",
      focus: "Developing ethical, effective and future-ready corporate leaders, directors, board members and governance professionals.",
      icon: <ShieldCheck className="w-8 h-8 text-[#ba9d25]" />,
      institutes: [
        { name: "Institute of Corporate Governance & Directorship", abbrev: "IOCGD" },
        { name: "Institute of Corporate Directors", abbrev: "IOCD" },
        { name: "Institute of Environment, Social & Governance", abbrev: "IOESG" }
      ],
      areas: [
        "Corporate governance", "Board leadership and effectiveness", "Independent directorship",
        "Directors’ duties and responsibilities", "Board evaluation and succession planning",
        "Audit, risk and compliance oversight", "ESG and sustainability governance",
        "Corporate ethics and accountability", "AI and technology governance", "Family-business governance"
      ],
      target: "Directors, Independent Directors, CEOs, senior executives, board professionals, entrepreneurs, compliance officers and individuals preparing for board responsibilities."
    },
    {
      id: 2,
      name: "School of Law, Public Policy & Management",
      focus: "Promoting excellence in corporate law, regulatory compliance, public policy and administrative leadership.",
      icon: <Scale className="w-8 h-8 text-[#ba9d25]" />,
      institutes: [
        { name: "Institute of Corporate Laws & Regulations", abbrev: "IOCLR" },
        { name: "Institute of Public Policy & Governance", abbrev: "IOPPG" },
        { name: "Institute of Business Leadership & Management", abbrev: "IOBLM" }
      ],
      areas: [
        "Corporate and commercial law", "Securities law and capital markets", "Regulatory compliance",
        "Public policy formulation and analysis", "Administrative law and governance", "Strategic management",
        "Executive decision-making", "Conflict resolution and negotiation", "Global trade and policy"
      ],
      target: "Legal professionals, corporate counsel, policy analysts, public administrators, managers and executives."
    },
    {
      id: 3,
      name: "School of Finance, Commerce & Entrepreneurship",
      focus: "Fostering financial literacy, modern business acumen, startup management and sustainable entrepreneurship.",
      icon: <Briefcase className="w-8 h-8 text-[#ba9d25]" />,
      institutes: [
        { name: "Institute of Finance, Accounting & Taxation", abbrev: "IOFAT" },
        { name: "Institute of Entrepreneurship & Innovation", abbrev: "IOEI" },
        { name: "Vedic & Modern Business Institute", abbrev: "VMBI" }
      ],
      areas: [
        "Financial management and corporate finance", "Accounting and taxation standards", "Auditing and risk management",
        "Entrepreneurship and venture creation", "Innovation management", "Small business development",
        "Vedic and traditional business principles", "Ethical commerce"
      ],
      target: "Entrepreneurs, startup founders, finance professionals, accountants, business owners and commerce students."
    },
    {
      id: 4,
      name: "School of Emerging Technologies & Applied Sciences",
      focus: "Empowering professionals and learners with skills in artificial intelligence, digital transformation and technological innovation.",
      icon: <Cpu className="w-8 h-8 text-[#ba9d25]" />,
      institutes: [
        "Online course development", "Digital teaching methods", "Learning-management systems",
        "Cyber awareness", "Technology for business and governance"
      ],
      target: "Students, professionals, teachers, entrepreneurs, business leaders, governance professionals, digital-content creators and individuals seeking practical knowledge of AI and technology."
    },
    {
      id: 5,
      name: "School of Social Sciences, Humanities & Consciousness",
      focus: "Understanding society, human behaviour, education, ethics, philosophy, culture, consciousness and the human condition.",
      icon: <Users className="w-8 h-8 text-[#ba9d25]" />,
      institutes: [
        { name: "Institute of Social Sciences", abbrev: "IOSS" },
        { name: "Institute of Philosophy, Ethics & Consciousness Studies", abbrev: "IOPECS" },
        { name: "Institute of Psychology & Human Behaviour", abbrev: "IOPHB" },
        { name: "Institute of Education & Teacher Development", abbrev: "IOETD" }
      ],
      areas: [
        "Social sciences", "Sociology and community studies", "Philosophy and ethics",
        "Consciousness studies", "Psychology and human behaviour", "Education and pedagogy",
        "Teacher development", "Culture and civilisation", "Human values", "Social inclusion",
        "Peace and social harmony", "Personal and intellectual development"
      ],
      target: "Teachers, students, researchers, counsellors, community leaders, social workers, education professionals and individuals interested in philosophy, psychology, ethics and human development."
    },
    {
      id: 6,
      name: "School of Health, Yoga & Sustainable Development",
      focus: "Promoting holistic health, yoga, preventive wellness, public health, sustainable living, rural development and inclusive social progress.",
      icon: <Heart className="w-8 h-8 text-[#ba9d25]" />,
      institutes: [
        { name: "Institute of Yoga & Integrative Wellness", abbrev: "IOYIW" },
        { name: "Institute of Public Health & Healthcare Management", abbrev: "IOPHHM" },
        { name: "Institute of Rural Development & Panchayati Raj", abbrev: "IORDPR" }
      ],
      areas: [
        "Yoga education", "Integrative wellness", "Preventive health", "Mental and emotional wellbeing",
        "Public health", "Healthcare management", "Nutrition and lifestyle awareness",
        "Rural development", "Panchayati Raj", "Community leadership", "Sustainable development",
        "Environmental and social awareness"
      ],
      target: "Yoga practitioners, wellness professionals, healthcare administrators, community workers, rural leaders, teachers, social organisations and individuals interested in holistic wellbeing and sustainable development."
    }
  ];

  const [activeSchool, setActiveSchool] = useState(schoolsData[0]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <SEOHead 
        title="Six Schools & Constituent Institutes" 
        description="Explore the Six Academic Schools and constituent Institutes of Yogbodhi Global Institute across Corporate Governance, Law, Technology, Finance, Human Development, and Yoga." 
      />
      {/* Hero Header */}
      <section className="relative py-16 bg-cover bg-center overflow-hidden text-white" style={{ backgroundImage: "linear-gradient(to right, rgba(15, 23, 42, 0.45) 30%, rgba(15, 23, 42, 0.15) 100%), url('/assets/schools_hero.jpg')" }}>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ba9d25]/10 rounded-l-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex justify-center">
          <div className="bg-[#0b1528]/70 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl max-w-3xl w-full">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#ba9d25]/20 text-[#ba9d25] border border-[#ba9d25]/30 uppercase tracking-widest inline-block">
              Explore Our Schools and Institutes
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-4 tracking-tight">
              Our Academic <span className="text-[#ba9d25]">Structure</span>
            </h1>
            <p className="mt-4 text-xs md:text-sm text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Yogbodhi Global Institute is organised into multidisciplinary Schools and specialised Institutes covering corporate governance, law, public policy, management, finance, technology, social sciences, philosophy, psychology, education, yoga, public health, rural development and sustainable development.
            </p>
            <p className="mt-4 text-[10px] md:text-xs text-[#ba9d25] uppercase tracking-widest font-black">
              Knowledge for Leadership, Learning and Human Development
            </p>
          </div>
        </div>
      </section>

      {/* Main Structure Navigation & Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Tabs List */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Academic Divisions</span>
              {schoolsData.map((school) => (
                <button
                  key={school.id}
                  onClick={() => setActiveSchool(school)}
                  className={`w-full p-5 rounded-2xl border text-left flex items-start gap-4 transition-all duration-300 ${activeSchool.id === school.id
                    ? 'bg-white border-[#ba9d25] shadow-lg shadow-yellow-100/50 translate-x-1'
                    : 'bg-transparent border-transparent hover:bg-white/60 hover:border-gray-200'
                    }`}
                >
                  <div className={`p-2 rounded-xl flex-shrink-0 transition-colors ${activeSchool.id === school.id ? 'bg-yellow-50' : 'bg-gray-100'}`}>
                    {school.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm leading-tight transition-colors ${activeSchool.id === school.id ? 'text-gray-900' : 'text-gray-600'}`}>{school.name}</h3>
                    <span className="text-[10px] text-gray-400 font-bold uppercase mt-1.5 block">{school.institutes.length} Constituent Institutes</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Detailed Panel */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ba9d25] to-[#a88c21]" />

              {/* Overview & Vision */}
              <div className="space-y-4">
                <span className="text-xs font-black text-[#ba9d25] uppercase tracking-widest">School Overview</span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">{activeSchool.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed font-semibold italic">"{activeSchool.focus}"</p>
              </div>

              {/* Constituent Institutes */}
              <div className="space-y-4">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#ba9d25]" /> Constituent Institutes
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeSchool.institutes.map((inst, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-gray-900 text-xs leading-snug">{inst.name}</h4>
                        <span className="text-[10px] text-gray-400 font-bold mt-1 block">Specialised Division</span>
                      </div>
                      <span className="text-[10px] font-black text-[#ba9d25] bg-[#ba9d25]/10 border border-[#ba9d25]/20 px-2 py-0.5 rounded-full flex-shrink-0">
                        {inst.abbrev}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas of Learning */}
              <div className="space-y-4">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#ba9d25]" /> Principal Areas of Learning
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSchool.areas.map((area, i) => (
                    <span key={i} className="px-3 py-1.5 bg-yellow-50 text-gray-700 font-medium text-xs rounded-xl border border-yellow-100/50">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target Learners */}
              <div className="space-y-3 bg-gray-55 border border-gray-100 rounded-2xl p-6">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#ba9d25]" /> Target Learners
                </span>
                <p className="text-gray-600 text-xs leading-relaxed font-semibold">{activeSchool.target}</p>
              </div>

              {/* Application CTA */}
              <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-gray-400 font-medium">
                  Deliverable segments: <strong className="text-gray-700">CEP · ALS · CLS</strong>
                </div>
                <Link to={`/enquiry?type=cep&subject=admission`} className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ba9d25] to-[#a88c21] text-white text-xs font-bold flex items-center gap-2 hover:shadow-lg transition-all">
                  Apply / Enrol in Programme <ChevronRight size={14} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Functional Structure Overview */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-gray-900">Functional Structure & Delivery Framework</h2>
            <p className="text-gray-500 text-sm mt-3">Each School establishes and administers constituent structures for seamless delivery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
              <h4 className="font-bold text-gray-900 flex items-center gap-2">
                <Layers className="text-[#ba9d25]" /> Constituent Structures
              </h4>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>• Constituent Institutes</li>
                <li>• Centres of Excellence</li>
                <li>• Academic Departments</li>
                <li>• Research Centres & Professional Forums</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
              <h4 className="font-bold text-gray-900 flex items-center gap-2">
                <BookOpen className="text-[#ba9d25]" /> Academic Formats
              </h4>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>• Continuing / Alternative / Complementary programmes</li>
                <li>• Certificate Courses & Executive Programmes</li>
                <li>• Workshops, Masterclasses and Fellowships</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
              <h4 className="font-bold text-gray-900 flex items-center gap-2">
                <Award className="text-[#ba9d25]" /> Publications & Events
              </h4>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>• Research Projects & publications</li>
                <li>• Conferences and Seminars</li>
                <li>• Professional credit frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Box */}
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

export default Schools;
