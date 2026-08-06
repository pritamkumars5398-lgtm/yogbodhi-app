import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap, Award, Users, CheckCircle, Calendar, ShieldCheck,
  ChevronDown, BookOpen, Target, Briefcase, Scale, Heart, Cpu,
  Globe, Landmark, ArrowRight, HelpCircle, Compass
} from 'lucide-react';

const ALS = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const objectives = [
    "Provide flexible and accessible learning opportunities",
    "Encourage self-directed and interest-based education",
    "Promote interdisciplinary knowledge",
    "Support learners who cannot participate in conventional education",
    "Integrate traditional wisdom with contemporary knowledge",
    "Encourage experiential and project-based learning",
    "Reduce geographical, financial and social barriers to education",
    "Promote digital and community-based learning"
  ];

  const targetLearners = [
    "School or college dropouts",
    "Rural and underserved learners",
    "Working individuals",
    "Adult learners",
    "Self-directed learners",
    "Learners seeking vocational skills",
    "Individuals interested in non-conventional subjects",
    "Community educators and social workers",
    "Learners requiring flexible study schedules",
    "Individuals seeking knowledge without pursuing a formal degree"
  ];

  const learningMethods = [
    "Self-paced online courses",
    "Recorded lectures",
    "Live digital classes",
    "Community learning circles",
    "Mentorship",
    "Project-based learning",
    "Experiential learning",
    "Case-study-based learning",
    "Field assignments",
    "Peer-to-peer learning",
    "Workshops and practical demonstrations",
    "Recognition of prior learning and experience"
  ];

  const indicativeAreas = [
    "Digital literacy",
    "Entrepreneurship",
    "Communication skills",
    "Financial literacy",
    "Vocational and employability skills",
    "Rural and community development",
    "Yoga and wellness",
    "Ethics and consciousness studies",
    "Environmental awareness",
    "Leadership and citizenship",
    "Art, culture and traditional knowledge",
    "Technology-enabled learning"
  ];

  const certifications = [
    "Certificate of Participation",
    "Certificate of Completion",
    "Certificate of Learning",
    "Skill Certificate",
    "Project Completion Certificate",
    "Community Learning Certificate"
  ];

  const availableCourses = [
    {
      title: "Digital Literacy & Community Empowerment",
      duration: "6 Weeks",
      mode: "Self-Paced",
      image: "/assets/als_course1.jpg"
    },
    {
      title: "Vocational Entrepreneurship & Micro-business Planning",
      duration: "8 Weeks",
      mode: "Community Class",
      image: "/assets/als_course2.jpg"
    },
    {
      title: "Traditional Arts, Wellness & Yoga Practices",
      duration: "10 Weeks",
      mode: "Experiential",
      image: "/assets/als_course3.jpg"
    }
  ];

  const faqs = [
    { q: "What makes ALS different from traditional schooling?", a: "ALS provides flexible learning pathways, self-paced learning, and community circle setups outside formal university requirements." },
    { q: "Is prior experience recognized in ALS?", a: "Yes, YGI recognizes prior learning and experience to help custom-tailor the curriculum path." },
    { q: "Are these degrees?", a: "No, ALS certificates are intended for skill development and personal enrichment as per YGI guidelines." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Banner Section */}
      <section className="relative py-10 bg-cover bg-center overflow-hidden text-white" style={{ backgroundImage: "linear-gradient(to right, rgba(15, 23, 42, 0.9) 40%, rgba(15, 23, 42, 0) 100%), url('/assets/als_hero.jpg')" }}>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ba9d25]/10 rounded-l-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex px-3.5 py-1 rounded-full text-xs font-black bg-[#ba9d25]/20 text-[#ba9d25] border border-[#ba9d25]/30 uppercase tracking-widest">
              Alternative Learning System (ALS)
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              Learn Beyond <br />
              <span className="text-[#ba9d25] font-black">Conventional Boundaries</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
              <strong>Overview:</strong> The Alternative Learning System is an innovative and flexible educational framework that provides learning opportunities outside the conventional school, college or university model. ALS is intended for learners who require flexible, interdisciplinary, experiential, community-based, self-directed or technology-enabled education. It does not necessarily replace statutory or formally recognised education. It provides an alternative method of acquiring knowledge, skills, values and practical experience.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/enquiry?type=als&subject=learn" className="px-6 py-3 bg-gradient-to-r from-[#ba9d25] to-[#a88c21] text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-lg hover:-translate-y-0.5 transition-all">
                Start Learning <ArrowRight size={14} />
              </Link>
              <Link to="/course?segment=ALS" className="px-6 py-3 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold rounded-xl text-xs transition-all">
                Explore Alternative Learning
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
                  <Compass size={20} />
                </div>
                <div className="text-left">
                  <div className="text-lg font-black">Flexible</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Methodology</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ba9d25]">
                  <Landmark size={20} />
                </div>
                <div className="text-left">
                  <div className="text-lg font-black">Digital</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Classrooms</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ba9d25]">
                  <Users size={20} />
                </div>
                <div className="text-left">
                  <div className="text-lg font-black">Experiential</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Learning</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ba9d25]">
                  <Award size={20} />
                </div>
                <div className="text-left">
                  <div className="text-lg font-black">Custom</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Pathways</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives and Target Learners Banner (Full Width Dark Navy) */}
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

            {/* Target Learners */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#ba9d25]/20 flex items-center justify-center text-[#ba9d25]"><Users size={18} /></span>
                Target Learners
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {targetLearners.map((part, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                    <CheckCircle className="text-[#ba9d25] w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-semibold text-gray-200">{part}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Available Courses Section */}
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
                          Alternative Learning
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
                <Link to="/course?segment=ALS" className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#ba9d25] hover:bg-[#a88c21] text-white font-bold rounded-xl text-xs transition-colors">
                  View All Courses <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#0b1528] to-[#1e293b] text-white rounded-3xl p-8 shadow-xl border border-white/5 space-y-6">
              <h3 className="text-xl font-black">ALS Framework Features</h3>
              <ul className="space-y-4 text-xs font-semibold text-gray-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-[#ba9d25] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Self-paced study modules and community circles</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-[#ba9d25] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Recognition of prior learning experiences</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-[#ba9d25] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Vocational and digital skills upskilling</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-[#ba9d25] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Support for dropouts and rural populations</span>
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

            {/* Format/Methods card */}
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 relative flex flex-col justify-between h-96">
              <div>
                <h3 className="text-lg font-black text-gray-900 flex items-center gap-2 mb-4">
                  <Compass className="text-[#ba9d25] w-6 h-6" /> Learning Methods
                </h3>
                <ul className="space-y-2 text-xs font-semibold text-gray-600 overflow-y-auto max-h-56 pr-2">
                  {learningMethods.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ba9d25]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end opacity-20">
                <Compass size={48} className="text-[#ba9d25]" />
              </div>
            </div>

            {/* Subject Area/Program Areas card */}
            <div className="bg-[#ba9d25] text-white rounded-3xl p-8 h-96 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black flex items-center gap-2 mb-4">
                  <BookOpen className="text-white w-6 h-6" /> Indicative Programme Areas
                </h3>
                <ul className="space-y-2 text-xs font-semibold overflow-y-auto max-h-64 pr-2">
                  {indicativeAreas.map((sub, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Certifications structure card */}
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 h-96 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-gray-900 flex items-center gap-2 mb-4">
                  <Award className="text-[#ba9d25] w-6 h-6" /> Certifications Structure
                </h3>
                <ul className="space-y-2 text-xs font-semibold text-gray-600 overflow-y-auto max-h-40 pr-2">
                  {certifications.map((c, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ba9d25]" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[10px] text-gray-400 leading-normal italic">
                  <strong>Notice:</strong> Certificates represent learning/skills and should not be described as statutory degrees unless legally recognised.
                </p>
              </div>
              <div className="flex justify-end opacity-20">
                <Award size={48} className="text-[#ba9d25]" />
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

export default ALS;
