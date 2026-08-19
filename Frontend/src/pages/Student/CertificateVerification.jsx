import React, { useState } from 'react';
import { ShieldCheck, CheckCircle, AlertTriangle, Search } from 'lucide-react';
import SEOHead from '../../components/Common/SEOHead';

const CertificateVerification = () => {
  const [certId, setCertId] = useState('');
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const mockCerts = {
    "YGI-CEP-2025-091": {
      recipient: "Sample Learner A",
      programme: "Advanced Corporate Governance & Board Effectiveness",
      segment: "Continuing Education Programme (CEP)",
      issuedDate: "2025-10-15",
      status: "Verified",
      collaboratingPartner: "Yogbodhi Executive Learning Board"
    },
    "YGI-ALS-2025-114": {
      recipient: "Sample Learner B",
      programme: "Practical Entrepreneurship & Vocational Skills",
      segment: "Alternative Learning System (ALS)",
      issuedDate: "2025-11-20",
      status: "Verified"
    },
    "YGI-CLS-2025-502": {
      recipient: "Sample Learner C",
      programme: "Employability, Workplace Readiness & Presentation Skills",
      segment: "Complementary Learning System (CLS)",
      issuedDate: "2025-12-05",
      status: "Verified"
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setSearched(true);
    if (mockCerts[certId.trim()]) {
      setResult(mockCerts[certId.trim()]);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <SEOHead 
        title="Official Certificate Verification Portal" 
        description="Verify credentials and certificates issued by Yogbodhi Global Institute for CEP, ALS, and CLS learning systems." 
      />
      <div className="max-w-xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#0a1b4d] to-gray-900 p-8 text-white text-center">
          <ShieldCheck className="text-orange-500 w-12 h-12 mx-auto mb-4" />
          <h1 className="text-3xl font-black">Certificate Verification Portal</h1>
          <p className="text-gray-300 text-sm mt-2">Verify official credentials issued by Yogbodhi Global Institute</p>
        </div>

        <div className="p-8 space-y-6">
          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label htmlFor="cert-id-input" className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Certificate ID Number <span className="text-orange-500">*</span></label>
              <div className="relative">
                <Search className="absolute left-3.5 top-3.5 text-gray-400 w-4.5 h-4.5" />
                <input
                  id="cert-id-input"
                  name="certId"
                  type="text"
                  required
                  aria-label="Certificate ID Number"
                  required
                  value={certId}
                  onChange={e => setCertId(e.target.value)}
                  placeholder="e.g. YGI-CEP-2025-091"
                  className="w-full bg-gray-55 border border-gray-100 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#ba9d25] transition-all"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#ba9d25] to-[#a88c21] hover:from-[#a88c21] hover:to-[#947b1c] shadow-lg transition-all text-center cursor-pointer"
            >
              Verify Certificate
            </button>
          </form>

          {searched && (
            <div className="mt-8 pt-6 border-t border-gray-100">
              {result ? (
                <div className="bg-green-50/50 border border-green-100 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900">Valid Credential Found</h3>
                      <p className="text-xs text-green-700">Issued by Yogbodhi Global Institute</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-gray-700">
                    <div className="flex justify-between py-1 border-b border-green-100/40">
                      <span className="font-medium text-gray-400">Recipient Name</span>
                      <span className="font-bold text-gray-900">{result.recipient}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-green-100/40">
                      <span className="font-medium text-gray-400">Programme Title</span>
                      <span className="font-bold text-gray-900 text-right max-w-[220px]">{result.programme}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-green-100/40">
                      <span className="font-medium text-gray-400">Learning Segment</span>
                      <span className="font-bold text-gray-900">{result.segment}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-green-100/40">
                      <span className="font-medium text-gray-400">Issued Date</span>
                      <span className="font-bold text-gray-900">{result.issuedDate}</span>
                    </div>
                    {result.collaboratingPartner && (
                      <div className="flex justify-between py-1 border-b border-green-100/40">
                        <span className="font-medium text-gray-400">Collaborator</span>
                        <span className="font-bold text-gray-900 text-right max-w-[200px]">{result.collaboratingPartner}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-1">
                      <span className="font-medium text-gray-400">Status</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 font-bold tracking-wider text-[9px] uppercase">
                        {result.status}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center space-y-3">
                  <AlertTriangle className="text-red-500 w-8 h-8 mx-auto" />
                  <h3 className="font-bold text-gray-900">Verification Failed</h3>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto">
                    No certificate was found matching ID: <strong>{certId}</strong>. Make sure spelling matches, or contact academic administration.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateVerification;
