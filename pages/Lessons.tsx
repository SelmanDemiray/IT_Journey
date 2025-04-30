import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import lessons from '../data/lessons.tsx';
import { useUser } from '../App';

// Lesson image mapping
const lessonImages: Record<string, string> = {
  'intro': '/images/lessons/intro-to-it.jpg',
  'history': '/images/lessons/it-history.jpg',
  'hardware-software': '/images/lessons/hardware-software.jpg',
  'input-output': '/images/lessons/input-output.jpg',
  'internet-basics': '/images/lessons/internet-basics.jpg',
  'networking': '/images/lessons/networking.jpg',
  'security': '/images/lessons/security.jpg',
  'programming': '/images/lessons/programming.jpg',
  'os': '/images/lessons/operating-systems.jpg',
  'databases': '/images/lessons/databases.jpg',
  'cloud': '/images/lessons/cloud-computing.jpg',
  'webdev': '/images/lessons/web-development.jpg',
};

const getProgress = (user: string) => {
  const prog = localStorage.getItem(`progress_${user}`);
  return prog ? JSON.parse(prog) : {};
};

const funLessonIds = [
  'fun-facts', 'build-pc', 'internet-safety-game', 'code-game', 'ai-fun'
];

const badgeLessonIds: Record<string, string> = {
  'intro': 'Start Here!',
  'security': 'Crucial',
  'programming': 'Code Intro',
  'os': 'Essential',
  'cloud': 'Modern IT',
  'webdev': 'Popular',
  'databases': 'Data Skills',
};

const lessonEmojis: Record<string, string> = {
  'intro': '👋',
  'history': '📜',
  'hardware-software': '💻',
  'input-output': '🖱️',
  'internet-basics': '🌐',
  'networking': '🔗',
  'security': '🔒',
  'programming': '⌨️',
  'os': '⚙️',
  'databases': '🗄️',
  'cloud': '☁️',
  'webdev': '🌍',
  'fun-facts': '🤓',
  'build-pc': '🛠️',
  'internet-safety-game': '🕵️',
  'code-game': '🎮',
  'ai-fun': '🤖',
  'ai': '🤖',
  'careers': '🎓',
  'troubleshooting': '🛠️'
};

const getLessonTags = (lesson: any): string[] => lesson.tags || ['Basics'];
const getLessonDifficulty = (lesson: any): string => lesson.difficulty || 'Beginner';
const getLessonDuration = (lesson: any): string => lesson.duration || '5 min';
const getLessonSummary = (lesson: any): string => lesson.summary || 'Learn about this important IT topic.';

const difficultyColors: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  Advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
};

const Lessons = () => {
  const { user } = useUser();
  const progress = useMemo(() => getProgress(user), [user]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'title' | 'difficulty' | 'completed'>('default');
  const [showIncomplete, setShowIncomplete] = useState(false);
  const navigate = useNavigate();

  const sortedLessons = useMemo(() => {
    let filtered = lessons.filter(l =>
        l.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getLessonSummary(l).toLowerCase().includes(searchTerm.toLowerCase()) ||
        getLessonTags(l).join(' ').toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (showIncomplete) {
        filtered = filtered.filter(l => !progress[l.id]);
    }

    return [...filtered].sort((a, b) => {
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        if (sortBy === 'difficulty') {
            const diffA = getLessonDifficulty(a);
            const diffB = getLessonDifficulty(b);
            const order = ['Beginner', 'Intermediate', 'Advanced'];
            return order.indexOf(diffA) - order.indexOf(diffB);
        }
        if (sortBy === 'completed') {
            const completedA = progress[a.id] ? 1 : 0;
            const completedB = progress[b.id] ? 1 : 0;
            if (completedB !== completedA) return completedB - completedA;
            return lessons.indexOf(a) - lessons.indexOf(b);
        }
        return lessons.indexOf(a) - lessons.indexOf(b);
    });
  }, [lessons, searchTerm, showIncomplete, progress, sortBy]);

  const completedCount = useMemo(() => lessons.filter(l => progress[l.id]).length, [lessons, progress]);
  const totalLessons = lessons.length;
  const percent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const nextLesson = useMemo(() => lessons.find(l => !progress[l.id]), [lessons, progress]);

  const handleRandom = () => {
    if (sortedLessons.length === 0) return;
    const idx = Math.floor(Math.random() * sortedLessons.length);
    navigate(`/lessons/${sortedLessons[idx].id}`);
  };

  return (
    <div className="max-w-6xl mx-auto pb-10">
      <h2 className="text-3xl font-bold mb-6 text-blue-800 dark:text-blue-200">Lessons & Courses</h2>

      <div className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-700 dark:text-blue-200">Your Progress</span>
          <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">{completedCount} / {totalLessons} completed ({percent}%)</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${percent}%` }}
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>

      {nextLesson && percent < 100 ? (
        <div className="mb-8 flex flex-col sm:flex-row items-center gap-4 p-4 bg-green-50 dark:bg-green-900 rounded-lg border border-green-200 dark:border-green-700">
          <div className="sm:w-16 w-full flex justify-center">
            <img 
              src={lessonImages[nextLesson.id] || "/images/lessons/default-lesson.jpg"} 
              alt="" 
              className="w-16 h-16 rounded-full object-cover shadow-md" 
            />
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-green-800 dark:text-green-200 mb-1">Continue where you left off:</h3>
            <p className="text-green-700 dark:text-green-300 text-lg font-semibold">{nextLesson.title}</p>
          </div>
          <button
            onClick={() => navigate(`/lessons/${nextLesson.id}`)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-bold shadow transition text-lg"
          >
            Continue Learning
          </button>
        </div>
      ) : percent === 100 ? (
        <div className="mb-8 p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg border border-yellow-300 dark:border-yellow-700 text-center">
          <img src="/images/illustrations/trophy.svg" alt="Trophy" className="w-10 h-10 mx-auto mb-2" />
          <span className="text-yellow-800 dark:text-yellow-200 font-bold text-lg">🎉 You've completed all lessons! Explore again or check your <Link to="/progress" className="underline hover:text-yellow-600">Progress</Link>.</span>
        </div>
      ) : null}

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="relative w-full md:flex-grow">
          <img 
            src="/images/icons/search-icon.svg"
            alt="" 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          />
          <input
            type="search"
            placeholder="Search lessons by title, tag, summary..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            aria-label="Search lessons"
          />
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex items-center">
            <img src="/images/icons/sort-icon.svg" alt="" className="w-5 h-5 mr-1" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              aria-label="Sort lessons by"
            >
              <option value="default">Sort by Default</option>
              <option value="title">Sort by Title</option>
              <option value="difficulty">Sort by Difficulty</option>
              <option value="completed">Sort by Completion</option>
            </select>
          </div>
          <button
            onClick={handleRandom}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-4 py-2 rounded shadow transition flex items-center"
          >
            <img src="/images/icons/random-dice.svg" alt="" className="w-5 h-5 mr-1" />
            Random Lesson
          </button>
          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
            <input
              type="checkbox"
              checked={showIncomplete}
              onChange={e => setShowIncomplete(e.target.checked)}
              className="accent-blue-600 h-4 w-4"
            />
            Show only incomplete
          </label>
        </div>
      </div>

      {sortedLessons.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sortedLessons.map((lesson) => (
            <div
              key={lesson.id}
              className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 flex flex-col border-l-4 ${
                progress[lesson.id] ? 'border-green-500' : 'border-blue-500 dark:border-blue-400'
              } hover:shadow-xl transition group overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-10">
                <img 
                  src={lessonImages[lesson.id] || "/images/lessons/default-lesson.jpg"} 
                  alt="" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/lessons/default-lesson.jpg";
                  }}
                />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-3">
                  <div className="text-3xl mt-1 bg-white dark:bg-gray-700 p-2 rounded-full shadow flex items-center justify-center min-w-[2.5rem] h-10">
                    {lessonEmojis[lesson.id] || '📘'}
                  </div>
                  <div className="flex-1">
                    <Link
                      to={`/lessons/${lesson.id}`}
                      className="text-blue-700 dark:text-blue-200 font-semibold hover:underline text-xl block mb-1"
                    >
                      {lesson.title}
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{getLessonSummary(lesson)}</p>
                  </div>
                </div>

                <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
                  <span className={`px-2 py-0.5 rounded font-semibold flex items-center ${difficultyColors[getLessonDifficulty(lesson)] || 'bg-gray-200 text-gray-800'}`}>
                    <img src="/images/icons/difficulty-icon.svg" alt="" className="w-3 h-3 mr-1" />
                    {getLessonDifficulty(lesson)}
                  </span>
                  
                  <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center">
                    <img src="/images/icons/clock-icon.svg" alt="" className="w-3 h-3 mr-1" />
                    {getLessonDuration(lesson)}
                  </span>
                  
                  {getLessonTags(lesson).slice(0, 3).map((tag: string) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-medium">
                      {tag}
                    </span>
                  ))}
                  
                  {funLessonIds.includes(lesson.id) && (
                    <span className="bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded font-bold flex items-center">
                      <img src="/images/icons/fun-badge.svg" alt="" className="w-3 h-3 mr-1" />
                      Fun!
                    </span>
                  )}
                  {badgeLessonIds[lesson.id] && (
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-0.5 rounded font-bold flex items-center">
                      <img src="/images/icons/badge-icon.svg" alt="" className="w-3 h-3 mr-1" />
                      {badgeLessonIds[lesson.id]}
                    </span>
                  )}
                  {progress[lesson.id] && (
                    <span className="text-green-600 dark:text-green-300 font-bold flex items-center gap-1 ml-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Completed
                    </span>
                  )}
                </div>
              </div>
              
              <Link to={`/lessons/${lesson.id}`} className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition bg-blue-600 text-white px-3 py-1 rounded shadow hover:bg-blue-700 text-xs font-semibold">
                View Lesson
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400 mt-10 py-16 flex flex-col items-center">
          <img src="/images/illustrations/no-results.svg" alt="No results" className="w-32 h-32 mb-4 opacity-60" />
          <p className="text-lg">No lessons match your search criteria.</p>
        </div>
      )}

      <div className="mt-8 text-sm text-gray-500 dark:text-gray-400 text-center">
        <b>Tip:</b> Use the search and sort options to find exactly what you're looking for! Lessons marked <span className="bg-yellow-200 text-yellow-800 px-1.5 py-0.5 rounded text-xs font-bold">Fun!</span> offer interactive elements or interesting facts.
      </div>
    </div>
  );
};

export default Lessons;
