import React, { useState, useEffect, useRef } from 'react';
import dictionary from '../data/dictionary';

interface DictionaryProps {
  onClose: () => void;
  initialTerm?: string;
}

const Dictionary: React.FC<DictionaryProps> = ({ onClose, initialTerm = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialTerm);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(initialTerm || null);
  const [filteredTerms, setFilteredTerms] = useState<string[]>([]);

  const modalRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter dictionary based on search term
  useEffect(() => {
    const filtered = Object.keys(dictionary).filter(term => 
      term.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort();
    setFilteredTerms(filtered);
    
    // Auto-select first result when searching
    if (searchTerm && filtered.length > 0 && !filtered.includes(selectedTerm || '')) {
      setSelectedTerm(filtered[0]);
    }
  }, [searchTerm, selectedTerm]);

  // Focus search input when dictionary opens
  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const clearSearch = () => {
    setSearchTerm('');
    searchInputRef.current?.focus();
  };

  const getRandomTerm = () => {
    const terms = Object.keys(dictionary);
    const randomTerm = terms[Math.floor(Math.random() * terms.length)];
    setSearchTerm('');
    setSelectedTerm(randomTerm);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 p-4">
      <div 
        ref={modalRef} 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 flex items-center">
            <img src="/images/icons/dictionary-icon.svg" alt="" className="w-6 h-6 mr-2" />
            IT Dictionary           </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Close dictionary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Search bar */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
          <div className="relative flex-grow">
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search IT terms..."
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              aria-label="Search IT terms"
            />
            {searchTerm && (
              <button 
                onClick={clearSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                aria-label="Clear search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
          <button 
            onClick={getRandomTerm}
            className="ml-2 bg-blue-100 hover:bg-blue-200 text-blue-800 dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-200 px-3 py-2 rounded-lg flex items-center"
            aria-label="Show random term"
          >
            <img src="/images/icons/random-dice.svg" alt="" className="w-5 h-5 mr-1" />
            Random
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
          {/* Term list (sidebar) */}
          <div className="md:w-1/3 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
            <div className="p-2">
              {filteredTerms.length > 0 ? (
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredTerms.map(term => (
                    <li key={term}>
                      <button
                        className={`w-full text-left px-4 py-3 rounded ${
                          selectedTerm === term 
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                        }`}
                        onClick={() => setSelectedTerm(term)}
                      >
                        {term}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                  No terms match your search.
                </div>
              )}
            </div>
          </div>
          
          {/* Term details */}
          <div className="flex-grow p-4 overflow-y-auto">
            {selectedTerm ? (
              <div>
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-3">
                  {selectedTerm}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg whitespace-pre-line">
                  {dictionary[selectedTerm]}
                </p>
                
                {/* Additional educational elements could be added here */}
                <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    Tip: Use the search bar to find related terms or click "Random" to explore.
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                <img src="/images/icons/dictionary-big-icon.svg" alt="" className="w-16 h-16 mb-4 opacity-50" />
                <p className="text-xl">Select a term from the list or search for a specific term.</p>
                <button 
                  onClick={getRandomTerm}
                  className="mt-4 bg-blue-100 hover:bg-blue-200 text-blue-800 dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg"
                >
                  Show me a random term
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
