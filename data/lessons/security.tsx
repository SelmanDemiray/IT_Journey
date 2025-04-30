import React from 'react';
import { Lesson } from './index';

export const security: Lesson[] = [
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
        <h2>Introduction to IT Security</h2>
        <p>
          IT security is the practice of protecting your digital assets, including devices, data, and online privacy, from threats such as malware, phishing, and unauthorized access.
        </p>
        
        <div className="mt-4 p-5 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <h4 className="font-bold text-red-800 dark:text-red-300">Why Security Matters Now More Than Ever</h4>
          <ul className="list-disc ml-5 mt-2 text-red-700 dark:text-red-400">
            <li>The average cost of a data breach is now $4.35 million (IBM Security, 2022)</li>
            <li>Ransomware attacks occur every 11 seconds globally</li>
            <li>59% of people use the same password for multiple accounts, making them vulnerable</li>
            <li>95% of cybersecurity breaches are caused by human error</li>
          </ul>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">The CIA Triad of Information Security</h3>
        <p>The fundamental principles that guide information security practices:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="text-center font-bold text-blue-700 dark:text-blue-300">Confidentiality</h4>
            <p className="text-sm mt-2">Ensuring information is accessible only to authorized individuals. Achieved through encryption, access controls, and strong authentication.</p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h4 className="text-center font-bold text-green-700 dark:text-green-300">Integrity</h4>
            <p className="text-sm mt-2">Maintaining and assuring the accuracy and consistency of data over its entire lifecycle. Implemented with checksums, digital signatures, and version control.</p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="text-center font-bold text-purple-700 dark:text-purple-300">Availability</h4>
            <p className="text-sm mt-2">Ensuring information is accessible when needed. Achieved through redundancy, backups, fault tolerance, and disaster recovery planning.</p>
          </div>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Common Threats</h3>
        <div className="space-y-4 mt-4">
          <div className="p-4 border border-red-200 dark:border-red-900 rounded-lg bg-red-50 dark:bg-red-900/10">
            <h4 className="font-bold flex items-center">
              <span className="text-xl mr-2">🐞</span>Malware
            </h4>
            <p className="mt-2">Malicious software designed to harm your devices or steal data.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <h5 className="font-semibold text-red-700 dark:text-red-400">Ransomware</h5>
                <p className="text-sm">Encrypts your files and demands payment for decryption. Notable examples include WannaCry and Ryuk.</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded">
                <h5 className="font-semibold text-red-700 dark:text-red-400">Spyware</h5>
                <p className="text-sm">Secretly monitors your activities to steal passwords, banking information, or personal data.</p>
              </div>
            </div>
            <div className="mt-3 text-sm bg-red-100 dark:bg-red-900/30 p-2 rounded">
              <strong>Defense:</strong> Use reputable antivirus software, keep systems updated, and don't download files from untrusted sources.
            </div>
          </div>
          
          <div className="p-4 border border-amber-200 dark:border-amber-900 rounded-lg bg-amber-50 dark:bg-amber-900/10">
            <h4 className="font-bold flex items-center">
              <span className="text-xl mr-2">🎣</span>Phishing
            </h4>
            <p className="mt-2">Fraudulent attempts to obtain sensitive information by pretending to be a trustworthy entity.</p>
            <div className="mt-3">
              <h5 className="font-semibold">How to Identify Phishing:</h5>
              <ul className="list-disc ml-5 mt-1 text-sm">
                <li>Generic greetings (e.g., "Dear Customer") instead of your name</li>
                <li>Suspicious sender email addresses that mimic legitimate companies</li>
                <li>Urgent language creating pressure to act quickly</li>
                <li>Links that don't match the claimed destination (hover to check)</li>
                <li>Poor grammar, spelling errors, or unusual formatting</li>
              </ul>
            </div>
            <div className="mt-3 text-sm bg-amber-100 dark:bg-amber-900/30 p-2 rounded">
              <strong>Defense:</strong> Verify requests through official channels, don't click suspicious links, and use email filtering solutions.
            </div>
          </div>
          
          <div className="p-4 border border-purple-200 dark:border-purple-900 rounded-lg bg-purple-50 dark:bg-purple-900/10">
            <h4 className="font-bold flex items-center">
              <span className="text-xl mr-2">🧠</span>Social Engineering
            </h4>
            <p className="mt-2">Manipulative tactics to trick individuals into revealing confidential information.</p>
            <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded">
              <h5 className="font-semibold">Common Techniques:</h5>
              <ul className="list-disc ml-5 mt-1 text-sm">
                <li><strong>Pretexting:</strong> Creating a fabricated scenario to extract information</li>
                <li><strong>Baiting:</strong> Offering something enticing to spark curiosity</li>
                <li><strong>Quid Pro Quo:</strong> Offering a service in exchange for information</li>
                <li><strong>Tailgating:</strong> Following someone into a secured area</li>
              </ul>
            </div>
            <div className="mt-3 text-sm bg-purple-100 dark:bg-purple-900/30 p-2 rounded">
              <strong>Defense:</strong> Verify identities, be skeptical of unusual requests, and follow security protocols even if inconvenient.
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Password Security</h3>
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mt-3">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold text-blue-700 dark:text-blue-300">Password Strength Comparison</h4>
          </div>
          <div className="space-y-3">
            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded flex justify-between">
              <span>password123</span>
              <span className="font-bold text-red-700 dark:text-red-300">Very Weak</span>
            </div>
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded flex justify-between">
              <span>H@ppyDay2023</span>
              <span className="font-bold text-amber-700 dark:text-amber-300">Moderate</span>
            </div>
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded flex justify-between">
              <span>TroublE%chai&F7!N9k</span>
              <span className="font-bold text-green-700 dark:text-green-300">Strong</span>
            </div>
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded flex justify-between">
              <span>correct horse battery staple</span>
              <span className="font-bold text-green-700 dark:text-green-300">Strong (Passphrase)</span>
            </div>
          </div>
          <div className="mt-4 text-sm">
            <p><strong>Best Practices:</strong></p>
            <ul className="list-disc ml-5 mt-1">
              <li>Use a different password for each account</li>
              <li>Aim for at least 12 characters</li>
              <li>Consider using a password manager (LastPass, 1Password, Bitwarden)</li>
              <li>Enable Multi-Factor Authentication (MFA) wherever available</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Best Practices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div className="p-4 border rounded">
            <h4 className="font-bold mb-2 flex items-center">
              <span className="text-xl mr-2">🔄</span>Updates & Patches
            </h4>
            <p className="text-sm">Keep your OS, applications, and devices updated to protect against known vulnerabilities.</p>
            <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded text-xs">
              <strong>Pro Tip:</strong> Enable automatic updates whenever possible.
            </div>
          </div>
          
          <div className="p-4 border rounded">
            <h4 className="font-bold mb-2 flex items-center">
              <span className="text-xl mr-2">💾</span>Regular Backups
            </h4>
            <p className="text-sm">Follow the 3-2-1 rule: Keep 3 copies of data on 2 different media types with 1 copy offsite.</p>
            <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded text-xs">
              <strong>Pro Tip:</strong> Test your backups regularly to ensure they work.
            </div>
          </div>
          
          <div className="p-4 border rounded">
            <h4 className="font-bold mb-2 flex items-center">
              <span className="text-xl mr-2">🔍</span>Vigilant Browsing
            </h4>
            <p className="text-sm">Look for HTTPS in the URL bar, be cautious with downloads, and consider using browser extensions like ad blockers.</p>
          </div>
          
          <div className="p-4 border rounded">
            <h4 className="font-bold mb-2 flex items-center">
              <span className="text-xl mr-2">📱</span>Mobile Security
            </h4>
            <p className="text-sm">Use strong screen locks, only download apps from official stores, review app permissions, and avoid jailbreaking/rooting.</p>
          </div>
        </div>
        
        <div className="mt-6 p-5 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h4 className="font-bold text-green-800 dark:text-green-300">Security Checklist</h4>
          <p className="text-green-700 dark:text-green-400 mt-1 mb-3">Mark these items off as you implement them:</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="check1" className="mr-2 accent-green-600" />
              <label htmlFor="check1" className="text-green-700 dark:text-green-400">Enable Multi-Factor Authentication on important accounts</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="check2" className="mr-2 accent-green-600" />
              <label htmlFor="check2" className="text-green-700 dark:text-green-400">Install and update antivirus/anti-malware software</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="check3" className="mr-2 accent-green-600" />
              <label htmlFor="check3" className="text-green-700 dark:text-green-400">Create a system for managing strong, unique passwords</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="check4" className="mr-2 accent-green-600" />
              <label htmlFor="check4" className="text-green-700 dark:text-green-400">Set up automatic software updates</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="check5" className="mr-2 accent-green-600" />
              <label htmlFor="check5" className="text-green-700 dark:text-green-400">Create a backup strategy for important files</label>
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Tools for Defense</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
            <h4 className="text-center font-bold text-gray-700 dark:text-gray-300 mb-2">Encryption</h4>
            <p className="text-sm">Protect sensitive data by converting it into unreadable code.</p>
            <p className="text-xs mt-2 italic">Examples: BitLocker, VeraCrypt, HTTPS websites</p>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
            <h4 className="text-center font-bold text-gray-700 dark:text-gray-300 mb-2">Firewall</h4>
            <p className="text-sm">Block unauthorized access to your network by monitoring and filtering traffic.</p>
            <p className="text-xs mt-2 italic">Examples: Windows Defender Firewall, pfSense</p>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
            <h4 className="text-center font-bold text-gray-700 dark:text-gray-300 mb-2">VPN</h4>
            <p className="text-sm">Secure your internet connection and protect your privacy, especially on public Wi-Fi.</p>
            <p className="text-xs mt-2 italic">Examples: NordVPN, ExpressVPN, ProtonVPN</p>
          </div>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">What To Do If You're Compromised</h3>
        <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/10 mt-3">
          <ol className="list-decimal ml-5">
            <li><strong>Disconnect from the internet</strong> to prevent further damage or data exfiltration</li>
            <li><strong>Change passwords</strong> immediately for affected accounts (from a different, secure device)</li>
            <li><strong>Scan for malware</strong> using reputable security software</li>
            <li><strong>Monitor accounts</strong> for unusual activity, especially financial accounts</li>
            <li><strong>Report fraud</strong> to relevant institutions if financial information was compromised</li>
            <li><strong>Restore from backup</strong> if necessary</li>
          </ol>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Conclusion</h3>
        <p>
          By understanding IT security fundamentals and implementing best practices, you can significantly reduce the risk of falling victim to cyber threats. Remember that security is an ongoing process that requires vigilance and adaptability as threats evolve.
        </p>
        
        <div className="mt-4 p-4 bg-blue-50 rounded">
          <b>Next Steps:</b> Consider taking a free online course on cybersecurity fundamentals to deepen your knowledge, or look into certifications like CompTIA Security+ if you want to pursue a career in IT security.
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded">
          <b>Interactive Exercise:</b> Conduct a security audit of your own digital life. How many of the best practices discussed are you currently following? Where could you improve?
        </div>
      </div>
    ),
  },
];