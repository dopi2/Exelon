import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/coursedetail.css';

const CourseDetailsPage = () => {
    const { id } = useParams(); // Get the course ID from the URL
    const navigate = useNavigate(); // Initialize useNavigate
    const [course, setCourse] = useState(null);
    const [error, setError] = useState(null); // State to handle errors

    // Fetch course details from the backend
    useEffect(() => {
        fetch(`http://localhost:3000/courses/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch course details');
                }
                return response.json();
            })
            .then(data => setCourse(data))
            .catch(error => {
                console.error('Error fetching course details:', error);
                setError(error.message); // Set error state
            });
    }, [id]);

    if (error) {
        return <p>Error: {error}</p>; // Display error message
    }

    if (!course) {
        return <p>Loading...</p>; // Display loading state
    }

    return (
        <>
            <div className="course-details-container">
                <h1>{course.title}</h1>
                <img src={course.image} alt={course.title} className="course-details-image" />
                <div className="course-details-content">
                    <p>{course.description}</p>

                    {/* Instructor Section */}
                    <div className="instructor-section">
                        <h2>Instructor</h2>
                        {course.instructor ? ( // Check if instructor exists
                            <div className="instructor-info">
                                <img
                                    src={course.instructor.profilePicture || 'default-profile-picture-url'}
                                    alt={course.instructor.name || 'Instructor'}
                                    className="instructor-image"
                                />
                                <div>
                                    <h3>{course.instructor.name || 'Unknown Instructor'}</h3>
                                    <p>{course.instructor.bio || 'No bio available.'}</p>
                                </div>
                            </div>
                        ) : (
                            <p>No instructor information available.</p>
                        )}
                    </div>

                    {/* Syllabus Section */}
                    <div className="syllabus-section">
                        <h2>Course Syllabus</h2>
                        {course.syllabus?.length > 0 ? ( // Check if syllabus exists
                            <ul>
                                {course.syllabus.map((topic, index) => (
                                    <li key={index}>{topic}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No syllabus available.</p>
                        )}
                    </div>

                    {/* Reviews Section */}
                    <div className="reviews-section">
                        <h2>Reviews</h2>
                        {course.reviews?.length > 0 ? ( // Check if reviews exist
                            course.reviews.map((review, index) => (
                                <div key={index} className="review">
                                    <p><strong>{review.studentName || 'Anonymous'}</strong> - {Array(review.rating).fill('⭐').join('')}</p>
                                    <p>{review.comment || 'No comment provided.'}</p>
                                </div>
                            ))
                        ) : (
                            <p>No reviews available.</p>
                        )}
                    </div>

                    {/* Enrollment Information */}
                    <div className="enrollment-section">
                        <h2>Enrollment Information</h2>
                        <p><strong>Students Enrolled:</strong> {course.enrollment?.studentsEnrolled || 'N/A'}</p>
                        <p><strong>Start Date:</strong> {course.enrollment?.startDate || 'N/A'}</p>
                        <p><strong>Prerequisites:</strong> {course.enrollment?.prerequisites || 'None'}</p>
                    </div>

                    {/* Additional Resources */}
                    <div className="resources-section">
                        <h2>Additional Resources</h2>
                        {course.resources?.length > 0 ? ( // Check if resources exist
                            <ul>
                                {course.resources.map((resource, index) => (
                                    <li key={index}>
                                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                                            {resource.title} ({resource.type})
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No additional resources available.</p>
                        )}
                    </div>
                </div>

                {/* Back Button at the bottom */}
                <button className="back-button" onClick={() => navigate('/courses')}>
                    &larr; Back to Courses
                </button>
            </div>
            <Footer />
        </>
    );
};

export default CourseDetailsPage;