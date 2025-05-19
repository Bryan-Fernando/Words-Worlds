import React from 'react';
import styles from './pagina215.module.css';

const Pagina215 = () => {
  const questions = [
    {
      id: 1,
      text: "_____ can you speak Spanish so well?"
    },
    {
      id: 2,
      text: "_____ can help me with my homework?"
    },
    {
      id: 3,
      text: "_____ can I find the nearest pharmacy?"
    },
    {
      id: 4,
      text: "_____ can you do with a computer?"
    },
    {
      id: 5,
      text: "_____ can I call you?"
    }
  ];

  const answers = [
    {
      id: 1,
      text: "How can you speak Spanish so well?"
    },
    {
      id: 2,
      text: "Who can help me with my homework?"
    },
    {
      id: 3,
      text: "Where can I find the nearest pharmacy?"
    },
    {
      id: 4,
      text: "What can you do with a computer?"
    },
    {
      id: 5,
      text: "When can I call you?"
    }
  ];

  return (
    <div className={styles.pg215Container}>
      <h1 className={styles.pg215Title}>Exercises</h1>

      <div className={styles.pg215ExerciseSection}>
        <h2 className={styles.pg215ExerciseTitle}>
          2. Fill in the blanks by completing each question using:
          <br />
          What, Where, When, Who, or How.
        </h2>
        
        <div className={styles.pg215QuestionsBox}>
          {questions.map((question) => (
            <div key={question.id} className={styles.pg215Line}>
              <span className={styles.pg215Number}>{question.id}.</span>
              <span className={styles.pg215Text}>{question.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.pg215AnswerSection}>
        <h2 className={styles.pg215AnswerTitle}>Check - Answer Key</h2>
        <div className={styles.pg215AnswerBox}>
          {answers.map((answer) => (
            <div key={answer.id} className={styles.pg215Line}>
              <span className={styles.pg215Number}>{answer.id}.</span>
              <span className={styles.pg215Text}>{answer.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagina215;