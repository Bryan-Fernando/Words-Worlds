import React, { useState } from 'react';
import styles from './pagina269.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

const questions = [
  {
    scrambled: "a) the / is / fastest / car / this",
    answer: "this is the fastest car"
  },
  {
    scrambled: "b) more / book / interesting / is / this",
    answer: "this book is more interesting"
  },
  {
    scrambled: "c) Mary's / than / her / taller / is / sister",
    answer: "mary's sister is taller than her"
  },
  {
    scrambled: "d) the / comfortable / is / chair / most / this",
    answer: "this is the most comfortable chair"
  }
];

const normalize = (str) =>
  str.trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina269 = () => {
  const [inputValues, setInputValues] = useState(Array(questions.length).fill(''));
  const [results, setResults] = useState(Array(questions.length).fill(null));

  const handleInputChange = (value, index) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  };

  const handleCheckClick = () => {
    const newResults = inputValues.map((input, i) => {
      return normalize(input) === normalize(questions[i].answer);
    });
    setResults(newResults);
  };

  return (
    <div className={styles.page269__container}>
      <header className={styles.page269__header}>
        <h1><span className={styles.page269__grammarRed}>Grammar</span> - <span className={styles.page269__grammarBold}>Adjectives</span></h1>
      </header>

      <p className={styles.page269__instruction}>
        <strong>2.</strong> Put the words in the correct order:
      </p>

      <div className={styles.page269__questionBox}>
        <main className={styles.page269__main}>
          {questions.map((q, index) => (
            <div key={index} className={styles.page269__question}>
              <span>{q.scrambled}</span>
              <input
                type="text"
                value={inputValues[index]}
                onChange={(e) => handleInputChange(e.target.value, index)}
                className={styles.page269__input}
              />
              {results[index] !== null && (
                <img
                  src={results[index] ? correctIcon : wrongIcon}
                  alt={results[index] ? "Correct" : "Incorrect"}
                  className={styles.page269__resultIcon}
                />
              )}
            </div>
          ))}
        </main>
      </div>

      <div className={styles.page269__checkContainer}>
        <button className={styles.page269__checkButton} onClick={handleCheckClick}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina269;
