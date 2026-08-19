import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Classroom Courses", href: "/course" },
    { name: "Test Series", href: "/test" },
    { name: "Contact Us", href: "/contact" },
    { name: "Terms & Conditions", href: "/termsandconditions" },
    { name: "Privacy Policy", href: "/privacypolicy" }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook size={18} />,
      href: "https://www.facebook.com/rootsclasses1313/",
      color: "hover:bg-blue-600"
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={18} />,
      href: "https://www.instagram.com/roots_classes?igsh=cndtdml4MW0wNmFz",
      color: "hover:bg-pink-600"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={18} />,
      href: "https://www.linkedin.com/company/roots-classes/",
      color: "hover:bg-blue-700"
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={18} />,
      href: "https://www.youtube.com/@nikolaphysics",
      color: "hover:bg-yellow-600"
    }
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-400 overflow-hidden border-t border-gray-800 mt-auto">
      {/* Background glowing effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-9 bg-[#ba9d25]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ba9d25]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

          {/* Brand Section */}
          <div className="lg:col-span-1 text-center md:text-left flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block mb-6">
              <img src="/assets/yogbodhi.png" alt="Yogbodhi Logo" className="h-17 w-full drop-shadow-xl" />
            </Link>
            <p className="text-gray-300 text-sm font-bold leading-relaxed mb-2 max-w-xs">
              A Global Platform for Continuing, Alternative and Complementary Learning
            </p>
            <p className="text-gray-400 text-xs leading-relaxed mb-6 max-w-xs">
              Connecting professional education, flexible learning, practical skills, traditional wisdom and contemporary knowledge.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.name} page`}
                  className={`w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700/50 flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-white ${social.color} hover:border-transparent hover:shadow-[0_0_15px_rgba(186,157,37,0.3)] hover:-translate-y-1`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-bold mb-6 tracking-wide">
              Quick Links
              <span className="block w-20 h-1 bg-gradient-to-r from-[#ba9d25] to-transparent mt-2 mx-auto md:mx-0 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className=" text-sm text-gray-400 hover:text-[#ba9d25] transition-all duration-300 flex items-center gap-2 group justify-center md:justify-start w-fit mx-auto md:mx-0"
                  >
                    <ChevronRight size={14} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#ba9d25]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-bold mb-6 tracking-wide">
              Contact Us
              <span className="block w-20 h-1 bg-gradient-to-r from-[#ba9d25] to-transparent mt-2 mx-auto md:mx-0 rounded-full"></span>
            </h3>
            <div className="space-y-5">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-gray-800/80 border border-gray-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ba9d25]/10 group-hover:border-[#ba9d25]/30 transition-all duration-300">
                  <Phone size={18} className="text-[#ba9d25]" />
                </div>
                <div className="mt-1 md:mt-2">
                  <p className="text-sm hover:text-white transition-colors cursor-pointer">+91 98775-15330</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-gray-800/80 border border-gray-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ba9d25]/10 group-hover:border-[#ba9d25]/30 transition-all duration-300">
                  <Mail size={18} className="text-[#ba9d25]" />
                </div>
                <div className="mt-1 md:mt-2 break-all">
                  <p className="text-sm hover:text-white transition-colors cursor-pointer">yogbodhiglobal1313@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-gray-800/80 border border-gray-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ba9d25]/10 group-hover:border-[#ba9d25]/30 transition-all duration-300">
                  <MapPin size={18} className="text-[#ba9d25]" />
                </div>
                <div className="mt-1 md:mt-2">
                  <p className="text-sm leading-relaxed max-w-[200px] mx-auto md:mx-0">
                    Gill Rd, opp. ITI College, Shilapuri, Ludhiana, Punjab 141003
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-bold mb-6 tracking-wide">
              Newsletter
              <span className="block w-20 h-1 bg-gradient-to-r from-orange-500 to-transparent mt-2 mx-auto md:mx-0 rounded-full"></span>
            </h3>
            <p className="text-sm mb-4 text-gray-400 max-w-xs mx-auto md:mx-0">
              Subscribe to receive official Yogbodhi Global Institute research and programme updates.
            </p>
            <form 
              className="flex flex-col gap-3 max-w-xs mx-auto md:mx-0" 
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to Yogbodhi Global Institute updates!");
              }}
            >
              <div className="relative group">
                <label htmlFor="footer-newsletter-email" className="sr-only">Email Address for Newsletter</label>
                <input
                  id="footer-newsletter-email"
                  name="footerNewsletterEmail"
                  type="email"
                  placeholder="Enter your email address"
                  aria-label="Email Address for Newsletter"
                  className="w-full bg-gray-800/50 text-white text-sm rounded-xl pl-4 pr-10 py-3 outline-none border border-gray-700 focus:border-orange-500 focus:bg-gray-800 transition-all duration-300 placeholder-gray-500"
                  required
                />
                <Mail size={18} className="absolute right-3 top-3.5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0a1b4d] hover:bg-blue-900 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:-translate-y-0.5"
              >
                Subscribe Now
              </button>
            </form>
          </div>

        </div>

        {/* Disclaimer row */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <p className="text-[11px] leading-relaxed text-gray-400 text-justify font-medium">
            <span className="font-bold text-gray-300">Important Institutional Disclosure:</span> Yogbodhi Global Institute is a multidisciplinary learning and professional-development platform offering continuing education (CEP), alternative learning (ALS) and complementary learning (CLS) programmes. Unless specifically stated otherwise, its programmes and certificates are intended for professional development, skill enhancement, continuing education and personal enrichment. They should not be represented as government-recognized degrees or statutory professional licences.
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
            © {currentYear} Yogbodhi Global Institute. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link to="/termsandconditions" className="text-gray-500 hover:text-[#ba9d25] transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/privacypolicy" className="text-gray-500 hover:text-[#ba9d25] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-gray-500 hover:text-[#ba9d25] transition-colors duration-200">
              Support Center
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ba9d25] via-yellow-400 to-[#ba9d25]"></div>
    </footer>
  );
};

export default Footer;