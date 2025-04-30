import React from 'react';
import { Lesson } from './index';

export const networking: Lesson[] = [
  {
    id: 'internet-basics',
    title: 'Internet & World Wide Web: Navigating the Digital Ocean',
    difficulty: 'Beginner',
    duration: '12 min',
    tags: ['Internet', 'Web', 'Networking', 'Protocols', 'Browsers', 'DNS'],
    summary: 'Distinguish between the Internet (infrastructure) and the Web (service), understand how browsers work, and learn key online concepts.',
    relatedTerms: ['Internet', 'World Wide Web', 'TCP/IP', 'HTTP', 'HTTPS', 'URL', 'DNS', 'IP Address', 'HTML', 'CSS', 'JavaScript', 'Browser', 'Server', 'Client', 'ISP'],
    content: (
      <div>
        <h2>Internet & World Wide Web</h2>
        <p>
          The Internet is a global network of interconnected computers and devices, while the World Wide Web is a service that operates on the Internet, allowing users to access websites and online content.
        </p>
        <p>
          Key concepts include:
        </p>
        <ul>
          <li><strong>TCP/IP:</strong> The foundational protocol suite for communication on the Internet.</li>
          <li><strong>HTTP/HTTPS:</strong> Protocols for transferring web pages securely.</li>
          <li><strong>DNS:</strong> The system that translates domain names into IP addresses.</li>
          <li><strong>Browsers:</strong> Software used to access and navigate the Web.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'networking',
    title: 'Networking Basics: Connecting the Dots',
    difficulty: 'Beginner',
    duration: '15 min',
    tags: ['Networking', 'Internet', 'Hardware', 'Protocols', 'LAN', 'WAN', 'IP Address'],
    summary: 'Learn how computers and devices connect to form networks like LANs and WANs, and the roles of key hardware like routers, switches, and modems.',
    relatedTerms: ['Network', 'LAN', 'WAN', 'PAN', 'MAN', 'Router', 'Switch', 'Modem', 'Access Point', 'NIC', 'IP Address', 'Packet', 'Protocol', 'TCP/IP', 'Ethernet', 'Wi-Fi', 'ISP', 'Bandwidth', 'Latency', 'Firewall'],
    content: (
      <div>
        <h2>Networking Basics</h2>
        <p>
          Networking involves connecting computers and devices to share resources and communicate. Networks can be categorized into:
        </p>
        <ul>
          <li><strong>LAN:</strong> Local Area Network, typically within a single building.</li>
          <li><strong>WAN:</strong> Wide Area Network, spanning large geographical areas.</li>
          <li><strong>PAN:</strong> Personal Area Network, for individual use.</li>
          <li><strong>MAN:</strong> Metropolitan Area Network, covering a city or campus.</li>
        </ul>
        <p>
          Key hardware includes:
        </p>
        <ul>
          <li><strong>Router:</strong> Directs data between networks.</li>
          <li><strong>Switch:</strong> Connects devices within a network.</li>
          <li><strong>Modem:</strong> Converts signals for Internet access.</li>
        </ul>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>Networks link devices to share resources.</li>
          <li>LAN, WAN, PAN, MAN differ by geographic scope.</li>
          <li>Routers, switches, and modems are core hardware.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
        <ul className="list-disc ml-6">
          <li>Router</li>
          <li>Switch</li>
          <li>Packet</li>
          <li>TCP/IP</li>
          <li>IP Address</li>
        </ul>
      </div>
    ),
  },
];