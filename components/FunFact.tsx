import React from 'react';

interface FunFactProps {
  children: React.ReactNode;
}

const FunFact: React.FC<FunFactProps> = ({ children }) => {
  return (
    <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/40 border border-yellow-200 dark:border-yellow-600 rounded-lg">
      <div className="flex items-center">
        <span className="text-xl mr-2">💡</span>
        <h4 className="font-bold text-yellow-800 dark:text-yellow-200">Fun Fact:</h4>
      </div>
      <p className="text-yellow-800 dark:text-yellow-100 mt-2">
        {children}
      </p>
    </div>
  );
};

export default FunFact;
