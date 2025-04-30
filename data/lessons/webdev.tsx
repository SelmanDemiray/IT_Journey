import React from 'react';
import { Lesson } from './index';

export const webdev: Lesson[] = [
  {
    id: 'webdev',
    title: 'Web Development Basics: Building for the Web',
    difficulty: 'Beginner',
    duration: '15 min',
    tags: ['Web Development', 'Programming', 'HTML', 'CSS', 'JavaScript', 'Frontend', 'Backend'],
    summary: 'Get introduced to the core technologies (HTML, CSS, JavaScript) and concepts (frontend, backend) behind building websites and web applications.',
    relatedTerms: ['HTML', 'CSS', 'JavaScript', 'Frontend', 'Backend', 'Responsive Design', 'Hosting'],
    content: (
      <div>
        <p>
          Web development is the process of creating websites and web applications using HTML (structure), CSS (style), and JavaScript (interactivity).
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">The Core Trio</h3>
        <ul className="list-disc ml-6">
          <li><b>HTML:</b> The skeleton of your page.</li>
          <li><b>CSS:</b> The visual design and layout.</li>
          <li><b>JavaScript:</b> The dynamic behavior and logic.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Frontend vs. Backend</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border p-4">
            <h4 className="font-bold">Frontend</h4>
            <p>What users see & interact with.</p>
          </div>
          <div className="border p-4">
            <h4 className="font-bold">Backend</h4>
            <p>Server, database, and API logic.</p>
          </div>
        </div>
      </div>
    ),
  },
];
