import React, { useState } from 'react';
import styles from './pagina272.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

const leftItems = [
  { id: 1, word: "Tall", answer: "d" },
  { id: 2, word: "Expensive", answer: "a" },
  { id: 3, word: "Friendly", answer: "b" },
  { id: 4, word: "Delicious", answer: "c" },
];

const rightItems = [
  { letter: "a", meaning: "Costs a lot of money" },
  { letter: "b", meaning: "Kind and nice to others" },
  { letter: "c", meaning: "Tastes very good" },
  { letter: "d", meaning: "Has great height" },
];

const normalize = (str) => str.trim().toLowerCase();

const Pagina272 = () => {
  const [inputs, setInputs] = useState(Array(leftItems.length).fill(''));
  const [results, setResults] = useState(Array(leftItems.length).fill(null));

  const handleInputChange = (value, index) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  const handleCheckClick = () => {
    const newResults = inputs.map((input, i) => {
      return normalize(input) === leftItems[i].answer;
    });
    setResults(newResults);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1><span className={styles.grammarRed}>Grammar</span> - <span className={styles.grammarBold}>Adjectives</span></h1>
      </header>

      <p className={styles.instruction}>
        <strong>5.</strong> Match the adjective to its meaning:
      </p>

      <div className={styles.matchBox}>
        <div className={styles.leftBox}>
          {leftItems.map((item, index) => (
            <div key={item.id} className={styles.matchItem}>
              <span>{item.id} -</span>
              <input
                type="text"
                maxLength={1}
                value={inputs[index]}
                onChange={(e) => handleInputChange(e.target.value, index)}
                className={styles.input}
              />
              <span>{item.word}</span>
              {results[index] !== null && (
                <img
                  src={results[index] ? correctIcon : wrongIcon}
                  alt={results[index] ? "Correct" : "Incorrect"}
                  className={styles.resultIcon}
                />
              )}
            </div>
          ))}
        </div>

        <div className={styles.rightBox}>
          {rightItems.map((item) => (
            <div key={item.letter} className={styles.definition}>
              <span>{item.letter}) {item.meaning}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.checkContainer}>
        <button className={styles.checkButton} onClick={handleCheckClick}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina272;
