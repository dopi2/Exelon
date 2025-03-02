import { useState} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaSearch} from 'react-icons/fa';
import coursesData from '../data/CourseData';
import Logo from "../assets/ExelonAcademy-nav-logo.png"
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);




 

  // ✅ Function to check if a link is active
  const isActive = (path) => (location.pathname === path ? "active" : "");

  // ✅ Handle search suggestions
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.length > 0) {
      const filtered = coursesData
        .filter((course) => course.title.toLowerCase().includes(term.toLowerCase()))
        .slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // ✅ Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/courses?q=${encodeURIComponent(searchTerm)}`);
      setSuggestions([]);
    }
  };

  // ✅ Handle search suggestion click
  const handleSuggestionClick = (title) => {
    setSearchTerm(title);
    setSuggestions([]);
    navigate(`/courses?q=${encodeURIComponent(title)}`);
  };


  



  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="Logo" className="navbar-logo" />
      </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/")}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/about")}`} to="/about">About Us</Link>
            </li>

            {/* Dropdown Menu for Programs */}
            {/* <li
              className="nav-item dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="nav-link dropdown-toggle">Programs</div>
              <AnimatePresence>
                {showDropdown && (
                  <motion.ul
                    className="dropdown-menu show"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <li><Link className="dropdown-item" to="/programs/web-development">Web Development</Link></li>
                    <li><Link className="dropdown-item" to="/programs/graphic-design">Graphic Design</Link></li>
                    <li><Link className="dropdown-item" to="/programs/data-science">Data Science</Link></li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li> */}

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/courses")}`} to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/teams")}`} to="/teams">Our Team</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/faqs")}`} to="/faqs">FAQs</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/contact")}`} to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* Search Bar */}
          <motion.form
            className="d-flex search-bar"
            onSubmit={handleSearchSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search Courses..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {/* <button className="btn btn-light" type="submit">
              <FaSearch />
            </button> */}
          </motion.form>

          {/* Search Suggestions */}
          <AnimatePresence>
            {suggestions.length > 0 && (
              <motion.ul
                className="search-suggestions"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {suggestions.map((course) => (
                  <li key={course.id} onClick={() => handleSuggestionClick(course.title)}>
                    {course.title}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          {/* Cart & User Authentication */}
          <ul className="navbar-nav ms-auto">
          

            {/* {user ? (
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#">
                  <img src={user.photoURL} alt="Profile" className="user-img" /> {user.displayName}
                </Link>
                <ul className="dropdown-menu">
                {user ? (
  <li className="nav-item">
    <Link className="nav-link" to="/profile">
      <FaUser /> Profile
    </Link>
  </li>
) : null} */}

              <li className="nav-item">
              <Link to={ "/courses"} className="btn btn-primary get-started-btn">
                {"Get Started"}
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
