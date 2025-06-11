import React from 'react';
import styles from './pagina223.module.css';

const Pagina223 = () => {
  const firstImages = [
    { id: 1, title: "Swimming Image" },
    { id: 2, title: "Spanish Class" },
    { id: 3, title: "Guitar Player" }
  ];

  const dialoguesFirstSet = [
    {
      id: 1,
      title: "Dialogue 1",
      question: "Can you swim?",
      answer: "Yes, I can swim"
    },
    {
      id: 2,
      title: "Dialogue 2",
      question: "Can you speak Spanish?",
      answer: "No, I can't speak Spanish"
    },
    {
      id: 3,
      title: "Dialogue 3",
      question: "Can you play the guitar?",
      answer: "Yes, I can play the guitar"
    },
    {
      id: 4,
      title: "Dialogue 4",
      question: "Can you cook?",
      answer: "No, I can't cook"
    },
    {
      id: 5,
      title: "Dialogue 5",
      question: "Can you ride a bike?",
      answer: "Yes, I can ride a bike."
    }
  ];

  const secondImages = [
    { id: 4, title: "Basketball Game" },
    { id: 5, title: "Children Playing" },
    { id: 6, title: "Computer Repair" }
  ];

  const dialoguesSecondSet = [
    {
      id: 1,
      title: "Dialogue 1",
      question: "Can she speak French?",
      answer: "No, she can't speak French"
    },
    {
      id: 2,
      title: "Dialogue 2",
      question: "Can they play basketball?",
      answer: "Yes, they can play basketball"
    },
    {
      id: 3,
      title: "Dialogue 3",
      question: "Can he fix the computer?",
      answer: "Yes, he can fix the computer"
    },
    {
      id: 4,
      title: "Dialogue 4",
      question: "Can we go to the park?",
      answer: "No, we can't go to the park"
    },
    {
      id: 5,
      title: "Dialogue 5",
      question: "Can you and your brother swim?",
      answer: "Yes, we can swim"
    }
  ];

  return (
    <div className={styles.pg223Container}>
      <header className={styles.pg223Header}>
        <h1 className={styles.pg223Title}>Dialogues</h1>
        <h2 className={styles.pg223Subtitle}>
          Real - Life - Conversation Listening Pronunciation Practice
        </h2>
      </header>

      <div className={styles.pg223Content}>
        <div className={styles.pg223Section}>
          <div className={styles.pg223ImagesContainer}>
            {firstImages.map((image) => (
              <div key={image.id} className={styles.pg223ImagePlaceholder}></div>
            ))}
          </div>

          <div className={styles.pg223DialoguesContainer}>
            {dialoguesFirstSet.map((dialogue) => (
              <div key={dialogue.id} className={styles.pg223DialogueItem}>
                <div className={styles.pg223DialogueTitle}>{dialogue.title}</div>
                <div className={styles.pg223Question}>{dialogue.question}</div>
                <div className={styles.pg223Answer}>{dialogue.answer}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.pg223Section}>
          <div className={styles.pg223ImagesContainer}>
            {secondImages.map((image) => (
              <div key={image.id} className={styles.pg223ImagePlaceholder}></div>
            ))}
          </div>

          <div className={styles.pg223DialoguesContainer}>
            {dialoguesSecondSet.map((dialogue) => (
              <div key={dialogue.id} className={styles.pg223DialogueItem}>
                <div className={styles.pg223DialogueTitle}>{dialogue.title}</div>
                <div className={styles.pg223Question}>{dialogue.question}</div>
                <div className={styles.pg223Answer}>{dialogue.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina223;