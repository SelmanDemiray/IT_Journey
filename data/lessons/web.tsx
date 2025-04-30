import React from 'react';
import { Lesson } from './index';

export const web: Lesson[] = [
  {
    id: 'webdev',
    title: 'Web Development Basics: Building for the Web',
    difficulty: 'Beginner',
    duration: '15 min',
    tags: ['Web Development', 'Programming', 'HTML', 'CSS', 'JavaScript', 'Frontend', 'Backend'],
    summary: 'Get introduced to the core technologies (HTML, CSS, JavaScript) and concepts (frontend, backend) behind building websites and web applications.',
    relatedTerms: ['Web Development', 'Website', 'Web Application', 'HTML', 'CSS', 'JavaScript', 'Frontend', 'Backend', 'Full-Stack', 'Browser', 'Server', 'HTTP', 'Client', 'Framework', 'Library', 'Responsive Design', 'Domain Name', 'Hosting'],
    content: (
      <div>
        <h2>Introduction to Web Development</h2>
        <p>
          Web development is the process of creating websites and web applications. It involves using technologies like HTML, CSS, and JavaScript to build the frontend (user interface) and backend (server-side logic).
        </p>
        
        <div className="mt-4 p-5 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
          <h4 className="font-bold text-blue-800 dark:text-blue-300 flex items-center">
            <span className="text-2xl mr-2">💡</span>Web Development Evolution
          </h4>
          <p className="text-blue-700 dark:text-blue-400 mt-2">
            The web has evolved dramatically since its inception in the early 1990s. Originally consisting of simple static HTML pages, today's web applications are sophisticated, interactive platforms that power everything from social media to online banking and video streaming services.
          </p>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Frontend Development</h3>
        <p>
          Frontend development focuses on the user interface and user experience. It includes designing layouts, styling with CSS, and adding interactivity with JavaScript.
        </p>
        
        <div className="mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2">Simple HTML Example</h4>
          <pre className="bg-white dark:bg-gray-900 p-3 rounded text-sm overflow-x-auto">
            <code>
              {`<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
    <style>
      body { font-family: Arial, sans-serif; }
      h1 { color: blue; }
    </style>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a simple web page.</p>
    <script>
      // JavaScript goes here
      document.querySelector('p').addEventListener('click', function() {
        alert('You clicked the paragraph!');
      });
    </script>
  </body>
</html>`}
            </code>
          </pre>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 rounded">
          <b>Try it:</b> Copy the code above into a text file, save it with a .html extension, and open it in a web browser to see how it works!
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Frontend Frameworks and Libraries</h3>
        <p>
          Modern web development often utilizes frameworks and libraries to streamline the development process:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="p-3 border rounded">
            <h5 className="font-bold text-blue-600 dark:text-blue-400">React</h5>
            <p className="text-sm">Developed by Facebook, React offers a component-based architecture and virtual DOM for efficient UI updates.</p>
          </div>
          <div className="p-3 border rounded">
            <h5 className="font-bold text-green-600 dark:text-green-400">Vue.js</h5>
            <p className="text-sm">A progressive framework that's easily adoptable, scalable, and known for its gentle learning curve.</p>
          </div>
          <div className="p-3 border rounded">
            <h5 className="font-bold text-red-600 dark:text-red-400">Angular</h5>
            <p className="text-sm">A comprehensive framework by Google with strong typing (TypeScript) and dependency injection.</p>
          </div>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Backend Development</h3>
        <p>
          Backend development involves server-side programming, databases, and APIs. It ensures that the website or application functions correctly and securely.
        </p>
        
        <ul className="list-disc ml-6 mt-4">
          <li><strong>Server-side Languages:</strong> Node.js (JavaScript), Python (Django, Flask), Ruby (Rails), PHP, Java (Spring), C# (.NET)</li>
          <li><strong>Databases:</strong> MySQL, PostgreSQL (relational/SQL), MongoDB, Redis (non-relational/NoSQL)</li>
          <li><strong>APIs:</strong> REST, GraphQL, WebSockets for real-time functionality</li>
        </ul>
        
        <div className="mt-6 p-4 border-l-4 border-blue-500 bg-blue-50">
          <h4 className="font-bold mb-2">RESTful API Example (Express.js)</h4>
          <pre className="bg-white p-3 rounded text-sm overflow-x-auto">
            <code>
              {`// Simple Express.js API endpoint
const express = require('express');
const app = express();
app.use(express.json());

// Sample data
const users = [
  { id: 1, name: 'Alice', role: 'Developer' },
  { id: 2, name: 'Bob', role: 'Designer' }
];

// GET endpoint to retrieve all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
            </code>
          </pre>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Full-Stack Development</h3>
        <p>
          Full-stack developers work on both frontend and backend, having knowledge of the complete web development process from database design to user interface implementation.
        </p>
        
        <div className="mt-4 p-5 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
          <h4 className="font-bold text-green-800 dark:text-green-300">Modern Web Development Workflow</h4>
          <ol className="list-decimal ml-5 mt-3">
            <li>Planning & wireframing the website/application</li>
            <li>Designing the user interface (UI) and user experience (UX)</li>
            <li>Setting up development environment and version control (Git)</li>
            <li>Developing the frontend components</li>
            <li>Building the backend API and database</li>
            <li>Integrating frontend and backend</li>
            <li>Testing for bugs, user experience, and performance</li>
            <li>Deployment to production servers</li>
            <li>Maintenance and updates</li>
          </ol>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Responsive Design</h3>
        <p>
          With the variety of devices used to access websites today (desktops, tablets, smartphones), responsive design has become crucial. It ensures websites adapt their layout and functionality to different screen sizes.
        </p>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-100 p-3 rounded text-center">
            <div className="text-3xl mb-2">📱</div>
            <h5 className="font-semibold">Mobile First</h5>
            <p className="text-sm">Design for mobile devices first, then enhance for larger screens</p>
          </div>
          <div className="bg-gray-100 p-3 rounded text-center">
            <div className="text-3xl mb-2">📏</div>
            <h5 className="font-semibold">Fluid Layouts</h5>
            <p className="text-sm">Use percentages and relative units instead of fixed pixels</p>
          </div>
          <div className="bg-gray-100 p-3 rounded text-center">
            <div className="text-3xl mb-2">🔄</div>
            <h5 className="font-semibold">Media Queries</h5>
            <p className="text-sm">Apply different styles based on device characteristics</p>
          </div>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Web Development Tools</h3>
        <ul className="list-disc ml-6 mt-3">
          <li><strong>Code Editors:</strong> Visual Studio Code, Sublime Text, WebStorm</li>
          <li><strong>Browser Dev Tools:</strong> Chrome DevTools, Firefox Developer Tools</li>
          <li><strong>Build Tools:</strong> Webpack, Parcel, Vite</li>
          <li><strong>Package Managers:</strong> npm, Yarn</li>
          <li><strong>Version Control:</strong> Git, GitHub, GitLab, Bitbucket</li>
          <li><strong>Testing Tools:</strong> Jest, Mocha, Cypress</li>
          <li><strong>Deployment:</strong> Netlify, Vercel, Heroku, AWS, Google Cloud</li>
        </ul>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Getting Started</h3>
        <p>
          Ready to start your web development journey? Here are some resources:
        </p>
        <div className="mt-3 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded">
          <ul className="list-disc ml-4">
            <li>MDN Web Docs (Mozilla) - comprehensive documentation</li>
            <li>freeCodeCamp - free interactive learning platform</li>
            <li>The Odin Project - full-stack curriculum</li>
            <li>Codecademy, Udemy, Coursera - structured courses</li>
            <li>YouTube tutorials by channels like Traversy Media, Web Dev Simplified</li>
          </ul>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded">
          <b>Interactive Challenge:</b> Try practicing with online tools like CodePen, JSFiddle, or CodeSandbox to experiment with HTML, CSS, and JavaScript without installing anything on your computer.
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Key Concepts</h3>
        <ul>
          <li><strong>HTML:</strong> The structure of web pages.</li>
          <li><strong>CSS:</strong> The styling of web pages.</li>
          <li><strong>JavaScript:</strong> The interactivity and logic of web pages.</li>
          <li><strong>Responsive Design:</strong> Making websites work on different devices.</li>
          <li><strong>Hosting:</strong> Storing and serving websites on the internet.</li>
          <li><strong>APIs:</strong> Interfaces that allow different software systems to communicate.</li>
          <li><strong>SEO:</strong> Search Engine Optimization for better visibility in search results.</li>
          <li><strong>Web Accessibility:</strong> Ensuring websites are usable by people with disabilities.</li>
        </ul>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>HTML structures content; CSS styles it; JS makes it interactive.</li>
          <li>Frontend vs. backend: client vs. server logic.</li>
          <li>Frameworks streamline UI (React/Vue/Angular) and APIs (Node/Django).</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
        <ul className="list-disc ml-6">
          <li>HTTP</li>
          <li>DNS</li>
          <li>API</li>
          <li>Responsive Design</li>
          <li>Hosting</li>
        </ul>
      </div>
    ),
  },
  // Add other web development-related lessons here
];