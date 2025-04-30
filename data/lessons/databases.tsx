import React from 'react';
import { Lesson } from '../index';

export const databases: Lesson[] = [
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
        <h1>Introduction to Databases</h1>
        <p>
          Databases are organized collections of data that allow for efficient storage, retrieval, and management of information. They are used in almost every field, from business to science, to store and process data.
        </p>
        <h2>Why Use Databases?</h2>
        <p>
          Databases provide a structured way to store data, making it easier to search, update, and analyze. They are essential for applications that require large amounts of data to be managed efficiently.
        </p>
        <h2>Types of Databases</h2>
        <p>
          There are two main types of databases:
        </p>
        <ul>
          <li>
            <strong>Relational Databases (SQL):</strong> These databases use tables to store data, with rows representing records and columns representing attributes. Examples include MySQL, PostgreSQL, and Microsoft SQL Server.
          </li>
          <li>
            <strong>Non-Relational Databases (NoSQL):</strong> These databases store data in formats other than tables, such as key-value pairs, documents, or graphs. Examples include MongoDB, Cassandra, and Redis.
          </li>
        </ul>
        <h2>Key Concepts</h2>
        <ul>
          <li><strong>Table:</strong> A collection of rows and columns in a relational database.</li>
          <li><strong>Row:</strong> A single record in a table.</li>
          <li><strong>Column:</strong> An attribute of a record.</li>
          <li><strong>Primary Key:</strong> A unique identifier for a record in a table.</li>
          <li><strong>Query:</strong> A request to retrieve or manipulate data in a database.</li>
          <li><strong>Schema:</strong> The structure of a database, including tables, columns, and relationships.</li>
        </ul>
        <h2>Popular Database Systems</h2>
        <ul>
          <li><strong>MySQL:</strong> A widely used open-source relational database.</li>
          <li><strong>PostgreSQL:</strong> A powerful open-source relational database with advanced features.</li>
          <li><strong>MongoDB:</strong> A popular NoSQL database for document-based storage.</li>
        </ul>
        <p>
          Databases are a fundamental part of modern technology, enabling efficient data management and powering countless applications.
        </p>
      </div>
    ),
  },
];