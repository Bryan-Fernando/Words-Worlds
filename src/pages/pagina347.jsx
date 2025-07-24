import React, { useState } from 'react';
import styles from './pagina347.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

// Dados para o exercício 8: Respond to the questions
const questionsEx8 = [
  {
    id: 1,
    question: "Will you go to the party on Saturday?",
    correctAnswers: [
      "Yes, I will go to the party on Saturday.",
      "No, I will not go to the party on Saturday.",
      "Yes, I'll go to the party on Saturday.",
      "No, I won't go to the party on Saturday."
    ]
  },
  {
    id: 2,
    question: "Will he send the report soon?",
    correctAnswers: [
      "Yes, he will send the report soon.",
      "No, he will not send the report soon.",
      "Yes, he'll send the report soon.",
      "No, he won't send the report soon."
    ]
  },
  {
    id: 3,
    question: "Will they need more time?",
    correctAnswers: [
      "Yes, they will need more time.",
      "No, they will not need more time.",
      "Yes, they'll need more time.",
      "No, they won't need more time."
    ]
  },
  {
    id: 4,
    question: "Will she join the meeting later?",
    correctAnswers: [
      "Yes, she will join the meeting later.",
      "No, she will not join the meeting later.",
      "Yes, she'll join the meeting later.",
      "No, she won't join the meeting later."
    ]
  }
];

// Função para normalizar strings (remover espaços extras e converter para minúsculas)
const normalize = (str) => {
  if (str === null || str === undefined) return '';
  // Remove espaços extras, mantém pontuação e converte para minúsculas
  return str.trim().replace(/\s+/g, ' ').toLowerCase();
};

const Pagina347 = () => {
  // Estados para o exercício 8: Respond to the questions
  const [inputValuesEx8, setInputValuesEx8] = useState(Array(questionsEx8.length).fill(''));
  const [resultsEx8, setResultsEx8] = useState(Array(questionsEx8.length).fill(null));

  // Handler para mudança de input
  const handleInputChangeEx8 = (value, index) => {
    const updatedValues = [...inputValuesEx8];
    updatedValues[index] = value;
    setInputValuesEx8(updatedValues);
  };

  // Handler para o botão Check
  const handleCheckClickEx8 = () => {
    const evaluatedResults = inputValuesEx8.map((input, i) => {
      const userInput = normalize(input);
      // Verifica se o input do usuário corresponde a qualquer uma das respostas corretas
      return questionsEx8[i].correctAnswers.some(correctAns => 
        normalize(correctAns) === userInput
      );
    });
    setResultsEx8(evaluatedResults);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1><span className={styles.exercisesRed}>Exercises</span></h1>
      </header>

      {/* Exercício 8: Respond to the questions */}
      <p className={styles.instructionRed}>
        <strong>8. Respond to the questions</strong>
      </p>
      <p className={styles.instruction}>
        Answer the questions in the Affirmative or Negative forms.
      </p>

      <div className={styles.questionBox}>
        <main className={styles.main}>
          {questionsEx8.map((q, index) => (
            <div key={q.id} className={styles.question}>
              <span>{q.id}. {q.question}</span>
              <div className={styles.inputContainer}>
                <span className={styles.arrow}>→</span>
                <input
                  type="text"
                  value={inputValuesEx8[index]}
                  onChange={(e) => handleInputChangeEx8(e.target.value, index)}
                  className={styles.input}
                  placeholder={inputValuesEx8[index] === '' ? "Type your answer" : ""}
                />
                {resultsEx8[index] !== null && (
                  <img
                    src={resultsEx8[index] ? correctIcon : wrongIcon}
                    alt={resultsEx8[index] ? "Correct" : "Incorrect"}
                    className={styles.resultIcon}
                  />
                )}
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className={styles.checkContainer}>
        <button className={styles.checkButton} onClick={handleCheckClickEx8}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina347;
