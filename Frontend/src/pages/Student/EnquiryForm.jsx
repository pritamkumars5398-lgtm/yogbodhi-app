import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Mail, Phone, User, Landmark, ShieldCheck, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/Common/SEOHead';

const EnquiryForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialType = searchParams.get('type') || 'cep';
  const initialSubject = searchParams.get('subject') || 'admission';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    learningSegment: initialType.toUpperCase(),
    enquiryType: initialSubject,
    organization: '',
    qualification: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <SEOHead 
        title="Enquiry & Admissions Portal" 
        description="Official enquiry and application portal for Yogbodhi Global Institute learning programs, CEP, ALS, CLS, and institutional partnerships." 
      />
      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#0a1b4d] to-gray-900 p-8 text-white text-center relative">
          <span className="text-xs font-bold bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full uppercase tracking-wider border border-orange-500/30">
            YGI Connect Portal
          </span>
          <h1 className="text-3xl font-black mt-4">Enquiry & Application Portal</h1>
          <p className="text-gray-300 text-sm mt-2">Connect with Yogbodhi Global Institute admissions and academic boards</p>
        </div>

        {submitted ? (
          <div className="p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-green-200">
              <CheckCircle className="text-green-600 w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Application Submitted Successfully!</h2>
            <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
              Thank you for connecting. Our academic or partnership officer will review your information and get back to you within 24-48 business hours.
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-[#0a1b4d] text-white font-bold rounded-xl shadow-md hover:bg-blue-900 transition"
            >
              Back to Homepage
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="enquiry-fullname" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Full Name <span className="text-orange-500">*</span></label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 text-gray-400 w-4.5 h-4.5" />
                  <input
                    id="enquiry-fullname"
                    name="fullName"
                    type="text"
                    required
                    aria-label="Full Name"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#0a1b4d] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="enquiry-email" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Email Address <span className="text-orange-500">*</span></label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 text-gray-400 w-4.5 h-4.5" />
                  <input
                    id="enquiry-email"
                    name="email"
                    type="email"
                    required
                    aria-label="Email Address"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#0a1b4d] transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="enquiry-phone" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Phone Number <span className="text-orange-500">*</span></label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 text-gray-400 w-4.5 h-4.5" />
                  <input
                    id="enquiry-phone"
                    name="phone"
                    type="tel"
                    required
                    aria-label="Phone Number"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#0a1b4d] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="enquiry-qualification" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Highest Qualification</label>
                <input
                  id="enquiry-qualification"
                  name="qualification"
                  type="text"
                  required
                  aria-label="Highest Qualification"
                  value={formData.qualification}
                  onChange={e => setFormData({ ...formData, qualification: e.target.value })}
                  placeholder="e.g. Graduate, Master's, Executive"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0a1b4d] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="enquiry-segment" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Learning System</label>
                <select
                  id="enquiry-segment"
                  name="learningSegment"
                  aria-label="Learning System"
                  value={formData.learningSegment}
                  onChange={e => setFormData({ ...formData, learningSegment: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0a1b4d] transition-all"
                >
                  <option value="CEP">Continuing Education Programme (CEP)</option>
                  <option value="ALS">Alternative Learning System (ALS)</option>
                  <option value="CLS">Complementary Learning System (CLS)</option>
                </select>
              </div>

              <div>
                <label htmlFor="enquiry-target" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Enquiry Purpose</label>
                <select
                  id="enquiry-target"
                  name="enquiryType"
                  aria-label="Enquiry Purpose"
                  value={formData.enquiryType}
                  onChange={e => setFormData({ ...formData, enquiryType: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0a1b4d] transition-all"
                >
                  <option value="admission">Apply for Admission / Enrollment</option>
                  <option value="faculty">Faculty / Mentor Application</option>
                  <option value="partnership">Institutional Partnership (Colleges & Schools)</option>
                  <option value="project">Learning Project Submission</option>
                  <option value="general">General Institutional Enquiry</option>
                </select>
              </div>
            </div>

            {(formData.enquiryType === 'partnership' || formData.enquiryType === 'faculty') && (
              <div>
                <label htmlFor="enquiry-organization" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Organization / College Name</label>
                <div className="relative">
                  <Landmark className="absolute left-3 top-3.5 text-gray-400 w-4.5 h-4.5" />
                  <input
                    id="enquiry-organization"
                    name="organization"
                    type="text"
                    required
                    aria-label="Organization or College Name"
                    value={formData.organization}
                    onChange={e => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Enter Institution / Corporate name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#0a1b4d] transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="enquiry-message" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Message / Statement of Purpose</label>
              <textarea
                id="enquiry-message"
                name="message"
                rows={4}
                required
                aria-label="Message or Statement of Purpose"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="Detail your requirements, background, or target subjects..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0a1b4d] transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-sm font-bold text-white bg-[#0a1b4d] hover:bg-blue-900 shadow-md transition-all text-center cursor-pointer"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>

      <div className="max-w-2xl mx-auto mt-8 text-center text-xs text-gray-500 leading-relaxed font-medium">
        <p>
          <strong>Official Institutional Disclosure:</strong> Yogbodhi Global Institute programs focus on multidisciplinary skill development, executive leadership, and continuing education. All submitted applications are reviewed in accordance with institutional policy.
        </p>
      </div>
    </div>
  );
};

export default EnquiryForm;
