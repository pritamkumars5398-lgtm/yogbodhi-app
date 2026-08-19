import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../services/endpoints';
import SEOHead from '../../components/Common/SEOHead';
import { BookOpen, Calendar, User, ArrowRight, X, Search, Clock, ChevronRight, FileText, Download } from 'lucide-react';

const formatDate = (dateString) => {
  if (!dateString) return '2026';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

const defaultResearchPublications = [
  {
    _id: 'pub_1',
    title: 'Framework for Executive Board Oversight in Emerging Markets',
    category: 'Working Papers',
    author: 'Sample Faculty A (Management & Governance)',
    createdAt: '2026-01-15',
    content: `This working paper outlines structured mechanisms for independent director evaluations, risk committee responsibilities, and corporate transparency frameworks tailored for developing market ecosystems. It examines governance models across continuing education programs (CEP).`,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format'
  },
  {
    _id: 'pub_2',
    title: 'Community-Based Alternative Learning Systems for Rural Skill Integration',
    category: 'Policy Briefs',
    author: 'Sample Faculty C (Alternative Learning Academy)',
    createdAt: '2025-11-20',
    content: `A comprehensive policy review examining digital-first community learning circles, vocational skill integration, and flexible learning pathways under the Alternative Learning System (ALS) framework.`,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format'
  },
  {
    _id: 'pub_3',
    title: 'Bridging Academic Higher Education & Workplace Presentation Competencies',
    category: 'Academic Publications',
    author: 'Sample Faculty E (Complementary Skills Institute)',
    createdAt: '2025-10-10',
    content: `Empirical study evaluating the impact of Complementary Learning Systems (CLS) on undergraduate student interview readiness, workplace communication, and interdisciplinary problem-solving skills.`,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format'
  },
  {
    _id: 'pub_4',
    title: 'Institutional Governance and Quality Assurance Disclosures',
    category: 'Institutional Reports',
    author: 'Yogbodhi Academic Council',
    createdAt: '2026-02-01',
    content: `Official institutional report outlining Yogbodhi Global Institute's academic governance standards, multi-school alignment, and ethical disclosure framework.`,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format'
  }
];

const BlogCard = ({ blog, onClick }) => (
  <div
    onClick={() => onClick(blog)}
    className="group cursor-pointer bg-white rounded-2xl border border-gray-100 hover:border-[#0a1b4d]/30 hover:shadow-xl transition-all duration-300 flex flex-col"
  >
    <div className="relative h-52 overflow-hidden rounded-t-2xl">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format"; }}
      />
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-[#0a1b4d] text-white rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm">
          {blog.category || 'Research'}
        </span>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
        <span className="flex items-center gap-1.5"><Calendar size={12} className="text-orange-500" /> {formatDate(blog.createdAt)}</span>
        <span className="flex items-center gap-1.5"><FileText size={12} className="text-blue-600" /> Institutional Paper</span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2 leading-snug">
        {blog.title}
      </h3>

      <p className="text-sm text-gray-500 mb-6 line-clamp-3 leading-relaxed flex-1">
        {blog.content}
      </p>

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs font-bold text-[#0a1b4d] flex items-center gap-1 group-hover:gap-2 transition-all">
          View Publication <ChevronRight size={14} className="text-orange-500" />
        </span>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
            <User size={12} />
          </div>
          <span className="text-[10px] font-bold text-gray-400 truncate max-w-[120px]">{blog.author}</span>
        </div>
      </div>
    </div>
  </div>
);

const BlogDetail = ({ blog, onClose }) => {
  if (!blog) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 animate-fadeIn">
      <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col animate-slideUp">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
            <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">Yogbodhi Research Hub</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-900">
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto p-6 md:p-12 space-y-6">
          <div className="h-64 md:h-80 w-full relative rounded-2xl overflow-hidden">
            <img src={blog.image} className="w-full h-full object-cover" alt="" />
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <span className="px-3 py-1 bg-blue-50 text-[#0a1b4d] rounded-lg">{blog.category}</span>
              <span>{formatDate(blog.createdAt)}</span>
              <span>{blog.author}</span>
            </div>

            <h1 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              {blog.content.split('\n').map((p, i) => p ? <p key={i}>{p}</p> : <br key={i} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const [blogs, setBlogs] = useState(defaultResearchPublications);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = ['All', 'Working Papers', 'Policy Briefs', 'Academic Publications', 'Institutional Reports'];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await axios.post(api.blog.getblog, {}, { timeout: 3500 });
        const data = res.data?.data?.data || res.data?.data || res.data || [];
        if (Array.isArray(data) && data.length > 0) {
          setBlogs(data);
        } else {
          setBlogs(defaultResearchPublications);
        }
      } catch (error) {
        setBlogs(defaultResearchPublications);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const filteredBlogs = blogs.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) || b.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = activeCategory === 'All' || b.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <SEOHead title="Research & Publications" description="Explore working papers, policy briefs, and academic publications from Yogbodhi Global Institute." />
      <div className="w-10 h-10 border-4 border-[#0a1b4d] border-t-orange-500 rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Research & Publications Hub" 
        description="Yogbodhi Global Institute Research & Publications — Working papers, policy briefs, academic research, and governance reports." 
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100 pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-[0.3em] mb-3">Yogbodhi Academic Repository</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#0a1b4d] mb-4">Research & <span className="text-orange-600">Publications Hub</span></h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed font-medium">
            Explore peer-informed working papers, policy briefs, institutional reports, and interdisciplinary research publications across Yogbodhi Global Institute's six schools.
          </p>

          <div className="max-w-lg mx-auto relative group">
            <input
              type="text"
              id="search-research-input"
              name="searchResearch"
              aria-label="Search research papers and publications"
              placeholder="Search research papers, topics, authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[#0a1b4d]/20 focus:border-[#0a1b4d] transition-all text-sm shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0a1b4d]" size={18} />
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="sticky top-[73px] z-20 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 py-4 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-3 whitespace-nowrap">Category:</span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${activeCategory === cat
                ? 'bg-[#0a1b4d] text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <BookOpen size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">No publication records match your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, idx) => (
              <BlogCard key={blog._id || idx} blog={blog} onClick={(b) => { setSelectedBlog(b); document.body.style.overflow = 'hidden'; }} />
            ))}
          </div>
        )}
      </main>

      {/* Footer CTA */}
      <section className="bg-gray-50 py-16 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden border border-gray-200 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-black text-[#0a1b4d] mb-3">Stay Informed on Research Releases</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm font-medium">Receive notifications when new institutional research papers and policy briefs are published.</p>

          {subscribed ? (
            <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-2xl max-w-md mx-auto font-semibold text-sm">
              ✓ Thank you for subscribing to research updates!
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <label htmlFor="research-newsletter-email" className="sr-only">Email address for research updates</label>
              <input
                id="research-newsletter-email"
                name="newsletterEmail"
                type="email"
                required
                placeholder="Enter your official email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1b4d]/20 focus:border-[#0a1b4d]"
              />
              <button type="submit" className="bg-[#0a1b4d] text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-900 transition shadow-md">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {selectedBlog && <BlogDetail blog={selectedBlog} onClose={() => { setSelectedBlog(null); document.body.style.overflow = 'auto'; }} />}
    </div>
  );
};

export default Blog;