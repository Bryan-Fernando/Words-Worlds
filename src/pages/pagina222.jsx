import React, { useState } from 'react';
import styles from './pagina222.module.css';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';

const Pagina222 = () => {
  const [userAnswers, setUserAnswers] = useState(['', '', '', '']);
  const [showResults, setShowResults] = useState(false);

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
      answer: "I can swim well"
    },
    {
      id: 2,
      answer: "He can help you"
    },
    {
      id: 3,
      answer: "She can ride a bike"
    },
    {
      id: 4,
      answer: "The dog can catch the ball"
    }
  ];

  const handleInputChange = (index, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const handleCheck = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setUserAnswers(['', '', '', '']);
    setShowResults(false);
  };

  return (
    <div className={styles.pg222Container}>
      <h1 className={styles.pg222Title}>Exercises</h1>

      <div className={styles.pg222ExerciseSection}>
        <h2 className={styles.pg222ExerciseTitle}>9. Put the words in the correct order</h2>
        <div className={styles.pg222WordsBox}>
          {exercises.map((exercise, index) => (
            <div key={exercise.id} className={styles.pg222WordLine}>
              <span className={styles.pg222Number}>{exercise.id}.</span>
              <span className={styles.pg222Words}>{exercise.words}</span>
              <div className={styles.pg222InputContainer}>
                <input
                  type="text"
                  value={userAnswers[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className={styles.pg222Input}
                  placeholder="Type your answer"
                  disabled={showResults}
                />
                {showResults && (
                  <img
                    src={userAnswers[index].trim().toLowerCase() === answers[index].answer.toLowerCase() ? correct_icon : wrong_icon}
                    alt={userAnswers[index].trim().toLowerCase() === answers[index].answer.toLowerCase() ? "Correct" : "Incorrect"}
                    className={styles.pg222ResultIcon}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pg222ButtonsContainer}>
          <button
            className={styles.pg222CheckButton}
            onClick={handleCheck}
            disabled={showResults || userAnswers.some(answer => !answer.trim())}
          >
            Check
          </button>
          {showResults && (
            <button
              className={styles.pg222ResetButton}
              onClick={handleReset}
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagina222;