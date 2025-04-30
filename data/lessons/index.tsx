import React from 'react';

export interface Lesson {
  id: string;
  title: string;
  difficulty: string;
  duration: string;
  tags: string[];
  summary: string;
  relatedTerms?: string[];
  content: React.ReactNode;
  exercises?: string[];
}

import { fundamentals } from './fundamentals';
import { hardware } from './hardware';
import { networking } from './networking';
import { systems } from './systems';
import { databases } from './databases';
import { cloud } from './cloud';
import { webdev } from './webdev';
import { digitalLiteracy } from './digitalLiteracy';
import { aiMl } from './aiMl';
import { mobileDevices } from './mobileDevices';
import { programming } from './programming';
import { security } from './security';

const lessons: Lesson[] = [
  ...fundamentals,
  ...hardware,
  ...networking,
  ...systems,
  ...databases,
  ...cloud,
  ...webdev,
  ...digitalLiteracy,
  ...aiMl,
  ...mobileDevices,
  ...programming,
  ...security,
];

export default lessons;
