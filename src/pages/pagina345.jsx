import React, { useState } from 'react';
import styles from './pagina345.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

// Dados para o exercício 6: Word Order
const wordOrderQuestionsEx6 = [
  { id: 1, words: "help / I / you / will", answer: "I will help you" },
  { id: 2, words: "call / later / I / you / will", answer: "I will call you later" },
  { id: 3, words: "Will / it / tomorrow ? / rain", answer: "Will it rain tomorrow?" },
  { id: 4, words: "you / send / me / the / link ? / Will", answer: "Will you send me the link?" },
  { id: 5, words: "come / Will / she / party ? / the / to", answer: "Will she come to the party?" }
];

// Função para normalizar strings (remover espaços extras e converter para minúsculas)
const normalize = (str) => {
  if (str === null || str === undefined) return '';
  // Remove espaços extras, mantém pontuação e converte para minúsculas
  return str.trim().replace(/\s+/g, ' ').toLowerCase();
};

const Pagina345 = () => {
  // Estados para o exercício 6: Word Order
  const [inputValuesEx6, setInputValuesEx6] = useState(Array(wordOrderQuestionsEx6.length).fill(''));
  const [resultsEx6, setResultsEx6] = useState(Array(wordOrderQuestionsEx6.length).fill(null));

  // Handler para mudança de input
  const handleInputChangeEx6 = (value, index) => {
    const updatedValues = [...inputValuesEx6];
    updatedValues[index] = value;
    setInputValuesEx6(updatedValues);
  };

  // Handler para o botão Check
  const handleCheckClickEx6 = () => {
    const evaluatedResults = inputValuesEx6.map((input, i) => {
      const userInput = normalize(input);
      const correctAnswer = normalize(wordOrderQuestionsEx6[i].answer);
      return userInput === correctAnswer;
    });
    setResultsEx6(evaluatedResults);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1><span className={styles.exercisesRed}>Exercises</span></h1>
      </header>

      {/* Exercício 6: Word Order */}
      <p className={styles.instructionRed}>
        <strong>6. Word Order</strong>
      </p>

      <div className={styles.questionBox}>
        <main className={styles.main}>
          {wordOrderQuestionsEx6.map((q, index) => (
            <div key={q.id} className={styles.question}>
              <span>{q.id}. {q.words}</span>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  value={inputValuesEx6[index]}
                  onChange={(e) => handleInputChangeEx6(e.target.value, index)}
                  className={styles.input}
                  placeholder={inputValuesEx6[index] === '' ? "Type the correct order" : ""}
                />
                {resultsEx6[index] !== null && (
                  <img
                    src={resultsEx6[index] ? correctIcon : wrongIcon}
                    alt={resultsEx6[index] ? "Correct" : "Incorrect"}
                    className={styles.resultIcon}
                  />
                )}
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className={styles.checkContainer}>
        <button className={styles.checkButton} onClick={handleCheckClickEx6}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina345;
