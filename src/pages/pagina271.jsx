import React, { useState } from 'react';
import styles from './pagina271.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

const questions = [
  {
    original: "a) This room is big. (bigger)",
    answer: "this room is bigger."
  },
  {
    original: "b) That mountain is high. (the highest)",
    answer: "that is the highest mountain."
  },
  {
    original: "c) She is pretty. (prettier than Anna)",
    answer: "she is prettier than anna."
  },
  {
    original: "d) My phone is good. (the best)",
    answer: "my phone is the best."
  }
];

const normalize = (str) =>
  str.trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina271 = () => {
  const [inputValues, setInputValues] = useState(Array(questions.length).fill(''));
  const [results, setResults] = useState(Array(questions.length).fill(null));

  const handleInputChange = (value, index) => {
    const updated = [...inputValues];
    updated[index] = value;
    setInputValues(updated);
  };

  const handleCheckClick = () => {
    const newResults = inputValues.map((input, i) => {
      return normalize(input) === normalize(questions[i].answer);
    });
    setResults(newResults);
  };

  return (
    <div className={styles.page271__container}>
      <header className={styles.page271__header}>
        <h1><span className={styles.page271__grammarRed}>Grammar</span> - <span className={styles.page271__grammarBold}>Adjectives</span></h1>
      </header>

      <p className={styles.page271__instruction}>
        <strong>4.</strong> Rewrite the sentence using the word in parentheses:
      </p>

      <div className={styles.page271__questionBox}>
        <main className={styles.page271__main}>
          {questions.map((q, index) => (
            <div key={index} className={styles.page271__question}>
              <span className={styles.page271__original}>{q.original}</span>
              <div className={styles.page271__inputWrapper}>
                <input
                  type="text"
                  value={inputValues[index]}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  className={styles.page271__input}
                />
                {results[index] !== null && (
                  <img
                    src={results[index] ? correctIcon : wrongIcon}
                    alt={results[index] ? "Correct" : "Incorrect"}
                    className={styles.page271__resultIcon}
                  />
                )}
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className={styles.page271__checkContainer}>
        <button className={styles.page271__checkButton} onClick={handleCheckClick}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina271;