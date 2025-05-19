import React from 'react';
import styles from './pagina222.module.css';

const Pagina222 = () => {
  const exercises = [
    {
      id: 1,
      words: "swim / can / I / well"
    },
    {
      id: 2,
      words: "you / can / help / He"
    },
    {
      id: 3,
      words: "a / bike / ride / can / She"
    },
    {
      id: 4,
      words: "The / dog / catch / ball / can / the"
    }
  ];

  const answers = [
    {
      id: 1,
      answer: "I can swim well."
    },
    {
      id: 2,
      answer: "He can help you"
    },
    {
      id: 3,
      answer: "She can ride a bike."
    },
    {
      id: 4,
      answer: "The dog can catch the ball."
    }
  ];

  return (
    <div className={styles.pg222Container}>
      <h1 className={styles.pg222Title}>Exercises</h1>

      <div className={styles.pg222ExerciseSection}>
        <h2 className={styles.pg222ExerciseTitle}>9. Put the words in the correct order</h2>
        <div className={styles.pg222WordsBox}>
          {exercises.map((exercise) => (
            <div key={exercise.id} className={styles.pg222WordLine}>
              <span className={styles.pg222Number}>{exercise.id}.</span>
              <span className={styles.pg222Words}>{exercise.words}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.pg222AnswerSection}>
        <h2 className={styles.pg222AnswerTitle}>Check - Answer Key</h2>
        <div className={styles.pg222AnswerBox}>
          {answers.map((answer) => (
            <div key={answer.id} className={styles.pg222AnswerLine}>
              <span className={styles.pg222Number}>{answer.id}.</span>
              <span className={styles.pg222Answer}>{answer.answer}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagina222;