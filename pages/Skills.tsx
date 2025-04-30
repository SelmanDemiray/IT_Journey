import React from 'react';
import { Link } from 'react-router-dom';
import lessons from '../data/lessons.tsx';

// Category icons for improved visual recognition
const categoryIcons: Record<string, string> = {
  'Foundational Concepts': '🧠',
  'Connectivity & The Internet': '🌐',
  'Security & Privacy': '🔒',
  'Development & Data': '💻',
  'Practical Skills & Careers': '🛠️'
};

// Category images
const categoryImages: Record<string, string> = {
  'Foundational Concepts': '/images/skills/foundational-concepts.png',
  'Connectivity & The Internet': '/images/skills/connectivity-internet.png',
  'Security & Privacy': '/images/skills/security-privacy.png',
  'Development & Data': '/images/skills/development-data.png',
  'Practical Skills & Careers': '/images/skills/practical-skills.png'
};

// Define skill categories with organized topic groupings
const skillCategories = {
  'Foundational Concepts': [
    { name: 'What is IT?', desc: 'Understanding the core idea of Information Technology and its role in the modern world.' },
    { name: 'A Brief History of IT', desc: 'Tracing the evolution of computing and networking.' },
    { name: 'Hardware & Software: The Dynamic Duo', desc: 'Physical components vs. programs and how they interact.' },
    { name: 'Input and Output Devices', desc: 'How computers receive information and present results.' },
    { name: 'Operating Systems: The Computer\'s Conductor', desc: 'Managing computer hardware/software. Comparing Windows, macOS, Linux, mobile OSes.' },
    { name: 'Digital Literacy', desc: 'Using technology responsibly, evaluating information, protecting privacy, digital citizenship.' },
  ],
  'Connectivity & The Internet': [
    { name: 'Internet & World Wide Web: Navigating the Digital Ocean', desc: 'How the internet and World Wide Web work, using browsers, URLs, and basic online safety.' },
    { name: 'Networking Basics: Connecting the Dots', desc: 'Connecting computers (LAN, WAN), routers, switches, Wi-Fi fundamentals.' },
    { name: 'Mobile Devices', desc: 'Using smartphones/tablets, mobile OSes, apps, security considerations.' },
  ],
  'Security & Privacy': [
    { name: 'IT Security Fundamentals: Your Digital Shield', desc: 'Basic concepts like passwords, malware, phishing, antivirus, and safe online habits.' },
    { name: 'Cybersecurity', desc: 'Protecting systems from digital threats, common attacks, defense strategies.' },
    { name: 'Data Privacy', desc: 'Protecting personal information, understanding privacy settings, regulations, digital footprint.' },
    { name: 'Ethical Hacking', desc: 'Finding security weaknesses legally to help improve defenses (penetration testing).' },
  ],
  'Development & Data': [
    { name: 'Introduction to Programming: Speaking Computer', desc: 'Writing code to make computers perform tasks. Logic, algorithms, basic concepts.' },
    { name: 'Web Development Basics: Building for the Web', desc: 'Building websites/apps. HTML, CSS, JavaScript basics, frontend/backend concepts.' },
    { name: 'Introduction to Databases: Organizing Information', desc: 'Organizing and managing data. Introduction to SQL and NoSQL concepts.' },
    { name: 'Cloud Computing: Computing on Demand', desc: 'Using online services for storage, computing (IaaS, PaaS, SaaS). Benefits and risks.' },
    { name: 'AI & Machine Learning', desc: 'Introduction to smart computers that learn from data, real-world applications.' },
  ],
  'Practical Skills & Careers': [
    { name: 'Troubleshooting', desc: 'Diagnosing and fixing common computer problems systematically.' },
    { name: 'Productivity Tools', desc: 'Working efficiently with word processors, spreadsheets, presentation software.' },
    { name: 'Tech Support', desc: 'Helping others solve technical problems, communication and problem-solving skills.' },
    { name: 'IT Careers', desc: 'Exploring different job roles in IT, required skills, and potential certifications.' },
    { name: 'Digital Wellbeing', desc: 'Balancing technology use for a healthy lifestyle, managing screen time.' },
    { name: 'Emerging Technologies', desc: 'Staying aware of new trends like IoT, VR/AR, Blockchain, Quantum Computing.' },
  ]
};

// Get skill image path from skill name
const getSkillImagePath = (name: string): string => {
  const safeName = name.toLowerCase().replace(/[^\w]+/g, '-');
  return `/images/skills/${safeName}.jpg`;
};

const Skills = () => {
  // Map lesson titles to their IDs for linking
  const lessonMap = React.useMemo(() => 
    Object.fromEntries(lessons.map(l => [l.title, l.id])),
    []
  );

  // Get lesson count stats
  const totalSkills = Object.values(skillCategories).flat().length;
  const availableLessons = Object.values(skillCategories).flat()
    .filter(skill => lessonMap[skill.name]).length;

  return (
    <div className="max-w-5xl mx-auto pb-16">
      {/* Header section with banner image */}
      <header className="text-center mb-12 relative">
        <div className="relative rounded-xl overflow-hidden mb-6 h-40">
          <img 
            src="/images/heroes/skills-landscape-banner.jpg" 
            alt="IT Skills Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              IT Skills Landscape
            </h1>
          </div>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-4">
          Explore the diverse areas within Information Technology. Click on linked skills to jump to the relevant lesson.
        </p>
        <div className="text-sm text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/30 inline-block px-4 py-2 rounded-full">
          {availableLessons} of {totalSkills} skills have lessons available
        </div>
      </header>

      {/* Skill categories */}
      {Object.entries(skillCategories).map(([category, skillsInCategory]) => (
        <section key={category} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-blue-300 dark:border-blue-600 pb-2 flex items-center gap-3">
            <img 
              src={categoryImages[category] || "/images/skills/default-category.png"} 
              alt=""
              className="h-10 w-10 rounded-full object-cover shadow-md"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/skills/default-category.png";
              }}
            />
            <span className="text-blue-700 dark:text-blue-300">{category}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsInCategory.map(skill => {
              // Find matching lesson by title
              const lessonId = lessonMap[skill.name];
              // Get image path for this skill
              const skillImage = getSkillImagePath(skill.name);
              
              return (
                <div 
                  key={skill.name} 
                  className={`bg-white dark:bg-gray-800 border rounded-xl p-6 shadow 
                    transition duration-200 flex flex-col relative overflow-hidden
                    ${lessonId ? 'border-blue-200 dark:border-blue-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500' : 
                      'border-gray-200 dark:border-gray-700'}`}
                >
                  {/* Background skill image with overlay */}
                  <div className="absolute inset-0 opacity-15">
                    <img 
                      src={skillImage} 
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/skills/default-skill.jpg";
                      }}
                    />
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-200 mb-2 flex items-center">
                      {lessonId && (
                        <img src="/images/icons/lesson-available-icon.svg" alt="" className="w-5 h-5 mr-2" />
                      )}
                      {skill.name}
                    </h3>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                      {skill.desc}
                    </p>
                    
                    <div className="mt-auto pt-2">
                      {lessonId ? (
                        <Link
                          to={`/lessons/${lessonId}`}
                          className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors flex items-center justify-center w-full sm:w-auto"
                        >
                          <img src="/images/icons/lesson-book-icon.svg" alt="" className="w-4 h-4 mr-2" />
                          Go to Lesson
                        </Link>
                      ) : (
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-3 py-1.5 rounded-lg inline-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          Coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
      
      {/* Footer section with navigation suggestions */}
      <footer className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center border border-blue-200 dark:border-blue-700">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">Ready to Enhance Your IT Knowledge?</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Start your learning journey by exploring our structured lessons or jump right into a specific skill that interests you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/lessons" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow transition flex items-center">
            <img src="/images/icons/lesson-book-icon.svg" alt="" className="w-4 h-4 mr-2" />
            Browse All Lessons
          </Link>
          <Link to="/progress" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium shadow transition flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0-2-2z" />
            </svg>
            Track Your Progress
          </Link>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openDictionary'))} 
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium shadow transition flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Open Dictionary
          </button>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-4">
          New lessons and skills are added regularly. Visit often to discover the latest content!
        </p>
      </footer>
    </div>
  );
};

export default Skills;
