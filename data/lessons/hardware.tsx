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
}

export const hardware: Lesson[] = [
  {
    id: 'hardware-software',
    title: 'Hardware & Software: The Dynamic Duo',
    difficulty: 'Beginner',
    duration: '10 min',
    tags: ['Fundamentals', 'Computers', 'Components', 'OS'],
    summary: 'Understand the crucial difference and relationship between physical computer parts (hardware) and the programs they run (software).',
    relatedTerms: ['Hardware', 'Software', 'CPU', 'RAM', 'SSD', 'Motherboard', 'GPU', 'Operating System', 'Application', 'Driver', 'Firmware'],
    content: (
      <div>
        <h2>Hardware & Software: The Dynamic Duo</h2>
        <p>
          Computers are made up of two essential parts: hardware and software. Hardware refers to the physical components of a computer, such as the CPU, RAM, SSD, motherboard, and GPU. Software, on the other hand, includes the programs and operating systems that run on the hardware.
        </p>
        <p>
          Together, hardware and software work in harmony to perform tasks and solve problems. For example, the operating system acts as a bridge between the hardware and the applications you use daily.
        </p>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>Hardware are the tangible parts; software gives them instructions.</li>
          <li>CPU, RAM, storage, board, GPU form the core components.</li>
          <li>Peripherals (I/O) enable human–computer interaction.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
        <ul className="list-disc ml-6">
          <li>CPU</li>
          <li>RAM</li>
          <li>SSD</li>
          <li>Motherboard</li>
          <li>Peripheral</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'input-output',
    title: 'Input and Output Devices',
    difficulty: 'Beginner',
    duration: '6 min',
    tags: ['Fundamentals', 'Hardware', 'Peripherals'],
    summary: 'Explore how computers receive information (input) and present results (output).',
    content: (
      <div>
        <h2>Input and Output Devices</h2>
        <p>
          Input devices allow users to provide information to the computer, such as keyboards, mice, and microphones. Output devices display or present the results of the computer's processes, like monitors, printers, and speakers.
        </p>
        <p>
          These devices are essential for interacting with computers and making them useful in everyday tasks.
        </p>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>Hardware are the tangible parts; software gives them instructions.</li>
          <li>CPU, RAM, storage, board, GPU form the core components.</li>
          <li>Peripherals (I/O) enable human–computer interaction.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
        <ul className="list-disc ml-6">
          <li>CPU</li>
          <li>RAM</li>
          <li>SSD</li>
          <li>Motherboard</li>
          <li>Peripheral</li>
        </ul>
      </div>
    ),
  },
];