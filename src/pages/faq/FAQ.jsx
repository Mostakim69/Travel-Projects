import React from "react";
import { eduverseFAQ } from "./faq.constant";
import TypewriterText from "../../utils/TypeWriterEffect";
// import { eduverseFAQ } from "./eduverseFAQ"; // Adjust the path as needed

const FAQ = () => {
  return (
    <div className="space-y-4 my-10 p-8">
      {" "}
      <h2 className="text-3xl font-bold text-center mb-10 font-courgette text-shadow-lg text-shadow-purple-200">
        <TypewriterText words={["Frequently Asked Questions"]} />
      </h2>
      {/* Added space-y for better visual separation */}
      {eduverseFAQ.map((item, index) => (
        <div
          key={index}
          className="hover-effect collapse collapse-plus bg-base-100 border border-base-300"
        >
          {/* Using unique name for radio buttons based on index to ensure only one is open at a time */}
          <input
            type="radio"
            name={`my-accordion-${index}`}
            defaultChecked={index === 0}
          />
          <div className="collapse-title font-semibold">{item.question}</div>
          <div className="collapse-content text-sm">{item.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
