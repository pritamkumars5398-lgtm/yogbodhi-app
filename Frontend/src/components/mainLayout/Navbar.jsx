import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ChevronDown, BookOpen, GraduationCap, Compass, ShieldCheck, 
  Menu, X, Landmark, User, Sparkles, LogOut 
} from 'lucide-react';
import useStudentStore from '../../Store/studentstore';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { student, isAuthenticated, logout } = useStudentStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [learningDropdownOpen, setLearningDropdownOpen] = useState(false);
  const [tokenExists, setTokenExists] = useState(false);

  useEffect(() => {
    const t = localStorage.getItem('token') || localStorage.getItem('studentToken');
    setTokenExists(Boolean(t));
  }, [location, isAuthenticated]);

  const isLoggedIn = isAuthenticated || tokenExists || Boolean(student?._id);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("studentToken");
    setTokenExists(false);
    navigate('/stdlogin');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setLearningDropdownOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-[60] w-full font-sans">
      {/* 1. Announcement bar */}
      <div className="relative overflow-hidden bg-[#0a1b4d] text-white py-1.5 px-4 text-center border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
            <span className="tracking-wide uppercase text-[11px] font-bold text-orange-300">
              Yogbodhi Global Institute
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-gray-300">
            <span className="hidden sm:inline-block font-medium">Learning for Life. Leadership for the Future.</span>
            <span className="hidden sm:inline text-gray-500">|</span>
            <span className="px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 text-[10px] font-bold tracking-wider uppercase">
              Website under development
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar */}
      <nav className={`bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${scrolled ? 'shadow-md border-gray-200' : 'border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/assets/yogbodhi.png" alt="Yogbodhi Global Institute" className="h-14 w-auto object-contain group-hover:scale-105 transition-transform" />
              <div className="hidden sm:flex flex-col">
                <span className="text-lg font-black text-[#0a1b4d] tracking-tight leading-none" style={{ fontFamily: 'Times New Roman, serif' }}>
                  YOGBODHI
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-orange-600 uppercase">
                  Global Institute
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              <Link to="/" className={`text-xs font-bold uppercase tracking-wider transition-colors ${location.pathname === '/' ? 'text-orange-600' : 'text-gray-700 hover:text-[#0a1b4d]'}`}>
                Home
              </Link>

              <Link to="/about" className={`text-xs font-bold uppercase tracking-wider transition-colors ${location.pathname === '/about' ? 'text-orange-600' : 'text-gray-700 hover:text-[#0a1b4d]'}`}>
                About YGI
              </Link>

              {/* Learning Systems Dropdown */}
              <div className="relative" onMouseEnter={() => setLearningDropdownOpen(true)} onMouseLeave={() => setLearningDropdownOpen(false)}>
                <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-[#0a1b4d] py-2">
                  Learning Systems <ChevronDown size={14} className={`transition-transform duration-200 ${learningDropdownOpen ? 'rotate-180 text-orange-600' : ''}`} />
                </button>

                {learningDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 space-y-1 animate-fade-in z-50">
                    <Link to="/cep" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/60 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0a1b4d] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#0a1b4d] group-hover:text-white transition-colors">
                        <GraduationCap size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900 group-hover:text-[#0a1b4d]">CEP</div>
                        <div className="text-[11px] text-gray-500 font-medium leading-tight">Continuing Education Programme</div>
                      </div>
                    </Link>

                    <Link to="/als" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/60 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Compass size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900 group-hover:text-orange-600">ALS</div>
                        <div className="text-[11px] text-gray-500 font-medium leading-tight">Alternative Learning System</div>
                      </div>
                    </Link>

                    <Link to="/cls" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/60 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <BookOpen size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900 group-hover:text-emerald-600">CLS</div>
                        <div className="text-[11px] text-gray-500 font-medium leading-tight">Complementary Learning System</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Schools & Institutes */}
              <Link to="/schools" className={`text-xs font-bold uppercase tracking-wider transition-colors ${location.pathname === '/schools' ? 'text-orange-600' : 'text-gray-700 hover:text-[#0a1b4d]'}`}>
                Six Schools
              </Link>

              {/* Programmes */}
              <Link to="/course" className={`text-xs font-bold uppercase tracking-wider transition-colors ${location.pathname === '/course' ? 'text-orange-600' : 'text-gray-700 hover:text-[#0a1b4d]'}`}>
                Programmes
              </Link>

              {/* Research */}
              <Link to="/blog" className={`text-xs font-bold uppercase tracking-wider transition-colors ${location.pathname === '/blog' ? 'text-orange-600' : 'text-gray-700 hover:text-[#0a1b4d]'}`}>
                Research Hub
              </Link>

              {/* Contact */}
              <Link to="/contact" className={`text-xs font-bold uppercase tracking-wider transition-colors ${location.pathname === '/contact' ? 'text-orange-600' : 'text-gray-700 hover:text-[#0a1b4d]'}`}>
                Contact Us
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {isLoggedIn ? (
                <>
                  <Link 
                    to={student?.role === 'admin' ? '/admin' : student?.role === 'instructor' ? '/instructor/dashboard' : '/dashboard'} 
                    className="px-4 py-2 rounded-xl text-xs font-bold text-[#0a1b4d] border border-gray-200 hover:border-[#0a1b4d] hover:bg-gray-50 transition-all flex items-center gap-1.5"
                  >
                    <User size={14} />
                    My Portal
                  </Link>
                  <button 
                    onClick={handleLogout} 
                    className="px-4 py-2 rounded-xl text-xs font-bold text-red-600 border border-red-200 bg-red-50 hover:bg-red-100 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <LogOut size={14} />
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/stdlogin" className="px-4 py-2 rounded-xl text-xs font-bold text-[#0a1b4d] border border-gray-200 hover:border-[#0a1b4d] hover:bg-gray-50 transition-all flex items-center gap-1.5">
                  <User size={14} />
                  Login Portal
                </Link>
              )}
              <Link to="/enquiry" className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0a1b4d] hover:bg-blue-900 shadow-sm transition-all flex items-center gap-1.5">
                Enquiry Desk
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-3">
            <Link to="/" className="block py-2 text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-50">
              Home
            </Link>
            <Link to="/about" className="block py-2 text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-50">
              About YGI
            </Link>
            <div className="py-2 space-y-2 border-b border-gray-50">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Learning Systems</span>
              <Link to="/cep" className="block text-xs font-bold text-blue-900 pl-2">CEP (Continuing Education)</Link>
              <Link to="/als" className="block text-xs font-bold text-orange-600 pl-2">ALS (Alternative Learning)</Link>
              <Link to="/cls" className="block text-xs font-bold text-emerald-600 pl-2">CLS (Complementary Learning)</Link>
            </div>
            <Link to="/schools" className="block py-2 text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-50">
              Six Schools & Institutes
            </Link>
            <Link to="/course" className="block py-2 text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-50">
              Programmes
            </Link>
            <Link to="/blog" className="block py-2 text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-50">
              Research & Publications
            </Link>
            <Link to="/contact" className="block py-2 text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-50">
              Contact Us
            </Link>
            <div className="pt-2 flex flex-col gap-2">
              {isLoggedIn ? (
                <>
                  <Link 
                    to={student?.role === 'admin' ? '/admin' : student?.role === 'instructor' ? '/instructor/dashboard' : '/dashboard'} 
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-center text-[#0a1b4d] border border-gray-200"
                  >
                    My Portal
                  </Link>
                  <button 
                    onClick={handleLogout} 
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-center text-red-600 bg-red-50 border border-red-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/stdlogin" className="w-full py-2.5 rounded-xl text-xs font-bold text-center text-[#0a1b4d] border border-gray-200">
                  Login Portal
                </Link>
              )}
              <Link to="/enquiry" className="w-full py-2.5 rounded-xl text-xs font-bold text-center text-white bg-[#0a1b4d]">
                Institutional Enquiry Desk
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
