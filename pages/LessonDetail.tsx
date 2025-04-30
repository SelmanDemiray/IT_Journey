import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import lessons from '../data/lessons.tsx';
import { useUser } from '../App';
import Exercises from '../components/Exercises';

// --- Add missing progress helpers ---
function getProgress(user: string) {
  const prog = localStorage.getItem(`progress_${user}`);
  return prog ? JSON.parse(prog) : {};
}

function setProgress(user: string, lessonId: string) {
  const prog = getProgress(user);
  prog[lessonId] = true;
  localStorage.setItem(`progress_${user}`, JSON.stringify(prog));
}

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

// Helper to render content safely
const renderContent = (content: React.ReactNode): React.ReactNode => {
  return content;
};

const LessonDetail = () => {
  const { user } = useUser();
  const { id } = useParams();
  const navigate = useNavigate();
  const lessonIdx = lessons.findIndex(l => l.id === id);
  const lesson = lessons[lessonIdx];
  const progress = getProgress(user);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!lesson) return <div className="text-center mt-10">Lesson not found. <a href="/lessons" className="text-blue-600 hover:underline">Go back to lessons</a></div>;

  const handleComplete = () => {
    setProgress(user, lesson.id);
    const nextIncompleteLesson = lessons.find((l, index) => index > lessonIdx && !progress[l.id]);
    if (nextIncompleteLesson) {
      navigate(`/lessons/${nextIncompleteLesson.id}`);
    } else {
      const firstIncomplete = lessons.find(l => !progress[l.id] && l.id !== lesson.id);
      if (firstIncomplete) {
        navigate(`/lessons/${firstIncomplete.id}`);
      } else {
        navigate('/progress');
      }
    }
  };

  const prevLesson = lessonIdx > 0 ? lessons[lessonIdx - 1] : null;
  const nextLesson = lessonIdx < lessons.length - 1 ? lessons[lessonIdx + 1] : null;

  const relatedTerms = lesson.relatedTerms || [];

  const openDict = (term: string) => {
    window.dispatchEvent(new CustomEvent('openDictionary', { detail: term }));
  };

  return (
    <div className="max-w-4xl mx-auto pb-16">
      {/* Lesson header with featured image */}
      <div className="relative mb-6 rounded-lg overflow-hidden">
        <div className="h-40 bg-gradient-to-r from-blue-600 to-blue-400">
          <img 
            src={lessonImages[lesson.id] || "/images/lessons/default-lesson.jpg"} 
            alt="" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/lessons/default-lesson.jpg";
            }}
          />
        </div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{lesson.title}</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <span className="flex items-center">
              <img src="/images/icons/difficulty-icon.svg" alt="" className="w-4 h-4 mr-1" />
              Difficulty: <span className="font-semibold ml-1">{lesson.difficulty || 'Beginner'}</span>
            </span>
            <span className="flex items-center">
              <img src="/images/icons/clock-icon.svg" alt="" className="w-4 h-4 mr-1" />
              Est. Time: <span className="font-semibold ml-1">{lesson.duration || 'N/A'}</span>
            </span>
            {lesson.tags && lesson.tags.length > 0 && (
              <span className="flex items-center flex-wrap">
                <img src="/images/icons/tags-icon.svg" alt="" className="w-4 h-4 mr-1" />
                Tags: {lesson.tags.map(tag => (
                  <span key={tag} className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-xs mr-1 mt-1">
                    {tag}
                  </span>
                ))}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Lesson content */}
      <div className="prose dark:prose-invert max-w-none mb-10 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 font-semibold italic border-l-4 border-blue-500 pl-3 py-1">
          {lesson.summary || "Learn about this important IT topic."}
        </p>
        {renderContent(lesson.content)}
      </div>
      {lesson.exercises && <Exercises exercises={lesson.exercises} />}

      {/* Related terms */}
      {relatedTerms.length > 0 && (
        <div className="mt-8 mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-3">
            <img src="/images/icons/related-terms-icon.svg" alt="" className="w-5 h-5 mr-2" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Related Terms in this Lesson</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {relatedTerms.map(term => (
              <button
                key={term}
                onClick={() => openDict(term)}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition flex items-center"
              >
                <img 
                  src={`/images/icons/term-icon.svg`}
                  alt=""
                  className="w-4 h-4 mr-1"
                />
                {term}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2 flex items-center">
            <img src="/images/icons/dictionary-small-icon.svg" alt="" className="w-3 h-3 mr-1" />
            Click a term to look it up in the Dictionary.
          </p>
        </div>
      )}

      {/* Navigation controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
          {prevLesson && (
            <button
              className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-500 transition text-sm font-medium whitespace-nowrap flex items-center"
              onClick={() => navigate(`/lessons/${prevLesson.id}`)}
            >
              <img src="/images/icons/arrow-left-icon.svg" alt="" className="w-4 h-4 mr-2" />
              {prevLesson.title.length > 20 ? prevLesson.title.substring(0, 18) + '...' : prevLesson.title}
            </button>
          )}
          {nextLesson && (
            <button
              className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-100 px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-500 transition text-sm font-medium whitespace-nowrap flex items-center"
              onClick={() => navigate(`/lessons/${nextLesson.id}`)}
            >
              {nextLesson.title.length > 20 ? nextLesson.title.substring(0, 18) + '...' : nextLesson.title}
              <img src="/images/icons/arrow-right-icon.svg" alt="" className="w-4 h-4 ml-2" />
            </button>
          )}
        </div>
        <button
          className={`px-6 py-3 rounded font-bold text-lg transition w-full sm:w-auto mt-4 sm:mt-0 flex items-center justify-center ${
            progress[lesson.id]
              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
          onClick={handleComplete}
          disabled={progress[lesson.id]}
        >
          <img 
            src="/images/icons/checkmark-circle-icon.svg" 
            alt="" 
            className="w-5 h-5 mr-2"
          />
          {progress[lesson.id] ? '✓ Completed' : `Mark Complete & Continue`}
        </button>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
        <p>
          <b>Next Steps:</b> {progress[lesson.id] ? "Review this lesson anytime or explore related topics." : "Mark this lesson complete to track your progress!"} Consider searching the <button onClick={() => openDict('')} className="text-blue-600 hover:underline">Dictionary</button> for any unfamiliar terms.
        </p>
        <p>
          <b>Tip:</b> Re-reading key sections or explaining the concepts to someone else can help solidify your understanding.
        </p>
      </div>
    </div>
  );
};

export default LessonDetail;
