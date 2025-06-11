import React, { useState } from 'react';
import styles from './pagina218.module.css';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';

const Pagina218 = () => {
  const [inputValues, setInputValues] = useState(Array(4).fill(''));
  const [results, setResults] = useState(Array(4).fill(null));

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

  const correctQuestions = [
    "Can you swim?",
    "Can he cook?",
    "Can they drive?",
    "Can we go out tonight?"
  ];

  const handleInputChange = (value, index) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  const handleCheckClick = () => {
    const newResults = inputValues.map((value, index) => {
      if (!value.trim()) return false;
      const trimmedValue = value.trim().toLowerCase();
      const correctValue = correctQuestions[index].toLowerCase();
      return trimmedValue === correctValue;
    });
    setResults(newResults);
  };

  return (
    <div className={styles.pg218Container}>
      <h1 className={styles.pg218Title}>Exercises</h1>

      <div className={styles.pg218ExerciseSection}>
        <h2 className={styles.pg218ExerciseTitle}>5. Make questions to the given answers</h2>
        
        <div className={styles.pg218AnswersBox}>
          {answers.map((answer, index) => (
            <div key={answer.id} className={styles.pg218Line}>
              <div className={styles.pg218SentenceWrapper}>
                <span className={styles.pg218Number}>{answer.id}.</span>
                <span className={styles.pg218Text}>{answer.text}</span>
              </div>
              <div className={styles.pg218InputWrapper}>
                <input
                  type="text"
                  value={inputValues[index] || ""}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  className={styles.pg218Input}
                  placeholder="Write the question"
                />
                {results[index] !== null && (
                  <img
                    src={results[index] ? correct_icon : wrong_icon}
                    alt={results[index] ? "Correct" : "Incorrect"}
                    className={styles.pg218CheckIcon}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleCheckClick} className={styles.pg218CheckButton}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina218;