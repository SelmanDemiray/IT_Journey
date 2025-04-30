import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import lessons from '../data/lessons.tsx';
import ProgressBar from '../components/ProgressBar';
import { useUser } from '../App';

const getProgress = (user: string) => {
  const prog = localStorage.getItem(`progress_${user}`);
  return prog ? JSON.parse(prog) : {};
};

const Progress = () => {
  const { user } = useUser();
  const [_, setRerender] = useState(0); // Used to force re-render after reset

  // Memoize progress calculation
  const progress = useMemo(() => getProgress(user), [user, _]); // Re-calculate if user changes or after reset
  const completedLessons = useMemo(() => lessons.filter(l => progress[l.id]), [lessons, progress]);
  const completedCount = completedLessons.length;
  const totalLessons = lessons.length;
  const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const handleReset = () => {
    if (window.confirm(`Are you sure you want to reset all progress for ${user}? This cannot be undone.`)) {
      localStorage.removeItem(`progress_${user}`);
      setRerender(x => x + 1); // Trigger re-render
    }
  };

  // Memoize finding the next lesson
  const nextLesson = useMemo(() => lessons.find(l => !progress[l.id]), [lessons, progress]);

  let motivationalMessage = '';
  let suggestions = '';

  // Updated messages based on potentially more lessons
  if (percent === 0) {
    motivationalMessage = "Ready to start your IT journey? Let's begin!";
    suggestions = `Head over to the <Link to="/lessons" class="text-blue-600 hover:underline">Lessons</Link> page. The 'What is IT?' lesson is a great place to start building your foundation.`;
  } else if (percent < 20) { // Adjusted threshold
    motivationalMessage = "Great start! You're building a solid foundation.";
    suggestions = `Keep exploring the basics! Try the '${nextLesson ? nextLesson.title : 'Hardware & Software'}' lesson next. Remember the <button onClick={() => window.dispatchEvent(new CustomEvent('openDictionary'))} class="text-blue-600 hover:underline">Dictionary</button> for unfamiliar terms.`;
  } else if (percent < 40) { // Adjusted threshold
    motivationalMessage = "You're making excellent progress! Keep the momentum going.";
    suggestions = `You've covered some key areas. Consider diving into '${nextLesson ? nextLesson.title : 'Networking Basics'}' or revisit a topic you found challenging.`;
  } else if (percent < 60) { // Adjusted threshold
    motivationalMessage = "Fantastic! You're really getting the hang of these concepts.";
    suggestions = `Challenge yourself with topics like '${nextLesson ? nextLesson.title : 'IT Security Fundamentals'}' or explore '${nextLesson ? nextLesson.title : 'Operating Systems'}'. Check the <Link to="/skills" class="text-blue-600 hover:underline">Skills Overview</Link> too!`;
  } else if (percent < 80) { // Adjusted threshold
    motivationalMessage = "Wow, you're well on your way to mastering the fundamentals!";
    suggestions = `Explore more advanced topics like '${nextLesson ? nextLesson.title : 'Introduction to Databases'}' or '${nextLesson ? nextLesson.title : 'Cloud Computing'}'. Reviewing completed lessons can also reinforce your knowledge.`;
  } else if (percent < 100) {
    motivationalMessage = "Almost there! You've learned so much. Just a few more steps!";
    suggestions = `Finish strong! Complete the remaining lessons like '${nextLesson ? nextLesson.title : 'Web Development Basics'}'. You're doing great!`;
  } else {
    motivationalMessage = "🏆 Congratulations! You've completed all available lessons! 🏆";
    suggestions = `You're an IT Beginner Academy Champion! Review any topics, explore the <Link to="/skills" class="text-blue-600 hover:underline">Skills Overview</Link> for potential next steps in your IT journey, or consider helping others who are just starting!`;
  }

  return (
    <div className="max-w-4xl mx-auto pb-10">

      {completedCount < totalLessons && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Your Learning Progress</h2>
          
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Completion Status</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">{percent}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${percent}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {completedCount} of {totalLessons} lessons completed
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">{motivationalMessage}</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400" dangerouslySetInnerHTML={{ __html: suggestions }}></p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">Next Recommended Lessons</h3>
            {nextLesson ? (
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
                <Link 
                  to={`/lessons/${nextLesson.id}`} 
                  className="text-green-700 dark:text-green-300 font-medium hover:underline flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  {nextLesson.title}
                </Link>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1 ml-7">
                  {nextLesson.summary}
                </p>
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">All lessons completed! Consider revisiting any challenging topics.</p>
            )}
          </div>

          <div className="flex justify-between items-center">
            <Link 
              to="/lessons" 
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              View All Lessons
            </Link>
            <button
              onClick={handleReset}
              className="text-sm text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              Reset Progress
            </button>
          </div>
        </div>
      )}

      <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Completed Lessons ({completedCount})</h2>
        
        {completedCount > 0 ? (
          <div className="space-y-3">
            {/* Sort completed lessons alphabetically */}
            {completedLessons.sort((a, b) => a.title.localeCompare(b.title)).map(lesson => (
              <div key={lesson.id} className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded flex justify-between items-center">
                <Link to={`/lessons/${lesson.id}`} className="text-green-700 dark:text-green-300 hover:underline font-medium">
                  {lesson.title}
                </Link>
                <span className="text-xs bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 py-1 px-2 rounded-full">
                  Completed
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No lessons completed yet. <Link to="/lessons" className="text-blue-600 hover:underline">Start learning!</Link></p>
        )}
      </div>

      {completedCount < totalLessons && (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Remaining Lessons ({totalLessons - completedCount})</h3>
          <ul className="space-y-2">
            {/* Sort remaining lessons alphabetically */}
            {lessons.filter(l => !progress[l.id]).sort((a, b) => a.title.localeCompare(b.title)).map(lesson => (
                <li key={lesson.id} className="p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded">
                  <Link to={`/lessons/${lesson.id}`} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 hover:underline">
                    {lesson.title}
                  </Link>
                </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Progress;
