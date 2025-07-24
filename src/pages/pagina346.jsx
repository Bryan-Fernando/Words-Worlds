import React, { useState } from 'react';
import styles from './pagina346.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

// Dados para o exercício 7: Question Formation
const questionFormationQuestions = [
  { id: 1, words: "(you / be / at the meeting?)", answer: "Will you be at the meeting?" },
  { id: 2, words: "(he / call / me / tonight?)", answer: "Will he call me tonight?" },
  { id: 3, words: "(we / travel / by train?)", answer: "Will we travel by train?" },
  { id: 4, words: "(they / arrive / on time?)", answer: "Will they arrive on time?" },
  { id: 5, words: "(she / help / us / with the presentation?)", answer: "Will she help us with the presentation?" }
];

// Função para normalizar strings (remover espaços extras e converter para minúsculas)
const normalize = (str) => {
  if (str === null || str === undefined) return '';
  // Remove espaços extras, mantém pontuação e converte para minúsculas
  return str.trim().replace(/\s+/g, ' ').toLowerCase();
};

const Pagina346 = () => {
  // Estados para o exercício 7: Question Formation
  const [inputValuesEx7, setInputValuesEx7] = useState(Array(questionFormationQuestions.length).fill(''));
  const [resultsEx7, setResultsEx7] = useState(Array(questionFormationQuestions.length).fill(null));

  // Handler para mudança de input
  const handleInputChangeEx7 = (value, index) => {
    const updatedValues = [...inputValuesEx7];
    updatedValues[index] = value;
    setInputValuesEx7(updatedValues);
  };

  // Handler para o botão Check
  const handleCheckClickEx7 = () => {
    const evaluatedResults = inputValuesEx7.map((input, i) => {
      const userInput = normalize(input);
      const correctAnswer = normalize(questionFormationQuestions[i].answer);
      return userInput === correctAnswer;
    });
    setResultsEx7(evaluatedResults);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1><span className={styles.exercisesRed}>Exercises</span></h1>
      </header>

      {/* Exercício 7: Question Formation */}
      <p className={styles.instructionRed}>
        <strong>7. Question Formation</strong>
      </p>
      <p className={styles.instruction}>
        Write a question using "Will" and the words provided.
      </p>

      <div className={styles.questionBox}>
        <main className={styles.main}>
          {questionFormationQuestions.map((q, index) => (
            <div key={q.id} className={styles.question}>
              <span>{q.id}. {q.words}</span>
              <div className={styles.inputContainer}>
                <span className={styles.arrow}>→</span>
                <input
                  type="text"
                  value={inputValuesEx7[index]}
                  onChange={(e) => handleInputChangeEx7(e.target.value, index)}
                  className={styles.input}
                  placeholder={inputValuesEx7[index] === '' ? "Type the question" : ""}
                />
                {resultsEx7[index] !== null && (
                  <img
                    src={resultsEx7[index] ? correctIcon : wrongIcon}
                    alt={resultsEx7[index] ? "Correct" : "Incorrect"}
                    className={styles.resultIcon}
                  />
                )}
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className={styles.checkContainer}>
        <button className={styles.checkButton} onClick={handleCheckClickEx7}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina346;
