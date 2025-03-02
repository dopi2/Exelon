import { useEffect,useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/slices/cartSlice";
import { useLocation } from "react-router-dom"; 
import { motion } from "framer-motion";
import "../styles/courses.css";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
const coursesData = [
    {
      id: 1,
      title: "Web Development (Front-End)",
      description: "Learn HTML, CSS, JavaScript, React, and more...",
      category: "Web Development",
      mode: "Instructor Led",
      duration: "12 Weeks",
      lessons: 108,
      price: 300000,
      image: "https://i.pinimg.com/736x/fd/16/c1/fd16c1a4e3ac2b516ea9d7ae6e130e53.jpg",
    },
    {
      id: 2,
      title: "Full-Stack Development",
      description: "Master both frontend and backend with MERN stack...",
      category: "Web Development",
      mode: "Self-Paced",
      duration: "16 Weeks",
      lessons: 120,
      price: 450000,
      image: "https://i.pinimg.com/736x/fd/2d/04/fd2d04a75ef464cce5c209529c7b137f.jpg",
    },
    {
      id: 3,
      title: "Graphic Design",
      description: "Learn Photoshop, Illustrator, and branding techniques...",
      category: "Design",
      mode: "Instructor Led",
      duration: "8 Weeks",
      lessons: 80,
      price: 200000,
      image: "https://i.pinimg.com/736x/4a/be/63/4abe6388429e62a548b81f5e7e312caf.jpg",
    },
    {
      id: 4,
      title: "Data Science & AI",
      description: "Master Python, machine learning, and deep learning...",
      category: "Data Science",
      mode: "Instructor Led",
      duration: "14 Weeks",
      lessons: 110,
      price: 500000,
      image: "https://i.pinimg.com/736x/fa/e6/c7/fae6c75e1ae68ae98aabaf210856319c.jpg",
    },
    {
      id: 5,
      title: "UI/UX Design",
      description: "Learn user experience, wireframing, and Figma...",
      category: "Design",
      mode: "Self-Paced",
      duration: "10 Weeks",
      lessons: 95,
      price: 250000,
      image: "https://i.pinimg.com/736x/71/68/f6/7168f6a627d44c6b41081314ab6a16d3.jpg",
    },
    {
      id: 6,
      title: "Cybersecurity Fundamentals",
      description: "Understand network security, ethical hacking, and risk management...",
      category: "Cybersecurity",
      mode: "Instructor Led",
      duration: "12 Weeks",
      lessons: 100,
      price: 400000,
      image: "https://i.pinimg.com/736x/d1/05/f6/d105f64bcbaff437a12238623e0448bb.jpg",
    },
    {
      id: 7,
      title: "Digital Marketing",
      description: "SEO, content marketing, Google Ads, and social media marketing...",
      category: "Marketing",
      mode: "Self-Paced",
      duration: "8 Weeks",
      lessons: 70,
      price: 180000,
      image: "https://i.pinimg.com/736x/23/42/1b/23421bfa8cd726a87d05d672d63554ed.jpg",
    },
    {
      id: 8,
      title: "Python for Beginners",
      description: "A hands-on introduction to Python programming...",
      category: "Programming",
      mode: "Self-Paced",
      duration: "6 Weeks",
      lessons: 50,
      price: 150000,
      image: "https://i.pinimg.com/736x/28/54/4f/28544f9edce7a2046945be3c5b5522dd.jpg",
    },
    {
      id: 9,
      title: "Ethical Hacking",
      description: "Learn penetration testing, Kali Linux, and security exploits...",
      category: "Cybersecurity",
      mode: "Instructor Led",
      duration: "10 Weeks",
      lessons: 90,
      price: 420000,
      image: "https://i.pinimg.com/736x/90/ca/a7/90caa7b281202b550466b6f5ab5cd4a3.jpg",
    },
    {
      id: 10,
      title: "Machine Learning & AI",
      description: "Develop intelligent systems using Python & TensorFlow...",
      category: "Data Science",
      mode: "Self-Paced",
      duration: "18 Weeks",
      lessons: 130,
      price: 600000,
      image: "https://i.pinimg.com/736x/31/45/75/3145753d8708226b3589f5fcda15d09e.jpg",
    },
    {
      id: 11,
      title: "Mobile App Development",
      description: "Learn React Native & Flutter for Android and iOS apps...",
      category: "App Development",
      mode: "Instructor Led",
      duration: "14 Weeks",
      lessons: 115,
      price: 350000,
      image: "https://i.pinimg.com/736x/61/38/95/613895b44915a34ce2d8abebb6dc034f.jpg",
    },
    {
      id: 12,
      title: "Blockchain & Web3",
      description: "Understand smart contracts and decentralized applications...",
      category: "Blockchain",
      mode: "Self-Paced",
      duration: "16 Weeks",
      lessons: 125,
      price: 480000,
      image: "https://i.pinimg.com/736x/51/56/d0/5156d007e7e1f962d239d4e692b89452.jpg",
    },
    {
      id: 13,
      title: "Photography & Videography",
      description: "Capture stunning visuals with professional techniques...",
      category: "Design",
      mode: "Instructor Led",
      duration: "6 Weeks",
      lessons: 65,
      price: 170000,
      image: "https://i.pinimg.com/736x/b4/ad/d5/b4add59543b030d5b29b24c46dcb1508.jpg",
    },
    {
      id: 14,
      title: "DevOps & Cloud Computing",
      description: "Master AWS, Docker, and Kubernetes for cloud deployment...",
      category: "Cloud Computing",
      mode: "Self-Paced",
      duration: "20 Weeks",
      lessons: 140,
      price: 550000,
      image: "https://i.pinimg.com/736x/e1/ed/22/e1ed229ae6bc09c02bea0f85bce461b4.jpg",
    },
    {
      id: 15,
      title: "JavaScript Mastery",
      description: "Deep dive into ES6, React, and Node.js...",
      category: "Programming",
      mode: "Self-Paced",
      duration: "10 Weeks",
      lessons: 90,
      price: 300000,
      image: "https://i.pinimg.com/736x/d3/b0/78/d3b078eeecda0d7980a1e28f19b1fe32.jpg",
    },
    {
      id: 16,
      title: "Cyber Threat Intelligence",
      description: "Understand advanced cybersecurity threats...",
      category: "Cybersecurity",
      mode: "Instructor Led",
      duration: "15 Weeks",
      lessons: 110,
      price: 450000,
      image: "https://i.pinimg.com/736x/d3/e9/5b/d3e95b3848d713e09b88cdfdab6b657f.jpg",
    },
    {
      id: 17,
      title: "Big Data & Analytics",
      description: "Master Hadoop, Spark, and data visualization...",
      category: "Data Science",
      mode: "Instructor Led",
      duration: "12 Weeks",
      lessons: 105,
      price: 520000,
      image: "https://i.pinimg.com/736x/e8/8a/be/e88abea4a7fc85d5a0aba06b9945fa86.jpg",
    },
    {
      id: 18,
      title: "React & Next.js",
      description: "Build scalable web applications with modern React frameworks...",
      category: "Web Development",
      mode: "Self-Paced",
      duration: "12 Weeks",
      lessons: 100,
      price: 350000,
      image: "https://i.pinimg.com/736x/f8/d5/5e/f8d55e215410de4b741ba314ccf0790b.jpg",
    },
    {
      id: 19,
      title: "SEO & Content Writing",
      description: "Optimize websites for Google and write high-converting content...",
      category: "Marketing",
      mode: "Self-Paced",
      duration: "8 Weeks",
      lessons: 60,
      price: 180000,
      image: "https://i.pinimg.com/736x/46/44/41/46444154aa60cc85e5985cf9b641e9e1.jpg",
    },
    {
      id: 20,
      title: "Artificial Intelligence Ethics",
      description: "Understand the ethical challenges of AI & automation...",
      category: "AI Ethics",
      mode: "Instructor Led",
      duration: "6 Weeks",
      lessons: 50,
      price: 250000,
      image: "https://i.pinimg.com/736x/10/71/c5/1071c5f7c2d69719d27a5db3a19eeb7a.jpg",
    },
  ];
const coursesPerPage = 6; // Adjust the number of courses per page
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
    
const CoursesPage = () => {
  // const dispatch = useDispatch();
  const [categoryFilter, setCategoryFilter] = useState("");
  const [modeFilter, setModeFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const query = useQuery();
  // const navigate = useNavigate();
  const searchQuery = query.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  // Filtered courses based on search and filters
  const filteredCourses = coursesData.filter((course) => {
    return (
      (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (categoryFilter ? course.category === categoryFilter : true) &&
      (modeFilter ? course.mode === modeFilter : true) &&
      (priceFilter ? course.price <= parseInt(priceFilter) : true)
    );
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  
  // const handleApply = (courseId) => {
  //   // Redirect to course details page or show a modal
  //   console.log(`Applying for course ID: ${courseId}`);
  // };
  // Pagination Handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    setSearchTerm(searchQuery);
  }, [searchQuery]);

  return (
    <>
    <div className="courses-container">
      <h2>Explore Our Courses</h2>
      <p>Learning with Industry Standard Software with Exelon Academy</p>
      <hr/>
      &nbsp;  &nbsp;  &nbsp;  &nbsp;
      {/* Search Bar & Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search for courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="Design">Design</option>
          <option value="Data Science">Data Science</option>
        </select>

        <select onChange={(e) => setModeFilter(e.target.value)}>
          <option value="">All Modes</option>
          <option value="Instructor Led">Instructor Led</option>
          <option value="Self-Paced">Self-Paced</option>
        </select>

        <select onChange={(e) => setPriceFilter(e.target.value)}>
          <option value="">Max Price</option>
          <option value="200000">₦200,000</option>
          <option value="300000">₦300,000</option>
          <option value="500000">₦500,000</option>
        </select>
      </div>

      {/* Course List */}
      <div className="courses-grid">
        {currentCourses.length > 0 ? (
          currentCourses.map((course) => (
            <motion.div
              key={course.id}
              className="course-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-details" id="course-buttons">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                {/* <span>{course.mode} | {course.duration} | {course.lessons} Lessons</span> */}
                {/* <h4>₦{course.price.toLocaleString()}</h4>
                <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="button add-to-cart"
    onClick={() => dispatch(addToCart(course))}
  >
    Add to Cart
  </motion.button> */}
{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="button apply-button"
    onClick={() => navigate(`/courses/${course.id}`)} // Replace with actual logic
  >
    Apply
  </motion.button> */}
              </div>
            </motion.div>
          ))
        ) : (
          <p className="no-courses">No courses found.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1} className="prev-btn">
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}

          <button onClick={handleNextPage} disabled={currentPage === totalPages} className="next-btn">
            Next
          </button>
        </div>
      )}
     <br/>
      <p>Not so sure about this course? <span className="con">Book a free consultation</span></p>
    </div>
    <Footer/>
    </>
  );
};

export default CoursesPage;
