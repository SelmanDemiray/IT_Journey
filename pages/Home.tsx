import React from 'react';
import { Link } from 'react-router-dom';

const skills = [
  'Computer Basics',
  'Hardware & Software',
  'Internet & Web',
  'IT Security',
  'Networking',
  'Programming',
  'Cloud Computing',
  'Databases',
  'Cybersecurity',
  'Operating Systems',
  'Web Development',
  'IT Careers',
  'Troubleshooting',
  'AI & Machine Learning',
  'Mobile Devices',
  'Digital Literacy',
  'Productivity Tools',
  'Data Privacy',
  'Ethical Hacking',
  'Digital Wellbeing',
  'IT Project Management',
  'Emerging Technologies',
  'Tech Support',
  'Data Analysis',
  'Virtualization',
  'Open Source Software'
];

const featuredTopics = [
  'Operating Systems: The Computer\'s Conductor',
  'Web Development Basics: Building for the Web',
  'IT Security Fundamentals: Your Digital Shield',
  'Cloud Computing: Computing on Demand',
  'Introduction to Databases: Organizing Information',
  'Networking Basics: Connecting the Dots',
  'Introduction to Programming: Speaking Computer',
  'AI & Machine Learning',
  'Troubleshooting',
  'IT Careers',
];

const Home = () => (
  <div className="text-center mt-12 mb-16">
    {/* Hero section with background image */}
    <div className="relative mb-8 rounded-xl overflow-hidden shadow-xl">
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 h-64 md:h-80">
        <img 
          src="/images/heroes/it-learning-hero.jpg" 
          alt="" 
          className="w-full h-full object-cover mix-blend-overlay opacity-50" 
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center flex-col p-6">
        <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg font-display">
          Welcome to IT Beginner Academy
        </h1>
        <p className="text-xl mb-8 text-white max-w-3xl mx-auto shadow-text">
          Your friendly starting point for understanding Information Technology. Learn essential concepts step-by-step, track your progress, and build confidence in the digital world!
        </p>
        <Link
          to="/lessons"
          className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 py-4 rounded-xl text-xl font-semibold shadow-lg hover:from-blue-800 hover:to-blue-600 transition inline-block mb-16"
        >
          Start Learning Now
        </Link>
      </div>
    </div>

    <section className="mt-16 mb-16 bg-blue-50 dark:bg-gray-800 py-12 px-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-blue-800 dark:text-blue-200">Why Learn IT Fundamentals?</h2>
      <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
        <div className="bg-white dark:bg-gray-700 p-6 rounded shadow hover:shadow-lg transition">
          <img src="/images/illustrations/daily-tech-life.svg" alt="" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">🌐 Empower Your Daily Life</h3>
          <p className="text-gray-700 dark:text-gray-300">Understand the tech you use every day (phones, Wi-Fi, apps), troubleshoot common issues confidently, navigate the digital world more safely, and make informed decisions about devices and online services.</p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-6 rounded shadow hover:shadow-lg transition">
          <img src="/images/illustrations/career-growth.svg" alt="" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">💼 Boost Your Career</h3>
          <p className="text-gray-700 dark:text-gray-300">Basic IT literacy is essential in nearly every modern job. Deeper knowledge can enhance your performance, improve collaboration, and open doors to specialized IT roles or tech-adjacent careers.</p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-6 rounded shadow hover:shadow-lg transition">
          <img src="/images/illustrations/tech-possibilities.svg" alt="" className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">💡 Unlock New Possibilities</h3>
          <p className="text-gray-700 dark:text-gray-300">Gain the knowledge to create websites, automate tasks, understand AI trends, and participate more fully in our digital society.</p>
        </div>
      </div>
    </section>

    <section className="mt-16 mb-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-blue-800 dark:text-blue-200">How IT Beginner Academy Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-4 flex flex-col items-center">
          <img src="/images/icons/structured-lessons.svg" alt="" className="h-20 w-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Step-by-Step Lessons</h3>
          <p className="text-gray-600 dark:text-gray-300">Clear explanations with practical examples that build your understanding from the ground up.</p>
          <Link to="/lessons" className="mt-2 text-blue-600 hover:underline">Browse Lessons</Link>
        </div>
        <div className="p-4 flex flex-col items-center">
          <img src="/images/icons/progress-tracking.svg" alt="" className="h-20 w-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
          <p className="text-gray-600 dark:text-gray-300">Mark lessons as completed and visualize your learning journey through IT fundamentals.</p>
          <Link to="/progress" className="mt-2 text-blue-600 hover:underline">View Progress</Link>
        </div>
        <div className="p-4 flex flex-col items-center">
          <img src="/images/icons/dictionary-reference.svg" alt="" className="h-20 w-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">IT Dictionary</h3>
          <p className="text-gray-600 dark:text-gray-300">Quickly look up terms and concepts to build your IT vocabulary.</p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openDictionary'))} 
            className="mt-2 text-blue-600 hover:underline"
          >
            Open Dictionary
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
