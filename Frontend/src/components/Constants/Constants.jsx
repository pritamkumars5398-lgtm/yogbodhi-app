import React from 'react';

const facultyMembers = [
  {
    name: "Sample Faculty A",
    subject: "Corporate Governance & Leadership",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format",
    description: "Specialist in board effectiveness, independent directorship, and corporate ethics.",
    experience: "Academic Lead",
    rating: 4.9
  },
  {
    name: "Sample Faculty B",
    subject: "ESG Policy & Environmental Law",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format",
    description: "Senior mentor leading circular economy strategies and corporate ESG compliance.",
    experience: "Senior Researcher",
    rating: 4.8
  },
  {
    name: "Sample Faculty C",
    subject: "Digital Literacy & Community Learning",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format",
    description: "Grassroots educator coordinating alternative learning circles and vocational skills.",
    experience: "Program Coordinator",
    rating: 4.9
  }
];

const slides = [
  {
    title: "Continuing Education Programme (CEP)",
    description: "Executive certifications in governance, corporate laws, ESG, and technology leadership.",
    bgImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    overlayColor: "bg-black/50"
  },
  {
    title: "Alternative Learning System (ALS)",
    description: "Flexible, self-directed, and community-based education beyond conventional boundaries.",
    bgImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    overlayColor: "bg-black/50"
  },
  {
    title: "Complementary Learning System (CLS)",
    description: "Workplace skill enhancement, employability mentoring, and career readiness.",
    bgImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    overlayColor: "bg-black/50"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sample Learner A",
    achievement: "CEP Certification Holder",
    category: "Continuing Education Programme",
    quote: "The Corporate Governance certification provided deep insights into board compliance and ESG strategies.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    score: "Certified",
    bgColor: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    name: "Sample Learner B",
    achievement: "ALS Participant",
    category: "Alternative Learning System",
    quote: "The flexible learning pathway allowed me to acquire practical digital and entrepreneurial skills at my own pace.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    score: "Certified",
    bgColor: "from-orange-500 to-orange-600"
  },
  {
    id: 3,
    name: "Sample Learner C",
    achievement: "CLS Graduate",
    category: "Complementary Learning System",
    quote: "The workplace communication and interview mentoring sessions greatly enhanced my career readiness.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    score: "Certified",
    bgColor: "from-emerald-500 to-emerald-600"
  }
];

const courses = [
  {
    id: 1,
    title: "Corporate Governance & Board Effectiveness",
    instructor: "Sample Faculty A",
    duration: "8 weeks",
    students: 120,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format",
    category: "CEP"
  },
  {
    id: 2,
    title: "Digital Literacy & Community Skills",
    instructor: "Sample Faculty C",
    duration: "10 weeks",
    students: 150,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format",
    category: "ALS"
  }
];

const onlinecourses = [
  {
    id: 1,
    title: "Employability & Workplace Communication",
    instructor: "Sample Faculty E",
    duration: "6 weeks",
    students: 90,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format",
    category: "CLS"
  }
];

const blogsData = [
  {
    id: 1,
    title: "Artificial Intelligence in Education & Governance",
    excerpt: "Exploring the transformative role of AI tools and ethical digital governance...",
    content: `
      <p>Artificial Intelligence is reshaping administrative governance, education delivery, and public policy frameworks.</p>
      <p>Yogbodhi Global Institute emphasizes ethical AI integration, data protection, and technology policy across its schools.</p>
    `,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format",
    date: "April 10, 2025",
    category: "Technology"
  },
  {
    id: 2,
    title: "Corporate Governance & Board Leadership in 2025",
    excerpt: "Key policy developments, ESG compliance, and independent director duties...",
    content: `
      <p>Modern corporate governance requires proactive risk management, transparent audit oversight, and strong ESG commitments.</p>
      <p>Through the Institute of Corporate Governance & Directorship (IOCGD), YGI prepares board members for strategic decision-making.</p>
    `,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format",
    date: "March 15, 2025",
    category: "Governance"
  }
];

export { facultyMembers, slides, testimonials, courses, onlinecourses, blogsData };