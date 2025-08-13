import React, { useState } from 'react';
import styles from './pagina349.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

// Dados para o exercício 10: Matching – Questions and Responses
const matchingQuestionsEx10 = [
  {
    id: 1,
    question: "Will you help me clean the room?",
    correctAnswer: "c"
  },
  {
    id: 2,
    question: "Will they be here on time?",
    correctAnswer: "d"
  },
  {
    id: 3,
    question: "Will she bring her guitar?",
    correctAnswer: "b"
  },
  {
    id: 4,
    question: "Will you come to the picnic?",
    correctAnswer: "a"
  }
];

const responseOptionsEx10 = [
  { letter: "a", text: "Yes, I'll be there!" },
  { letter: "b", text: "Yes, I think she will." },
  { letter: "c", text: "Sure, I'll do it now." },
  { letter: "d", text: "No, I don't think so." }
];

// Função para normalizar strings (remover espaços extras e converter para minúsculas)
const normalize = (str) => {
  if (str === null || str === undefined) return '';
  return str.trim().toLowerCase();
};

const Pagina349 = () => {
  // Estados para o exercício 10: Matching – Questions and Responses
  const [inputValuesEx10, setInputValuesEx10] = useState(Array(matchingQuestionsEx10.length).fill(''));
  const [resultsEx10, setResultsEx10] = useState(Array(matchingQuestionsEx10.length).fill(null));

  // Handler para mudança de input
  const handleInputChangeEx10 = (value, index) => {
    const updatedValues = [...inputValuesEx10];
    updatedValues[index] = value;
    setInputValuesEx10(updatedValues);
  };

  // Handler para o botão Check
  const handleCheckClickEx10 = () => {
    const evaluatedResults = inputValuesEx10.map((input, i) => {
      const userInput = normalize(input);
      const correctAnswer = normalize(matchingQuestionsEx10[i].correctAnswer);
      return userInput === correctAnswer;
    });
    setResultsEx10(evaluatedResults);
  };

  return (
    <div className={styles.page349__container}>
      <header className={styles.page349__header}>
        <h1><span className={styles.page349__exercisesRed}>Exercises</span></h1>
      </header>

      {/* Exercício 10: Matching – Questions and Responses */}
      <p className={styles.page349__instructionRed}>
        <strong>10. Matching – Questions and Responses</strong>
      </p>
      <p className={styles.page349__instruction}>
        Match the questions (A) with the most appropriate responses (B).
      </p>

      <div className={styles.page349__matchBox}>
        <div className={styles.page349__leftBox}>
          {matchingQuestionsEx10.map((item, index) => (
            <div key={item.id} className={styles.page349__matchItem}>
              <span>{item.id}.</span>
              <input
                type="text"
                maxLength={1}
                value={inputValuesEx10[index]}
                onChange={(e) => handleInputChangeEx10(e.target.value, index)}
                className={styles.page349__input}
              />
              <span>{item.question}</span>
              {resultsEx10[index] !== null && (
                <img
                  src={resultsEx10[index] ? correctIcon : wrongIcon}
                  alt={resultsEx10[index] ? "Correct" : "Incorrect"}
                  className={styles.page349__resultIcon}
                />
              )}
            </div>
          ))}
        </div>

        <div className={styles.page349__rightBox}>
          {responseOptionsEx10.map((item) => (
            <div key={item.letter} className={styles.page349__definition}>
              <span>{item.letter}. {item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.page349__checkContainer}>
        <button className={styles.page349__checkButton} onClick={handleCheckClickEx10}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina349;
