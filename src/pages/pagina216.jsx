import React from 'react';
import styles from './pagina216.module.css';

const Pagina216 = () => {
  const questions = [
    {
      id: 1,
      text: "_____ can you do with your phone?"
    },
    {
      id: 2,
      text: "_____ can help me?"
    },
    {
      id: 3,
      text: "_____ can we go to the park?"
    },
    {
      id: 4,
      text: "_____ can they speak English faster?"
    }
  ];

  const answers = [
    {
      id: 1,
      text: "What can you do with your phone?"
    },
    {
      id: 2,
      text: "Who can help me?"
    },
    {
      id: 3,
      text: "When can we go to the park?"
    },
    {
      id: 4,
      text: "How can they speak English faster?"
    }
  ];

  return (
    <div className={styles.pg216Container}>
      <h1 className={styles.pg216Title}>Exercises</h1>

      <div className={styles.pg216ExerciseSection}>
        <h2 className={styles.pg216ExerciseTitle}>
          3. Fill in the blanks by completing each question using:
          <br />
          What, Where, When, Who, or How.
        </h2>
        
        <div className={styles.pg216QuestionsBox}>
          {questions.map((question) => (
            <div key={question.id} className={styles.pg216Line}>
              <span className={styles.pg216Number}>{question.id}.</span>
              <span className={styles.pg216Text}>{question.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.pg216AnswerSection}>
        <h2 className={styles.pg216AnswerTitle}>Check - Answer Key</h2>
        <div className={styles.pg216AnswerBox}>
          {answers.map((answer) => (
            <div key={answer.id} className={styles.pg216Line}>
              <span className={styles.pg216Number}>{answer.id}.</span>
              <span className={styles.pg216Text}>{answer.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagina216;
