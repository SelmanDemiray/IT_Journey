import React from 'react';
import { Lesson } from './index';

export const systems: Lesson[] = [
  {
    id: 'os',
    title: 'Operating Systems: The Computer\'s Conductor',
    difficulty: 'Beginner',
    duration: '12 min',
    tags: ['Fundamentals', 'Software', 'OS', 'Windows', 'macOS', 'Linux', 'Mobile OS'],
    summary: 'Learn what an Operating System (OS) does, its key functions, and compare popular desktop and mobile OSes.',
    relatedTerms: ['Operating System', 'Software', 'Hardware', 'CPU', 'RAM', 'Storage', 'Driver', 'GUI', 'CLI', 'Kernel', 'Process', 'Memory Management', 'File System', 'Windows', 'macOS', 'Linux', 'Android', 'iOS'],
    content: (
      <div>
        <p>The OS is the software that manages hardware, processes, memory, file systems, and user interfaces.</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Kernel manages CPU and memory.</li>
          <li>File system organizes storage.</li>
          <li>Drivers enable hardware communication.</li>
        </ul>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>OS is the conductor between hardware and apps.</li>
          <li>Manages resources, security, and UI.</li>
          <li>Popular OS: Windows, macOS, Linux, Android, iOS.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
        <ul className="list-disc ml-6">
          <li>Kernel</li>
          <li>Process</li>
          <li>CLI</li>
          <li>GUI</li>
          <li>Driver</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'mobile-devices',
    title: 'Mobile Devices',
    difficulty: 'Beginner',
    duration: '7 min',
    tags: ['Mobile', 'Devices', 'Security'],
    summary: 'Understand smartphones/tablets: their OS, apps, sensors, and on‑the‑go security tips.',
    relatedTerms: ['Android', 'iOS', 'App Store', 'Permissions', 'Encryption'],
    content: (
      <div>
        <p>Mobile devices are pocket computers with their own OS, apps, and sensors.</p>
        <ul className="list-disc ml-6 mt-2">
          <li>iOS vs. Android market share and ecosystems.</li>
          <li>Security: encryption, app permissions.</li>
          <li>Sensors: GPS, camera, accelerometer.</li>
        </ul>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>Mobile = mini-computer in your pocket.</li>
          <li>Apps from stores; check permissions.</li>
          <li>Secure with locks, encryption, updates.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
        <ul className="list-disc ml-6">
          <li>Accelerometer</li>
          <li>App Store</li>
          <li>Encryption</li>
          <li>Fingerprint</li>
          <li>Juice jacking</li>
        </ul>
      </div>
    ),
  },
];