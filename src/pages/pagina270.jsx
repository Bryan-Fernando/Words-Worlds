import React, { useState } from 'react';
import styles from './pagina270Pagina270.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

const questions = [
  {
    sentence: "a) My bike is __________ than yours. Options: faster, fastest, more fast",
    answer: "faster"
  },
  {
    sentence: "b) This book is the __________ of all. Options: interesting, more interesting, most interesting",
    answer: "most interesting"
  },
  {
    sentence: "c) Peter is __________ than David. Options: tall, taller, more tall",
    answer: "taller"
  },
  {
    sentence: "d) That test was __________ than I expected. Options: difficult, more difficult, most difficult",
    answer: "more difficult"
  },
  {
    sentence: "e) This cake is __________. Options: delicious, more delicious, the most delicious",
    answer: "delicious"
  }
];

const normalize = (str) =>
  str.trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina270 = () => {
  const [inputValues, setInputValues] = useState(Array(questions.length).fill(''));
  const [results, setResults] = useState(Array(questions.length).fill(null));

  const handleInputChange = (value, index) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
  };

  const handleCheckClick = () => {
    const evaluatedResults = inputValues.map((input, i) => {
      return normalize(input) === normalize(questions[i].answer);
    });
    setResults(evaluatedResults);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1><span className={styles.grammarRed}>Grammar</span> - <span className={styles.grammarBold}>Adjectives</span></h1>
      </header>

      <p className={styles.instruction}>
        <strong>3.</strong> Choose the correct option:
      </p>

      <div className={styles.questionBox}>
        <main className={styles.main}>
          {questions.map((q, index) => {
            const [before, after] = q.sentence.split('__________');

            return (
              <div key={index} className={styles.question}>
                <span>{before}</span>
                <input
                  type="text"
                  value={inputValues[index]}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  className={styles.input}
                />
                <span>{after}</span>

                {results[index] !== null && (
                  <img
                    src={results[index] ? correctIcon : wrongIcon}
                    alt={results[index] ? "Correct" : "Incorrect"}
                    className={styles.resultIcon}
                  />
                )}
              </div>
            );
          })}
        </main>
      </div>

      <div className={styles.checkContainer}>
        <button className={styles.checkButton} onClick={handleCheckClick}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina270;
