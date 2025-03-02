import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/CourseTags.css";

const courseTags = [
  "Graphic Design",
  "Web Development",
  "Full-Stack Development",
  "Data Science & AI",
  "UI/UX Design",
  "Cybersecurity Fundamentals",
  "Digital Marketing",
];

const CourseTags = ({ onSelectCategory, selectedCategory }) => {
  return (
    <div className="course-tags-container">
      {courseTags.map((tag, index) => (
        <motion.div
          key={index}
          className={`course-tag ${selectedCategory === tag ? "active" : ""}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectCategory(tag)}
        >
          {tag}
        </motion.div>
      ))}
      {selectedCategory && (
        <button className="clear-filter" onClick={() => onSelectCategory(null)}>
          Clear Filter
        </button>
      )}
    </div>
  );
};

export default CourseTags;
