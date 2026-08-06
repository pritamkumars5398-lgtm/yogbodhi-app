import Home from "../components/Home/Home";
import StudentLogin from "../components/Student/StudentLogin";
import StudentRegister from "../components/Student/StudentRegister";
// import OnlineCourse from "../pages/Student/OnlineCourse";
import Scholarship from "../pages/Student/Scholarship";
import TestList from "../pages/Student/TestList";
import Blog from "../pages/Student/Blog";
import Contact from "../pages/Student/Contact";
import StudentProfile from "../components/Student/StudentProfile";
import Layout from "../Layout"
import Courses from "../pages/Student/Course/Courses";
import CourseDetails from "../pages/Student/Course/CourseDetails"
import PurchesCourses from "../components/Student/PurchesCourses";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TopicInfo from "../pages/Student/Course/Topicinfo";

// Learning Systems pages
import CEP from "../pages/Student/CEP";
import ALS from "../pages/Student/ALS";
import CLS from "../pages/Student/CLS";
import EnquiryForm from "../pages/Student/EnquiryForm";
import FacultyProfile from "../pages/Student/FacultyProfile";
import CertificateVerification from "../pages/Student/CertificateVerification";
import StudentDashboard from "../pages/Student/StudentDashboard";
import About from "../pages/Student/About";
import Schools from "../pages/Student/Schools";

const StudentRoutes = [

    {
        path: "/stdlogin",
        element: <StudentLogin />,
    },
    {
        path: "/register",
        element: <StudentRegister />,
    },

    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/schools",
                element: <Schools />,
            },
            {
                path: "/cep",
                element: <CEP />,
            },
            {
                path: "/als",
                element: <ALS />,
            },
            {
                path: "/cls",
                element: <CLS />,
            },
            {
                path: "/enquiry",
                element: <EnquiryForm />,
            },
            {
                path: "/partnerships",
                element: <EnquiryForm />,
            },
            {
                path: "/faculty",
                element: <FacultyProfile />,
            },
            {
                path: "/verify-certificate",
                element: <CertificateVerification />,
            },
            {
                path: "/dashboard",
                element: <StudentDashboard />,
            },
            {
                path: "/course",
                element: <Courses />,
            },
            {
                path: "/coursedetails",
                element: <CourseDetails />
            },
           {
            path:"/topicinfo/:topicId",
            element:<TopicInfo/>
           },
            {
                path: "/scholarship",
                element: <Scholarship />,
            },
            {
                path: "/test",
                element: <TestList />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/stdprofile",
                element: <StudentProfile />,
            },
            {
                path:"/purchescourse",
                element:<PurchesCourses/>
            },
            {
                path: "/termsandconditions",
                element: <TermsAndConditions />
            },
            {
                path: "/privacypolicy",
                element: <PrivacyPolicy />
            }

        ]
    }

];

export default StudentRoutes;