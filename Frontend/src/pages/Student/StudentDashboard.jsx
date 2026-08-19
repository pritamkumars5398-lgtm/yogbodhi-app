import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Award, BookOpen, Clock, Activity, CheckCircle, ArrowRight, User, LogOut } from 'lucide-react';
import useStudentStore from '../../Store/studentstore';
import SEOHead from '../../components/Common/SEOHead';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { student, isAuthenticated, logout } = useStudentStore();

  useEffect(() => {
    // Auth Check: Redirect to login if user is not authenticated
    const token = localStorage.getItem('token') || localStorage.getItem('studentToken');
    if (!isAuthenticated && !token && !student?._id) {
      navigate('/stdlogin?redirect=/dashboard', { replace: true });
    }
  }, [isAuthenticated, student, navigate]);

  // If user is not logged in, show authentication redirect screen
  const token = typeof window !== 'undefined' ? (localStorage.getItem('token') || localStorage.getItem('studentToken')) : null;
  if (!isAuthenticated && !token && !student?._id) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <SEOHead title="Student Portal Access" description="Authentication required to access Yogbodhi Global Institute Student Learning Portal." />
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl max-w-md w-full text-center space-y-4">
          <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto">
            <User size={28} />
          </div>
          <h2 className="text-2xl font-black text-gray-900">Authentication Required</h2>
          <p className="text-sm text-gray-600">Please sign in to access your registered learning tracks, certificates, and dashboard.</p>
          <div className="pt-2 flex flex-col gap-3">
            <Link to="/stdlogin?redirect=/dashboard" className="w-full py-3 bg-[#0a1b4d] text-white font-bold rounded-xl text-sm hover:bg-blue-900 transition">
              Sign In to Student Portal
            </Link>
            <Link to="/" className="w-full py-3 bg-gray-100 text-gray-700 font-bold rounded-xl text-sm hover:bg-gray-200 transition">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const enrolledCount = student?.enrolledCourses?.length || 0;

  const stats = [
    { label: "Enrolled Programmes", val: `${enrolledCount}`, icon: <BookOpen className="text-[#0a1b4d]" /> },
    { label: "Completed Topics", val: "0", icon: <CheckCircle className="text-green-600" /> },
    { label: "Learning Hours", val: "0 hrs", icon: <Clock className="text-blue-600" /> },
    { label: "Earned Certificates", val: "0", icon: <Award className="text-purple-600" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <SEOHead title="Student Learning Dashboard" description="Track your Yogbodhi Global Institute enrolled programmes, learning progression, and verified credentials." />
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0a1b4d] text-xs font-bold uppercase tracking-wider mb-2">
              <span>Verified Student Profile</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900">
              Welcome, {student?.name || student?.fullName || 'Learner'}
            </h1>
            <p className="text-gray-500 text-sm mt-1">Yogbodhi Global Institute — Learning Systems Portal</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/course" className="px-5 py-2.5 bg-[#0a1b4d] hover:bg-blue-900 text-white font-bold rounded-xl text-xs shadow-md transition-all">
              Explore Programmes
            </Link>
            <Link to="/verify-certificate" className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-xs transition-all border border-gray-200">
              Verify Credentials
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                {stat.icon}
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                <p className="text-xl font-black text-gray-900 mt-1">{stat.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Registered Programmes */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-gray-900">My Registered Programmes</h2>
            
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-16 h-16 bg-blue-50 text-[#0a1b4d] rounded-2xl flex items-center justify-center mx-auto">
                <BookOpen size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">No Active Enrolments Found</h3>
              <p className="text-sm text-gray-500 max-w-md mx-auto">
                You are currently not enrolled in any CEP, ALS, or CLS learning programs. Explore our multidisciplinary schools to get started.
              </p>
              <Link to="/course" className="inline-block px-6 py-3 bg-[#0a1b4d] text-white font-bold rounded-xl text-sm hover:bg-blue-900 transition shadow-md">
                Browse Learning Systems & Courses
              </Link>
            </div>
          </div>

          {/* Certificate & Credentials Summary */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Issued Certificates</h2>
            
            <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm space-y-6 text-center">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 mx-auto">
                <Award size={28} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">No Issued Certificates</h4>
                <p className="text-xs text-gray-500 mt-1">Complete your registered CEP, ALS, or CLS modules to earn verifiable institutional credentials.</p>
              </div>
              
              <Link to="/verify-certificate" className="block text-center w-full py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 font-bold transition-all text-xs">
                Go to Certificate Verification Portal
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;
