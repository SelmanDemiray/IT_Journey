const lessons = [
  {
    id: 'intro',
    title: 'What is IT?',
    content: (
      <div>
        <p>
          IT stands for Information Technology. It’s about using computers and software to manage information. IT is everywhere: in businesses, schools, hospitals, and even your phone!
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>What computers are and what they do</li>
          <li>What software is</li>
          <li>How IT helps people and businesses</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'hardware-software',
    title: 'Hardware & Software',
    content: (
      <div>
        <p>
          Learn the difference between hardware (the physical parts of a computer) and software (the programs that run on computers).
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Examples of hardware: CPU, RAM, hard drive</li>
          <li>Examples of software: operating system, apps</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'internet-basics',
    title: 'Internet & Web',
    content: (
      <div>
        <p>
          The internet connects millions of computers worldwide. The web is a way to access information using browsers.
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>What is the internet?</li>
          <li>How web browsers work</li>
          <li>Staying safe online</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'security',
    title: 'IT Security',
    content: (
      <div>
        <p>
          IT security is about protecting computers and data from harm. Learn about passwords, malware, and safe practices.
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Creating strong passwords</li>
          <li>Recognizing phishing emails</li>
          <li>Using antivirus software</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'programming',
    title: 'Programming Basics',
    content: (
      <div>
        <p>
          Programming is writing instructions for computers. You can use languages like Python or JavaScript to create apps and websites.
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>What is a programming language?</li>
          <li>Simple code examples</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking & Cyber Awareness',
    content: (
      <div>
        <p>
          Ethical hacking helps organizations find and fix security weaknesses before bad actors do.
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>What is ethical hacking?</li>
          <li>Common types of cyberattacks</li>
          <li>How to report security issues responsibly</li>
        </ul>
        <div className="mt-4 p-4 bg-red-50 rounded">
          <b>Fun Fact:</b> Some companies pay “bug bounties” for finding security flaws!
        </div>
      </div>
    ),
  },
];

export default lessons;
