import React from 'react';
import { Lesson } from './index';

export const aiMl: Lesson[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    difficulty: 'Intermediate',
    duration: '8 min',
    tags: ['AI', 'Machine Learning', 'Trends'],
    summary: 'Explore how machines learn from data, real-world applications, and ethical considerations.',
    relatedTerms: ['Algorithm', 'Data', 'Neural Network', 'Training', 'Bias', 'Automation'],
    content: (
      <div>
        <p>
          <b>Artificial Intelligence (AI)</b> and <b>Machine Learning (ML)</b> enable computers to learn from data and perform tasks that once required human intelligence.
        </p>
        <div className="analogy-card my-4">
          <h4 className="font-bold">Analogy: Learning to Bake</h4>
          <p>Teaching a computer with ML is like sharing a recipe and feedback: you give many examples and tweak the steps until it bakes consistent cakes.</p>
        </div>
        <div className="fun-fact-card">
          <h4 className="font-bold">Fun Fact:</h4>
          <p>The first ML program was developed in the 1950s—today, AI powers voice assistants, image recognition, and recommendation systems!</p>
        </div>
      </div>
    ),
  },
];
