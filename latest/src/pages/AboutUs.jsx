import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaTrophy, FaRocket, FaRegStar } from "react-icons/fa";
import "../styles/about.css";
import Footer from "../components/Footer"
const AboutUs = () => {
  return (
    <>
    <motion.div 
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <h1>About <span>Us</span></h1>
        <p>Empowering learners through innovation and accessibility.</p>
      </section>

      {/* Mission & Vision */}
      <section className="grid-section">
        <div className="card">
          <FaLightbulb className="icon" />
          <h2>Our Vision</h2>
          <hr/>
          <p>Our vision is to be the leading force in IT education, 
            setting the standard for excellence in preparing individuals
             for technology-driven careers. We aspire to create a global community of lifelong learners, 
             innovators, and leaders who leverage their IT expertise to drive positive change and foster 
             continuous progress.</p>
        </div>
        <div className="card">
          <FaRocket className="icon" />
          <h2>Our Mission</h2>
          <hr/>
          <p>Exelon Academy is a comprehensive learning institution dedicated to empowering individuals to excel in the ever-evolving world of technology. We offer a diverse range of programming courses spanning front-end development, back-end development, and more, equipping you with the necessary tools and skills to thrive in your chosen path.</p>
        </div>
      </section>

      {/* Meet the Team */}
    

      {/* Timeline */}
      <section className="timeline-section">
        <h2>Our Journey</h2>
        <div className="grid-section1">
          <div className="timeline-content">
            <FaTrophy className="timeline-icon" />
            <hr/>
            <h3>102</h3>
            <p>Dedicated Learners</p>
          </div>
          <div className="timeline-content">
            <FaUsers className="timeline-icon" />
            <hr/>
            <h3>745</h3>
            <p>Happy Students</p>
          </div>
          <div className="timeline-content">
            <FaRegStar className="timeline-icon" />
            <hr/>
            <h3>23</h3>
            <p>Alumni Network</p>
          </div>
          <div className="timeline-content">
            <FaRocket className="timeline-icon" />
            <hr/>
            <h3>247</h3>
            <p>Educational Impact</p>
          </div>
        </div>
      </section>
      <br/>
    </motion.div>
    <Footer />
    </>
  );
};

export default AboutUs;
