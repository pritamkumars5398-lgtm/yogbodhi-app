import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../services/endpoints';
import VideoCarousel from './VideoCarousel';
import { User, Star } from 'lucide-react';

/* alternate accent per card */
const cardAccents = ['#0a1b4d', '#ba9d25', '#0284c7'];

const defaultInstitutionalTestimonials = [
  {
    id: 'inst_1',
    name: 'Sample Participant A',
    achievement: 'Independent Director & Governance Fellow',
    quote: 'The Continuing Education Programme (CEP) provided invaluable insights into executive board oversight, compliance standards, and risk management.',
    category: 'CEP - Governance',
    accent: '#0a1b4d',
  },
  {
    id: 'inst_2',
    name: 'Sample Learner B',
    achievement: 'Skill Circle Lead & Entrepreneur',
    quote: 'The Alternative Learning System (ALS) offered a flexible, community-based approach that bridged traditional knowledge with digital tools.',
    category: 'ALS - Vocational',
    accent: '#ba9d25',
  },
  {
    id: 'inst_3',
    name: 'Sample Scholar C',
    achievement: 'Research Fellow & Career Track Scholar',
    quote: 'Complementary Learning System (CLS) strengthened my formal academic degree with practical workplace readiness and presentation skills.',
    category: 'CLS - Employability',
    accent: '#0284c7',
  }
];

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState(defaultInstitutionalTestimonials);
  const [loading, setLoading] = useState(true);

  const GetTestinomial = async () => {
    try {
      setLoading(true);
      const res = await axios.post(api.testimonial.getTestimonial, {}, { timeout: 3500 });
      if (res.data?.data && Array.isArray(res.data.data) && res.data.data.length > 0) {
        setTestimonials(res.data.data.map((item, i) => ({
          id: item._id, name: item.name, image: item.image,
          achievement: item.achievement || 'Institutional Fellow', rating: parseInt(item.rating) || 5,
          quote: item.review, category: item.Course || 'Yogbodhi Ecosystem',
          accent: cardAccents[i % cardAccents.length],
        })));
      } else {
        setTestimonials(defaultInstitutionalTestimonials);
      }
    } catch { 
      // Silently fall back to default institutional testimonials
      setTestimonials(defaultInstitutionalTestimonials); 
    }
    finally { setLoading(false); }
  };

  useEffect(() => { GetTestinomial(); }, []);

  if (loading) return <div className="py-16 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0a1b4d]" /></div>;

  return (
    <>
      {/* Testimonials */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Institutional Insights & Feedback</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0a1b4d]">Learner Experience & Outcomes</h2>
            </div>
            <div className="flex gap-6 flex-shrink-0">
              <div className="text-center px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="text-xl font-black text-[#0a1b4d]">CEP | ALS | CLS</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">3 Learning Systems</div>
              </div>
              <div className="text-center px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="text-xl font-black text-orange-600">6 Schools</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Multidisciplinary</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id}
                className="bg-white rounded-3xl p-6 flex flex-col justify-between border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Accent top bar */}
                <div className="w-12 h-1.5 rounded-full mb-4" style={{ backgroundColor: t.accent }} />

                <p className="text-sm leading-relaxed text-gray-600 flex-1 mb-6 italic">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gray-100 text-[#0a1b4d] flex items-center justify-center flex-shrink-0 font-bold border border-gray-200">
                    <User size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-gray-900 truncate">{t.name}</p>
                    <p className="text-xs text-gray-500 truncate">{t.achievement}</p>
                  </div>
                  <span className="flex-shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full text-white uppercase tracking-wider" style={{ backgroundColor: t.accent }}>
                    {t.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Stories */}
      <div className="bg-gradient-to-br from-gray-900 to-[#0a1b4d] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center md:text-left">
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">Watch & Explore</p>
            <h2 className="text-2xl md:text-3xl font-bold">Institutional Highlights in Action</h2>
          </div>
          <VideoCarousel />
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
