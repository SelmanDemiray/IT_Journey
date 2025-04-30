import React from 'react';
import { Lesson } from './index';

export const programming: Lesson[] = [
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
        <h2>What is Programming?</h2>
        <p>
          Programming is the process of creating instructions for computers to follow. These instructions are written in programming languages, which are designed to be understood by both humans and machines.
        </p>
        
        <div className="mt-4 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <h4 className="font-bold text-blue-800 dark:text-blue-300 flex items-center">
            <span className="text-2xl mr-2">💡</span>Programming in Perspective
          </h4>
          <p className="text-blue-700 dark:text-blue-400 mt-2">
            Think of programming as giving instructions to an extremely literal but incredibly fast assistant. This assistant (the computer) will do exactly what you tell it to do—no more, no less—and can perform billions of calculations per second without getting tired.
          </p>
        </div>
        
        <h2 className="text-lg font-bold mt-6 mb-2">Why Learn Programming?</h2>
        <p>
          Programming is a powerful skill that allows you to create software, automate tasks, and solve complex problems. It is widely used in various fields, including web development, data analysis, artificial intelligence, and more.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
            <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Personal Benefits</h4>
            <ul className="list-disc ml-4 text-sm space-y-1">
              <li>Develop problem-solving and logical thinking skills</li>
              <li>Create your own software tools and applications</li>
              <li>Automate repetitive tasks to save time</li>
              <li>Better understand how technology works</li>
              <li>Express creativity through coding projects</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
            <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Professional Benefits</h4>
            <ul className="list-disc ml-4 text-sm space-y-1">
              <li>Access to well-paying career opportunities</li>
              <li>High demand across virtually all industries</li>
              <li>Ability to work remotely or freelance</li>
              <li>Continuous learning and professional growth</li>
              <li>Potential to create your own tech startup</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-lg font-bold mt-6 mb-2">Common Programming Concepts</h2>
        <div className="overflow-x-auto mt-3">
          <table className="min-w-full border divide-y">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left">Concept</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Example (Python)</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-2 font-medium">Variables</td>
                <td className="px-4 py-2">Containers for storing data values.</td>
                <td className="px-4 py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1">name = "John"</code></td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Data Types</td>
                <td className="px-4 py-2">Categories of data, such as numbers, strings, and booleans.</td>
                <td className="px-4 py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1">age = 25</code> (integer)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Conditionals</td>
                <td className="px-4 py-2">Decision-making structures using if-else statements.</td>
                <td className="px-4 py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1">if age >= 18: print("Adult")</code></td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Loops</td>
                <td className="px-4 py-2">Structures for repeating code blocks multiple times.</td>
                <td className="px-4 py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1">for i in range(5): print(i)</code></td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Functions</td>
                <td className="px-4 py-2">Reusable blocks of code that perform specific tasks.</td>
                <td className="px-4 py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1">def greet(name): return f"Hello, {name}!"</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 className="text-lg font-bold mt-6 mb-2">Popular Beginner-Friendly Languages</h2>
        <div className="mt-4 space-y-4">
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
            <h4 className="font-bold text-blue-700 dark:text-blue-300">Python</h4>
            <p className="mt-1">Known for its simplicity and readability, Python is great for beginners. It's widely used in data science, AI, web development, and automation.</p>
            <div className="mt-3 bg-white dark:bg-gray-800 p-3 rounded">
              <pre className="text-sm"><code>{`# Python example: A simple function to calculate average
def calculate_average(numbers):
    total = sum(numbers)
    count = len(numbers)
    return total / count if count > 0 else 0

# Using the function
scores = [85, 92, 78, 90, 88]
avg = calculate_average(scores)
print(f"The average score is {avg}")  # Output: The average score is 86.6`}</code></pre>
            </div>
          </div>
          
          <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20">
            <h4 className="font-bold text-yellow-700 dark:text-yellow-300">JavaScript</h4>
            <p className="mt-1">A versatile language used for web development. With Node.js, it can be used for both frontend and backend development.</p>
            <div className="mt-3 bg-white dark:bg-gray-800 p-3 rounded">
              <pre className="text-sm"><code>{`// JavaScript example: Changing webpage content
document.getElementById("demo").innerHTML = "Hello JavaScript!";

// A simple function
function calculateTotal(prices) {
    return prices.reduce((sum, price) => sum + price, 0);
}

const cartPrices = [29.99, 10.50, 5.99];
console.log("Total: $" + calculateTotal(cartPrices));  // Output: Total: $46.48`}</code></pre>
            </div>
          </div>
          
          <div className="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20">
            <h4 className="font-bold text-orange-700 dark:text-orange-300">HTML & CSS</h4>
            <p className="mt-1">While not programming languages in the strict sense, HTML (structure) and CSS (styling) are essential for creating web pages.</p>
            <div className="mt-3 bg-white dark:bg-gray-800 p-3 rounded">
              <pre className="text-sm"><code>{`<!-- HTML example -->
<!DOCTYPE html>
<html>
<head>
    <style>
        /* CSS styling */
        body { font-family: Arial, sans-serif; }
        .container { background-color: lightblue; padding: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello World!</h1>
        <p>This is a simple web page.</p>
    </div>
</body>
</html>`}</code></pre>
            </div>
          </div>
        </div>
        
        <h2 className="text-lg font-bold mt-6 mb-2">Getting Started</h2>
        <p>
          To start programming, you need a code editor or an Integrated Development Environment (IDE). Here are some popular choices:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Visual Studio Code:</strong> Free, lightweight, and supports numerous languages</li>
          <li><strong>PyCharm:</strong> Specialized for Python development</li>
          <li><strong>IntelliJ IDEA:</strong> Feature-rich IDE for Java and other languages</li>
        </ul>
        
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <h4 className="font-bold text-green-700 dark:text-green-300">Beginner Projects to Try</h4>
          <ul className="list-disc ml-5 mt-2">
            <li>Simple calculator</li>
            <li>To-do list application</li>
            <li>Temperature converter</li>
            <li>Number guessing game</li>
            <li>Basic website with HTML and CSS</li>
          </ul>
        </div>
        
        <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <h4 className="font-bold text-purple-700 dark:text-purple-300">Programming Learning Resources</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
            <div>
              <h5 className="font-semibold">Free Resources:</h5>
              <ul className="list-disc ml-5 text-sm">
                <li>Codecademy (free basic courses)</li>
                <li>freeCodeCamp</li>
                <li>Khan Academy</li>
                <li>W3Schools</li>
                <li>Python.org tutorials</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Communities for Help:</h5>
              <ul className="list-disc ml-5 text-sm">
                <li>Stack Overflow</li>
                <li>Reddit (r/learnprogramming)</li>
                <li>GitHub</li>
                <li>Dev.to</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 rounded">
          <b>Remember:</b> Learning to program takes time and practice. Don't be discouraged by initial challenges. Start with small projects, celebrate your progress, and build your skills gradually.
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded">
          <b>Interactive Challenge:</b> Try solving this programming problem: Write a program that prints numbers from 1 to 100, but for multiples of 3 print "Fizz" and for multiples of 5 print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".
        </div>
      </div>
    ),
  },
  
  // Adding new Python-focused lesson
  {
    id: 'python-basics',
    title: 'Python Programming: Your First Steps',
    difficulty: 'Beginner',
    duration: '15 min',
    tags: ['Programming', 'Python', 'Coding', 'Data Science', 'Automation'],
    summary: 'Learn the fundamentals of Python programming language, its syntax, common libraries, and practical applications.',
    relatedTerms: ['Python', 'Variable', 'Function', 'List', 'Dictionary', 'Loop', 'Conditional', 'Module', 'Package', 'PIP', 'Jupyter', 'Pandas', 'NumPy'],
    content: (
      <div>
        <h2>Introduction to Python</h2>
        <p>
          Python is a high-level, interpreted programming language known for its readability and versatility. Created by Guido van Rossum and first released in 1991, Python has become one of the most popular programming languages in the world.
        </p>
        
        <div className="mt-4 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <h4 className="font-bold text-blue-800 dark:text-blue-300">Why Python Is Ideal for Beginners</h4>
          <ul className="list-disc ml-6 mt-2 text-blue-700 dark:text-blue-400">
            <li>Readable, English-like syntax with minimal special characters</li>
            <li>Emphasizes code readability and simplicity</li>
            <li>No need to declare variable types (dynamically typed)</li>
            <li>Extensive standard library and third-party packages</li>
            <li>Strong community support and excellent documentation</li>
            <li>Versatile applications across many domains</li>
          </ul>
        </div>
        
        <h2 className="text-lg font-bold mt-6 mb-2">Getting Started with Python</h2>
        <p>
          To start using Python, you'll need to:
        </p>
        <ol className="list-decimal ml-6 mt-2 space-y-1">
          <li>Install Python from <a href="https://python.org" className="text-blue-600 hover:underline">Python.org</a> (version 3.x is recommended)</li>
          <li>Choose a code editor or IDE (like VS Code, PyCharm, or IDLE)</li>
          <li>Create your first Python file with a .py extension</li>
        </ol>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Your First Python Program</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-2">
          <pre className="text-sm"><code>{`# This is a comment
print("Hello, World!")  # This will display "Hello, World!" in the console

# Variables don't need type declarations
name = "Alice"
age = 30
is_student = False

# Simple calculation
years_until_retirement = 65 - age

print(f"{name} will retire in {years_until_retirement} years.")`}</code></pre>
        </div>
        
        <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-sm">
          <strong>Output:</strong>
          <pre className="mt-1 p-2 bg-white dark:bg-gray-900 rounded">Hello, World!
Alice will retire in 35 years.</pre>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Basic Python Syntax and Data Types</h3>
        
        <div className="space-y-4 mt-3">
          <div className="p-4 border rounded-lg">
            <h4 className="font-bold text-violet-700 dark:text-violet-300 mb-2">Variables and Data Types</h4>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
              <pre className="text-sm"><code>{`# Numbers
integer_num = 42
float_num = 3.14

# Strings
text = "Python is awesome"
multi_line = """This is a
multi-line string"""

# Boolean
is_active = True
is_complete = False

# Collections
my_list = [1, 2, 3, "apple", "banana"]  # List (mutable)
my_tuple = (1, 2, 3)  # Tuple (immutable)
my_dict = {"name": "John", "age": 30}  # Dictionary (key-value pairs)
my_set = {1, 2, 3, 3}  # Set (unique elements, will store {1, 2, 3})

# None type (similar to null in other languages)
nothing = None`}</code></pre>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-2">Control Flow</h4>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
              <pre className="text-sm"><code>{`# Conditional statements (if, elif, else)
temperature = 25

if temperature > 30:
    print("It's hot!")
elif temperature > 20:
    print("It's nice!")
else:
    print("It's cold!")

# Loops
# For loop
print("Counting from 1 to 5:")
for i in range(1, 6):
    print(i)

# While loop
count = 0
while count < 3:
    print(f"Count is {count}")
    count += 1`}</code></pre>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-2">Functions</h4>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
              <pre className="text-sm"><code>{`# Defining a function
def greet(name, greeting="Hello"):
    """This function greets the person with the given name."""
    return f"{greeting}, {name}!"

# Calling the function
print(greet("Alice"))  # Output: Hello, Alice!
print(greet("Bob", "Hi"))  # Output: Hi, Bob!

# Lambda function (anonymous one-line function)
square = lambda x: x ** 2
print(square(4))  # Output: 16`}</code></pre>
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Working with Python Collections</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-2">
          <pre className="text-sm"><code>{`# Lists
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Access element: apple
fruits.append("orange")  # Add element
print(len(fruits))  # Length: 4

# Looping through a list
for fruit in fruits:
    print(f"I like {fruit}")

# List comprehension (create a new list from existing one)
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# Dictionaries
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Access, add, modify dictionary elements
print(person["name"])  # John
person["email"] = "john@example.com"  # Add new key-value pair
person["age"] = 31  # Update value

# Loop through dictionary
for key, value in person.items():
    print(f"{key}: {value}")`}</code></pre>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Python Modules and Packages</h3>
        <p>
          One of Python's strengths is its vast ecosystem of libraries and modules:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Standard Library</h4>
            <p className="mb-2 text-sm">Built-in modules that come with Python:</p>
            <ul className="list-disc ml-4 text-sm space-y-1">
              <li><strong>math:</strong> Mathematical functions</li>
              <li><strong>random:</strong> Generate random numbers</li>
              <li><strong>datetime:</strong> Date and time operations</li>
              <li><strong>os:</strong> Interact with the operating system</li>
              <li><strong>json:</strong> Work with JSON data</li>
            </ul>
            <div className="mt-3 bg-white dark:bg-gray-800 p-2 rounded">
              <pre className="text-xs"><code>{`import random
import datetime

# Get a random number
print(random.randint(1, 100))

# Current date and time
now = datetime.datetime.now()
print(f"Today is {now.strftime('%Y-%m-%d')}")`}</code></pre>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Popular Third-Party Packages</h4>
            <p className="mb-2 text-sm">Install with pip (Python's package manager):</p>
            <ul className="list-disc ml-4 text-sm space-y-1">
              <li><strong>NumPy:</strong> Scientific computing</li>
              <li><strong>Pandas:</strong> Data analysis and manipulation</li>
              <li><strong>Matplotlib:</strong> Data visualization</li>
              <li><strong>Requests:</strong> HTTP requests</li>
              <li><strong>Flask/Django:</strong> Web frameworks</li>
            </ul>
            <div className="mt-3 bg-white dark:bg-gray-800 p-2 rounded">
              <pre className="text-xs"><code>{`# Install a package:
# pip install pandas numpy matplotlib

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Create data
data = {'Fruits': ['Apple', 'Banana', 'Cherry'],
        'Count': [45, 23, 55]}

# Create DataFrame
df = pd.DataFrame(data)
print(df)`}</code></pre>
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Real-World Python Applications</h3>
        
        <div className="space-y-3 mt-3">
          <div className="p-3 border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-purple-700 dark:text-purple-300">Data Analysis & Science</h4>
            <p className="text-sm">Python dominates in data science with libraries like Pandas, NumPy, and scikit-learn. Used for data cleaning, analysis, visualization, and machine learning.</p>
          </div>
          
          <div className="p-3 border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Web Development</h4>
            <p className="text-sm">Frameworks like Django and Flask make building web applications straightforward. Instagram, Spotify, and Dropbox use Python on their backends.</p>
          </div>
          
          <div className="p-3 border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-green-700 dark:text-green-300">Automation & Scripting</h4>
            <p className="text-sm">Python excels at automating repetitive tasks. From simple file operations to complex workflows, Python scripts save time and reduce errors.</p>
          </div>
          
          <div className="p-3 border-l-4 border-pink-500 pl-4">
            <h4 className="font-semibold text-pink-700 dark:text-pink-300">Artificial Intelligence</h4>
            <p className="text-sm">Libraries like TensorFlow and PyTorch make Python the leading language for AI and machine learning. Used for image recognition, natural language processing, and more.</p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
          <h4 className="font-bold text-amber-800 dark:text-amber-300 flex items-center">
            <span className="text-xl mr-2">✨</span>Try It: A Simple Python Project
          </h4>
          <p className="text-amber-700 dark:text-amber-400 mt-2 mb-3">
            Let's create a simple temperature converter that converts between Celsius and Fahrenheit:
          </p>
          <div className="bg-white dark:bg-gray-800 p-3 rounded">
            <pre className="text-sm"><code>{`def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit"""
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    """Convert Fahrenheit to Celsius"""
    return (fahrenheit - 32) * 5/9

# Get user input
temp_str = input("Enter a temperature value: ")
unit = input("Enter the unit (C for Celsius, F for Fahrenheit): ")

try:
    temp = float(temp_str)
    
    if unit.upper() == "C":
        result = celsius_to_fahrenheit(temp)
        print(f"{temp}°C is equal to {result:.2f}°F")
    elif unit.upper() == "F":
        result = fahrenheit_to_celsius(temp)
        print(f"{temp}°F is equal to {result:.2f}°C")
    else:
        print("Invalid unit. Please enter C or F.")
except ValueError:
    print("Invalid temperature. Please enter a number.")`}</code></pre>
          </div>
          <p className="text-xs text-amber-600 dark:text-amber-500 mt-2">
            Save this code to a file named <code>temp_converter.py</code> and run it with Python!
          </p>
        </div>
        
        <h3 className="text-lg font-bold mt-6 mb-2">Python Best Practices</h3>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Use descriptive variable and function names</li>
          <li>Write docstrings to document your functions and modules</li>
          <li>Follow the PEP 8 style guide for consistent code formatting</li>
          <li>Use virtual environments for project dependencies</li>
          <li>Write tests for your code (libraries like pytest make this easy)</li>
          <li>Handle exceptions appropriately with try-except blocks</li>
        </ul>
        
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 className="font-bold text-blue-700 dark:text-blue-300">What's Next?</h4>
          <p className="mt-2">
            As you become more comfortable with Python basics, consider exploring:
          </p>
          <ul className="list-disc ml-5 mt-2">
            <li>Object-Oriented Programming in Python (classes and objects)</li>
            <li>File operations (reading/writing files)</li>
            <li>Error handling and exceptions</li>
            <li>Working with APIs</li>
            <li>Data visualization with matplotlib or seaborn</li>
            <li>Building simple GUI applications with Tkinter or PyQt</li>
            <li>Web scraping with BeautifulSoup or Scrapy</li>
          </ul>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 rounded">
          <b>Remember:</b> The best way to learn programming is by doing. Try to work on projects that interest you, even if they seem challenging. Break problems into smaller steps, use online resources when stuck, and keep practicing!
        </div>
      </div>
    ),
  },
];