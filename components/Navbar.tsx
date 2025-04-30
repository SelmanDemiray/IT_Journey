import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({
  onDictionary,
  dark,
  onToggleDark,
  users,
  selectedUser,
  onSelectUser
}: {
  onDictionary: () => void,
  dark?: boolean,
  onToggleDark?: () => void,
  users?: string[],
  selectedUser?: string,
  onSelectUser?: (u: string) => void
}) => (
  <nav className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6 py-4 flex flex-col shadow-lg">
    <div className="flex justify-between items-center mb-2">
      <div className="text-2xl font-extrabold tracking-tight drop-shadow font-display flex items-center">
        <img src="/images/icons/it-academy-logo.svg" alt="" className="h-8 mr-2" />
        IT Beginner Academy
      </div>
      <div className="flex items-center space-x-2">
        {users && users.map(u => (
          <button
            key={u}
            className={`px-3 py-1 rounded font-bold border-2 flex items-center ${
              selectedUser === u
                ? 'bg-yellow-300 text-blue-900 border-yellow-400'
                : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-100'
            }`}
            onClick={() => onSelectUser && onSelectUser(u)}
            aria-current={selectedUser === u}
          >
            <img 
              src={`/images/avatars/${u.toLowerCase()}.png`} 
              alt="" 
              className="w-5 h-5 rounded-full mr-1"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/avatars/default-avatar.png";
              }}
            />
            {u}
          </button>
        ))}
      </div>
    </div>
    <div className="space-x-6 flex items-center">
      <Link to="/" className="hover:underline flex items-center">
        <img src="/images/icons/home-icon.svg" alt="" className="w-4 h-4 mr-1" />
        Home
      </Link>
      <Link to="/lessons" className="hover:underline flex items-center">
        <img src="/images/icons/lessons-icon.svg" alt="" className="w-4 h-4 mr-1" />
        Lessons
      </Link>
      <Link to="/progress" className="hover:underline flex items-center">
        <img src="/images/icons/progress-icon.svg" alt="" className="w-4 h-4 mr-1" />
        Progress
      </Link>
      <Link to="/skills" className="hover:underline flex items-center">
        <img src="/images/icons/skills-icon.svg" alt="" className="w-4 h-4 mr-1" />
        Skills
      </Link>
      <button
        className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-blue-100 font-semibold shadow flex items-center"
        onClick={onDictionary}
        aria-label="Open IT Dictionary"
      >
        <img src="/images/icons/dictionary-icon.svg" alt="" className="w-4 h-4 mr-1" />
        Dictionary
      </button>
      {onToggleDark && (
        <button
          className="ml-2 px-2 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition"
          onClick={onToggleDark}
          aria-label="Toggle dark mode"
        >
          {dark ? (
            <img src="/images/icons/light-mode.svg" alt="Switch to light mode" className="w-5 h-5" />
          ) : (
            <img src="/images/icons/dark-mode.svg" alt="Switch to dark mode" className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  </nav>
);

export default Navbar;
