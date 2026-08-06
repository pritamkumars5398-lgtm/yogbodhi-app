import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap, Award, Users, CheckCircle, Calendar, ShieldCheck,
  ChevronDown, BookOpen, Target, Briefcase, Scale, Heart, Cpu,
  Globe, Landmark, ArrowRight, HelpCircle
} from 'lucide-react';

const CLS = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const objectives = [
    "Supplement formal academic education",
    "Bridge the gap between academic knowledge and practical skills",
    "Improve employability and career readiness",
    "Develop communication, leadership and life skills",
    "Introduce learners to interdisciplinary subjects",
    "Provide mentoring and career guidance",
    "Promote ethical, social and environmental awareness",
    "Encourage holistic personal and professional development"
  ];

  const targetLearners = [
    "School students",
    "College and university students",
    "Research scholars",
    "Young professionals",
    "Job seekers",
    "Teachers and trainers",
    "Entrepreneurs",
    "Community volunteers",
    "Individuals preparing for professional responsibilities"
  ];

  const formats = [
    "Add-on certificate courses",
    "After-school learning programmes",
    "Career-readiness programmes",
    "Mentorship programmes",
    "Professional orientation programmes",
    "Academic support programmes",
    "Workshops and seminars",
    "Internship-readiness programmes",
    "Digital-skills programmes",
    "Leadership and personality-development programmes"
  ];

  const indicativeAreas = [
    "Communication and presentation skills",
    "Leadership and teamwork",
    "Career planning",
    "Digital skills",
    "Artificial intelligence awareness",
    "Entrepreneurship and innovation",
    "Financial literacy",
    "Corporate and legal awareness",
    "Yoga, wellness and stress management",
    "Ethics and responsible citizenship",
    "Research and academic writing",
    "Employability and workplace readiness"
  ];

  const certifications = [
    "Add-on Course Certificate",
    "Certificate of Completion",
    "Certificate of Participation",
    "Skill Enhancement Certificate",
    "Mentorship Programme Certificate",
    "Career Readiness Certificate"
  ];

  const availableCourses = [
    {
      title: "Interdisciplinary Research & Academic Writing",
      duration: "6 Weeks",
      mode: "Live Online",
      image: "/assets/cls_course1.jpg"
    },
    {
      title: "Career Readiness, Leadership & Employability Skills",
      duration: "8 Weeks",
      mode: "Hybrid Workshops",
      image: "/assets/cls_course2.jpg"
    },
    {
      title: "AI Awareness & Digital Tools for Students",
      duration: "4 Weeks",
      mode: "Self-Paced/Weekend",
      image: "/assets/cls_course3.jpg"
    }
  ];

  const faqs = [
    { q: "Can school students join CLS courses?", a: "Yes. YGI offers after-school learning and life-skills sessions specifically designed for school students." },
    { q: "Do these count towards formal university credits?", a: "Unless stated otherwise in cooperation with a specific university, these are add-on certificate programmes for skill enhancement and personal enrichment." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Hero Banner Section */}
      <section className="relative py-10 bg-cover bg-center overflow-hidden text-white" style={{ backgroundImage: "linear-gradient(to right, rgba(15, 23, 42, 0.9) 40%, rgba(15, 23, 42, 0) 100%), url('/assets/cls_hero.jpg')" }}>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ba9d25]/10 rounded-l-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex px-3.5 py-1 rounded-full text-xs font-black bg-[#ba9d25]/20 text-[#ba9d25] border border-[#ba9d25]/30 uppercase tracking-widest">
              Complementary Learning System (CLS)
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              Supplement & <br />
              <span className="text-[#ba9d25] font-black">Enrich Your Education</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
              <strong>Overview:</strong> The Complementary Learning System provides additional education that supports, enriches and supplements formal school, college, university or professional education. CLS does not ordinarily replace formal education. It helps learners acquire practical knowledge, professional skills, life skills, values and interdisciplinary understanding that may not be sufficiently covered in the conventional curriculum.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/enquiry?type=cls&subject=mentorship" className="px-6 py-3 bg-gradient-to-r from-[#ba9d25] to-[#a88c21] text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-lg hover:-translate-y-0.5 transition-all">
                Join a Mentorship Programme <ArrowRight size={14} />
              </Link>
              <Link to="/course?segment=CLS" className="px-6 py-3 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold rounded-xl text-xs transition-all">
                Explore Complementary Courses
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
                  <GraduationCap size={20} />
                </div>
                <div className="text-left">
                  <div className="text-lg font-black">Supportive</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Education</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ba9d25]">
                  <Landmark size={20} />
                </div>
                <div className="text-left">
                  <div className="text-lg font-black">Bridge</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Gap Skills</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ba9d25]">
                  <Users size={20} />
                </div>
                <div className="text-left">
                  <div className="text-lg font-black">Personalised</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Mentorship</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ba9d25]">
                  <Award size={20} />
                </div>
                <div className="text-left">
                  <div className="text-lg font-black">Employability</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Focused</div>
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
                          Complementary
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
                <Link to="/course?segment=CLS" className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#ba9d25] hover:bg-[#a88c21] text-white font-bold rounded-xl text-xs transition-colors">
                  View All Courses <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#0b1528] to-[#1e293b] text-white rounded-3xl p-8 shadow-xl border border-white/5 space-y-6">
              <h3 className="text-xl font-black">CLS Features</h3>
              <ul className="space-y-4 text-xs font-semibold text-gray-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-[#ba9d25] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Practical bridging skills next to formal curriculum</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-[#ba9d25] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>One-on-one personal academic mentoring</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-[#ba9d25] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Internship readiness & workspace preparations</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-[#ba9d25] w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Digital training and personality-development</span>
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
                <ul className="space-y-2 text-xs font-semibold text-gray-600 overflow-y-auto max-h-56 pr-2">
                  {certifications.map((c, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ba9d25]" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
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

export default CLS;
