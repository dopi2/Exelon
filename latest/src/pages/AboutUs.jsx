import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaTrophy, FaRocket, FaRegStar, FaHandshake, FaHeart, FaGlobe, FaUserFriends } from "react-icons/fa";
import "../styles/about.css";
import Footer from "../components/Footer";

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
            <hr />
            <p>
              Our vision is to be the leading force in IT education, setting the standard for excellence in preparing individuals for technology-driven careers. We aspire to create a global community of lifelong learners, innovators, and leaders who leverage their IT expertise to drive positive change and foster continuous progress.
            </p>
          </div>
          <div className="card">
            <FaRocket className="icon" />
            <h2>Our Mission</h2>
            <hr />
            <p>
              Exelon Academy is a comprehensive learning institution dedicated to empowering individuals to excel in the ever-evolving world of technology. We offer a diverse range of programming courses spanning front-end development, back-end development, and more, equipping you with the necessary tools and skills to thrive in your chosen path.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="core-values-section">
          <h2>Our Core Values</h2>
          <div className="grid-section">
            <div className="card">
              <FaHandshake className="icon" />
              <h3>Integrity</h3>
              <p>We uphold the highest standards of honesty and transparency in everything we do.</p>
            </div>
            <div className="card">
              <FaHeart className="icon" />
              <h3>Passion</h3>
              <p>We are passionate about empowering individuals to achieve their full potential.</p>
            </div>
            <div className="card">
              <FaGlobe className="icon" />
              <h3>Innovation</h3>
              <p>We embrace creativity and innovation to deliver cutting-edge solutions.</p>
            </div>
            <div className="card">
              <FaUserFriends className="icon" />
              <h3>Community</h3>
              <p>We foster a supportive and inclusive community for all learners.</p>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="team-section">
          <h2>Meet the Team</h2>
          <div className="grid-section">
            <div className="team-card">
              <img src="https://i.pinimg.com/736x/e6/c7/a2/e6c7a2e927a505f6589ac4a1486475b5.jpg" alt="Team Member" />
              <h3>Oji Ukaegbu Oji</h3>
              <p>Chief Executive Officer</p>
            </div>
            <div className="team-card">
              <img src="https://i.pinimg.com/236x/2d/98/12/2d9812b228eaf0802b5d5b890cce63eb.jpg" alt="Team Member" />
              <h3>Ugo Ukaegbu</h3>
              <p>Training Manager</p>
            </div>
            <div className="team-card">
              <img src="https://i.pinimg.com/474x/c6/e0/c6/c6e0c62998bf53d547fb099f6bc831e2.jpg" alt="Team Member" />
              <h3>Adeyinka Jacobs</h3>
              <p>Chief Instructor</p>
            </div>
            <div className="team-card">
              <img src="https://i.pinimg.com/236x/d3/d5/a3/d3d5a3e259ee8ca212d85f07e92c16cd.jpg" alt="Team Member" />
              <h3>Obed Johnson</h3>
              <p>Instructor</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <h2>What Our Students Say</h2>
          <div className="grid-section">
            <div className="testimonial-card">
              <p>"Exelon Academy transformed my career! The courses are well-structured, and the instructors are incredibly supportive."</p>
              <h3>- John Doe</h3>
            </div>
            <div className="testimonial-card">
              <p>"I landed my dream job within 3 months of completing the Web Development course. Highly recommended!"</p>
              <h3>- Jane Smith</h3>
            </div>
            <div className="testimonial-card">
              <p>"The community at Exelon Academy is amazing. I learned so much and made lifelong connections."</p>
              <h3>- Alex Johnson</h3>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <h2>Our Journey</h2>
          <div className="grid-section1">
            <div className="timeline-content">
              <FaTrophy className="timeline-icon" />
              <hr />
              <h3>102</h3>
              <p>Dedicated Learners</p>
            </div>
            <div className="timeline-content">
              <FaUsers className="timeline-icon" />
              <hr />
              <h3>745</h3>
              <p>Happy Students</p>
            </div>
            <div className="timeline-content">
              <FaRegStar className="timeline-icon" />
              <hr />
              <h3>23</h3>
              <p>Alumni Network</p>
            </div>
            <div className="timeline-content">
              <FaRocket className="timeline-icon" />
              <hr />
              <h3>247</h3>
              <p>Educational Impact</p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Banner */}
        <section className="cta-banner">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of learners and take the first step toward mastering technology.</p>
          <button className="cta-button">Explore Courses</button>
        </section>
      </motion.div>
      <Footer />
    </>
  );
};

export default AboutUs;