import React from 'react';
import { Lesson } from './index';

export const os: Lesson[] = [
  {
    id: 'os',
    title: "Operating Systems: The Computer's Conductor",
    difficulty: 'Beginner',
    duration: '12 min',
    tags: ['Fundamentals', 'Software', 'OS', 'Windows', 'macOS', 'Linux', 'Mobile OS'],
    summary: 'Learn what an Operating System (OS) does, its key functions, and compare popular desktop and mobile OSes.',
    relatedTerms: ['Operating System', 'Kernel', 'Process', 'Memory Management', 'File System', 'GUI', 'CLI', 'Driver'],
    content: (
      <div>
        <p>
          The <b>Operating System (OS)</b> is the central conductor that manages all hardware and software resources on your device. Without it, your computer or phone is just inert electronics.
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Functions of an OS</h3>
        <ul className="list-disc ml-6">
          <li><b>Process Management:</b> Starts, schedules, and stops programs (processes) so multiple apps can run simultaneously.</li>
          <li><b>Memory Management:</b> Allocates RAM to applications and reclaims it when no longer needed, often using virtual memory.</li>
          <li><b>File System Management:</b> Organizes data on storage devices into files and folders, enforces permissions.</li>
          <li><b>Device Management:</b> Uses drivers to communicate with hardware like keyboards, printers, and network cards.</li>
          <li><b>User Interface:</b> Provides a GUI (windows/icons) or CLI (command-line) for you to interact with your device.</li>
          <li><b>Security & Networking:</b> Manages user accounts, permissions, firewalls, and network connections.</li>
        </ul>
        <p className="mt-4">
          The core component handling these tasks is the <b>kernel</b>. Above it runs system services and your applications.
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">Popular Desktop & Mobile OSes</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border rounded">
            <h4 className="font-bold">Desktop/Laptop</h4>
            <ul className="list-disc ml-5 text-sm">
              <li>Windows (10, 11)</li>
              <li>macOS (Ventura, Monterey)</li>
              <li>Linux (Ubuntu, Fedora, Debian)</li>
            </ul>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-bold">Mobile</h4>
            <ul className="list-disc ml-5 text-sm">
              <li>Android</li>
              <li>iOS</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];
