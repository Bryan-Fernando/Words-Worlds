import React from 'react';
import styles from './pagina224.module.css';

const Pagina224 = () => {
  const firstImages = [
    { id: 1, title: "Basketball Image" },
    { id: 2, title: "Foggy Park" },
    { id: 3, title: "Swimming Pool" }
  ];

  const secondImages = [
    { id: 4, title: "Gym Exercise" },
    { id: 5, title: "Study Group" },
    { id: 6, title: "Business Meeting" }
  ];

  const dialoguesFirstSet = [
    {
      id: 1,
      title: "Dialogue 1",
      question: "Where can she swim?",
      answer: "She can swim at the pool"
    },
    {
      id: 2,
      title: "Dialogue 2",
      question: "When can they play basketball?",
      answer: "They can play basketball after school"
    },
    {
      id: 3,
      title: "Dialogue 3",
      question: "How can he fix the computer?",
      answer: "He can fix the computer by restarting it"
    },
    {
      id: 4,
      title: "Dialogue 4",
      question: "Why can't we go to the park?",
      answer: "We can't go to the park, because it's raining"
    },
    {
      id: 5,
      title: "Dialogue 5",
      question: "Who can swim?",
      answer: "My sister and I can swim"
    }
  ];

  const dialoguesSecondSet = [
    {
      id: 1,
      title: "Dialogue 1",
      question: "What can you do?",
      answer: "I can cook well"
    },
    {
      id: 2,
      title: "Dialogue 2",
      question: "How often can they go to the gym?",
      answer: "They can go to the gym three times a week"
    },
    {
      id: 3,
      title: "Dialogue 3",
      question: "Who can fix the broken chair?",
      answer: "Sarah can fix the broken chair"
    },
    {
      id: 4,
      title: "Dialogue 4",
      question: "When can we have the meeting?",
      answer: "We can have the meeting tomorrow morning"
    },
    {
      id: 5,
      title: "Dialogue 5",
      question: "Can she speak English fluently?",
      answer: "No, she can't speak English fluently"
    },
    {
      id: 6,
      title: "Dialogue 6",
      question: "Why can't he attend the party?",
      answer: "He can't attend the party because he has to work"
    },
    {
      id: 7,
      title: "Dialogue 7",
      question: "Can they swim in the lake?",
      answer: "No, they can't swim in the lake.\nIt's too cold"
    },
    {
      id: 8,
      title: "Dialogue 8",
      question: "How many languages can you speak?",
      answer: "I can speak two languages fluently"
    }
  ];

  return (
    <div className={styles.pg224Container}>
      <header className={styles.pg224Header}>
        <h1 className={styles.pg224Title}>Dialogues</h1>
        <h2 className={styles.pg224Subtitle}>
          Real - Life - Conversation Listening Pronunciation Practice
        </h2>
      </header>

      <div className={styles.pg224ImagesContainer}>
        {firstImages.map((image) => (
          <div key={image.id} className={styles.pg224ImagePlaceholder}></div>
        ))}
      </div>

      <div className={styles.pg224DialoguesFirstSet}>
        {dialoguesFirstSet.map((dialogue) => (
          <div key={dialogue.id} className={styles.pg224DialogueContent}>
            <h3 className={styles.pg224DialogueTitle}>{dialogue.title}</h3>
            <p className={styles.pg224Question}>{dialogue.question}</p>
            <p className={styles.pg224Answer}>{dialogue.answer}</p>
          </div>
        ))}
      </div>

      <div className={styles.pg224ImagesContainer}>
        {secondImages.map((image) => (
          <div key={image.id} className={styles.pg224ImagePlaceholder}></div>
        ))}
      </div>

      <div className={styles.pg224DialoguesSecondSet}>
        {dialoguesSecondSet.map((dialogue) => (
          <div key={dialogue.id} className={styles.pg224DialogueContent}>
            <h3 className={styles.pg224DialogueTitle}>{dialogue.title}</h3>
            <p className={styles.pg224Question}>{dialogue.question}</p>
            <p className={styles.pg224Answer}>{dialogue.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagina224;