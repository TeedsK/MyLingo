"use client";

import Head from 'next/head';
import styles from './styles/home.module.css';
import { useState, useEffect } from 'react';

interface Task {
  Id: string,
  Title: string;
  SentenceCount: string;
  Description: string;
  Difficulty: string;
  Completed: boolean;
  Saved: boolean;
  Grade: string;
}

export default function Home() {

  const jsonData: Task[] = [
    {
      "Id": "1",
      "Title": "First Task",
      "SentenceCount": "1-3",
      "Description": "A simple task.",
      "Difficulty": "Easy",
      "Completed": true,
      "Saved": false,
      "Grade": "95%"
    },
    {
      "Id": "2",
      "Title": "Second Task",
      "SentenceCount": "5-10",
      "Description": "A more complex task.",
      "Difficulty": "Hard",
      "Completed": false,
      "Saved": true,
      "Grade": "N/A"
    },
    {
      "Id": "3",
      "Title": "Third Task",
      "SentenceCount": "5-10",
      "Description": "A more complex task.",
      "Difficulty": "Hard",
      "Completed": false,
      "Saved": true,
      "Grade": "N/A"
    },
    {
      "Id": "4",
      "Title": "Fourth Task",
      "SentenceCount": "5-10",
      "Description": "A more complex task.",
      "Difficulty": "Medium",
      "Completed": false,
      "Saved": true,
      "Grade": "N/A"
    }
  ];

   // State to store the tasks with correct typing
   const [tasks, setTasks] = useState<Task[]>([]);

   // Effect hook to load the data on mount with correct typing
   useEffect(() => {
     setTasks(jsonData);
   }, []);
 
   // Function to refresh the data
   const refreshData = () => {
     setTasks(jsonData);
   };

  return (

    <div className={styles.container}>
      <Head>
        <title>MyLingo Dashboard</title>
        <meta name="description" content="Dashboard for MyLingo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h2>MyLingo</h2>
        {/* Navigation bar content */}
      </header>
      
      <main className={styles.mainContent}>
        <section className={styles.dataTable}>
          <div className={styles.tableHeader}>
            <span>Id</span>
            <span>Title</span>
            <span className={styles.tableSentenceCount}>Sentences</span>
            <span>Description</span>
            <span className={styles.tableDifficulty}>Difficulty</span>
            <span>Completed</span>
            <span>Saved</span>
            <span>Grade</span>
          </div>
          {tasks.map((task, index) => (
            <div key={index} className={styles.tableRow}>
              <span>{task.Id}</span>
              <span className={styles.tableTitleLink}>{task.Title}</span>
              <span className={styles.tableSentenceCount}>{task.SentenceCount}</span>
              <span>{task.Description}</span>
              <span className={styles.tableDifficulty + " " + styles[task.Difficulty.toLowerCase()]}><span>{task.Difficulty}</span></span>
              <span>{task.Completed ? 'Yes' : 'No'}</span>
              <span>{task.Saved ? 'Yes' : 'No'}</span>
              <span>{task.Grade}</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
