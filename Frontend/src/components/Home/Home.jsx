import React, { useEffect, useState } from 'react';
import HeroBanner from './HeroBanner';
import Classes from './Classes';
import Testimonial from './Testimonial';
import CallBack from './CallBack';
import Experts from './Experts';
import StatsBar from './StatsBar';
import WhyChooseUs from './WhyChooseUs';
import FAQ from './FAQ';
import axios from 'axios';
import api from '../../services/endpoints';
import fallbackImage from '../../assets/fallback.jpg';
import { ChevronLeft, ChevronRight, GraduationCap, Compass, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const SliderPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([
    {
      _id: 'default',
      image: fallbackImage,
      desktopImage: fallbackImage,
      tabletImage: fallbackImage,
      mobileImage: fallbackImage,
      title: "Yogbodhi",
      subtitle: "Empowering Your Future with Quality Education",
      buttonText: "Explore Courses",
      classText: "Join the Journey"
    }
  ]);
  const [loading, setLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const GetSlider = async () => {
    try {
      // Keep showing the default slide while loading
      const res = await axios.post(api.slider.getSlider);
      if (res.data && res.data.data && Array.isArray(res.data.data) && res.data.data.length > 0) {
        setSlides(res.data.data);
      } else if (res.data?.data?.data && Array.isArray(res.data.data.data) && res.data.data.data.length > 0) {
        setSlides(res.data.data.data);
      }
      // If API fails or returns empty, we keep the default slide
    } catch (error) {
      console.log('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { GetSlider(); }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (slides.length > 0 && !isPaused) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [slides.length, isPaused]);

  return (
    <>
      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Choose Your Learning Path Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ba9d25]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-2">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ba9d25] to-[#a88c21]">Learning Path</span>
            </h2>
            <p className="text-xs uppercase tracking-widest text-[#ba9d25] font-black mb-4">
              Learn Continuously. Learn Differently. Learn Beyond Boundaries.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#ba9d25] to-[#a88c21] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-base leading-relaxed font-medium">
              Connecting professional education, flexible learning, practical skills, traditional wisdom and contemporary knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CEP Card */}
            <div className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:border-[#ba9d25]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ba9d25]/5 rounded-bl-full group-hover:bg-[#ba9d25]/10 transition-colors" />
              <div>
                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="text-[#ba9d25] w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#ba9d25] transition-colors">
                  Continuing Education Programme (CEP)
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-8">
                  Advance your professional knowledge, leadership capabilities and industry competence through structured continuing education.
                </p>
              </div>
              <Link to="/cep">
                <button className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#ba9d25] to-[#a88c21] text-white shadow-lg shadow-yellow-100 hover:shadow-xl hover:shadow-yellow-200 transition-all duration-300 hover:translate-x-1 flex items-center justify-center gap-2">
                  Explore CEP <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
            </div>

            {/* ALS Card */}
            <div className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:border-[#ba9d25]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ba9d25]/5 rounded-bl-full group-hover:bg-[#ba9d25]/10 transition-colors" />
              <div>
                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Compass className="text-[#ba9d25] w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#ba9d25] transition-colors">
                  Alternative Learning System (ALS)
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-8">
                  Learn beyond conventional boundaries through flexible, experiential, digital and community-based education.
                </p>
              </div>
              <Link to="/als">
                <button className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#ba9d25] to-[#a88c21] text-white shadow-lg shadow-yellow-100 hover:shadow-xl hover:shadow-yellow-200 transition-all duration-300 hover:translate-x-1 flex items-center justify-center gap-2">
                  Explore ALS <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
            </div>

            {/* CLS Card */}
            <div className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:border-[#ba9d25]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ba9d25]/5 rounded-bl-full group-hover:bg-[#ba9d25]/10 transition-colors" />
              <div>
                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="text-[#ba9d25] w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#ba9d25] transition-colors">
                  Complementary Learning System (CLS)
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-8">
                  Strengthen your formal education with practical skills, mentoring, interdisciplinary learning and career development.
                </p>
              </div>
              <Link to="/cls">
                <button className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#ba9d25] to-[#a88c21] text-white shadow-lg shadow-yellow-100 hover:shadow-xl hover:shadow-yellow-200 transition-all duration-300 hover:translate-x-1 flex items-center justify-center gap-2">
                  Explore CLS <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Schools & Institutes Banner Section */}
      <section className="py-16 bg-gradient-to-br from-gray-950 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#ba9d25]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold bg-[#ba9d25]/20 text-[#ba9d25] border border-[#ba9d25]/30 uppercase tracking-widest">
              Multidisciplinary Learning for a Changing World
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Explore Our <span className="text-[#ba9d25]">Schools and Institutes</span>
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Discover multidisciplinary learning opportunities designed for professional advancement, personal development, social transformation and lifelong education.
            </p>
            <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">
              Tagline: Knowledge for Leadership, Learning and Human Development
            </div>
          </div>
          <Link to="/schools" className="flex-shrink-0">
            <button className="px-8 py-4 bg-gradient-to-r from-[#ba9d25] to-[#a88c21] hover:from-[#a88c21] hover:to-[#947b1c] text-white font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 hover:scale-105">
              Explore Academic Structure <ChevronRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      {/* Programs */}
      <Classes />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Expert Faculty */}
      <Experts />

      {/* Student Testimonials + Videos */}
      <Testimonial />

      {/* FAQ */}
      <FAQ />

      {/* Callback Form */}
      <CallBack />
    </>
  );
};

export default SliderPage;
