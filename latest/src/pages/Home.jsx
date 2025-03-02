import React from "react";
import { Container, Row, Col, Button, Card, Carousel, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaClock,FaLaptopCode, FaCertificate, FaBriefcase, FaVideo, FaUsers, FaStar, FaGraduationCap, FaCode, FaCheckCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1740907790513.json";
import Data from "../assets/Animation - 1740907583408.json";
import Footer from "../components/Footer"
import "../styles/hompage.css"
const Home = () => {
  const featureData = [
    { title: "Expert Instructors", icon: FaChalkboardTeacher },
    { title: "Flexible Learning", icon: FaLaptopCode },
    { title: "Certifications", icon: FaCertificate },
    { title: "Job Assistance", icon: FaBriefcase },
    { title: "Live Sessions", icon: FaVideo },
    { title: "Community Support", icon: FaUsers }
  ];
  const courses = [
    { title: "Web Development",  image: "https://i.pinimg.com/736x/fd/16/c1/fd16c1a4e3ac2b516ea9d7ae6e130e53.jpg" },
    { title: "Data Science", image: "https://i.pinimg.com/736x/fa/e6/c7/fae6c75e1ae68ae98aabaf210856319c.jpg" },
    { title: "Graphic Design", image: "https://i.pinimg.com/736x/4a/be/63/4abe6388429e62a548b81f5e7e312caf.jpg" },
    { title: "Cyber Security", image: "https://i.pinimg.com/736x/d1/05/f6/d105f64bcbaff437a12238623e0448bb.jpg" },
    { title: "AI & Machine Learning", image: "https://i.pinimg.com/736x/31/45/75/3145753d8708226b3589f5fcda15d09e.jpg" },
    { title: "Blockchain & Web3", image: "https://i.pinimg.com/736x/51/56/d0/5156d007e7e1f962d239d4e692b89452.jpg" }
  ];
  return (
    <div className="whole">
      {/* Hero Section */}
      <section className="hero bg-dark text-white text-center py-5">
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/* Text Section */}
        <div className="text-md-start text-center">
          <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Master Technology with Exelon Academy
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Gain essential skills in front-end and back-end development<br/> with our expert-led courses. Join Exelon Academy today and<br/> unlock your tech potential.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
            <Button variant="primary" className="m-2"
            href="/courses" id="fiy">Explore Courses</Button>
            <Button href="/contact" variant="outline-light">Get Started</Button>
          </motion.div>
        </div>

        {/* Lottie Animation Section */}
        <div className="mt-4 mt-md-0" id="second">
          <Lottie animationData={animationData} style={{ width: "500%", maxWidth: "500px", height: "auto" }} />
        </div>
      </Container>
    </section>


      {/* Features Section */}
      <section className="features-section py-5 bg-light">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fw-bold"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-muted w-75 mx-auto"
          >
            We provide top-notch education with expert guidance, hands-on learning, and real-world applications to help you succeed in your career.
          </motion.p>
        </div>

        {/* Features Grid */}
        <Row className="gy-4 justify-content-center">
          {featureData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Col md={4} key={index} className="d-flex justify-content-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="feature-card"
                >
                  <Card className="text-center p-4 shadow-sm border-0 feature-box">
                    <Card.Body>
                      <Icon size={50} className="mb-3 text-primary feature-icon" />
                      <h4 className="fw-bold">{feature.title}</h4>
                      <p className="text-muted">High-quality learning experience to boost your career.</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-5 bg-light">
      <Container>
        {/* Section Heading */}
        <h2 className="text-center mb-4 fw-bold">What Makes Us Different?</h2>
<hr/>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
          {/* Text Section */}
          <div className="text-section text-center text-md-start mb-4 mb-md-0">
            <h3 className="mb-3 fw-semibold">Empower Your Learning, Shape Your Future</h3>
            <p className="">
              We offer cutting-edge courses, expert mentorship, real-world projects, and a<br/> supportive community to help you achieve your learning goals.
            </p>
            <ul className="list-unstyled">
              {[
                "Interactive & engaging courses",
                "Taught by industry experts",
                "Hands-on real-world projects",
                "Self-paced & flexible schedules",
                "Affordable pricing & scholarships",
                "Dedicated career & job support"
              ].map((reason, index) => (
                <li key={index} className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="text-success me-2" /> {reason}
                </li>
              ))}
            </ul>
          </div>
            <div className="image-section">
            <div className="mt-4 mt-md-0">
          <Lottie animationData={Data} style={{ width: "90%", maxWidth: "500px", height: "auto" }} />
        </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Popular Courses Section */}
      <section className="popular-courses py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Explore Our Popular Courses</h2>
        <p className="text-center text-muted mb-5">Master in-demand skills from industry-leading experts.</p>
        <Row className="gy-4 justify-content-center">
          {courses.map((course, index) => (
            <Col md={4} key={index} className="d-flex justify-content-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="course-card"
              >
                <Card className="shadow-sm border-0 overflow-hidden rounded-4" style={{ width: "20rem" }}>
                  <div className="course-img-wrapper">
                    <Card.Img variant="top" src={course.image} alt={course.title} className="course-img" />
                  </div>
                  <Card.Body className="text-center">
                    <h5 className="fw-semibold">{course.title}</h5>
                    <p className="text-muted">Learn {course.title} from industry-leading experts.</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

      {/* Technology Logos Section */}
     

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default Home;
