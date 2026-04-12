import { useState } from "react";
import { Helmet } from "react-helmet";

const faqs = [
  {
    question: "How does ordering work?",
    answer:
      "Users can browse meals, add items to their cart, and proceed through the checkout process. This template demonstrates the UI flow for a modern food ordering experience.",
  },
  {
    question: "Does this template include a backend?",
    answer:
      "No. QuickBite is a frontend UI template built with React and Tailwind CSS. Developers can integrate their own backend, APIs, or payment systems.",
  },
  {
    question: "Can I customize the design?",
    answer:
      "Yes. The template is built with Tailwind CSS, making it easy to customize colors, layouts, and components to fit your brand.",
  },
  {
    question: "Is the template responsive?",
    answer:
      "Yes. QuickBite is fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
  {
    question: "Can I use this template for commercial projects?",
    answer:
      "Yes. Once purchased, you can use the template for personal or commercial projects depending on the license provided.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 mt-10">

      <Helmet>
        <title>FAQ | QuickBite</title>
        <meta
          name="description"
          content="Frequently asked questions about the QuickBite food ordering template."
        />
      </Helmet>

      <h1 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border dark:border-white/20 rounded-xl p-5 cursor-pointer transition hover:shadow-md"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">

              <h3 className="font-semibold text-lg">
                {faq.question}
              </h3>

              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>

            </div>

            {openIndex === index && (
              <p className="mt-4 text-gray-500">
                {faq.answer}
              </p>
            )}

          </div>
        ))}

      </div>

      <div className="text-center mt-16">
        <p className="text-gray-500 mb-4">
            Still have questions?
        </p>

        <a
            href="/contact"
            className="bg-primary text-white px-6 py-3 rounded-xl"
        >
            Contact Support
        </a>
        </div>
    </div>
  );
};

export default FAQ;