import React from 'react';
import styles from './pagina218.module.css';

const Pagina218 = () => {
  const answers = [
    {
      id: 1,
      text: "Yes, I can swim."
    },
    {
      id: 2,
      text: "No, he can't cook"
    },
    {
      id: 3,
      text: "Yes, they can drive"
    },
    {
      id: 4,
      text: "No, we can't go out tonight."
    }
  ];

  const questions = [
    {
      id: 1,
      text: "Can you swim?"
    },
    {
      id: 2,
      text: "Can he cook?"
    },
    {
      id: 3,
      text: "Can they drive?"
    },
    {
      id: 4,
      text: "Can you go out tonight? ou Can we go out tonight?"
    }
  ];

  return (
    <div className={styles.pg218Container}>
      <h1 className={styles.pg218Title}>Exercises</h1>

      <div className={styles.pg218ExerciseSection}>
        <h2 className={styles.pg218ExerciseTitle}>5. Make questions to the given answers</h2>
        
        <div className={styles.pg218AnswersBox}>
          {answers.map((answer) => (
            <div key={answer.id} className={styles.pg218Line}>
              <span className={styles.pg218Number}>{answer.id}.</span>
              <span className={styles.pg218Text}>{answer.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.pg218AnswerSection}>
        <h2 className={styles.pg218AnswerTitle}>Check - Answer Key</h2>
        <div className={styles.pg218QuestionsBox}>
          {questions.map((question) => (
            <div key={question.id} className={styles.pg218Line}>
              <span className={styles.pg218Number}>{question.id}.</span>
              <span className={styles.pg218Text}>{question.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagina218;