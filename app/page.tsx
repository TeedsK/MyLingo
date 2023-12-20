"use client";

import Head from 'next/head';
import styles from './styles/home.module.css';
import { useState, useEffect } from 'react';

interface Task {
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
      "Title": "First Task",
      "SentenceCount": "10",
      "Description": "A simple task.",
      "Difficulty": "Easy",
      "Completed": true,
      "Saved": false,
      "Grade": "A"
    },
    {
      "Title": "Second Task",
      "SentenceCount": "5",
      "Description": "A more complex task.",
      "Difficulty": "Hard",
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
        {/* Navigation bar content */}
      </header>
      
      <main className={styles.mainContent}>
        <section className={styles.dataTable}>
          <div className={styles.tableHeader}>
            <span>Title</span>
            <span>Sentence Count</span>
            <span>Description</span>
            <span>Difficulty</span>
            <span>Completed</span>
            <span>Saved</span>
            <span>Grade</span>
          </div>
          {tasks.map((task, index) => (
            <div key={index} className={styles.tableRow}>
              <span>{task.Title}</span>
              <span>{task.SentenceCount}</span>
              <span>{task.Description}</span>
              <span>{task.Difficulty}</span>
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
