import React from 'react';
import { Lesson } from './index';

export const digital: Lesson[] = [
  {
    id: 'digital-literacy',
    title: 'Digital Literacy',
    difficulty: 'Beginner',
    duration: '5 min',
    tags: ['Digital Literacy', 'Safety', 'Citizenship'],
    summary: 'Navigate the online world responsibly: spot fake news, manage privacy, and maintain a healthy digital life.',
    relatedTerms: ['Misinformation', 'Privacy', 'Digital Footprint', 'Social Media', 'Cyberbullying'],
    content: (
      <div>
        <h2>Digital Literacy</h2>
        <p>
          Digital literacy is the ability to use technology effectively and responsibly. It includes understanding how to
          navigate the internet, evaluate online information, and protect your privacy.
        </p>
        <h3>Key Topics</h3>
        <ul>
          <li>Misinformation: Learn to identify fake news and unreliable sources.</li>
          <li>Privacy: Understand how to manage your personal data online.</li>
          <li>Digital Footprint: Be aware of the traces you leave behind on the internet.</li>
          <li>Social Media: Use social platforms responsibly and avoid cyberbullying.</li>
        </ul>
        <h3>Tips for Healthy Digital Life</h3>
        <p>
          Balance screen time, engage in positive online interactions, and stay informed about the latest digital trends.
        </p>
      </div>
    ),
  },
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
        <h2>AI & Machine Learning</h2>
        <p>
          Artificial Intelligence (AI) and Machine Learning (ML) are technologies that enable machines to learn from data
          and make decisions. They are used in various applications, from healthcare to autonomous vehicles.
        </p>
        <h3>Key Topics</h3>
        <ul>
          <li>Algorithm: The set of rules machines follow to solve problems.</li>
          <li>Data: The information used to train and improve machine learning models.</li>
          <li>Neural Network: A system inspired by the human brain for processing data.</li>
          <li>Training: The process of teaching machines using data.</li>
          <li>Bias: Ethical considerations in AI decision-making.</li>
          <li>Automation: How AI is transforming industries by automating tasks.</li>
        </ul>
        <h3>Ethical Considerations</h3>
        <p>
          Addressing bias, ensuring transparency, and understanding the impact of AI on society are crucial for responsible
          use of these technologies.
        </p>
      </div>
    ),
  },
];