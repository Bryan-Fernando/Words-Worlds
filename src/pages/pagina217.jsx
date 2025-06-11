import React, { useState } from 'react';
import styles from './pagina217.module.css';
import correct_icon from '../assets/icons/correct_icon.webp';
import wrong_icon from '../assets/icons/wrong_icon.webp';

const Pagina217 = () => {
  const [inputValues, setInputValues] = useState(Array(4).fill(''));
  const [results, setResults] = useState(Array(4).fill(null));

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

  const correctAnswers = [
    "I can't speak French",
    "She can't play the guitar",
    "They can't come to the party",
    "We can't run fast"
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
      const correctValue = correctAnswers[index].toLowerCase();
      return trimmedValue === correctValue;
    });
    setResults(newResults);
  };

  return (
    <div className={styles.pg217Container}>
      <h1 className={styles.pg217Title}>Exercises</h1>

      <div className={styles.pg217ExerciseSection}>
        <h2 className={styles.pg217ExerciseTitle}>4. Change into the negative form</h2>
        
        <div className={styles.pg217SentencesBox}>
          {sentences.map((sentence, index) => (
            <div key={sentence.id} className={styles.pg217Line}>
              <span className={styles.pg217Number}>{sentence.id}.</span>
              <span className={styles.pg217Text}>{sentence.text}</span>
              <input
                type="text"
                value={inputValues[index] || ""}
                onChange={(e) => handleInputChange(e.target.value, index)}
                className={styles.pg217Input}
                placeholder="Write the negative form"
              />
              {results[index] !== null && (
                <img
                  src={results[index] ? correct_icon : wrong_icon}
                  alt={results[index] ? "Correct" : "Incorrect"}
                  className={styles.pg217CheckIcon}
                />
              )}
            </div>
          ))}
        </div>

        <button onClick={handleCheckClick} className={styles.pg217CheckButton}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina217;