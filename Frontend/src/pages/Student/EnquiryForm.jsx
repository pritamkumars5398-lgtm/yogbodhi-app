import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Mail, Phone, User, Landmark, ShieldCheck, CheckCircle } from 'lucide-react';

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
    // Simulate API request
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-gray-950 to-gray-900 p-8 text-white text-center relative">
          <span className="text-xs font-bold bg-[#ba9d25]/20 text-[#ba9d25] px-3 py-1 rounded-full uppercase tracking-wider border border-[#ba9d25]/30">
            YGI Connect
          </span>
          <h1 className="text-3xl font-black mt-4">Enquiry & Application Portal</h1>
          <p className="text-gray-400 text-sm mt-2">Connect with Yogbodhi Global Institute admissions and partnership boards</p>
        </div>

        {submitted ? (
          <div className="p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-green-200">
              <CheckCircle className="text-green-600 w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Application Submitted Successfully!</h2>
            <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
              Thank you for connecting. Our academic or partnership officer will review your information and get back to you within 24-48 business hours.
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2.5 bg-gradient-to-r from-[#ba9d25] to-[#a88c21] text-white font-bold rounded-xl shadow-md"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 text-gray-400 w-4.5 h-4.5" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#ba9d25] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 text-gray-400 w-4.5 h-4.5" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#ba9d25] transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 text-gray-400 w-4.5 h-4.5" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#ba9d25] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Highest Qualification</label>
                <input
                  type="text"
                  required
                  value={formData.qualification}
                  onChange={e => setFormData({ ...formData, qualification: e.target.value })}
                  placeholder="e.g. MBA, B.Tech, Ph.D"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ba9d25] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Learning Segment</label>
                <select
                  value={formData.learningSegment}
                  onChange={e => setFormData({ ...formData, learningSegment: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ba9d25] transition-all"
                >
                  <option value="CEP">Continuing Education Programme (CEP)</option>
                  <option value="ALS">Alternative Learning System (ALS)</option>
                  <option value="CLS">Complementary Learning System (CLS)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Enquiry Target</label>
                <select
                  value={formData.enquiryType}
                  onChange={e => setFormData({ ...formData, enquiryType: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ba9d25] transition-all"
                >
                  <option value="admission">Apply for Admission / Enrollment</option>
                  <option value="faculty">Become a Faculty Member / Mentor</option>
                  <option value="partnership">Partner with YGI (Colleges & Schools)</option>
                  <option value="project">Submit a Learning Project</option>
                  <option value="general">General Queries</option>
                </select>
              </div>
            </div>

            {(formData.enquiryType === 'partnership' || formData.enquiryType === 'faculty') && (
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Organization / College Name</label>
                <div className="relative">
                  <Landmark className="absolute left-3 top-3.5 text-gray-400 w-4.5 h-4.5" />
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={e => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Enter Institution / Corporate name"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#ba9d25] transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message / Cover Note</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="Detail your requirements, credentials, or target subjects..."
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ba9d25] transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#ba9d25] to-[#a88c21] hover:from-[#a88c21] hover:to-[#947b1c] shadow-lg shadow-yellow-100 transition-all text-center cursor-pointer"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>

      <div className="max-w-2xl mx-auto mt-8 text-center text-xs text-gray-400 leading-relaxed">
        <p>
          <strong>Institutional Notice:</strong> YGI programs are intended for skill enhancement and continuing professional education. Applications do not guarantee immediate enrollment. Collateral partner associations are subjected to academic verification.
        </p>
      </div>
    </div>
  );
};

export default EnquiryForm;
