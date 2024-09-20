import { useState, useEffect } from 'react';
import FAQTab from './FAQTab';

export default function FAQ() {
  const ServicesAndTools = {
    questions: ['What specific services do you offer?', 'What do you use to build your websites?', 'What tool stack do you use?', 'I have the design and need development only.'],
    answers: [
      'I specialize in crafting premium websites with a strong focus on custom code integrations that enhance user interactivity. Every project, whether large or small, is designed with attention to detail and includes a personalized creative consultation to ensure a unique and tailored experience.',
      'I build websites using a variety of technologies, depending on the project’s specific needs. I like to assess the project requirements first, including factors like scalability, performance, and design goals, to choose the best tools for the job.',
      "For full-stack development, I typically leverage tools like React, Express, Node.js, and MongoDB, but I'm flexible in my approach and can easily adapt to design requirements.",
      'I can take your existing designs and turn them into a fully functional website, ensuring that the code is clean, efficient, and optimized for performance. I work closely with the design to ensure every detail is implemented as intended, using the best tools and practices for your project’s needs.',
    ],
  };

  const PricingAndProcess = {
    questions: ['How much does a project cost?', 'How long does a project take?', 'How does payment work for a project?', 'What services do you offer after the website is launched?'],
    answers: [
      'Normally, project costs vary depending on size, time frame, and complexity. My current minimum engagement fee is $5,000, with most projects ranging from $6,000 to $12,000. For other independent creative services, I charge $400/$750 per half/full day.',
      'The duration of projects varies, but most of my work so far has taken between 1.5 weeks and 3 months.',
      'I stick to the industry standard of 50% upfront and 50% after a successful handover and launch.',
      'After the website is launched, I offer ongoing maintenance, updates, and support to ensure your site continues to perform optimally. This includes performance monitoring, security updates, bug fixes, and additional feature implementations as needed. Support is billed hourly, but I also offer monthly support packages at a fixed price, tailored to your specific needs.',
    ],
  };

  // State for managing the active tab
  const [activeTab, setActiveTab] = useState('Services & Tools');
  // State for managing the open/closed accordion items
  const [openIndex, setOpenIndex] = useState(null);

  // Dynamically select the set of questions and answers based on activeTab
  const data = activeTab === 'Services & Tools' ? ServicesAndTools : PricingAndProcess;

  // Handle opening and closing of FAQ items
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close state
  };

  useEffect(() => {
    if (openIndex !== null) {
      setOpenIndex(null);
    }
  }, [activeTab]);

  return (
    <div id="faq" className="flex flex-col items-center justify-around ">
      <h6 className="text-2xl sm:text-3xl md:text-4xl md:px-[100px] my-16 font-medium">Frequently Asked Questions</h6>
      <div className="flex items-center justify-around border-2 border-[#DBDBDB] max-w-full rounded-lg text-sm mb-8">
        <button className={activeTab === 'Services & Tools' ? 'p-2 m-2 bg-[#242736] text-[#e1e2e5]' : 'p-2'} onClick={() => setActiveTab('Services & Tools')}>
          Services & Tools
        </button>
        <button className={activeTab === 'Pricing & Progress' ? 'p-2 m-2 bg-[#242736] text-[#e1e2e5]' : 'p-2'} onClick={() => setActiveTab('Pricing & Progress')}>
          Pricing & Progress
        </button>
      </div>

      {/* Map through the relevant questions and answers based on activeTab */}
      {data.questions.map((question, index) => (
        <FAQTab
          key={index}
          question={question}
          answer={data.answers[index]}
          isOpen={openIndex === index} // Pass open state to FAQTab
          onClick={() => handleToggle(index)} // Toggle open/close on click
        />
      ))}
    </div>
  );
}
