import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaRegComments } from "react-icons/fa";
import "../styles/contact.css";
import Footer from "../components/Footer"
const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
   <>
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>

      <p className="contact-subtitle">We'd love to hear from you! Reach out to us.</p>

      <div className="contact-grid">
        {/* Contact Info */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>5, Ogun Street,Ikeja, Lagos</p>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>+234 (0)81 8211 7900</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>info@exelon.ng</p>
          </div>

          {/* Social Media Links */}
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="contact-form"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="submit-btn"
            >
              Send Message
            </motion.button>
          </form>

          {success && <p className="success-message">Message sent successfully!</p>}
        </motion.div>
      </div>
<br/>
      {/* Map Section */}
      <motion.div 
        className="map-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed/v1/place?q=5,+Ogun+Street,Ikeja,+Lagos&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>

      {/* WhatsApp & Live Chat Buttons */}
      <div className="floating-buttons">
        <a href="https://wa.me/1234567890" className="whatsapp-btn"><FaWhatsapp /></a>
        <a href="#" className="livechat-btn"><FaRegComments /></a>
      </div>
    </motion.div>
    
      <Footer/>
   </>
  );
};

export default ContactUs;
