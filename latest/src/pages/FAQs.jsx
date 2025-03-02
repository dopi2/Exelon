import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/faqs.css";
import Footer from "../components/Footer"
const faqsData = [
  { 
    question: "What is this platform about?", 
    answer: "Our platform offers a variety of courses to help you enhance your skills and knowledge in different fields." 
  },
  { 
    question: "How can I enroll in a course?", 
    answer: "You can enroll by selecting a course, clicking 'Apply' or 'Add to Cart', and following the registration process." 
  },
  { 
    question: "Do you offer refunds?", 
    answer: "Yes, we offer refunds within the first 7 days of enrollment if you’re not satisfied with the course." 
  },
  { 
    question: "Can I access the courses after completion?", 
    answer: "Yes, once you enroll in a course, you’ll have lifetime access to it." 
  },
  { 
    question: "Are certificates provided?", 
    answer: "Yes! Upon course completion, you will receive a certified digital certificate of completion." 
  },
  { 
    question: "Is there a support team?", 
    answer: "Yes! Our support team is available 24/7 to assist you with any issues or inquiries." 
  },
  { 
    question: "Do you offer discounts?", 
    answer: "We occasionally offer discounts. Stay updated by subscribing to our newsletter." 
  },
  { 
    question: "Can I study at my own pace?", 
    answer: "Absolutely! All our courses are self-paced, so you can learn whenever it suits you." 
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two columns
  const firstColumn = faqsData.slice(0, Math.ceil(faqsData.length / 2));
  const secondColumn = faqsData.slice(Math.ceil(faqsData.length / 2));

  return (
    <>
    <motion.div 
      className="faq-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="faq-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h1>

      <p className="faq-subtitle">Find answers to the most common questions</p>

      <div className="faq-grid">
        {/* First Column */}
        <motion.div 
          className="faq-column"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {firstColumn.map((faq, index) => (
            <motion.div 
              key={index} 
              className="faq-item"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <motion.span 
                  className="faq-icon"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              <motion.div 
                className="faq-answer-container"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p className="faq-answer">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Column */}
        <motion.div 
          className="faq-column"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {secondColumn.map((faq, index) => (
            <motion.div 
              key={index} 
              className="faq-item"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index + firstColumn.length)}
              >
                {faq.question}
                <motion.span 
                  className="faq-icon"
                  animate={{ rotate: openIndex === index + firstColumn.length ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index + firstColumn.length ? "−" : "+"}
                </motion.span>
              </button>

              <motion.div 
                className="faq-answer-container"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index + firstColumn.length ? "auto" : 0, opacity: openIndex === index + firstColumn.length ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p className="faq-answer">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
      <Footer/>
    </>
  );
};

export default FAQs;
