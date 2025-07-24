import React, { useState } from 'react';
import styles from './pagina344.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

// Dados para o exercício 5: Matching
const leftItems = [
  { id: 1, text: "I will call you", answer: "a" },
  { id: 2, text: "He will travel", answer: "c" },
  { id: 3, text: "They won't", answer: "b" },
];

const rightItems = [
  { letter: "a", meaning: "after dinner" },
  { letter: "b", meaning: "be here on time" },
  { letter: "c", meaning: "to France" },
];

// Função para normalizar strings (remover espaços extras e converter para minúsculas)
const normalize = (str) => {
  if (str === null || str === undefined) return '';
  return str.trim().toLowerCase();
};

const Pagina344 = () => {
  // Estados para o exercício 5: Matching
  const [inputs, setInputs] = useState(Array(leftItems.length).fill(''));
  const [results, setResults] = useState(Array(leftItems.length).fill(null));

  // Handler para mudança de input
  const handleInputChange = (value, index) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  // Handler para o botão Check
  const handleCheckClick = () => {
    const newResults = inputs.map((input, i) => {
      const userInput = normalize(input);
      const correctAnswer = normalize(leftItems[i].answer);
      return userInput === correctAnswer;
    });
    setResults(newResults);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1><span className={styles.exercisesRed}>Exercises</span></h1>
      </header>

      {/* Exercício 5: Matching */}
      <p className={styles.instructionRed}>
        <strong>5. Matching</strong>
      </p>

      <div className={styles.matchBox}>
        <div className={styles.leftBox}>
          {leftItems.map((item, index) => (
            <div key={item.id} className={styles.matchItem}>
              <span>{item.id}.</span>
              <input
                type="text"
                maxLength={1}
                value={inputs[index]}
                onChange={(e) => handleInputChange(e.target.value, index)}
                className={styles.input}
              />
              <span>{item.text}</span>
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

export default Pagina344;
