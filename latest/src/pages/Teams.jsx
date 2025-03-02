import React from "react";
import { motion } from "framer-motion";
import "../styles/teams.css";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import teamMembers from "../data/TeamData";
import Footer from "../components/Footer"
const Teams = () => {
  return (
   <>
    <div className="team-page">
      <motion.h1 
        className="team-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet Our Team
      </motion.h1>
      <p className="team-subtitle">Our dedicated professionals who make everything possible</p>

      <div className="team-container">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="team-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={member.image} alt={member.name} className="team-img" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <div className="team-socials">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon linkedin" />
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="social-icon twitter" />
                  </a>
                )}
                {member.facebook && (
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="social-icon facebook" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
      <Footer/>
   </>
  );
};

export default Teams;
