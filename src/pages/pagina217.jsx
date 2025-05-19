import React from 'react';
import styles from './pagina217.module.css';

const Pagina217 = () => {
  const sentences = [
    {
      id: 1,
      text: "I can speak French"
    },
    {
      id: 2,
      text: "She can play the guitar"
    },
    {
      id: 3,
      text: "They can come to the party"
    },
    {
      id: 4,
      text: "We can run fast"
    }
  ];

  const answers = [
    {
      id: 1,
      text: "I can't speak French"
    },
    {
      id: 2,
      text: "She can't play the guitar"
    },
    {
      id: 3,
      text: "They can't come to the party"
    },
    {
      id: 4,
      text: "We can't run fast"
    }
  ];

  return (
    <div className={styles.pg217Container}>
      <h1 className={styles.pg217Title}>Exercises</h1>

      <div className={styles.pg217ExerciseSection}>
        <h2 className={styles.pg217ExerciseTitle}>4. Change into the negative form</h2>
        
        <div className={styles.pg217SentencesBox}>
          {sentences.map((sentence) => (
            <div key={sentence.id} className={styles.pg217Line}>
              <span className={styles.pg217Number}>{sentence.id}.</span>
              <span className={styles.pg217Text}>{sentence.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.pg217AnswerSection}>
        <h2 className={styles.pg217AnswerTitle}>Check - Answer Key</h2>
        <div className={styles.pg217AnswersBox}>
          {answers.map((answer) => (
            <div key={answer.id} className={styles.pg217Line}>
              <span className={styles.pg217Number}>{answer.id}.</span>
              <span className={styles.pg217Text}>{answer.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagina217;