"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "How does a power bank work?",
    answer:
      "A power bank stores electrical energy in its built-in battery and can transfer this energy to your electronic devices, such as smartphones, tablets, or laptops, through a USB port when needed.",
  },
  {
    question: "What types of power banks do you offer?",
    answer:
      "We offer a variety of power banks including portable power banks, high-capacity power banks, solar power banks, and fast-charging power banks. Each type is designed to meet different needs and preferences.",
  },
  {
    question: "How do I choose the right capacity for a power bank?",
    answer:
      "The right capacity for a power bank depends on your usage needs. If you need to charge your smartphone multiple times, a power bank with a capacity of 10,000mAh to 20,000mAh is recommended. For charging laptops or multiple devices, consider a power bank with a capacity of 20,000mAh or higher.",
  },
  {
    question: "Are your power banks safe to use?",
    answer:
      "Yes, our power banks are designed with multiple safety features including overcharge protection, short-circuit protection, and temperature control to ensure safe and reliable use.",
  },
  {
    question: "What is the warranty period for your power banks?",
    answer:
      "We offer a one-year warranty on all our power banks. This warranty covers any manufacturing defects and ensures that you receive a high-quality product.",
  },
  {
    question: "How long does it take to fully charge a power bank?",
    answer:
      "The charging time for a power bank depends on its capacity and the power source used. On average, a power bank with a capacity of 10,000mAh can take around 3 to 5 hours to charge fully using a standard USB charger.",
  },
  {
    question: "Can I use my power bank while it’s charging?",
    answer:
      "While it is possible to use some power banks while they are charging, it is generally not recommended as it can affect the charging efficiency and the overall lifespan of the power bank.",
  },
];

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 mt-16 rounded-lg">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* <!-- text - start --> */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Frequently asked questions
          </h2>
        </div>
        {/* <!-- text - end --> */}

        <div className="mx-auto flex max-w-screen-sm flex-col border-t">
          {faqData.map((item, index) => (
            <div className="border-b" key={index}>
              <div
                className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-indigo-500 active:text-indigo-600"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-semibold transition duration-100 md:text-lg">
                  {item.question}
                </span>
                <span className="text-indigo-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-transform ${
                      openQuestion === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
              {openQuestion === index && (
                <p className="mb-4 text-gray-500">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
