import React from 'react';
import { Lesson } from './index';

export const cloud: Lesson[] = [
  {
    id: 'cloud',
    title: 'Cloud Computing: Computing on Demand',
    difficulty: 'Beginner',
    duration: '10 min',
    tags: ['Cloud', 'Networking', 'Infrastructure', 'SaaS', 'PaaS', 'IaaS', 'AWS', 'Azure', 'GCP'],
    summary: 'Understand the basics of cloud computing, its service models (IaaS, PaaS, SaaS), deployment models, and key benefits.',
    relatedTerms: ['Cloud Computing', 'Server', 'Data Center', 'Virtualization', 'IaaS', 'PaaS', 'SaaS', 'Public Cloud', 'Private Cloud', 'Hybrid Cloud', 'Scalability', 'Availability', 'AWS', 'Azure', 'GCP', 'Cloud Storage', 'Serverless'],
    content: (
      <div>
        <h2>Introduction to Cloud Computing</h2>
        <p>
          Cloud computing is the delivery of computing services over the internet, allowing users to access resources like servers, storage, databases, and applications on demand.
        </p>
        <h3>Service Models</h3>
        <ul>
          <li><strong>IaaS (Infrastructure as a Service):</strong> Provides virtualized computing resources over the internet.</li>
          <li><strong>PaaS (Platform as a Service):</strong> Offers a platform for developers to build and deploy applications without worrying about underlying infrastructure.</li>
          <li><strong>SaaS (Software as a Service):</strong> Delivers software applications over the internet, accessible via a web browser.</li>
        </ul>
        <h3>Deployment Models</h3>
        <ul>
          <li><strong>Public Cloud:</strong> Services are offered to multiple customers over the internet.</li>
          <li><strong>Private Cloud:</strong> Dedicated cloud infrastructure for a single organization.</li>
          <li><strong>Hybrid Cloud:</strong> Combines public and private cloud resources.</li>
        </ul>
        <h3>Key Benefits</h3>
        <ul>
          <li><strong>Scalability:</strong> Easily scale resources up or down based on demand.</li>
          <li><strong>Cost Efficiency:</strong> Pay only for the resources you use.</li>
          <li><strong>Availability:</strong> Access resources from anywhere with an internet connection.</li>
        </ul>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>Cloud delivers resources on demand: IaaS, PaaS, SaaS.</li>
          <li>Deployment: public, private, hybrid.</li>
          <li>Benefits: scalability, cost-efficiency, global reach.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
        <ul className="list-disc ml-6">
          <li>Virtualization</li>
          <li>Data Center</li>
          <li>Serverless</li>
          <li>AWS / Azure / GCP</li>
          <li>Containers</li>
        </ul>
      </div>
    ),
  },
];