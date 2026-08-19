import React, { useState } from 'react';

const faqs = [
  { q: 'What educational systems does Yogbodhi Global Institute offer?', a: 'Yogbodhi Global Institute provides three principal learning systems: Continuing Education Programme (CEP) for professionals & executives, Alternative Learning System (ALS) for flexible & community-based learning, and Complementary Learning System (CLS) for workplace skill enrichment.' },
  { q: 'How are programmes conducted?', a: 'Programmes are delivered through technology-enabled digital modules, self-directed learning platforms, experiential workshops, and institutional study circles across our six academic schools.' },
  { q: 'What qualifications or certificates are awarded?', a: 'Learners receive institutional certificates of completion, continuing education credits, and professional development credentials issued by Yogbodhi Global Institute and its constituent schools.' },
  { q: 'How do I submit an institutional enquiry or register?', a: 'Submit an enquiry directly via our online Enquiry Desk, connect with our academic counsellors, or email info@yogbodhi.in.' },
  { q: 'Who can enroll in YGI programmes?', a: 'Our multidisciplinary programmes cater to working professionals, directors, school & college students, educators, rural learners, and institutions seeking customized learning frameworks.' },
  { q: 'What is the institutional governance and legal status of YGI?', a: 'Yogbodhi Global Institute operates as a unified platform supported by Yogbodhi Private Limited (Platform & LMS Operator), Yogbodhi Global Limited (Academic Outreach), and Yogbodhi Foundation Limited (Research & Charitable Initiatives).' },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="bg-dot-grid py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left label */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <p className="text-xs font-bold text-[#ba9d25] uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Frequently<br />Asked<br />
              <span className="text-[#ba9d25]">Questions</span>
            </h2>
            <p className="text-sm text-gray-400 mt-6 leading-relaxed">
              Everything you need to know before joining. Can't find your answer?{' '}
              <a href="/contact" className="text-[#ba9d25] hover:underline font-medium">Contact us →</a>
            </p>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-8 divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className={`text-sm font-semibold pr-8 transition-colors ${open === i ? 'text-[#ba9d25]' : 'text-gray-800 group-hover:text-[#ba9d25]'}`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${open === i ? 'bg-[#ba9d25] rotate-45' : 'bg-gray-100'}`}>
                    <svg className="w-3 h-3" fill="none" stroke={open === i ? 'white' : '#6b7280'} viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <p className="pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQ;
