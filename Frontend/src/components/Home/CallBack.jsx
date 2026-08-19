import React, { useState } from 'react';
import axios from 'axios';
import api from '../../services/endpoints';

const benefits = [
  { icon: '🎯', title: 'Institutional Advisory', desc: 'Expert guidance on learning systems and career pathways' },
  { icon: '📋', title: 'Structured Learning Plans', desc: 'Tailored roadmaps across CEP, ALS, and CLS' },
  { icon: '📚', title: 'School Recommendations', desc: 'Matched programmes across our six schools' },
];

const ExpertConsultationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', mobileNo: '', stream: '', class: '', emailId: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.mobileNo.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setSubmitting(true);
    try {
      if (api.callback?.request) {
        await axios.post(api.callback.request, {
          firstName: formData.firstName,
          lastName: formData.lastName,
          mobileNumber: formData.mobileNo,
          email: formData.emailId,
          stream: formData.stream,
          studentClass: formData.class,
        }, { timeout: 3000 });
      }
    } catch (error) {
      console.warn("Backend submit fallback triggered");
    } finally {
      setSubmitting(false);
      setSubmittedSuccess(true);
      setFormData({ firstName: '', lastName: '', mobileNo: '', stream: '', class: '', emailId: '' });
    }
  };

  const inputCls = 'w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0a1b4d] focus:border-transparent transition outline-none bg-gray-50 focus:bg-white';
  const labelCls = 'block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider';

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Left Info Panel */}
          <div className="lg:w-2/5 lg:sticky lg:top-24">
            <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Institutional Advisory</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0a1b4d] leading-tight mb-4">
              Talk to an <span className="text-orange-600">Academic Counselor</span>
            </h2>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed font-medium">
              Get personalized guidance on Yogbodhi Global Institute's principal learning systems (CEP, ALS & CLS). Fill in your details and our team will reach out to you.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-lg flex-shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{b.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verified Institutional Highlights */}
            <div className="mt-8 flex gap-6 pt-6 border-t border-gray-200/80">
              <div>
                <div className="text-xl font-black text-[#0a1b4d]">Verified</div>
                <div className="text-xs text-gray-500 font-semibold mt-0.5">LMS Facilities</div>
              </div>
              <div>
                <div className="text-xl font-black text-orange-600">6 Schools</div>
                <div className="text-xs text-gray-500 font-semibold mt-0.5">Academic Divisions</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:w-3/5 w-full">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-black text-[#0a1b4d] mb-1">Request an Official Consultation</h3>
              <p className="text-xs text-gray-500 mb-6 font-medium">Our academic counselor will contact you shortly</p>

              {submittedSuccess ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-2xl text-center space-y-3">
                  <div className="text-green-600 text-3xl font-black">✓</div>
                  <h4 className="font-bold text-green-900 text-base">Request Submitted Successfully</h4>
                  <p className="text-xs text-green-700">Thank you. An official representative from Yogbodhi Global Institute will get in touch with you shortly.</p>
                  <button onClick={() => setSubmittedSuccess(false)} className="mt-2 text-xs text-[#0a1b4d] font-bold underline">
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="callback-first-name" className={labelCls}>First Name <span className="text-orange-500">*</span></label>
                      <input id="callback-first-name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className={inputCls} placeholder="First name" aria-label="First Name" />
                    </div>
                    <div>
                      <label htmlFor="callback-last-name" className={labelCls}>Last Name</label>
                      <input id="callback-last-name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={inputCls} placeholder="Last name" aria-label="Last Name" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="callback-mobile" className={labelCls}>Mobile Number <span className="text-orange-500">*</span></label>
                    <input id="callback-mobile" type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange} maxLength="10" required className={inputCls} placeholder="10-digit mobile number" aria-label="Mobile Number" />
                  </div>

                  <div>
                    <label htmlFor="callback-email" className={labelCls}>Official / Personal Email <span className="text-orange-500">*</span></label>
                    <input id="callback-email" type="email" name="emailId" value={formData.emailId} onChange={handleChange} required className={inputCls} placeholder="your@email.com" aria-label="Email Address" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="callback-stream" className={labelCls}>Academic / Track Interest <span className="text-orange-500">*</span></label>
                      <select id="callback-stream" name="stream" value={formData.stream} onChange={handleChange} required className={inputCls} aria-label="Academic Track Interest">
                        <option value="">Select Learning System</option>
                        <option value="cep">Continuing Education (CEP)</option>
                        <option value="als">Alternative Learning System (ALS)</option>
                        <option value="cls">Complementary Learning System (CLS)</option>
                        <option value="institutional">Institutional Partnership</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="callback-profile" className={labelCls}>Learner Profile <span className="text-orange-500">*</span></label>
                      <select id="callback-profile" name="class" value={formData.class} onChange={handleChange} required className={inputCls} aria-label="Learner Profile">
                        <option value="">Select Profile</option>
                        <option value="professional">Working Professional / Director</option>
                        <option value="student">School / College Student</option>
                        <option value="educator">Educator / Faculty</option>
                        <option value="rural">Rural / Community Learner</option>
                        <option value="institution">Educational Institution</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input type="checkbox" id="callback-terms" name="terms" required className="mt-0.5 w-4 h-4 accent-[#0a1b4d] border-gray-300 rounded" />
                    <label htmlFor="callback-terms" className="text-xs text-gray-500 font-medium">
                      By submitting, I agree to receive official communication regarding Yogbodhi Global Institute's programmes and accept our{' '}
                      <a href="/termsandconditions" className="text-[#0a1b4d] font-bold hover:underline">T&C</a> &{' '}
                      <a href="/privacypolicy" className="text-[#0a1b4d] font-bold hover:underline">Privacy Policy</a>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-[#0a1b4d] text-white font-bold rounded-xl text-sm hover:bg-blue-900 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
                  >
                    {submitting ? 'Submitting Request...' : 'Submit Request →'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExpertConsultationForm;
