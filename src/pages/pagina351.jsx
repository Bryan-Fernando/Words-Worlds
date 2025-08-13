import React, { useState } from "react";
import styles from "./pagina351.module.css";
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

// Dados para o exercício 12: Complete the dialogues with "will"
const dialoguesEx12 = [
  {
    id: 1,
    parts: [
      { textBefore: "", textAfter: " you help me with my homework?", answer: "Will" },
      { textBefore: "Sure, I ", textAfter: ".", answer: "will" }
    ]
  },
  {
    id: 2,
    parts: [
      { textBefore: "Where ", textAfter: " you go on vacation?", answer: "Will" },
      { textBefore: "I ", textAfter: " go to Greece.", answer: "will" }
    ]
  },
  {
    id: 3,
    parts: [
      { textBefore: "", textAfter: " it rain tomorrow?", answer: "Will" },
      { textBefore: "I think it ", textAfter: "", answer: "will" }
    ]
  },
  {
    id: 4,
    parts: [
      { textBefore: "", textAfter: " he join us for dinner?", answer: "Will" },
      { textBefore: "No, he ", textAfter: " be late.", answer: "will" }
    ]
  },
  {
    id: 5,
    parts: [
      { textBefore: "What ", textAfter: " we eat tonight?", answer: "Will" },
      { textBefore: "We ", textAfter: " order pizza.", answer: "will" }
    ]
  }
];

// Função para normalizar strings (remover espaços extras e converter para minúsculas)
const normalize = (str) => {
  if (str === null || str === undefined) return '';
  return str.trim().replace(/\s+/g, ' ').toLowerCase();
};

const Pagina351 = () => {
  const [inputValuesEx12, setInputValuesEx12] = useState(
    dialoguesEx12.map(dialogue => Array(dialogue.parts.length).fill(''))
  );
  
  // resultsEx12 agora armazena um boolean por diálogo (true se todas as partes corretas, false caso contrário)
  const [resultsEx12, setResultsEx12] = useState(
    Array(dialoguesEx12.length).fill(null) // null significa não verificado ainda
  );

  const handleInputChangeEx12 = (dialogueIndex, partIndex, value) => {
    const updatedValues = [...inputValuesEx12];
    updatedValues[dialogueIndex][partIndex] = value;
    setInputValuesEx12(updatedValues);
    // Opcional: resetar o resultado da questão para null ao digitar, para remover o ícone
    const updatedResults = [...resultsEx12];
    updatedResults[dialogueIndex] = null;
    setResultsEx12(updatedResults);
  };

  const handleCheckClickEx12 = () => {
    const evaluatedResults = dialoguesEx12.map((dialogue, dialogueIndex) => {
      // Verifica se TODAS as partes do diálogo estão corretas
      const allPartsCorrect = dialogue.parts.every((part, partIndex) => {
        const userInput = normalize(inputValuesEx12[dialogueIndex][partIndex]);
        const correctAnswer = normalize(part.answer);
        return userInput === correctAnswer;
      });
      return allPartsCorrect;
    });
    setResultsEx12(evaluatedResults);
  };

  return (
    <div className={styles.page351__container}>
      <header className={styles.page351__header}>
        <h1><span className={styles.page351__exercisesRed}>Exercises</span></h1>
      </header>

      <p className={styles.page351__instructionRed}>
        <strong>12. Complete the dialogues with "will"</strong>
      </p>

      <div className={styles.page351__questionBox}>
        <main className={styles.page351__dialoguesContainer}>
          {dialoguesEx12.map((dialogue, dialogueIndex) => (
            <div key={dialogue.id} className={styles.page351__dialogueItem}>
              <div className={styles.page351__itemNumberContainer}>
                <span className={styles.page351__itemNumber}>{dialogue.id}.</span>
              </div>
              
              <div className={styles.page351__dialogueContentWrapper}>
                {dialogue.parts.map((part, partIndex) => (
                  <div key={`${dialogue.id}-${partIndex}`} className={styles.page351__dialoguePart}>
                    {partIndex === 0 ? (
                      // Primeira parte (pergunta)
                      <>
                        <span className={styles.page351__dialogueText}>{part.textBefore}</span>
                        <input
                          type="text"
                          value={inputValuesEx12[dialogueIndex][partIndex]}
                          onChange={(e) => handleInputChangeEx12(dialogueIndex, partIndex, e.target.value)}
                          className={styles.page351__dialogueInput}
                        />
                        <span className={styles.page351__dialogueText}>{part.textAfter}</span>
                      </>
                    ) : (
                      // Partes subsequentes (respostas)
                      <>
                        <span className={styles.page351__dialogueTextIndent}>{part.textBefore}</span>
                        <input
                          type="text"
                          value={inputValuesEx12[dialogueIndex][partIndex]}
                          onChange={(e) => handleInputChangeEx12(dialogueIndex, partIndex, e.target.value)}
                          className={styles.page351__dialogueInput}
                        />
                        <span className={styles.page351__dialogueText}>{part.textAfter}</span>
                      </>
                    )}
                  </div>
                ))}
                {/* Ícone único por pergunta, renderizado ao final do content wrapper */}
                {resultsEx12[dialogueIndex] !== null && (
                  <img
                    src={resultsEx12[dialogueIndex] ? correctIcon : wrongIcon}
                    alt={resultsEx12[dialogueIndex] ? "Correct" : "Incorrect"}
                    className={styles.page351__resultIcon}
                  />
                )}
              </div>
              {dialogueIndex < dialoguesEx12.length - 1 && <hr className={styles.page351__divider} />}
            </div>
          ))}
        </main>
      </div>

      <div className={styles.page351__checkContainer}>
        <button className={styles.page351__checkButton} onClick={handleCheckClickEx12}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina351;