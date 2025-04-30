import React from 'react';
import { Lesson } from './index';

export const fundamentals: Lesson[] = [
  {
    id: 'intro',
    title: 'What is IT?',
    difficulty: 'Beginner',
    duration: '7 min',
    tags: ['Fundamentals', 'Overview', 'Careers', 'Core Concepts'],
    summary: 'Understand the core concept of Information Technology, its components, and its vast impact on the modern world.',
    relatedTerms: ['Hardware', 'Software', 'Network', 'Internet', 'Data', 'Server', 'Cloud Computing'],
    exercises: [
      'List 5 real‑world examples of hardware, software, networks, and data.',
      'Draw a diagram showing how a simple email is sent (I/O flow).',
      'Explain in your own words why IT literacy helps in daily life.'
    ],
    content: (
      <div>
        <p>
          IT stands for <b>Information Technology</b>. At its core, IT is about using technology – primarily computers, networks, software, and the internet – to manage information effectively. This includes creating, storing, processing, securing, and exchanging all forms of electronic data.
        </p>
      </div>
      <hr className="my-6"/>
      <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
      <ul className="list-disc ml-6">
        <li>IT = Hardware + Software + Networks managing Data.</li>
        <li>Fundamental for communication, business, and innovation.</li>
        <li>IT literacy empowers everyday tasks and career growth.</li>
      </ul>
      <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
      <ul className="list-disc ml-6">
        <li>Hardware</li>
        <li>Software</li>
        <li>Network</li>
        <li>Internet</li>
        <li>Data</li>
      </ul>
    ),
  },
  {
    id: 'history',
    title: 'A Brief History of IT',
    difficulty: 'Beginner',
    duration: '8 min',
    tags: ['History', 'Computers', 'Internet', 'Innovation'],
    summary: 'Trace the fascinating evolution of IT from ancient calculation tools to the age of AI and cloud computing.',
    relatedTerms: ['Abacus', 'Transistor', 'Microprocessor', 'Internet', 'World Wide Web', 'Cloud Computing', 'AI', 'ARPANET'],
    exercises: [
      'Timeline: Note three major IT milestones and their decades.',
      'Research one influential IT pioneer and summarize their contribution.',
      'Compare early mechanical computers to modern smartphones in specs and size.'
    ],
    content: (
      <div>
        <p>
          The history of IT is a journey through innovation. From the invention of the abacus to the development of the internet, each milestone has shaped the way we interact with technology today.
        </p>
      </div>
      <hr className="my-6"/>
      <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
      <ul className="list-disc ml-6">
        <li>IT has evolved from basic tools to advanced technologies.</li>
        <li>Each innovation has contributed to modern IT systems.</li>
        <li>Understanding history helps appreciate current advancements.</li>
      </ul>
      <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
      <ul className="list-disc ml-6">
        <li>Abacus</li>
        <li>Transistor</li>
        <li>Microprocessor</li>
        <li>Internet</li>
        <li>World Wide Web</li>
      </ul>
    ),
  },
];