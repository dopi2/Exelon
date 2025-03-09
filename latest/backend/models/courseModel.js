import db from '../utils/db.js';

// Fetch all courses
const getAllCourses = async () => {
  const [rows] = await db.query('SELECT * FROM courses');
  return rows;
};

// Fetch course by ID
const getCourseById = async (id) => {
  const [rows] = await db.query('SELECT * FROM courses WHERE id = ?', [id]);
  return rows[0];
};

// Default export
export default {
  getAllCourses,
  getCourseById,
};