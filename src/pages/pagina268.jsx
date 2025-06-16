import React, { useState } from 'react';
import styles from './pagina268.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

const questions = [
  { sentence: "a) John is __________ than Mike. (tall)", answer: "taller than" },
  { sentence: "b) This sofa is __________ than the old one. (comfortable)", answer: "more comfortable than" },
  { sentence: "c) My cat is __________ than yours. (small)", answer: "smaller than" },
  { sentence: "d) She is the __________ student in the class. (intelligent)", answer: "most intelligent" },
  { sentence: "e) That was the __________ movie I've ever seen. (funny)", answer: "funniest" },
  { sentence: "f) This exam is __________ than the last one. (difficult)", answer: "more difficult than" }
];

const normalize = (str) => str.trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina268 = () => {
  const [inputValues, setInputValues] = useState(Array(questions.length).fill(''));
  const [results, setResults] = useState(Array(questions.length).fill(null));

  const handleInputChange = (value, index) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
  };

  const handleCheckClick = () => {
    const evaluatedResults = inputValues.map((input, i) => {
      const userInput = normalize(input);
      const correctAnswer = normalize(questions[i].answer);
      return userInput === correctAnswer;
    });
    setResults(evaluatedResults);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1><span className={styles.grammarRed}>Grammar</span> - <span className={styles.grammarBold}>Adjectives</span></h1>
      </header>

      <p className={styles.instruction}>
        <strong>1.</strong> Fill in the blanks with the correct form of the adjective:
      </p>

      <div className={styles.questionBox}>
        <main className={styles.main}>
          {questions.map((q, index) => {
            const [beforeBlank, afterBlank] = q.sentence.split('__________');

            return (
              <div key={index} className={styles.question}>
                <span>{beforeBlank}</span>
                <input
                  type="text"
                  value={inputValues[index]}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  className={styles.input}
                />
                <span>{afterBlank}</span>

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

      {/* ✅ Aqui está a correção aplicada */}
      <div className={styles.checkContainer}>
        <button className={styles.checkButton} onClick={handleCheckClick}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina268;
