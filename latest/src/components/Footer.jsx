import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import "../styles/footer.css";
import logo from "../assets/ExelonAcademy-nav-logo.png"
const Footer = () => {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="gy-4">
          {/* Contact Info */}
          <Col md={4}>
        <img src={logo} width={200}/>
            <p className="mb-1">5, Ogun Street, Ikeja, Lagos</p>
            <p className="mb-1"><strong>Phone:</strong> +234 (0)81 8211 7900</p>
            <p className="mb-1"><strong>Email:</strong> info@academy.exelon.ng</p>
          </Col>

          {/* Useful Links */}
          <Col md={4}>
            <h5 className="fw-bold text-white">Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className=" text-white text-decoration-none">› Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">› About Us</a></li>
              <li><a href="/services" className="text-white text-decoration-none">› Services</a></li>
              <li><a href="/terms" className="text-white text-decoration-none">› Terms of Service</a></li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={4}>
            <h5 className="fw-bold text-white">Follow Us</h5>
            <p className="text-white">Stay updated and connected! Join our community on social media.</p>
            <div className="d-flex gap-3">
              <a href="#" className="social-icon"><FaXTwitter /></a>
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <hr />
        <Row className="text-center">
          <p className="mb-0">
            © Copyright <strong>Exelon Academy</strong> All Rights Reserved
          </p>
          <p className="text-white">
            Designed by <a id="hit" href="#" className="text-primary text-decoration-none">Exelon Consulting Limited</a>
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
