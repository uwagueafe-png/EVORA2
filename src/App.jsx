import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./Component/Home";
import Courses from "./Component/Courses";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import Projects from "./Component/Projects";
import ProjectDetails from "./Component/ProjectDetails";
import About from "./Component/About";
import Contact from "./Component/Contact";
import TutorApplication from "./Component/TutorApplication";
import Live from "./Component/Live";
import CourseDetails from "./Component/CourseDetails";
import SessionDetails from "./Component/SessionDetails";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Learningpaths from "../pages/Learningpaths";
import Dashboard from "./Component/Dashboard";

import "./neutral-theme.css";
import "./layout-spacing.css";

import { supabase } from "./supabaseClient";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ProtectedRoute({ children }) {
  const location = useLocation();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (mounted) {
        setSession(data.session);
        setLoading(false);
      }
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, nextSession) => {
        if (mounted) setSession(nextSession);
      }
    );

    return () => {
      mounted = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (loading) return null;

  if (!session) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/projects" element={<Projects />} />

        <Route
          path="/projects/:projectId"
          element={<ProjectDetails />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/apply" element={<TutorApplication />} />

        <Route path="/live" element={<Live />} />

        <Route
          path="/session/:sessionId"
          element={<SessionDetails />}
        />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses/:courseSlug"
          element={<CourseDetails />}
        />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/learningpaths"
          element={<Learningpaths />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;