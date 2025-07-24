import React, { useState } from "react";
import styles from "./pagina352.module.css";
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

// Dados para o exercício 13: Fill in the blanks with "will"
const questionsEx13 = [
  {
    id: 'a',
    parts: [
      { textBefore: "", textAfter: " the captain speak to the passengers during the flight?", answer: "Will" },
      { textBefore: "Yes, he ", textAfter: " give updates and share the weather forecast.", answer: "will" }
    ]  
  },
  {
    id: 'b',
    parts: [
      { textBefore: "", textAfter: " the plane arrive on time?", answer: "Will" },
      { textBefore: "I think it ", textAfter: " land a few minutes early.", answer: "will" }
    ]
  },
  {
    id: 'c',
    parts: [
      { textBefore: "Who ", textAfter: " assist us with boarding?", answer: "will" },
      { textBefore: "The flight attendants ", textAfter: " help us find our seats.", answer: "will" }
    ]
  },
  {
    id: 'd',
    parts: [
      { textBefore: "", textAfter: " you fly to New York again next month?", answer: "Will" },
      { textBefore: "Yes, I ", textAfter: " go there for another business meeting.", answer: "will" }
    ]
  }
];

// Função para normalizar strings (remover espaços extras e converter para minúsculas)
const normalize = (str) => {
  if (str === null || str === undefined) return '';
  return str.trim().replace(/\s+/g, ' ').toLowerCase();
};

const Pagina352 = () => {
  const [inputValuesEx13, setInputValuesEx13] = useState(
    questionsEx13.map(question => Array(question.parts.length).fill(''))
  );
  
  // resultsEx13 armazena um boolean por questão (true se todas as partes corretas, false caso contrário)
  const [resultsEx13, setResultsEx13] = useState(
    Array(questionsEx13.length).fill(null) // null significa não verificado ainda
  );

  const handleInputChangeEx13 = (questionIndex, partIndex, value) => {
    const updatedValues = [...inputValuesEx13];
    updatedValues[questionIndex][partIndex] = value;
    setInputValuesEx13(updatedValues);
    // Resetar o resultado da questão para null ao digitar, para remover o ícone
    const updatedResults = [...resultsEx13];
    updatedResults[questionIndex] = null;
    setResultsEx13(updatedResults);
  };

  const handleCheckClickEx13 = () => {
    const evaluatedResults = questionsEx13.map((question, questionIndex) => {
      // Verifica se TODAS as partes da questão estão corretas
      const allPartsCorrect = question.parts.every((part, partIndex) => {
        const userInput = normalize(inputValuesEx13[questionIndex][partIndex]);
        const correctAnswer = normalize(part.answer);
        return userInput === correctAnswer;
      });
      return allPartsCorrect;
    });
    setResultsEx13(evaluatedResults);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1><span className={styles.exercisesRed}>Exercises</span></h1>
      </header>

      <p className={styles.instructionRed}>
        <strong>13. Fill in the blanks with "will"</strong>
      </p>

      <div className={styles.questionBox}>
        <main className={styles.dialoguesContainer}>
          {questionsEx13.map((question, questionIndex) => (
            <div key={question.id} className={styles.dialogueItem}>
              <div className={styles.itemNumberContainer}>
                <span className={styles.itemNumber}>{question.id})</span>
              </div>
              
              <div className={styles.dialogueContentWrapper}>
                {question.parts.map((part, partIndex) => (
                  <div key={`${question.id}-${partIndex}`} className={styles.dialoguePart}>
                    {partIndex === 0 ? (
                      // Primeira parte (pergunta)
                      <>
                        <span className={styles.dialogueText}>{part.textBefore}</span>
                        <input
                          type="text"
                          value={inputValuesEx13[questionIndex][partIndex]}
                          onChange={(e) => handleInputChangeEx13(questionIndex, partIndex, e.target.value)}
                          className={styles.dialogueInput}
                        />
                        <span className={styles.dialogueText}>{part.textAfter}</span>
                      </>
                    ) : (
                      // Partes subsequentes (respostas)
                      <>
                        <span className={styles.dialogueTextIndent}>{part.textBefore}</span>
                        <input
                          type="text"
                          value={inputValuesEx13[questionIndex][partIndex]}
                          onChange={(e) => handleInputChangeEx13(questionIndex, partIndex, e.target.value)}
                          className={styles.dialogueInput}
                        />
                        <span className={styles.dialogueText}>{part.textAfter}</span>
                      </>
                    )}
                  </div>
                ))}
                {/* Ícone único por pergunta, renderizado ao final do content wrapper */}
                {resultsEx13[questionIndex] !== null && (
                  <img
                    src={resultsEx13[questionIndex] ? correctIcon : wrongIcon}
                    alt={resultsEx13[questionIndex] ? "Correct" : "Incorrect"}
                    className={styles.resultIcon}
                  />
                )}
              </div>
              {questionIndex < questionsEx13.length - 1 && <hr className={styles.divider} />}
            </div>
          ))}
        </main>
      </div>

      <div className={styles.checkContainer}>
        <button className={styles.checkButton} onClick={handleCheckClickEx13}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina352;
