import React from 'react';
import styles from './pagina221.module.css';

const Pagina221 = () => {
  const questions = [
    {
      id: 1,
      text: "Can she drive a car?",
      options: ["Yes, she can;", "No, he can't;", "Yes, we can"]
    },
    {
      id: 2,
      text: "Can you speak Spanish?",
      options: ["Yes, I do;", "Yes, I can;", "No, I am not"]
    },
    {
      id: 3,
      text: "Can they swim?",
      options: ["Yes, they can;", "Yes, they are;", "No, they doesn't"]
    },
    {
      id: 4,
      text: "Can he play football?",
      options: ["Yes, he can;", "Yes, he is;", "No, he don't"]
    }
  ];

  const answers = [
    {
      id: 1,
      text: "Yes, she can"
    },
    {
      id: 2,
      text: "Yes, I can"
    },
    {
      id: 3,
      text: "Yes, they can"
    },
    {
      id: 4,
      text: "Yes, he can"
    }
  ];

  return (
    <div className={styles.pg221Container}>
      <h1 className={styles.pg221Title}>Exercises</h1>

      <div className={styles.pg221ExerciseSection}>
        <h2 className={styles.pg221ExerciseTitle}>8. Multiple choice</h2>
        
        <div className={styles.pg221QuestionsContainer}>
          {questions.map((question) => (
            <div key={question.id} className={styles.pg221QuestionBlock}>
              <div className={styles.pg221Question}>
                <span className={styles.pg221Number}>{question.id}.</span>
                <span className={styles.pg221QuestionText}>{question.text}</span>
              </div>
              <div className={styles.pg221Options}>{question.options.join(" ")}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.pg221AnswerSection}>
        <h2 className={styles.pg221AnswerTitle}>Check - Answer Key</h2>
        <div className={styles.pg221AnswerContainer}>
          {answers.map((answer) => (
            <div key={answer.id} className={styles.pg221AnswerLine}>
              <span className={styles.pg221Number}>{answer.id}.</span>
              <span className={styles.pg221Answer}>{answer.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagina221;