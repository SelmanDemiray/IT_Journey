import React from 'react';

interface ExercisesProps {
  exercises: string[];
}

const Exercises: React.FC<ExercisesProps> = ({ exercises }) => (
  <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
    <h3 className="text-lg font-semibold mb-2">Exercises</h3>
    <ul className="list-decimal ml-6 space-y-1">
      {exercises.map((ex, i) => (
        <li key={i} className="text-sm text-gray-700 dark:text-gray-300">{ex}</li>
      ))}
    </ul>
  </div>
);

export default Exercises;
