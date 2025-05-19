import React from 'react';
import styles from './pagina214.module.css';

const Pagina214 = () => {
  const questions = [
    {
      id: 1,
      text: "_____ can you cook really well?"
    },
    {
      id: 2,
      text: "_____ can we park the car?"
    },
    {
      id: 3,
      text: "_____ can I visit your office?"
    },
    {
      id: 4,
      text: "_____ can answer this question?"
    },
    {
      id: 5,
      text: "_____ can't she come to the party?"
    },
    {
      id: 6,
      text: "_____ can I get to the train station?"
    }
  ];

  const answers = [
    {
      id: 1,
      text: "What can you cook really well?"
    },
    {
      id: 2,
      text: "Where can we park the car?"
    },
    {
      id: 3,
      text: "When can I visit your office?"
    },
    {
      id: 4,
      text: "Who can answer this question?"
    },
    {
      id: 5,
      text: "Why can't she come to the party?"
    },
    {
      id: 6,
      text: "How can I get to the train station?"
    }
  ];

  return (
    <div className={styles.pg214Container}>
      <h1 className={styles.pg214Title}>Exercises</h1>

      <div className={styles.pg214ExerciseSection}>
        <h2 className={styles.pg214ExerciseTitle}>
          1. Fill in the blanks by completing each question using:
          <br />
          What, Where, When, Who, or How.
        </h2>
        
        <div className={styles.pg214QuestionsBox}>
          {questions.map((question) => (
            <div key={question.id} className={styles.pg214Line}>
              <span className={styles.pg214Number}>{question.id}.</span>
              <span className={styles.pg214Text}>{question.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.pg214AnswerSection}>
        <h2 className={styles.pg214AnswerTitle}>Check - Answer Key</h2>
        <div className={styles.pg214AnswerBox}>
          {answers.map((answer) => (
            <div key={answer.id} className={styles.pg214Line}>
              <span className={styles.pg214Number}>{answer.id}.</span>
              <span className={styles.pg214Text}>{answer.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagina214;