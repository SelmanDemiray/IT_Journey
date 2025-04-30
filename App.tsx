import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import LessonDetail from './pages/LessonDetail';
import Progress from './pages/Progress';
import Skills from './pages/Skills';
import Dictionary from './components/Dictionary';

// Create user context
const UserContext = createContext<{
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}>({
  user: 'Guest',
  setUser: () => {},
});

// Custom hook for accessing user context
export const useUser = () => useContext(UserContext);

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true' || (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  
  const [dictionaryOpen, setDictionaryOpen] = useState(false);
  const [dictionaryTerm, setDictionaryTerm] = useState('');
  const [users, setUsers] = useState<string[]>(() => {
    const saved = localStorage.getItem('users');
    return saved ? JSON.parse(saved) : ['Alex', 'Maria', 'Sam'];
  });
  const [user, setUser] = useState<string>(() => {
    const saved = localStorage.getItem('currentUser');
    return saved || 'Alex';
  });

  // Apply dark mode class to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDark.toString());
  }, [isDark]);

  // Store current user
  useEffect(() => {
    localStorage.setItem('currentUser', user);
  }, [user]);

  // Store users list
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Listen for dictionary open events
  useEffect(() => {
    const handleOpenDictionary = (e: Event) => {
      const customEvent = e as CustomEvent;
      setDictionaryTerm(customEvent.detail || '');
      setDictionaryOpen(true);
    };
    
    window.addEventListener('openDictionary', handleOpenDictionary);
    return () => window.removeEventListener('openDictionary', handleOpenDictionary);
  }, []);

  const toggleDark = () => setIsDark(!isDark);
  
  const handleSelectUser = (selectedUser: string) => {
    setUser(selectedUser);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className={`min-h-screen ${isDark ? 'dark bg-gray-900 text-white' : 'bg-gray-50'}`}>
        <Router>
          <Navbar 
            onDictionary={() => setDictionaryOpen(true)} 
            dark={isDark} 
            onToggleDark={toggleDark}
            users={users}
            selectedUser={user}
            onSelectUser={handleSelectUser}
          />
          <div className="container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/lessons/:id" element={<LessonDetail />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </div>
        </Router>
        
        {dictionaryOpen && (
          <Dictionary 
            onClose={() => setDictionaryOpen(false)}
            initialTerm={dictionaryTerm}
          />
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
