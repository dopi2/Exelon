import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Courses from "./pages/Coursespage";
import Navbar from "./components/Navbar";
import Teams from "./pages/Teams";
import FAQs from "./pages/FAQs"
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import CourseDetailsPage from './pages/CourseDetailsPage';
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      <Route
          path="/"
          element={<motion.div {...pageVariants}><Home /></motion.div>}
        />
          <Route
          path="/courses/:id"
          element={<motion.div {...pageVariants}><CourseDetailsPage /></motion.div>}
        />
        <Route
          path="/courses"
          element={<motion.div {...pageVariants}><Courses /></motion.div>}
        />
        <Route
          path="/teams"
          element={<motion.div {...pageVariants}><Teams /></motion.div>}
        />
         <Route
          path="/faqs"
          element={<motion.div {...pageVariants}><FAQs /></motion.div>}
        />
          <Route
          path="/contact"
          element={<motion.div {...pageVariants}><Contact /></motion.div>}
        />
        <Route
          path="/about"
          element={<motion.div {...pageVariants}><AboutUs /></motion.div>}
        />
      </Routes>

    </AnimatePresence>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <AnimatedRoutes />
    </>
  );
}

export default App;
