import React, { useState } from "react";
import styles from "./pagina350.module.css";
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

// Imagens de cinema (comentadas para evitar erros de importação)
// import cinemaFacade from '../assets/images/pagina350_imagem1.webp';
// import peopleWatching from '../assets/images/pagina350_imagem2.webp';

// Dados para o exercício 11: Dialogue Completion
const dialogueQuestionsEx11 = [
  { id: 1, textBefore: "Anna: Hi! ", textAfter: " you come to the movies tonight?", answer: "Will" },
  { id: 2, textBefore: "Ben: Yes, I think I ", textAfter: "!", answer: "will" },
  { id: 3, textBefore: "Anna: Great! ", textAfter: " you bring the tickets?", answer: "Will" },
  { id: 4, textBefore: "Ben: Sure.\nAnna: Perfect! ", textAfter: " we meet at 7?", answer: "Will" }
];

// Função para normalizar strings (remover espaços extras e converter para minúsculas)
const normalize = (str) => {
  if (str === null || str === undefined) return '';
  // Remove espaços extras, mantém pontuação e converte para minúsculas
  return str.trim().replace(/\s+/g, ' ').toLowerCase();
};

const Pagina350 = () => {
  // Estados para o exercício 11: Dialogue Completion
  const [inputValuesEx11, setInputValuesEx11] = useState(Array(dialogueQuestionsEx11.length).fill(''));
  const [resultsEx11, setResultsEx11] = useState(Array(dialogueQuestionsEx11.length).fill(null));

  // Handler para mudança de input
  const handleInputChangeEx11 = (value, index) => {
    const updatedValues = [...inputValuesEx11];
    updatedValues[index] = value;
    setInputValuesEx11(updatedValues);
  };

  // Handler para o botão Check
  const handleCheckClickEx11 = () => {
    const evaluatedResults = inputValuesEx11.map((input, i) => {
      const userInput = normalize(input);
      const correctAnswer = normalize(dialogueQuestionsEx11[i].answer);
      return userInput === correctAnswer;
    });
    setResultsEx11(evaluatedResults);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1><span className={styles.exercisesRed}>Exercises</span></h1>
      </header>

      {/* Exercício 11: Dialogue Completion */}
      <p className={styles.instructionRed}>
        <strong>11. Dialogue Completion</strong>
      </p>
      <p className={styles.instructionSubtitle}>
        Complete the conversation using polite questions and answers with "will."
      </p>

      <div className={styles.questionBox}>
        <main className={styles.main}>
          {dialogueQuestionsEx11.map((q, index) => (
            <div key={q.id} className={styles.dialogueLine}>
              <div className={styles.dialogueContent}>
                <span>{q.textBefore}</span>
                <input
                  type="text"
                  value={inputValuesEx11[index]}
                  onChange={(e) => handleInputChangeEx11(e.target.value, index)}
                  className={styles.input}
                />
                <span>{q.textAfter}</span>

                {resultsEx11[index] !== null && (
                  <img
                    src={resultsEx11[index] ? correctIcon : wrongIcon}
                    alt={resultsEx11[index] ? "Correct" : "Incorrect"}
                    className={styles.resultIcon}
                  />
                )}
              </div>
              {index < dialogueQuestionsEx11.length - 1 && <hr className={styles.divider} />}
            </div>
          ))}
        </main>
      </div>

      <div className={styles.checkContainer}>
        <button className={styles.checkButton} onClick={handleCheckClickEx11}>
          Check
        </button>
      </div>

      {/* Seção de placeholders para imagens */}
      <div className={styles.imagePlaceholdersContainer}>
        <div className={styles.imagePlaceholderBox}>
        </div>
        <div className={styles.imagePlaceholderBox}>
        </div>
      </div>
    </div>
  );
};

export default Pagina350;
