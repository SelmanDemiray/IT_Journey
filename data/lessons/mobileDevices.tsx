import React from 'react';
import { Lesson } from './index';

export const mobileDevices: Lesson[] = [
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
        <p>
          Mobile devices are pocket‑sized computers. They run mobile OSes (Android/iOS) and include sensors like GPS, accelerometer, and cameras.
        </p>
        <ul className="list-square ml-6 mt-2">
          <li>
            <b>Apps:</b> Download from official stores—check permissions! <span className="highlight-concept">Security Tip</span>
          </li>
          <li><b>Connectivity:</b> Wi‑Fi, Bluetooth, Mobile Data (4G/5G).</li>
          <li>
            <b>Battery Care:</b> Avoid deep discharges. <span className="fun-badge">Pro Tip</span>
          </li>
        </ul>
        <div className="prose mt-4">
          <h3>Stay Secure on the Move</h3>
          <p>
            Use strong screen locks, enable device encryption, and beware of public charging stations (avoid “juice jacking”).
          </p>
        </div>
      </div>
    ),
  },
];
