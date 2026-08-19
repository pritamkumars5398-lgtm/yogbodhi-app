import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../services/adminendpoint';
import { User, Award, BookOpen } from 'lucide-react';

const defaultFacultyList = [
  {
    _id: 'fac_1',
    name: 'Sample Faculty A',
    subject: 'Corporate Governance & Risk',
    experience: 'Academic Lead',
    description: 'Specialist in independent director governance, board compliance, and executive continuing education (CEP).'
  },
  {
    _id: 'fac_2',
    name: 'Sample Faculty B',
    subject: 'ESG & Environmental Policy',
    experience: 'Senior Researcher',
    description: 'Expert mentor leading sustainable development, circular economy, and ESG compliance frameworks.'
  },
  {
    _id: 'fac_3',
    name: 'Sample Faculty C',
    subject: 'Community Digital Literacy',
    experience: 'Program Coordinator',
    description: 'Grassroots educator managing technology-enabled learning circles under the Alternative Learning System (ALS).'
  }
];

const FacultyShowcase = () => {
  const [faculty, setFaculty] = useState(defaultFacultyList);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        setLoading(true);
        if (api.faculty?.get) {
          const response = await axios.get(api.faculty.get, { timeout: 3000 });
          if (response.data.success && Array.isArray(response.data.data) && response.data.data.length > 0) {
            setFaculty(response.data.data);
          }
        }
      } catch (error) {
        setFaculty(defaultFacultyList);
      } finally {
        setLoading(false);
      }
    };
    fetchFaculty();
  }, []);

  if (loading) return null;

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Yogbodhi Academic Board</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0a1b4d]">Academic Mentors & Faculty</h2>
          </div>
          <p className="text-sm text-gray-600 font-medium max-w-xs md:text-right">
            Academicians and practitioners leading multidisciplinary learning tracks across our six schools.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member) => (
            <div
              key={member._id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#0a1b4d] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-orange-600">
                      {member.subject}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed font-medium mt-2">{member.description}</p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-gray-500">
                <span className="flex items-center gap-1"><Award size={14} className="text-[#0a1b4d]" /> {member.experience}</span>
                <span className="text-xs text-[#0a1b4d] font-bold">YGI Academic Board</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FacultyShowcase;
