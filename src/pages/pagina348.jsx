import React, { useState } from 'react';
import styles from './pagina348.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

// Dados para o exercício 9: Make Promises or Offers
const promisesOffersEx9 = [
  {
    id: 1,
    phrase: "(carry your bag)",
    correctAnswers: [
      "I will carry your bag.",
      "I'll carry your bag."
    ]
  },
  {
    id: 2,
    phrase: "(call you tonight)",
    correctAnswers: [
      "I will call you tonight.",
      "I'll call you tonight."
    ]
  },
  {
    id: 3,
    phrase: "(send the email now)",
    correctAnswers: [
      "I will send the email now.",
      "I'll send the email now."
    ]
  },
  {
    id: 4,
    phrase: "(bring the book tomorrow)",
    correctAnswers: [
      "I will bring the book tomorrow.",
      "I'll bring the book tomorrow."
    ]
  }
];

// Função para normalizar strings (remover espaços extras e converter para minúsculas)
const normalize = (str) => {
  if (str === null || str === undefined) return '';
  // Remove espaços extras, mantém pontuação e converte para minúsculas
  return str.trim().replace(/\s+/g, ' ').toLowerCase();
};

const Pagina348 = () => {
  // Estados para o exercício 9: Make Promises or Offers
  const [inputValuesEx9, setInputValuesEx9] = useState(Array(promisesOffersEx9.length).fill(''));
  const [resultsEx9, setResultsEx9] = useState(Array(promisesOffersEx9.length).fill(null));

  // Handler para mudança de input
  const handleInputChangeEx9 = (value, index) => {
    const updatedValues = [...inputValuesEx9];
    updatedValues[index] = value;
    setInputValuesEx9(updatedValues);
  };

  // Handler para o botão Check
  const handleCheckClickEx9 = () => {
    const evaluatedResults = inputValuesEx9.map((input, i) => {
      const userInput = normalize(input);
      // Verifica se o input do usuário corresponde a qualquer uma das respostas corretas
      return promisesOffersEx9[i].correctAnswers.some(correctAns => 
        normalize(correctAns) === userInput
      );
    });
    setResultsEx9(evaluatedResults);
  };

  return (
    <div className={styles.page348__container}>
      <header className={styles.page348__header}>
        <h1><span className={styles.page348__exercisesRed}>Exercises</span></h1>
      </header>

      {/* Exercício 9: Make Promises or Offers */}
      <p className={styles.page348__instructionRed}>
        <strong>9. Make Promises or Offers</strong>
      </p>
      <p className={styles.page348__instruction}>
        Write sentences using "I will..." to make a promise or an offer. Example: (help you) → I will help you / I'll help you
      </p>

      <div className={styles.page348__questionBox}>
        <main className={styles.page348__main}>
          {promisesOffersEx9.map((item, index) => (
            <div key={item.id} className={styles.page348__question}>
              <span>{item.id}. {item.phrase}</span>
              <div className={styles.page348__inputContainer}>
                <span className={styles.page348__arrow}>→</span>
                <input
                  type="text"
                  value={inputValuesEx9[index]}
                  onChange={(e) => handleInputChangeEx9(e.target.value, index)}
                  className={styles.page348__input}
                  placeholder={inputValuesEx9[index] === '' ? "Type your answer" : ""}
                />
                {resultsEx9[index] !== null && (
                  <img
                    src={resultsEx9[index] ? correctIcon : wrongIcon}
                    alt={resultsEx9[index] ? "Correct" : "Incorrect"}
                    className={styles.page348__resultIcon}
                  />
                )}
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className={styles.page348__checkContainer}>
        <button className={styles.page348__checkButton} onClick={handleCheckClickEx9}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina348;
