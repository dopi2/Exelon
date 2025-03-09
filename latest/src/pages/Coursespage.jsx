import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/courses.css';
import Footer from '../components/Footer';

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState("");
    const [modeFilter, setModeFilter] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const coursesPerPage = 6;

    // Fetch courses from the backend API
    useEffect(() => {
        fetch('http://localhost:3000/courses')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                return response.json();
            })
            .then((data) => {
                setCourses(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    // Filtered courses based on search and filters
    const filteredCourses = courses.filter((course) => {
        return (
            (course.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.description?.toLowerCase().includes(searchTerm.toLowerCase())) &&
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

    const handleCourseClick = (courseId) => {
        navigate(`/courses/${courseId}`); // Navigate to the course details page
    };

    if (loading) {
        return <p>Loading courses...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <div className="courses-container">
                <h2>Explore Our Courses</h2>
                <p>Learning with Industry Standard Software with Exelon Academy</p>
                <hr />

                {/* Search Bar & Filters */}
                <div className="filters">
                    <input
                        type="text"
                        placeholder="Search for courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        aria-label="Search for courses"
                    />
                    <select onChange={(e) => setCategoryFilter(e.target.value)} aria-label="Filter by category">
                        <option value="">All Categories</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Design">Design</option>
                        <option value="Data Science">Data Science</option>
                    </select>
                    <select onChange={(e) => setModeFilter(e.target.value)} aria-label="Filter by mode">
                        <option value="">All Modes</option>
                        <option value="Instructor Led">Instructor Led</option>
                        <option value="Self-Paced">Self-Paced</option>
                    </select>
                    <select onChange={(e) => setPriceFilter(e.target.value)} aria-label="Filter by price">
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
                                onClick={() => handleCourseClick(course.id)}
                                role="button"
                                tabIndex={0}
                                aria-label={`View details for ${course.title}`}
                            >
                                <img
                                    src={course.image || 'default-image-url'}
                                    alt={course.title || 'Course Image'}
                                    className="course-image"
                                />
                                <div className="course-details">
                                    <h3>{course.title || 'Untitled Course'}</h3>
                                    <p>{course.description || 'No description available.'}</p>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="no-courses">No courses found.</p>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && filteredCourses.length > 0 && (
                    <div className="pagination">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className="prev-btn"
                            aria-label="Previous page"
                        >
                            Prev
                        </button>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={currentPage === index + 1 ? "active" : ""}
                                aria-label={`Go to page ${index + 1}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="next-btn"
                            aria-label="Next page"
                        >
                            Next
                        </button>
                    </div>
                )}

                <br />
                <p>Not so sure about this course? <span className="con">Book a free consultation</span></p>
            </div>
            <Footer />
        </>
    );
};

export default CoursesPage;