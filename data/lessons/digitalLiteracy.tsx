import React from 'react';
import { Lesson } from './index';

export const digitalLiteracy: Lesson[] = [
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
        <p>
          Digital literacy is the ability to use technology effectively and responsibly. It includes understanding how to
          navigate the internet, evaluate online information, and protect your privacy.
        </p>
        <div className="quiz-card mt-4">
          <h4 className="font-bold">Quick Quiz: Spot the Fake</h4>
          <p>Which headline is most likely clickbait?</p>
          <ul className="list-decimal ml-6 mt-2 space-y-1">
            <li>“Scientists Discover Cure for Aging—You Won’t Believe #3!”</li>
            <li>“Local Library Hosts Coding Workshop for Teens”</li>
            <li>“City Council Announces New Park Opening”</li>
          </ul>
          <div className="mt-2"><b>Answer:</b> Option 1 is clickbait—look for sensational language and vague promises.</div>
        </div>
        <div className="challenge-card mt-4">
          <h4 className="font-bold">Challenge:</h4>
          <p>Create a strong privacy setting on one of your social media accounts today. Document the steps you took!</p>
        </div>
      </div>
    ),
  },
];
