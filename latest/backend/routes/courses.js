import express from 'express';
import courseController from '../controllers/courseController.js';

const router = express.Router();

// GET /courses - Fetch all courses
router.get('/', courseController.getAllCourses);

// GET /courses/:id - Fetch course by ID
router.get('/:id', courseController.getCourseById);

export default router;