import React, { useState } from 'react';
import styles from './pagina354.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

// Dados para o exercício 15: Word Order
const questionsEx15 = [
  { id: 1, words: "you / see / When / will / us?", answer: "When will you see us?" },
  { id: 2, words: "will / Who / come / tomorrow?", answer: "Who will come tomorrow?" },
  { id: 3, words: "call / I / later / will / you", answer: "I will call you later." },
  { id: 4, words: "not / be / will / He / there", answer: "He will not be there." },
  { id: 5, words: "the / finish / We / will / project / soon", answer: "We will finish the project soon." }
];

// Função para normalizar strings (remover espaços extras, pontuação e converter para minúsculas)
const normalize = (str) => {
  if (str === null || str === undefined) return '';
  return str.trim().replace(/[.,?]/g, '').replace(/\s+/g, ' ').toLowerCase();
};

const Pagina354 = () => {
  // Estados para o exercício 15: Word Order
  const [inputValuesEx15, setInputValuesEx15] = useState(Array(questionsEx15.length).fill(''));
  const [resultsEx15, setResultsEx15] = useState(Array(questionsEx15.length).fill(null));

  // Handler para mudança de input
  const handleInputChangeEx15 = (value, index) => {
    const updatedValues = [...inputValuesEx15];
    updatedValues[index] = value;
    setInputValuesEx15(updatedValues);
  };

  // Handler para o botão Check
  const handleCheckClickEx15 = () => {
    const evaluatedResults = inputValuesEx15.map((input, i) => {
      const userInput = normalize(input);
      const correctAnswer = normalize(questionsEx15[i].answer);
      return userInput === correctAnswer;
    });
    setResultsEx15(evaluatedResults);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1><span className={styles.exercisesRed}>Exercises</span></h1>
      </header>

      {/* Exercício 15: Word Order */}
      <p className={styles.instructionRed}>
        <strong>15. Word Order</strong>
      </p>

      <div className={styles.questionBox}>
        <main className={styles.main}>
          {questionsEx15.map((q, index) => (
            <div key={q.id} className={styles.question}>
              <span>{q.id}. {q.words}</span>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  value={inputValuesEx15[index]}
                  onChange={(e) => handleInputChangeEx15(e.target.value, index)}
                  className={styles.input}
                  placeholder={inputValuesEx15[index] === '' ? "Type the correct order" : ""}
                />
                {resultsEx15[index] !== null && (
                  <img
                    src={resultsEx15[index] ? correctIcon : wrongIcon}
                    alt={resultsEx15[index] ? "Correct" : "Incorrect"}
                    className={styles.resultIcon}
                  />
                )}
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className={styles.checkContainer}>
        <button className={styles.checkButton} onClick={handleCheckClickEx15}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina354;
