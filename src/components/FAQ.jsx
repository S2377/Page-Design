// FAQ.js
import React, { useState } from 'react';
import '../custom_css/FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How long does it take to build a website?",
      answer: "It typically takes 2-4 weeks depending on the project's complexity."
    },
    {
      question: "How much does it usually cost?",
      answer: "Prices depend on the project scope, but start from $1000."
    },
    {
      question: "What services do you offer exactly?",
      answer: "I offer web design, development, and UX/UI consulting."
    },
    {
      question: "What if I have the design but need development only?",
      answer: "I can work with your designs to bring them to life."
    },
    {
      question: "Can you create custom illustrations, icons, or mockups for me?",
      answer: "Yes, I can design custom assets based on your requirements."
    }
  ];

  return (
    <section className="faq-section">
      <h1>FAQs</h1>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3>{faq.question}</h3>
            <span className="faq-icon">{openIndex === index ? '✕' : '+'}</span>
          </div>
          <p className={openIndex === index ? 'answer open' : 'answer'}>
            {faq.answer}
          </p>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
