const lessons = [
  {
    id: 'intro',
    title: 'What is IT?',
    difficulty: 'Beginner',
    duration: '7 min',
    tags: ['Fundamentals', 'Overview', 'Careers', 'Core Concepts'],
    summary: 'Understand the core concept of Information Technology, its components, and its vast impact on the modern world.',
    relatedTerms: ['Hardware', 'Software', 'Network', 'Internet', 'Data', 'Server', 'Cloud Computing'],
    content: (
      <div>
        <p>
          IT stands for <b>Information Technology</b>. At its core, IT is about using technology – primarily computers, networks, software, and the internet – to manage information effectively. This includes creating, storing, processing, securing, and exchanging all forms of electronic data.
        </p>
        <p className="mt-4">
          Think of IT as the invisible yet essential infrastructure of the modern world. It's the engine driving businesses, the network connecting billions of people globally, and the toolbox enabling countless innovations. From the smartphone in your pocket and the apps you use, to complex systems running global corporations and scientific research, IT is woven into the fabric of our lives.
        </p>
        
        <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/30 rounded border border-purple-200 dark:border-purple-800">
          <div className="flex items-center">
            <span className="text-2xl mr-2">🎬</span>
            <h4 className="font-bold text-purple-800 dark:text-purple-300">IT in Pop Culture</h4>
          </div>
          <p className="text-purple-700 dark:text-purple-300 mt-2">
            Ever notice how movies portray IT professionals? From the reality-bending digital world of "The Matrix" to the comical but lovable IT department in "The IT Crowd" TV show. While Hollywood often exaggerates (no, most hackers can't break into any system in 10 seconds of frantic typing!), these shows reflect how central technology has become in our cultural imagination.
          </p>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Core Components of IT</h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><b>Hardware:</b> The physical parts you can touch (computers, phones, servers, cables, routers).</li>
          <li><b>Software:</b> The programs and instructions that run on hardware (operating systems, apps, websites).</li>
          <li><b>Networks:</b> Connections that allow hardware and software to communicate (Internet, Wi-Fi, company networks).</li>
          <li><b>Data:</b> The raw information that IT systems store, process, and transmit.</li>
        </ul>
        
        <div className="mt-6 p-5 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
          <h4 className="font-bold text-blue-800 dark:text-blue-200 flex items-center text-lg">
            <span className="mr-2">🧠</span>Quick Quiz: Test Your Understanding
          </h4>
          <p className="text-blue-700 dark:text-blue-300 mt-2 mb-4">Which of these is NOT typically considered a core component of IT?</p>
          <div className="space-y-2 ml-4">
            <div className="flex items-center">
              <input type="radio" id="quiz1-a" name="quiz1" className="mr-2 accent-blue-600" />
              <label htmlFor="quiz1-a" className="text-gray-700 dark:text-gray-300">Networks</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="quiz1-b" name="quiz1" className="mr-2 accent-blue-600" />
              <label htmlFor="quiz1-b" className="text-gray-700 dark:text-gray-300">Paperwork</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="quiz1-c" name="quiz1" className="mr-2 accent-blue-600" />
              <label htmlFor="quiz1-c" className="text-gray-700 dark:text-gray-300">Software</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="quiz1-d" name="quiz1" className="mr-2 accent-blue-600" />
              <label htmlFor="quiz1-d" className="text-gray-700 dark:text-gray-300">Data</label>
            </div>
          </div>
          <div className="mt-4 text-sm text-blue-700 dark:text-blue-300">
            <b>Answer:</b> Paperwork! While we might still use paper documents, in IT we're focused on digital information managed through hardware, software, networks, and data.
          </div>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Why is IT Important?</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>It enables instant global communication (email, messaging, video calls).</li>
          <li>It powers businesses of all sizes (e-commerce, data analysis, operations).</li>
          <li>It drives innovation in science, medicine, entertainment, and more.</li>
          <li>It provides access to vast amounts of information and learning resources (the Web).</li>
          <li>It automates tasks, increasing efficiency and productivity.</li>
        </ul>
        <p className="mt-4">
          <b>IT for everyone:</b> You don't have to be a programmer or engineer to benefit from IT. Basic IT literacy helps in everyday tasks (online banking, troubleshooting Wi-Fi), improves job prospects in almost any field, and empowers you to navigate the digital world safely and effectively. Whether you want to organize your digital photos, understand privacy settings, stay connected with loved ones, or even start an online business, IT skills are essential.
        </p>
        
        <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded border border-yellow-200 dark:border-yellow-700">
          <div className="flex items-center">
            <span className="text-2xl mr-2">🕰️</span>
            <h4 className="font-bold text-yellow-800 dark:text-yellow-300">Time Travel: IT Edition</h4>
          </div>
          <p className="text-yellow-700 dark:text-yellow-300 mt-2">
            If you could bring someone from 1970 to today, they'd be absolutely mind-blown by what we carry in our pockets! The first computer that went to the moon (Apollo 11's guidance computer) had less processing power than a modern musical greeting card. Your smartphone is millions of times more powerful than all of NASA's computing power from that era combined!
          </p>
        </div>
        
        <div className="mt-4 p-4 bg-blue-50 rounded">
          <b>Fun Fact:</b> The first computer weighed over 27 tons and filled a whole room!
        </div>
        
        <div className="mt-4 p-4 bg-green-50 rounded border border-green-200 dark:border-green-700 dark:bg-green-900/30">
          <h4 className="font-bold text-green-800 dark:text-green-300 flex items-center">
            <span className="text-xl mr-2">🔍</span>Digital Scavenger Hunt
          </h4>
          <p className="text-green-700 dark:text-green-300 mt-2">
            Make a list of all the IT-powered technology you use in one day. Include everything from the obvious (your phone) to the less obvious (smart traffic lights you passed, the barcode scanner at the store). You'll be amazed at how IT touches virtually every aspect of modern life!
          </p>
          <p className="text-green-700 dark:text-green-300 mt-2 text-sm italic">
            Challenge mode: Try to identify which core IT components (hardware, software, networks, data) are involved in each technology you list!
          </p>
        </div>
        
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>IT = Using technology (Hardware, Software, Networks) to manage information (Data).</li>
          <li>IT is fundamental to communication, business, innovation, and daily life.</li>
          <li>Basic IT literacy is valuable for everyone, regardless of career path.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
        <ul className="list-disc ml-6">
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Hardware' }))}>Hardware</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Software' }))}>Software</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Network' }))}>Network</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Internet' }))}>Internet</button></li>
        </ul>
      </div>
    ),
  },
  {
    id: 'history',
    title: 'A Brief History of IT',
    difficulty: 'Beginner',
    duration: '8 min',
    tags: ['History', 'Computers', 'Internet', 'Innovation'],
    summary: 'Trace the fascinating evolution of IT from ancient calculation tools to the age of AI and cloud computing.',
    relatedTerms: ['Abacus', 'Transistor', 'Microprocessor', 'Internet', 'World Wide Web', 'Cloud Computing', 'AI', 'ARPANET'],
    content: (
      <div>
        <p>
          The story of Information Technology isn't just about silicon chips and fiber optics; it's a reflection of humanity's enduring quest to calculate, store, communicate, and share information more effectively. Let's journey through the key milestones that brought us to the digital age:
        </p>
        
        <div className="my-6 p-5 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
          <h4 className="font-bold text-indigo-800 dark:text-indigo-300 flex items-center">
            <span className="text-xl mr-2">🚀</span>Time Travel Mode: Activated!
          </h4>
          <p className="text-indigo-700 dark:text-indigo-300 mt-2">
            Buckle up! We're about to zip through thousands of years of human innovation in just minutes. Each era builds on the previous one, with occasional revolutionary leaps that changed everything. As you read, imagine what it would be like to show a smartphone to someone from each of these periods!
          </p>
        </div>
        
        <ul className="list-decimal ml-6 mt-4 space-y-3">
          <li>
            <b>Ancient & Early Mechanical (~2000 BC - 1800s):</b> Tools like the Abacus aided calculation. Later, visionaries like Charles Babbage designed mechanical "computers" like the Difference Engine and Analytical Engine, conceptualizing programmable machines centuries ahead of their time. Ada Lovelace, working with Babbage, is often considered the first computer programmer.
            
            <div className="ml-4 mt-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded border-l-4 border-amber-400 dark:border-amber-500">
              <span className="font-bold text-amber-800 dark:text-amber-300">3000 BC:</span> <span className="text-amber-700 dark:text-amber-400">Imagine explaining to an ancient Egyptian using an abacus that one day we'd carry calculators in our pockets that could also show moving images, send messages instantly across the world, and contain the knowledge of thousands of libraries!</span>
            </div>
          </li>
          <li><b>Electromechanical Era (Late 1800s - 1940s):</b> Herman Hollerith's tabulating machine, using punched cards, revolutionized the 1890 US Census. Relays and electromechanical switches became key components in early calculating devices.</li>
          <li>
            <b>The Vacuum Tube Era (1940s - Mid-1950s):</b> World War II spurred development. ENIAC, often cited as the first general-purpose electronic computer, used thousands of bulky, hot vacuum tubes. These machines were massive, expensive, and primarily used by governments and universities.
            
            <div className="ml-4 mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-700 flex items-start">
              <div className="mr-3 text-3xl">💡</div>
              <div>
                <p className="text-blue-800 dark:text-blue-300 font-semibold">Size Comparison Challenge:</p>
                <p className="text-blue-700 dark:text-blue-400">ENIAC weighed 27 tons and took up 1,800 square feet (about the size of a small house). Try this: Stand in an open area and take 15 big steps in one direction, then 15 steps perpendicular to create a square. That's roughly ENIAC's size—and it had less computing power than the cheapest calculator today!</p>
              </div>
            </div>
          </li>
          <li><b>The Transistor Revolution (Mid-1950s - 1960s):</b> The invention of the transistor dramatically changed computing. Transistors were smaller, faster, more reliable, and consumed less power than vacuum tubes. This led to the development of smaller mainframe computers used by large organizations.</li>
          <li><b>Integrated Circuits & Microprocessors (1960s - 1970s):</b> The ability to place multiple transistors onto a single silicon chip (Integrated Circuit or IC) further miniaturized electronics. This culminated in the invention of the microprocessor – essentially a computer's entire CPU on a single chip – paving the way for personal computing.</li>
          <li>
            <b>The Personal Computer (PC) Boom (Late 1970s - 1980s):</b> Companies like Apple (Apple II) and IBM (IBM PC) brought computers into homes and small businesses. User-friendly interfaces (like graphical user interfaces - GUIs) and essential software like spreadsheets (VisiCalc) fueled adoption.
            
            <div className="ml-4 mt-2 p-3 bg-pink-50 dark:bg-pink-900/20 rounded border border-pink-200 dark:border-pink-700">
              <p className="text-pink-800 dark:text-pink-300 italic">
                <span className="text-2xl">😆</span> <span className="font-semibold">Tech Humor Flashback:</span> Ken Olsen, founder of Digital Equipment Corporation, famously said in 1977: "There is no reason for any individual to have a computer in his home." Don't feel bad, Ken—predicting the future is hard! This reminds us that even the experts can't always see what's coming in technology.
              </p>
            </div>
          </li>
          <li><b>Networking & The Internet (1960s - 1990s):</b> ARPANET, a US military project, laid the foundation for the internet. Standardized protocols (TCP/IP) allowed different networks to connect. Tim Berners-Lee's invention of the World Wide Web (HTML, HTTP, URLs, Browsers) in 1989 made the internet accessible and user-friendly for the masses.</li>
          <li><b>The Mobile & Web 2.0 Era (2000s - Present):</b> The rise of powerful smartphones, tablets, ubiquitous Wi-Fi, and social media transformed how we live, work, and interact. The web became more interactive and user-driven.</li>
          <li><b>Cloud Computing, Big Data & AI (2010s - Present):</b> Storing data and running applications on remote servers ("the cloud") became mainstream. The ability to process massive datasets (Big Data) fuels advancements in Artificial Intelligence (AI) and Machine Learning (ML), impacting nearly every industry.</li>
        </ul>
        
        <div className="mt-6 p-5 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
          <h4 className="font-bold text-green-800 dark:text-green-300 flex items-center">
            <span className="text-xl mr-2">🎮</span>IT History Matching Game
          </h4>
          <p className="text-green-700 dark:text-green-300 mb-4">
            Match each technology milestone with the approximate decade it happened. Use your best guess, then check the answers below!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="font-semibold text-green-800 dark:text-green-300">Technologies:</p>
              <p className="text-green-700 dark:text-green-300">1. First iPhone released</p>
              <p className="text-green-700 dark:text-green-300">2. World Wide Web invented</p>
              <p className="text-green-700 dark:text-green-300">3. First microprocessor (Intel 4004)</p>
              <p className="text-green-700 dark:text-green-300">4. First widely-used web browser (Mosaic)</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-green-800 dark:text-green-300">Decades:</p>
              <p className="text-green-700 dark:text-green-300">A. 1970s</p>
              <p className="text-green-700 dark:text-green-300">B. 1980s</p>
              <p className="text-green-700 dark:text-green-300">C. 1990s</p>
              <p className="text-green-700 dark:text-green-300">D. 2000s</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-green-700 dark:text-green-300 p-3 bg-green-100 dark:bg-green-800/30 rounded">
            <p className="font-bold">Answers:</p>
            <p>1-D (2007), 2-B (1989), 3-A (1971), 4-C (1993)</p>
          </div>
        </div>

        <div className="mt-4 p-4 bg-yellow-50 rounded">
          <b>Did you know?</b> The first email was sent in 1971, and it used the "@" symbol to separate the user from the computer name.
        </div>
        <div className="mt-4 p-4 bg-green-50 rounded">
          <b>Try it:</b> Research one IT milestone and share what you learn with a friend!
        </div>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>IT's evolution is marked by miniaturization, increased speed, and greater accessibility.</li>
          <li>Key inventions: Vacuum tubes, Transistors, Integrated Circuits, Microprocessors, Internet Protocols (TCP/IP), World Wide Web.</li>
          <li>Each era built upon the previous, leading to today's interconnected, data-driven world.</li>
          <li>Current trends focus on Cloud, Mobile, Big Data, and AI.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
        <ul className="list-disc ml-6">
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Microprocessor' }))}>Microprocessor</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Internet' }))}>Internet</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Cloud Computing' }))}>Cloud Computing</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'AI' }))}>AI</button></li>
        </ul>
      </div>
    ),
  },
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
        <p>
          Every computer system, from your smartwatch to a massive supercomputer, operates thanks to the inseparable partnership between <b>Hardware</b> and <b>Software</b>. They are two sides of the same coin, each useless without the other.
        </p>
        
        <div className="mt-4 p-5 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg border border-purple-100 dark:border-purple-800">
          <h4 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center">
            <span className="text-2xl mr-2">🎭</span>The Perfect Partnership
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Think of hardware and software like these inseparable duos:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🎸</span>
                <h5 className="font-bold">Musician & Instrument</h5>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-400">The guitar (hardware) provides the physical capability to make music, but needs the musician's skill and knowledge (software) to create beautiful melodies.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="flex items-center">
                <span className="text-2xl mr-2">👩‍🍳</span>
                <h5 className="font-bold">Chef & Kitchen</h5>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-400">The kitchen and tools (hardware) provide the means to cook, but the recipes and chef's skill (software) determine what delicious dishes get created.</p>
            </div>
          </div>
        </div>
        
        <p className="mt-4">
          Think of it like a musician and their instrument, or a chef and their ingredients:
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-3">
          <li>
            <b>Hardware:</b> These are the tangible, physical components of a computer system – everything you can physically touch. It's the instrument itself (piano, guitar) or the kitchen appliances and raw ingredients. Hardware provides the physical foundation and capabilities for computation.
            <br/><i>Key Examples:</i>
            <ul className="list-circle ml-6 mt-1">
              <li><b>CPU (Central Processing Unit):</b> The 'brain' that executes instructions.</li>
              <li><b>RAM (Random Access Memory):</b> Fast, temporary 'workspace' memory for active programs and data. Volatile (data lost when power is off).</li>
              <li><b>Storage (Hard Drive/SSD):</b> Long-term memory for files and the OS. Non-volatile (data persists without power). SSDs are much faster than HDDs.</li>
              <li><b>Motherboard:</b> The main circuit board connecting all components.</li>
              <li><b>GPU (Graphics Processing Unit):</b> Specialized processor for handling graphics and video output (essential for gaming, video editing).</li>
              <li><b>Input Devices:</b> Keyboard, Mouse, Microphone, Webcam.</li>
              <li><b>Output Devices:</b> Monitor, Printer, Speakers.</li>
              <li><b>Network Card (NIC):</b> Allows connection to networks (Ethernet/Wi-Fi).</li>
              <li><b>Power Supply Unit (PSU):</b> Provides electricity to all components.</li>
            </ul>
          </li>
          
          <div className="mt-2 ml-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
            <h5 className="font-bold text-orange-800 dark:text-orange-300 flex items-center">
              <span className="text-xl mr-2">🔍</span>Hardware Detective Game
            </h5>
            <p className="text-orange-700 dark:text-orange-400 mt-2 mb-2">
              Can you identify which component is being described?
            </p>
            <div className="p-3 bg-white dark:bg-gray-800 rounded shadow">
              <p className="italic text-gray-600 dark:text-gray-300">"I'm the blazing-fast storage option that has no moving parts. I've largely replaced my slower cousin that uses spinning magnetic platters. What am I?"</p>
              <div className="mt-2">
                <button className="px-3 py-1 bg-orange-100 dark:bg-orange-800 hover:bg-orange-200 dark:hover:bg-orange-700 rounded text-orange-800 dark:text-orange-300 text-sm font-medium mr-2">
                  Reveal Answer
                </button>
                <span className="text-orange-800 dark:text-orange-300 font-medium hidden">
                  SSD (Solid State Drive)
                </span>
              </div>
            </div>
          </div>
          
          <li>
            <b>Software:</b> These are the intangible instructions, programs, and data that tell the hardware *what* to do and *how* to do it. It's the sheet music, the recipe, and the musician's or chef's skill. Software brings the hardware to life, enabling us to perform tasks.
            <br/><i>Key Categories:</i>
            <ul className="list-circle ml-6 mt-1">
              <li><b>System Software:</b> Manages the hardware and provides a platform for applications.
                <ul className="list-square ml-6">
                  <li><b>Operating Systems (OS):</b> Windows, macOS, Linux, Android, iOS.</li>
                  <li><b>Drivers:</b> Software that lets the OS communicate with specific hardware.</li>
                  <li><b>Firmware:</b> Software permanently embedded in hardware devices.</li>
                  <li><b>Utilities:</b> Disk cleanup, antivirus, system monitors.</li>
                </ul>
              </li>
              <li><b>Application Software:</b> Programs designed for end-users to perform specific tasks.
                <ul className="list-square ml-6">
                  <li><b>Productivity:</b> Word processors, spreadsheets, email clients.</li>
                  <li><b>Creative:</b> Photo/video editors, drawing applications.</li>
                  <li><b>Communication:</b> Web browsers, messaging apps, video conferencing.</li>
                  <li><b>Entertainment:</b> Games, media players, streaming services.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        
        <div className="mt-4 p-5 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800">
          <h4 className="font-bold text-teal-800 dark:text-teal-300 flex items-center">
            <span className="text-xl mr-2">✨</span>Software Sorting Challenge
          </h4>
          <p className="text-teal-700 dark:text-teal-400 mb-4">
            Classify these software types as either "System Software" or "Application Software":
          </p>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-teal-100 dark:bg-teal-800 px-3 py-1 rounded text-teal-800 dark:text-teal-300 text-sm cursor-move">
                Microsoft Word
              </span>
              <span className="bg-teal-100 dark:bg-teal-800 px-3 py-1 rounded text-teal-800 dark:text-teal-300 text-sm cursor-move">
                Windows 11
              </span>
              <span className="bg-teal-100 dark:bg-teal-800 px-3 py-1 rounded text-teal-800 dark:text-teal-300 text-sm cursor-move">
                Printer Driver
              </span>
              <span className="bg-teal-100 dark:bg-teal-800 px-3 py-1 rounded text-teal-800 dark:text-teal-300 text-sm cursor-move">
                Spotify
              </span>
              <span className="bg-teal-100 dark:bg-teal-800 px-3 py-1 rounded text-teal-800 dark:text-teal-300 text-sm cursor-move">
                Chrome Browser
              </span>
              <span className="bg-teal-100 dark:bg-teal-800 px-3 py-1 rounded text-teal-800 dark:text-teal-300 text-sm cursor-move">
                Android OS
              </span>
              <span className="bg-teal-100 dark:bg-teal-800 px-3 py-1 rounded text-teal-800 dark:text-teal-300 text-sm cursor-move">
                BIOS Firmware
              </span>
              <span className="bg-teal-100 dark:bg-teal-800 px-3 py-1 rounded text-teal-800 dark:text-teal-300 text-sm cursor-move">
                Photoshop
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border-2 border-dashed border-teal-300 dark:border-teal-700 min-h-24 p-3 rounded-lg">
                <p className="font-medium mb-2 text-teal-800 dark:text-teal-300">System Software</p>
                <div className="min-h-16"></div>
              </div>
              <div className="border-2 border-dashed border-teal-300 dark:border-teal-700 min-h-24 p-3 rounded-lg">
                <p className="font-medium mb-2 text-teal-800 dark:text-teal-300">Application Software</p>
                <div className="min-h-16"></div>
              </div>
            </div>
            
            <button className="mt-4 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded font-medium">
              Check My Answers
            </button>
            
            <div className="mt-3 text-sm text-teal-700 dark:text-teal-400 hidden">
              <p className="font-bold">Answers:</p>
              <p>System Software: Windows 11, Printer Driver, Android OS, BIOS Firmware</p>
              <p>Application Software: Microsoft Word, Spotify, Chrome Browser, Photoshop</p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold mt-6 mb-2">The Crucial Interaction</h3>
        <p>
          Hardware provides the potential, but software unlocks it. You can have the most powerful hardware, but without software, it's just an expensive paperweight. Conversely, software needs hardware to execute its instructions.
        </p>
        <p className="mt-4">
          The <b>Operating System (OS)</b> acts as the crucial intermediary. It manages hardware resources (CPU time, memory allocation), provides a consistent interface for applications (APIs), and allows users to interact with the computer through a user interface (GUI or command line).
        </p>
        
        <div className="mt-6 p-5 bg-violet-50 dark:bg-violet-900/20 rounded-lg shadow border border-violet-200 dark:border-violet-700">
          <h4 className="font-bold text-violet-800 dark:text-violet-300 flex items-center">
            <span className="text-xl mr-2">🤔</span>What Would Happen If...?
          </h4>
          <p className="text-violet-700 dark:text-violet-400 mt-2 mb-3">
            Computer systems need both hardware and software working together. Can you imagine what would happen in these scenarios?
          </p>
          <div className="space-y-4">
            <div className="p-3 bg-white dark:bg-gray-800 rounded shadow">
              <p className="font-medium text-violet-900 dark:text-violet-300">Scenario 1: You have the latest gaming PC hardware but no operating system installed.</p>
              <button className="mt-2 px-3 py-1 bg-violet-100 dark:bg-violet-800 hover:bg-violet-200 dark:hover:bg-violet-700 rounded text-violet-800 dark:text-violet-300 text-sm font-medium">
                Show Answer
              </button>
              <p className="text-gray-700 dark:text-gray-300 mt-2 hidden">
                Your PC would power on, but you'd just see a basic screen from the motherboard firmware (BIOS/UEFI). Without an OS, you couldn't run any games or applications. The powerful hardware would be useless without software to utilize it!
              </p>
            </div>
            <div className="p-3 bg-white dark:bg-gray-800 rounded shadow">
              <p className="font-medium text-violet-900 dark:text-violet-300">Scenario 2: You want to edit a 4K video but you're using an outdated laptop with a slow processor and minimal RAM.</p>
              <button className="mt-2 px-3 py-1 bg-violet-100 dark:bg-violet-800 hover:bg-violet-200 dark:hover:bg-violet-700 rounded text-violet-800 dark:text-violet-300 text-sm font-medium">
                Show Answer
              </button>
              <p className="text-gray-700 dark:text-gray-300 mt-2 hidden">
                Even with the best video editing software installed, the experience would be frustratingly slow. The software would keep running into hardware limitations, causing lag, crashes, or extremely long processing times. The software needs adequate hardware to perform its functions efficiently!
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-yellow-50 rounded">
          <b>Tip:</b> Upgrading your hardware can make your computer faster, but keeping your software updated is just as important for security and new features!
        </div>
        <div className="mt-4 p-4 bg-green-50 rounded">
          <b>Try it:</b> Open your computer's settings and check for updates. It's a simple way to keep your system secure!
        </div>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>Hardware = Physical, tangible parts (CPU, RAM, Monitor).</li>
          <li>Software = Intangible instructions and programs (OS, Apps, Drivers, Firmware).</li>
          <li>They are interdependent: Software needs hardware to run; hardware needs software to function.</li>
          <li>The Operating System (OS) is the primary software managing the hardware and enabling applications.</li>
          <li>Firmware is special software embedded directly into hardware.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
        <ul className="list-disc ml-6">
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'CPU' }))}>CPU</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'RAM' }))}>RAM</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Operating System' }))}>Operating System</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Application' }))}>Application</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Driver' }))}>Driver</button> (Special software for hardware)</li>
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
        <p>
          Computers need ways to interact with the outside world – both to receive instructions and data, and to show results. This is done through <b>Input</b> and <b>Output</b> (I/O) devices, also known as peripherals.
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-2">
          <li>
            <b>Input Devices:</b> These devices allow <i>you</i> (or other sources) to send information <i>into</i> the computer. They translate real-world actions or data into digital signals the computer understands.
            <br/><i>Common Examples: Keyboard (typing text), Mouse/Trackpad (moving cursor, clicking), Microphone (recording sound), Webcam (capturing video), Scanner (digitizing documents/images), Touchscreen (detecting touch gestures).</i>
          </li>
          <li>
            <b>Output Devices:</b> These devices take the processed digital information <i>from</i> the computer and present it in a form humans can perceive or use.
            <br/><i>Common Examples: Monitor/Display (showing visuals), Printer (creating paper copies), Speakers/Headphones (playing sound), Projector (displaying visuals on a large surface), Haptic Feedback (vibrations in controllers/phones).</i>
          </li>
        </ul>
        <p className="mt-4">
          <b>The I/O Flow:</b> Imagine writing an email. You use the keyboard (input) to type the message. The computer processes this input. You see the text appear on the monitor (output). When you click send with the mouse (input), the computer sends the data, and perhaps you hear a "swoosh" sound from the speakers (output).
        </p>
        <p className="mt-4">
          <b>Devices Can Be Both:</b> Some modern devices handle both input and output. The most common example is a touchscreen on a smartphone or tablet – it displays information (output) and accepts your touch commands (input). Network cards and modems also handle both, sending (output) and receiving (input) data over a network.
        </p>
        <div className="mt-4 p-4 bg-blue-50 rounded">
          <b>Try it:</b> Plug in a USB device (like a flash drive or webcam) and see how your computer recognizes new hardware.
        </div>
        <div className="mt-4 p-4 bg-green-50 rounded">
          <b>Challenge:</b> Identify all the input and output devices you use in a day. You’ll be amazed at how many there are!
        </div>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>Input devices send data TO the computer (Keyboard, Mouse, Mic).</li>
          <li>Output devices present data FROM the computer (Monitor, Printer, Speakers).</li>
          <li>I/O allows interaction between humans and computers.</li>
          <li>Some devices (Touchscreens, Network Cards) handle both input and output.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
        <ul className="list-disc ml-6">
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Peripheral' }))}>Peripheral</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'USB' }))}>USB</button> (Common connection for I/O devices)</li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Driver' }))}>Driver</button> (Software needed for I/O devices)</li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Haptic Feedback' }))}>Haptic Feedback</button></li>
        </ul>
      </div>
    ),
  },
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
        <p>
          The terms <b>Internet</b> and <b>World Wide Web (Web)</b> are often used interchangeably in casual conversation, but they represent distinct, though closely related, concepts. Understanding this difference is fundamental to grasping how we connect and access information online.
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-3">
          <li>
            <b>The Internet (The Infrastructure):</b> Imagine a massive, global network of interconnected roads, railways, and shipping lanes. The Internet is the physical and logical <i>infrastructure</i> connecting millions of computers, servers, routers, switches, satellites, and cables (fiber optic, copper) worldwide. It's the underlying system that allows devices to exchange data using standardized rules called <b>protocols</b>, primarily the <b>TCP/IP</b> suite. The Internet itself doesn't *contain* information; it's the transport system.
          </li>
          <li>
            <b>The World Wide Web (The Service):</b> Now, imagine all the destinations along those roads – houses, shops, libraries, offices. The Web is one of the most popular <i>services</i> that runs <i>on top of</i> the Internet infrastructure. It's a system for accessing and sharing information organized into websites and web pages, linked together via hyperlinks. The Web uses specific protocols like <b>HTTP</b> (Hypertext Transfer Protocol) and its secure version <b>HTTPS</b>, relies on web addresses (<b>URLs</b> - Uniform Resource Locators), and uses languages like <b>HTML</b> (HyperText Markup Language), <b>CSS</b> (Cascading Style Sheets), and <b>JavaScript</b> to structure, style, and add interactivity to web pages. You access the Web using a <b>Web Browser</b>.
          </li>
        </ul>
        <p className="mt-4">
          <b>Analogy Revisited:</b> The Internet is the global postal system (infrastructure, trucks, planes, sorting centers, protocols for addressing mail). The Web is the collection of letters, postcards, and packages (websites, pages, content) sent through that system, which you read using your mailbox key (browser). You can use the postal system (Internet) for things other than sending typical letters (Web), like sending registered mail (secure file transfer - SFTP) or bulk flyers (email - SMTP).
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">How Your Browser Fetches a Web Page</h3>
        <p>
          When you type a web address (URL) like `https://www.example.com` into your browser (the <b>Client</b>):
        </p>
        <ol className="list-decimal ml-6 mt-2 space-y-2">
          <li><b>DNS Lookup:</b> Your browser doesn't inherently know where `example.com` lives. It asks a <b>Domain Name System (DNS)</b> server (like an internet phonebook) to translate the human-friendly domain name (`example.com`) into a computer-friendly numerical <b>IP Address</b> (e.g., `93.184.216.34`).</li>
          <li><b>TCP Connection:</b> Your browser establishes a connection (a "handshake") with the web <b>Server</b> located at that IP address using the TCP protocol. This ensures reliable data transfer.</li>
          <li><b>HTTP(S) Request:</b> Your browser sends an HTTP (or HTTPS for secure connections) request message to the server, asking for the specific resource (e.g., the main HTML page `/`). The request includes information like the browser type and accepted file formats.</li>
          <li><b>Server Processing & Response:</b> The web server receives the request, finds the requested files (HTML, CSS, JavaScript, images), and sends them back to your browser in an HTTP(S) response message, often broken into small data packets.</li>
          <li><b>Rendering:</b> Your browser receives the files. It parses the HTML to build the page structure, applies CSS for styling, executes JavaScript for interactivity, and arranges everything visually on your screen. This process is called rendering.</li>
        </ol>
        <div className="mt-4 p-4 bg-green-50 rounded">
          <b>Did you know?</b> The first website went live in 1991. Today, there are over 1.8 billion websites!
        </div>
        <div className="mt-4 p-4 bg-blue-50 rounded">
          <b>Try it:</b> Explore the history of the internet and find out how it has evolved over the years!
        </div>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>Internet = Global network infrastructure (the transport system).</li>
          <li>Web = A service using the Internet to access linked documents (websites) via browsers (one type of cargo).</li>
          <li>Other services run on the Internet (Email, FTP, etc.).</li>
          <li>Browsers use DNS to find server IP addresses from URLs.</li>
          <li>HTTP/HTTPS are protocols for requesting and receiving web resources between clients (browsers) and servers.</li>
          <li>HTML structures content, CSS styles it, JavaScript adds interactivity.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
        <ul className="list-disc ml-6">
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'TCP/IP' }))}>TCP/IP</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'HTTP' }))}>HTTP/HTTPS</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'URL' }))}>URL</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'DNS' }))}>DNS</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'IP Address' }))}>IP Address</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'HTML' }))}>HTML</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Browser' }))}>Browser</button></li>
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
        <p>
          <b>Networking</b> is the fundamental practice of connecting computers and other devices (like printers, phones, servers) together so they can communicate and share resources (like files, internet access, printers). From your simple home Wi-Fi setup to the vast global internet, networks are the backbone of modern Information Technology.
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">Scale Matters: Types of Networks</h3>
        <p>Networks are often categorized by their geographical scope:</p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li><b>LAN (Local Area Network):</b> Connects devices within a limited physical area, such as a single home, office building, or school campus. Technologies like <b>Ethernet</b> (wired) and <b>Wi-Fi</b> (wireless - creating a WLAN) are common for LANs. Devices on a LAN can typically share files and printers easily.</li>
          <li><b>WAN (Wide Area Network):</b> Spans a large geographical area, connecting multiple LANs across cities, countries, or even continents. The <b>Internet</b> is the ultimate example of a WAN. Businesses use private WANs to connect their various branch offices securely.</li>
          <li><b>MAN (Metropolitan Area Network):</b> Covers an area larger than a LAN but smaller than a WAN, typically a city or a large university campus. Often used by municipalities or large organizations.</li>
          <li><b>PAN (Personal Area Network):</b> Connects devices within a very short range, usually centered around a single person (within about 10 meters). <b>Bluetooth</b> connections (e.g., phone to headphones, keyboard to computer) are a common example of a PAN.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">The Hardware That Makes It Happen</h3>
        <p>Several key pieces of hardware work together to build and manage networks:</p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li><b>Router:</b> The "traffic director" or "gateway". Its primary job is to connect different networks together (e.g., your home LAN to your ISP's WAN/Internet) and forward data <b>packets</b> between them based on their destination <b>IP Address</b>. It makes decisions about the best path for data to travel. Your home "Wi-Fi router" is usually a combination device including a router, switch, and wireless access point.</li>
          <li><b>Switch:</b> Connects multiple devices *within the same* network (typically a LAN). It intelligently forwards data packets only to the specific device port they are intended for, unlike older "hubs" which broadcasted to all ports. This improves efficiency and reduces collisions.</li>
          <li><b>Modem (Modulator/Demodulator):</b> Your network's bridge to the outside internet world via your <b>Internet Service Provider (ISP)</b>. It translates the digital signals from your router/computer into analog signals suitable for transmission over the ISP's infrastructure (like cable lines, phone lines (DSL), or fiber optic) and vice-versa. Often integrated into the same box as the router by ISPs.</li>
          <li><b>Wireless Access Point (WAP or AP):</b> Allows wireless devices (laptops, phones, tablets using Wi-Fi) to connect to a wired network. Often built into home routers, but larger networks use multiple dedicated APs for better coverage.</li>
          <li><b>Network Interface Card (NIC):</b> The hardware component within a computer or device that allows it to physically connect to a network. This can be an Ethernet port for wired connections or a Wi-Fi adapter for wireless connections. Every NIC has a unique physical address called a MAC address.</li>
          <li><b>Firewall:</b> A security device (can be hardware or software) that sits between networks (e.g., between your LAN and the Internet) and monitors traffic, blocking unauthorized access based on predefined rules. Often a function built into routers.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">How Data Travels: Packets and Protocols</h3>
        <p>
          When you send data across a network (e.g., loading a webpage, sending an email), it doesn't travel as one continuous stream. Instead, it's broken down into small, manageable pieces called <b>packets</b>.
        </p>
        <p className="mt-4">
          Each packet contains:
          <ul className="list-disc ml-4">
            <li>A portion of the actual data.</li>
            <li>Header information: Source IP address, Destination IP address, packet sequence number, protocol type, etc.</li>
          </ul>
          These packets travel independently across the network. <b>Routers</b> examine the destination IP address in each packet's header and consult their routing tables to decide where to send the packet next on its journey towards the destination network. Within the destination LAN, a <b>Switch</b> uses the MAC address (associated with the destination IP via ARP protocol) to deliver the packet to the correct device. At the receiving end, the device reassembles the packets in the correct order using the sequence numbers to reconstruct the original data. This entire process is governed by rules called <b>protocols</b> (like TCP/IP, Ethernet, Wi-Fi) that ensure devices can understand each other.
        </p>
        <div className="mt-4 p-4 bg-blue-50 rounded">
          <b>Analogy:</b> Think of packets like postcards. Each postcard has a piece of a larger message, a destination address, and a return address. Routers are like post offices, directing the postcards towards the right city. Switches are like mail carriers delivering the postcards to the correct house on a street.
        </div>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>Networking connects devices for communication and resource sharing.</li>
          <li>Scale defines network types: PAN (personal), LAN (local), MAN (metro), WAN (wide).</li>
          <li>Key hardware: Routers (inter-network traffic), Switches (intra-network traffic), Modems (ISP connection), APs (wireless access), NICs (device connection), Firewalls (security).</li>
          <li>Data travels in packets containing data and header info (IP addresses).</li>
          <li>Routers direct packets between networks; Switches direct packets within a LAN.</li>
          <li>Protocols (like TCP/IP) are the rules governing network communication.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
        <ul className="list-disc ml-6">
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'IP Address' }))}>IP Address</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Packet' }))}>Packet</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Protocol' }))}>Protocol</button> (e.g., TCP/IP, Ethernet, Wi-Fi)</li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'ISP' }))}>ISP (Internet Service Provider)</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Bandwidth' }))}>Bandwidth</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Latency' }))}>Latency</button></li>
        </ul>
      </div>
    ),
  },
  {
    id: 'security',
    title: 'IT Security Fundamentals: Your Digital Shield',
    difficulty: 'Beginner',
    duration: '18 min',
    tags: ['Security', 'Cybersecurity', 'Privacy', 'Best Practices', 'Threats', 'Defense'],
    summary: 'Learn essential concepts and practical steps to protect your devices, data, and privacy from common online threats like malware and phishing.',
    relatedTerms: ['Security', 'Cybersecurity', 'Malware', 'Virus', 'Worm', 'Trojan', 'Ransomware', 'Spyware', 'Phishing', 'Social Engineering', 'Password', 'MFA', 'Encryption', 'Firewall', 'VPN', 'Antivirus', 'Backup', 'Update', 'Patch', 'Vulnerability', 'Zero-Day', 'Threat', 'Risk'],
    content: (
      <div>
        <p>
          In today's hyper-connected world, <b>IT Security</b> (a major part of the broader field of <b>Cybersecurity</b>) is not just for experts – it's essential for everyone. It encompasses the practices, technologies, and processes designed to protect computer systems, networks, devices, and data from theft, damage, disruption, or unauthorized access. Think of it as digital self-defense and awareness.
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">Why is Security Paramount?</h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><b>Protecting Personal Information:</b> Preventing identity theft, financial fraud, unauthorized access to emails/social media, and breaches of personal privacy.</li>
          <li><b>Securing Sensitive Data:</b> Safeguarding confidential business data (customer info, financial records, intellectual property), ensuring operational continuity, and complying with regulations (like GDPR, HIPAA).</li>
          <li><b>Maintaining System Integrity & Availability:</b> Ensuring computers and networks function correctly, are free from malicious software, and are available when needed.</li>
          <li><b>Building and Maintaining Trust:</b> Users, customers, and partners need confidence that their data and interactions are handled securely. Breaches severely damage reputation.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Common Threats in the Digital Wild West</h3>
        <p>Understanding the enemy is the first step in defense. Here are some prevalent threats:</p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li><b>Malware (Malicious Software):</b> An umbrella term for any software designed to harm or exploit systems. Includes:
            <ul className="list-circle ml-6 mt-1 space-y-1">
              <li><b>Viruses:</b> Attach to legitimate files/programs and spread when executed, often corrupting data or systems.</li>
              <li><b>Worms:</b> Self-replicating malware that spreads across networks, exploiting vulnerabilities without needing user interaction to propagate.</li>
              <li><b>Trojans (Trojan Horses):</b> Disguised as legitimate or desirable software, but contain a hidden malicious payload that executes when the software is run.</li>
              <li><b>Ransomware:</b> Encrypts your files or locks your system, demanding a ransom payment (often cryptocurrency) for decryption/access. A major modern threat.</li>
              <li><b>Spyware:</b> Secretly monitors your activity (keystrokes, browsing habits, credentials) and steals sensitive information.</li>
              <li><b>Adware:</b> Displays excessive unwanted advertisements, sometimes bundled with free software, can track browsing habits.</li>
              <li><b>Rootkits:</b> Designed to gain administrative-level control over a system while hiding their presence.</li>
            </ul>
          </li>
          <li><b>Phishing:</b> Deceptive attempts (usually via email, SMS/smishing, or fake websites) to trick users into revealing sensitive information like passwords, credit card numbers, or personal details by impersonating legitimate organizations or individuals. Spear phishing targets specific individuals or groups.</li>
          <li><b>Social Engineering:</b> Manipulating people psychologically to bypass security measures or divulge confidential information. Relies on exploiting trust, urgency, or authority (e.g., fake tech support calls, pretexting).</li>
          <li><b>Weak or Reused Passwords:</b> Easy-to-guess or commonly used passwords are a primary vector for account compromise through brute-force or credential stuffing attacks.</li>
          <li><b>Unsecured Wi-Fi:</b> Connecting to open or poorly secured public Wi-Fi networks exposes your traffic to eavesdropping by attackers on the same network.</li>
          <li><b>Outdated Software & Unpatched Systems:</b> Software updates frequently include security patches that fix known <b>vulnerabilities</b>. Failing to update leaves systems exposed to known <b>exploits</b>, including <b>Zero-Day</b> exploits (attacks targeting vulnerabilities before a patch is available).</li>
          <li><b>Man-in-the-Middle (MitM) Attacks:</b> Attacker secretly intercepts and possibly alters communication between two parties who believe they are directly communicating. Often occurs on unsecured networks.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Your Essential Security Toolkit (Basic Practices)</h3>
        <p>You don't need to be a security guru to significantly improve your digital safety. Implement these fundamental practices:</p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li><b>Use Strong, Unique Passwords:</b> Create long passphrases (e.g., `CorrectHorseBatteryStaple!`) or use a <b>Password Manager</b> to generate and store complex, unique passwords for every account. Avoid common words, personal info, and sequential characters.</li>
          <li><b>Enable Multi-Factor Authentication (MFA/2FA):</b> This adds a crucial second layer of security beyond just a password, requiring something you have (e.g., code from an app/SMS) or something you are (e.g., fingerprint). Enable it *everywhere* it's offered (email, banking, social media).</li>
          <li><b>Keep Software Updated (Patching):</b> Regularly update your Operating System (Windows, macOS, Linux), web browser, antivirus software, and all other applications. Enable automatic updates where possible. This fixes known security holes.</li>
          <li><b>Install and Maintain Reputable Security Software:</b> Use comprehensive antivirus/anti-malware software from a trusted vendor. Keep it running and ensure its definitions are updated frequently to detect the latest threats.</li>
          <li><b>Be Skeptical & Think Before You Click:</b> Treat unsolicited emails, messages, and links with suspicion. Don't click links or open attachments from unknown senders. Hover over links to see the actual destination URL. Verify requests for sensitive information through a separate, trusted channel (e.g., call the official number, visit the official website directly). Look for signs of phishing (e.g., generic greetings, poor grammar, urgent threats, mismatched sender addresses).</li>
          <li><b>Back Up Your Data Regularly:</b> Create regular backups of important files to an external hard drive and/or a reputable cloud backup service. This is your best defense against data loss from hardware failure, accidental deletion, or ransomware. Test your backups periodically.</li>
          <li><b>Secure Your Home Wi-Fi Network:</b> Change the default router administrator password. Use strong WPA3 (or WPA2) encryption with a strong, unique password. Consider enabling a guest network for visitors.</li>
          <li><b>Use Public Wi-Fi Cautiously:</b> Avoid accessing sensitive accounts (banking, email) on public Wi-Fi. If you must use it, use a reputable <b>VPN (Virtual Private Network)</b> to encrypt your connection, making it much harder for others on the network to snoop on your traffic.</li>
          <li><b>Review App Permissions & Privacy Settings:</b> Be mindful of the permissions you grant to mobile apps and review privacy settings on social media and other online services. Limit data sharing where possible.</li>
          <li><b>Secure Physical Devices:</b> Use screen locks (PIN, pattern, biometric) on your phone and computer. Be aware of your surroundings to prevent shoulder surfing or device theft.</li>
        </ul>
        <div className="mt-4 p-4 bg-yellow-50 rounded">
          <b>Important:</b> Security is an ongoing process, not a one-time fix. Stay informed about new threats and update your practices accordingly.
        </div>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>IT Security protects data, systems, networks, and privacy from diverse threats.</li>
          <li>Common threats include Malware (Viruses, Ransomware, etc.), Phishing, Social Engineering, Weak Passwords, and Unpatched Software.</li>
          <li>Essential defenses: Strong/Unique Passwords + Manager, MFA/2FA, Software Updates, Antivirus, Regular Backups, Skepticism (links/emails), Secure Wi-Fi/VPN use.</li>
          <li>Security is an ongoing process requiring vigilance, awareness, and continuous learning.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
        <ul className="list-disc ml-6">
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Malware' }))}>Malware</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Phishing' }))}>Phishing</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Encryption' }))}>Encryption</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Firewall' }))}>Firewall</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'VPN' }))}>VPN</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'MFA' }))}>MFA/2FA</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Password Manager' }))}>Password Manager</button></li>
        </ul>
      </div>
    ),
  },
  {
    id: 'programming',
    title: 'Introduction to Programming: Speaking Computer',
    difficulty: 'Beginner',
    duration: '12 min',
    tags: ['Programming', 'Software', 'Coding', 'Logic', 'Algorithms', 'Languages'],
    summary: 'Understand what programming is, why it\'s a powerful skill, common concepts, and popular beginner-friendly languages like Python and JavaScript.',
    relatedTerms: ['Programming', 'Coding', 'Algorithm', 'Syntax', 'Variable', 'Data Type', 'Control Flow', 'Function', 'Loop', 'Debug', 'IDE', 'Compiler', 'Interpreter', 'Python', 'JavaScript', 'HTML', 'CSS', 'Source Code'],
    content: (
      <div>
        <p>
          <b>Programming</b>, often used interchangeably with <b>Coding</b>, is the art and science of writing instructions that a computer can understand and execute. It's how humans communicate with machines to make them perform specific tasks, solve problems, automate processes, and create the software that powers our digital world.
        </p>
        <p className="mt-4">
          Think of a computer as an incredibly powerful, fast, but very literal assistant. It can perform complex calculations or manage vast amounts of data in fractions of a second, but it has no intuition or common sense. It only does *exactly* what you tell it to do. Programming involves:
          <ol className="list-decimal ml-6 mt-1">
            <li>Breaking down a problem or task into small, logical steps.</li>
            <li>Writing those steps as instructions (called <b>source code</b>) using the precise rules (<b>syntax</b>) of a specific <b>programming language</b>.</li>
            <li>Testing and refining (<b>debugging</b>) the code until it works correctly.</li>
          </ol>
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">Why Learn Programming? (Even the Basics)</h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><b>Create Things:</b> Build websites, mobile apps, games, tools, automation scripts – the possibilities are vast.</li>
          <li><b>Develop Logical Thinking:</b> Programming forces you to think systematically, break down complex problems, and anticipate edge cases. This skill is valuable in many areas of life.</li>
          <li><b>Automate Repetitive Tasks:</b> Write simple scripts to automate boring tasks on your computer, saving time and effort.</li>
          <li><b>Understand Technology Deeper:</b> Gain insight into how the software and websites you use daily actually function "under the hood."</li>
          <li><b>Enhance Career Prospects:</b> Programming skills are highly sought after in tech and increasingly valuable in fields like data analysis, science, finance, marketing, and design.</li>
          <li><b>Empowerment:</b> Move from being just a consumer of technology to a creator.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Programming Languages: Different Tools for Different Jobs</h3>
        <p>
          Just like human languages, there are many programming languages, each designed with different strengths and common use cases. Some are better for web development, others for scientific computing, game development, or system-level tasks.
        </p>
        <p className="mt-4">Popular beginner-friendly languages include:</p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><b>Python:</b> Highly recommended for beginners due to its clear, readable syntax (almost like plain English). It's versatile and widely used in web development (backend), data science, artificial intelligence (AI), machine learning (ML), scientific computing, scripting, and education.</li>
          <li><b>JavaScript:</b> The undisputed language of the web browser. Essential for creating interactive and dynamic websites (front-end). With Node.js, it can also be used for server-side development (back-end), making it a full-stack language. Often learned alongside <b>HTML</b> (for structure) and <b>CSS</b> (for styling).</li>
        </ul>
        <p className="mt-4">
          Other important languages you might encounter:
          <ul className="list-disc ml-6 mt-1">
            <li><b>Java:</b> Widely used in large corporations (enterprise applications), Android app development, and big data systems.</li>
            <li><b>C#:</b> Developed by Microsoft, popular for Windows applications, web services, and game development (especially with the Unity engine).</li>
            <li><b>C++:</b> A powerful language used for performance-critical applications like game engines, operating systems, browsers, and high-frequency trading systems. Steeper learning curve.</li>
            <li><b>Swift:</b> Apple's modern language for developing apps for iOS, macOS, watchOS, and tvOS.</li>
            <li><b>SQL (Structured Query Language):</b> A special-purpose language specifically for managing and querying data stored in relational databases. Essential for data-related roles.</li>
          </ul>
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">Core Programming Concepts (The Building Blocks)</h3>
        <p>
          Regardless of the language you choose, most programming involves understanding and using similar fundamental concepts:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><b>Variables:</b> Named containers for storing data values (like numbers, text, true/false) that can change during program execution.</li>
          <li><b>Data Types:</b> Classifications of data that determine the values a variable can hold and the operations that can be performed (e.g., integer, float/decimal, string/text, boolean/true-false).</li>
          <li><b>Control Flow (or Control Structures):</b> Statements that control the order in which instructions are executed.
            <ul className="list-circle ml-6">
              <li><b>Conditional Statements:</b> (e.g., `if`, `else if`, `else`) Allow the program to make decisions and execute different code blocks based on whether a condition is true or false.</li>
              <li><b>Loops:</b> (e.g., `for`, `while`) Allow the program to repeat a block of code multiple times, either a fixed number of times or until a condition is met.</li>
            </ul>
          </li>
          <li><b>Functions (or Methods/Subroutines):</b> Named, reusable blocks of code designed to perform a specific task. They help organize code, make it more readable, and avoid repetition.</li>
          <li><b>Data Structures:</b> Ways to organize and store collections of data efficiently (e.g., lists/arrays to store ordered items, dictionaries/maps/objects to store key-value pairs).</li>
          <li><b>Algorithms:</b> Step-by-step procedures or formulas for solving a specific problem or accomplishing a task. Programming often involves designing or implementing algorithms.</li>
          <li><b>Input/Output (I/O):</b> How the program interacts with the outside world (e.g., getting input from the user via keyboard, displaying output on the screen, reading/writing files).</li>
          <li><b>Debugging:</b> The essential process of finding and fixing errors (bugs) in your code.</li>
        </ul>
        <p className="mt-4">
          Programming requires practice, patience, and persistence. Don't be discouraged by errors – they are a normal part of the learning process!
        </p>
        <div className="mt-4 p-4 bg-green-50 rounded">
          <b>Try it:</b> Many websites offer interactive coding tutorials (like Codecademy, freeCodeCamp, Khan Academy) where you can try writing simple code directly in your browser!
        </div>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>Programming is writing step-by-step instructions (code) for computers using specific languages (syntax).</li>
          <li>It enables software creation, problem-solving, automation, and deeper tech understanding.</li>
          <li>Python and JavaScript (with HTML/CSS) are excellent starting points for beginners.</li>
          <li>Core concepts (variables, data types, control flow, functions, data structures, algorithms) are transferable across languages.</li>
          <li>Debugging is a critical skill; errors are learning opportunities.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Related Terms</h3>
        <ul className="list-disc ml-6">
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Algorithm' }))}>Algorithm</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Syntax' }))}>Syntax</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Variable' }))}>Variable</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Function' }))}>Function</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Loop' }))}>Loop</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'Debug' }))}>Debug</button></li>
          <li><button className="text-blue-600 dark:text-blue-400 hover:underline" onClick={() => window.dispatchEvent(new CustomEvent('openDictionary', { detail: 'IDE' }))}>IDE (Integrated Development Environment)</button></li>
        </ul>
      </div>
    ),
  },
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
        <p>
          The <b>Operating System (OS)</b> is arguably the most important piece of software running on any computer, smartphone, or tablet. It acts as the central conductor, managing all the hardware and software resources and providing the essential foundation upon which all other applications run. Without an OS, your device would be a useless collection of electronic parts.
        </p>
        <p className="mt-4">
          Think of the OS as the government or city management for your computer. It sets the rules, manages resources (roads, power, water), provides essential services, and allows citizens (applications) and you (the user) to interact with the city (hardware) in an orderly fashion.
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">What Does an OS Do? Key Functions</h3>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li><b>Hardware Management:</b> The OS communicates with and controls all the physical hardware components (CPU, RAM, storage drives, input/output devices) via <b>drivers</b>. It allocates resources like CPU time and memory to different tasks.</li>
          <li><b>Process Management:</b> Manages the execution of programs (called <b>processes</b>). It handles starting, stopping, pausing, and scheduling processes to share the CPU efficiently (multitasking).</li>
          <li><b>Memory Management:</b> Controls the allocation and deallocation of system memory (RAM) to ensure processes have the space they need without interfering with each other. It also often uses virtual memory (using disk space as slower RAM extension).</li>
          <li><b>File System Management:</b> Organizes how data is stored and retrieved on storage devices (HDDs, SSDs, USB drives). It manages files, folders (directories), permissions, and tracks where everything is located. Common file systems include NTFS (Windows), APFS/HFS+ (macOS), ext4 (Linux).</li>
          <li><b>User Interface (UI):</b> Provides a way for the user to interact with the computer. This is typically a <b>Graphical User Interface (GUI)</b> with icons, windows, and menus (like Windows Desktop or macOS Finder), or sometimes a text-based <b>Command-Line Interface (CLI)</b>.</li>
          <li><b>Device Management:</b> Manages input and output devices (keyboard, mouse, monitor, printer) and communication between them and applications.</li>
          <li><b>Networking:</b> Provides the protocols and services needed to connect to networks (like Wi-Fi or Ethernet) and the internet.</li>
          <li><b>Security:</b> Implements security features like user accounts, passwords, permissions, and often includes built-in firewalls or security tools.</li>
        </ul>
        <p className="mt-4">
          The core part of the OS that handles these fundamental tasks is called the <b>Kernel</b>.
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">Popular Operating Systems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 border rounded dark:border-gray-600">
            <h4 className="font-bold text-blue-700 dark:text-blue-300">Desktop/Laptop OSes:</h4>
            <ul className="list-disc ml-5 mt-2 text-sm">
              <li><b>Microsoft Windows:</b> The most widely used desktop OS globally. Known for broad hardware/software compatibility. (Versions: Windows 10, Windows 11).</li>
              <li><b>Apple macOS:</b> Runs exclusively on Apple Mac computers. Known for its user-friendly interface, strong creative software ecosystem, and integration with other Apple devices.</li>
              <li><b>Linux:</b> An open-source OS family known for its stability, flexibility, and security. Comes in many distributions (e.g., Ubuntu, Fedora, Debian). Popular for servers, developers, and users seeking customization. ChromeOS is also Linux-based.</li>
            </ul>
          </div>
          <div className="p-4 border rounded dark:border-gray-600">
            <h4 className="font-bold text-green-700 dark:text-green-300">Mobile OSes:</h4>
            <ul className="list-disc ml-5 mt-2 text-sm">
              <li><b>Google Android:</b> The most popular mobile OS worldwide, used by many different manufacturers (Samsung, Google Pixel, etc.). Open-source (based on Linux kernel) and highly customizable.</li>
              <li><b>Apple iOS:</b> Runs exclusively on Apple iPhones (and iPadOS on iPads). Known for its smooth performance, strong app ecosystem (App Store), and tight hardware/software integration.</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-yellow-50 rounded">
          <b>Did you know?</b> The Linux kernel, the core of Linux OS, was initially created by Linus Torvalds in 1991 as a personal project!
        </div>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>The OS is essential software managing hardware and enabling applications.</li>
          <li>Key functions: Hardware/Process/Memory/File Management, User Interface, Networking, Security.</li>
          <li>The Kernel is the core component of the OS.</li>
          <li>Popular Desktop OSes: Windows, macOS, Linux.</li>
          <li>Popular Mobile OSes: Android, iOS.</li>
          <li>Drivers allow the OS to talk to specific hardware.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'databases',
    title: 'Introduction to Databases: Organizing Information',
    difficulty: 'Beginner',
    duration: '10 min',
    tags: ['Data', 'Databases', 'SQL', 'NoSQL', 'Fundamentals'],
    summary: 'Learn what databases are, why they are used, and the basic differences between relational (SQL) and non-relational (NoSQL) databases.',
    relatedTerms: ['Database', 'Data', 'DBMS', 'SQL', 'NoSQL', 'Relational Database', 'Table', 'Row', 'Column', 'Primary Key', 'Query', 'Schema', 'MongoDB', 'MySQL', 'PostgreSQL'],
    content: (
      <div>
        <p>
          In the world of IT, <b>data</b> is king. But raw data isn't very useful unless it's organized and easily accessible. That's where <b>databases</b> come in. A database is essentially an organized collection of structured information, or data, typically stored electronically in a computer system.
        </p>
        <p className="mt-4">
          Think of a database like a highly organized digital filing cabinet or a super-powered spreadsheet. Instead of just storing data, databases allow you to efficiently store, retrieve, update, manage, and analyze large amounts of information.
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">Why Use Databases?</h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><b>Organization:</b> Store data in a structured and logical way.</li>
          <li><b>Efficiency:</b> Quickly find, add, delete, or modify specific pieces of information.</li>
          <li><b>Data Integrity:</b> Enforce rules to ensure data accuracy and consistency.</li>
          <li><b>Data Security:</b> Control who can access and modify the data.</li>
          <li><b>Scalability:</b> Handle very large amounts of data and many users simultaneously.</li>
          <li><b>Concurrency Control:</b> Manage situations where multiple users try to access or modify the same data at the same time.</li>
          <li><b>Data Analysis:</b> Facilitate querying and reporting to gain insights from the data.</li>
        </ul>
        <p className="mt-4">
          Databases are managed using software called a <b>Database Management System (DBMS)</b>. The DBMS acts as the interface between the database and the users or applications, handling all requests to interact with the data.
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">Two Main Flavors: SQL vs. NoSQL</h3>
        <p>Databases are broadly categorized into two main types:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 border rounded dark:border-gray-600">
            <h4 className="font-bold text-blue-700 dark:text-blue-300">1. Relational Databases (SQL)</h4>
            <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
              <li>Organize data into <b>tables</b> (like spreadsheets).</li>
              <li>Tables consist of <b>rows</b> (records) and <b>columns</b> (attributes/fields).</li>
              <li>Each row typically has a unique identifier called a <b>Primary Key</b>.</li>
              <li>Relationships between tables are defined (e.g., a 'Customers' table linked to an 'Orders' table).</li>
              <li>Have a predefined structure (<b>schema</b>) that data must adhere to.</li>
              <li>Use <b>SQL (Structured Query Language)</b> to define, manipulate, and query data.</li>
              <li>Known for reliability, consistency, and data integrity (ACID properties).</li>
              <li><i>Examples: MySQL, PostgreSQL, Microsoft SQL Server, Oracle Database, SQLite.</i></li>
            </ul>
          </div>
          <div className="p-4 border rounded dark:border-gray-600">
            <h4 className="font-bold text-green-700 dark:text-green-300">2. Non-Relational Databases (NoSQL)</h4>
            <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
              <li>Do not use the traditional table-based structure of relational databases.</li>
              <li>Offer more flexible data models. Several types exist:
                <ul className="list-circle ml-4">
                  <li><b>Document Databases:</b> Store data in JSON-like documents (e.g., MongoDB).</li>
                  <li><b>Key-Value Stores:</b> Simple pairs of keys and values (e.g., Redis, DynamoDB).</li>
                  <li><b>Wide-Column Stores:</b> Store data in columns instead of rows (e.g., Cassandra, HBase).</li>
                  <li><b>Graph Databases:</b> Focus on relationships between data points (e.g., Neo4j).</li>
                </ul>
              </li>
              <li>Generally have dynamic schemas (or are schema-less).</li>
              <li>Often designed for high scalability, availability, and performance, especially with large, unstructured datasets.</li>
              <li>Query languages vary depending on the database type (not always SQL).</li>
              <li><i>Examples: MongoDB, Cassandra, Redis, Couchbase, Neo4j.</i></li>
            </ul>
          </div>
        </div>
        <p className="mt-4">
          The choice between SQL and NoSQL depends on the specific application requirements, the type of data being stored, and how it needs to be accessed and scaled. Many modern applications use a combination of both (polyglot persistence).
        </p>
        <div className="mt-4 p-4 bg-green-50 rounded">
          <b>Try it:</b> Think about a simple collection of information (like your contacts or a music library). How would you organize it into tables with rows and columns (SQL)? How might you represent one contact or song as a document (NoSQL)?
        </div>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>Databases organize and manage data efficiently and securely.</li>
          <li>DBMS software is used to interact with databases.</li>
          <li>Relational (SQL) databases use tables with rows and columns, enforce schemas, and use SQL. Good for structured data and consistency.</li>
          <li>Non-Relational (NoSQL) databases offer flexible data models (documents, key-value, etc.), dynamic schemas, and often prioritize scalability. Good for unstructured or rapidly changing data.</li>
          <li>Common SQL DBs: MySQL, PostgreSQL. Common NoSQL DBs: MongoDB, Redis.</li>
        </ul>
      </div>
    ),
  },
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
        <p>
          You probably use <b>Cloud Computing</b> every day without even realizing it – streaming movies (Netflix), storing photos online (Google Photos, iCloud), using web-based email (Gmail, Outlook.com), or collaborating on documents (Google Docs, Office 365).
        </p>
        <p className="mt-4">
          At its core, Cloud Computing means delivering various computing services – including servers, storage, databases, networking, software, analytics, and intelligence – over <b>the Internet</b> ("the cloud") on demand, typically on a pay-as-you-go basis. Instead of owning and maintaining physical <b>data centers</b> and servers, organizations and individuals can rent access to these resources from a cloud provider.
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Characteristics & Benefits</h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><b>On-Demand Self-Service:</b> Users can provision resources (like virtual machines or storage) automatically without human intervention from the provider.</li>
          <li><b>Broad Network Access:</b> Services are accessible over the network (usually the internet) via standard mechanisms (laptops, phones, tablets).</li>
          <li><b>Resource Pooling:</b> The provider's resources are pooled to serve multiple customers, with resources dynamically assigned based on demand (often using <b>virtualization</b>).</li>
          <li><b>Rapid Elasticity/Scalability:</b> Resources can be quickly scaled up or down to match demand, often automatically. You pay for what you use.</li>
          <li><b>Measured Service:</b> Resource usage is monitored, controlled, and reported, providing transparency for both provider and consumer (pay-as-you-go).</li>
          <li><b>Cost Savings:</b> Reduces capital expenditure on hardware/infrastructure and operational costs for maintenance, power, cooling.</li>
          <li><b>Global Reach & Availability:</b> Deploy applications closer to users worldwide and benefit from the provider's high-availability infrastructure.</li>
          <li><b>Performance & Security:</b> Providers often offer state-of-the-art hardware and sophisticated security measures.</li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Cloud Service Models (The "as a Service" Pyramid)</h3>
        <p>Cloud services are often categorized into three main models, offering increasing levels of abstraction:</p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>
            <b>Infrastructure as a Service (IaaS):</b> Provides fundamental building blocks – virtual machines, storage, networks. You manage the OS, middleware, and applications. Offers the most flexibility and control.
            <br/><i>Analogy: Renting land where you can build anything, but you manage the building, utilities, etc.</i>
            <br/><i>Examples: Amazon EC2 (compute), AWS S3 (storage), Google Compute Engine, Azure Virtual Machines.</i>
          </li>
          <li>
            <b>Platform as a Service (PaaS):</b> Provides a platform for developing, running, and managing applications without dealing with the underlying infrastructure (hardware, OS, networking). You focus on your code and data.
            <br/><i>Analogy: Renting a workshop with tools and utilities provided; you just bring your materials and build your product.</i>
            <br/><i>Examples: Heroku, AWS Elastic Beanstalk, Google App Engine, Azure App Service.</i>
          </li>
          <li>
            <b>Software as a Service (SaaS):</b> Delivers ready-to-use software applications over the internet, typically on a subscription basis. The provider manages everything – infrastructure, platform, and application software.
            <br/><i>Analogy: Renting a fully furnished and serviced apartment; you just live in it.</i>
            <br/><i>Examples: Gmail, Salesforce, Microsoft 365, Dropbox, Netflix.</i>
          </li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Cloud Deployment Models</h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><b>Public Cloud:</b> Services offered by third-party providers (e.g., AWS, Azure, GCP) over the public internet, available to anyone.</li>
          <li><b>Private Cloud:</b> Cloud infrastructure operated solely for a single organization. Can be managed internally or by a third party, hosted on-premises or externally. Offers more control but less scalability/cost benefits than public cloud.</li>
          <li><b>Hybrid Cloud:</b> Combines public and private clouds, allowing data and applications to be shared between them. Offers flexibility and optimizes existing infrastructure.</li>
        </ul>
        <p className="mt-4">
          Major cloud providers include <b>Amazon Web Services (AWS)</b>, <b>Microsoft Azure</b>, and <b>Google Cloud Platform (GCP)</b>.
        </p>
        <div className="mt-4 p-4 bg-blue-50 rounded">
          <b>Think about it:</b> Which cloud services do you use daily? Are they IaaS, PaaS, or SaaS? (Hint: Most end-user services are SaaS).
        </div>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>Cloud Computing delivers IT resources (servers, storage, software) over the internet on demand.</li>
          <li>Benefits include scalability, cost savings, global reach, and performance.</li>
          <li>Service Models: IaaS (infrastructure), PaaS (platform), SaaS (software).</li>
          <li>Deployment Models: Public, Private, Hybrid.</li>
          <li>Major Providers: AWS, Azure, GCP.</li>
          <li>Most everyday online services (email, streaming, storage) are examples of SaaS.</li>
        </ul>
      </div>
    ),
  },
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
        <p>
          Every time you visit a website, use a social media platform, or shop online, you're interacting with the results of <b>Web Development</b>. It's the process of building and maintaining websites and web applications that run in a web browser.
        </p>
        <p className="mt-4">
          Web development involves a combination of technologies working together to create the structure, style, and interactivity you experience online. It's typically divided into two main areas: <b>Frontend</b> and <b>Backend</b>.
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">The Core Trio: HTML, CSS, JavaScript</h3>
        <p>These three technologies are the fundamental building blocks of almost every website:</p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>
            <b>HTML (HyperText Markup Language): The Structure (The Skeleton)</b>
            <br/>HTML provides the basic structure and content of a web page. It uses tags (like `&lt;h1&gt;`, `&lt;p&gt;`, `&lt;img&gt;`, `&lt;a&gt;`) to define elements like headings, paragraphs, images, links, lists, etc. It tells the browser *what* content is on the page and its semantic meaning.
            <br/><i>Analogy: The structural frame and walls of a house.</i>
          </li>
          <li>
            <b>CSS (Cascading Style Sheets): The Presentation (The Style & Decor)</b>
            <br/>CSS controls the visual appearance of the HTML content. It defines colors, fonts, layouts, spacing, backgrounds, and animations. CSS allows developers to separate the presentation from the structure, making websites easier to maintain and enabling responsive design (adapting layout to different screen sizes).
            <br/><i>Analogy: The paint, wallpaper, furniture arrangement, and landscaping of the house.</i>
          </li>
          <li>
            <b>JavaScript (JS): The Interactivity (The Electricity & Plumbing)</b>
            <br/>JavaScript is a programming language that brings web pages to life. It allows developers to create dynamic content, handle user interactions (like clicks and form submissions), make requests to servers without reloading the page (AJAX), create animations, and much more. It runs directly in the user's web browser.
            <br/><i>Analogy: The electrical wiring, plumbing, and appliances that make the house functional and interactive.</i>
          </li>
        </ul>
        <h3 className="text-lg font-bold mt-6 mb-2">Frontend vs. Backend Development</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 border rounded dark:border-gray-600">
            <h4 className="font-bold text-blue-700 dark:text-blue-300">Frontend (Client-Side)</h4>
            <p className="text-sm mb-2">Everything the user directly sees and interacts with in the browser.</p>
            <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
              <li>Focuses on user interface (UI) and user experience (UX).</li>
              <li>Core Technologies: HTML, CSS, JavaScript.</li>
              <li>Often uses <b>Frameworks/Libraries</b> like React, Angular, Vue.js to build complex interfaces more efficiently.</li>
              <li>Ensures the website looks good and works correctly on different devices and browsers (<b>Responsive Design</b>).</li>
              <li>Communicates with the backend via HTTP requests (APIs).</li>
            </ul>
          </div>
          <div className="p-4 border rounded dark:border-gray-600">
            <h4 className="font-bold text-green-700 dark:text-green-300">Backend (Server-Side)</h4>
            <p className="text-sm mb-2">The "behind-the-scenes" logic, server, and database that power the website.</p>
            <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
              <li>Manages data storage and retrieval (databases).</li>
              <li>Handles user authentication and authorization.</li>
              <li>Processes user input and performs business logic.</li>
              <li>Runs on a web <b>server</b>.</li>
              <li>Common Languages: Python (with Django/Flask), JavaScript (Node.js), Ruby (Rails), PHP, Java (Spring), C# (.NET).</li>
              <li>Interacts with databases (SQL/NoSQL).</li>
              <li>Provides data to the frontend via APIs (Application Programming Interfaces).</li>
            </ul>
          </div>
        </div>
        <p className="mt-4">
          A <b>Full-Stack Developer</b> is proficient in both frontend and backend development.
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">Other Key Concepts</h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><b>Web Server:</b> Software (like Apache, Nginx) or hardware that stores website files and serves them to browsers upon request (via HTTP).</li>
          <li><b>Web Hosting:</b> Service that provides the infrastructure (servers, network connection) to make a website accessible on the internet.</li>
          <li><b>Domain Name:</b> The human-friendly address for a website (e.g., `google.com`).</li>
          <li><b>Frameworks & Libraries:</b> Collections of pre-written code that simplify common development tasks (e.g., React, Angular, Vue for frontend; Django, Rails, Express for backend).</li>
          <li><b>Responsive Design:</b> Designing websites to adapt their layout and appearance automatically to different screen sizes (desktops, tablets, phones).</li>
        </ul>
        <div className="mt-4 p-4 bg-yellow-50 rounded">
          <b>Explore:</b> Right-click on this webpage and select "View Page Source" or "Inspect"/"Inspect Element". You'll see the underlying HTML, CSS, and JavaScript that make up this page!
        </div>
        <hr className="my-6"/>
        <h3 className="text-lg font-bold mt-6 mb-2">Key Takeaways</h3>
        <ul className="list-disc ml-6">
          <li>Web Development builds websites and web applications.</li>
          <li>Core Frontend Technologies: HTML (structure), CSS (style), JavaScript (interactivity).</li>
          <li>Frontend deals with the user interface (client-side/browser).</li>
          <li>Backend deals with the server, database, and application logic (server-side).</li>
          <li>Frameworks and libraries help streamline development.</li>
          <li>Responsive design ensures websites work well on all devices.</li>
        </ul>
      </div>
    ),
  },
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
          In today’s interconnected world, <b>Digital Literacy</b> means more than just using devices—it’s about critical thinking and safe online practices.
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
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    difficulty: 'Intermediate',
    duration: '8 min',
    tags: ['AI', 'Machine Learning', 'Trends'],
    summary: 'Explore how machines learn from data, real-world applications, and ethical considerations.',
    relatedTerms: ['Algorithm', 'Data', 'Neural Network', 'Training', 'Bias', 'Automation'],
    content: (
      <div>
        <p>
          <b>Artificial Intelligence (AI)</b> and <b>Machine Learning (ML)</b> enable computers to learn from data and perform tasks that once required human intelligence.
        </p>
        <div className="analogy-card my-4">
          <h4 className="font-bold">Analogy: Learning to Bake</h4>
          <p>Teaching a computer with ML is like sharing a recipe and feedback: you give many examples and tweak the steps until it bakes consistent cakes.</p>
        </div>
        <div className="fun-fact-card">
          <h4 className="font-bold">Fun Fact:</h4>
          <p>The first ML program was developed in the 1950s—today, AI powers voice assistants, image recognition, and recommendation systems!</p>
        </div>
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

export default lessons;
