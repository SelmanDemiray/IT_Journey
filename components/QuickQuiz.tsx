import React, { useState, useId } from 'react';

interface QuickQuizProps {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

const QuickQuiz: React.FC<QuickQuizProps> = ({ 
  question, 
  options, 
  correctAnswerIndex,
  explanation
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const quizId = useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOption !== null) setShowAnswer(true);
  };

  return (
    <div className="mt-6 p-5 bg-blue-50 dark:bg-blue-900/40 rounded-lg border border-blue-200 dark:border-blue-700">
      <h4 className="font-bold text-blue-800 dark:text-blue-300 flex items-center text-lg">
        <span className="mr-2">🧠</span>Quick Quiz: Test Your Understanding
      </h4>
      <form onSubmit={handleSubmit}>
        <p className="text-blue-700 dark:text-blue-300 mt-2 mb-4">{question}</p>
        <div className="space-y-2 ml-4">
          {options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input 
                type="radio" 
                id={`quiz-${quizId}-option-${index}`} 
                name={`quiz-${quizId}-option`}
                className="mr-2 accent-blue-600" 
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
                disabled={showAnswer}
              />
              <label 
                htmlFor={`quiz-${quizId}-option-${index}`} 
                className={`
                  ${showAnswer && index === correctAnswerIndex ? 'text-green-700 dark:text-green-300 font-medium' : 'text-gray-700 dark:text-gray-300'}
                  ${showAnswer && selectedOption === index && index !== correctAnswerIndex ? 'text-red-700 dark:text-red-300' : ''}
                `}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
        {!showAnswer ? (
          <button 
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium disabled:bg-blue-400 disabled:cursor-not-allowed"
            disabled={selectedOption === null}
          >
            Check Answer
          </button>
        ) : (
          <div className="mt-4 text-sm bg-blue-100 dark:bg-blue-800/50 p-3 rounded-lg">
            <p className="font-bold text-blue-800 dark:text-blue-300">
              Answer: {options[correctAnswerIndex]}
            </p>
            {explanation && (
              <p className="mt-2 text-blue-700 dark:text-blue-300">{explanation}</p>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default QuickQuiz;
