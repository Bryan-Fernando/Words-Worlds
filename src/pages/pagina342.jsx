import React, { useState } from 'react';
import styles from './pagina342.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

// Dados para o exercício 1: Fill in the blanks
const fillInBlanksQuestions = [
  { sentence: "1. I think it __________ rain tomorrow.", answer: "will" },
  { sentence: "2. He __________ be back by 9 p.m.", answer: "will" },
  { sentence: "3. She __________ call you later.", answer: "will" },
  { sentence: "4. We __________ help you with this homework.", answer: "will" },
  { sentence: "5. They __________ come to the party.", answer: "will" }
];

// Dados para o exercício 2: Multiple Choice
const multipleChoiceQuestions = [
  {
    id: 1,
    question: "1. I __________ go to the cinema tonight.",
    options: [
      { id: 'a', text: 'will', isCorrect: true },
      { id: 'b', text: 'would', isCorrect: false },
      { id: 'c', text: 'am', isCorrect: false },
      { id: 'd', text: 'was', isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "2. They __________ finish the project next week.",
    options: [
      { id: 'a', text: 'will', isCorrect: true },
      { id: 'b', text: 'have', isCorrect: false },
      { id: 'c', text: 'are', isCorrect: false },
      { id: 'd', text: 'do', isCorrect: false }
    ]
  }
];

const normalize = (str) => str.trim().replace(/\s+/g, ' ').toLowerCase();

const Pagina342 = () => {
  // Estados para o exercício 1: Fill in the blanks
  const [inputValuesEx1, setInputValuesEx1] = useState(Array(fillInBlanksQuestions.length).fill(''));
  const [resultsEx1, setResultsEx1] = useState(Array(fillInBlanksQuestions.length).fill(null));

  // Estados para o exercício 2: Multiple Choice
  const [selectedOptionsEx2, setSelectedOptionsEx2] = useState({});
  const [resultsEx2, setResultsEx2] = useState({});
  // Novo estado para armazenar as respostas exibidas no exercício 2
  const [displayedAnswersEx2, setDisplayedAnswersEx2] = useState({});

  // Handlers para o exercício 1
  const handleInputChangeEx1 = (value, index) => {
    const updatedValues = [...inputValuesEx1];
    updatedValues[index] = value;
    setInputValuesEx1(updatedValues);
  };

  const handleCheckClickEx1 = () => {
    const evaluatedResults = inputValuesEx1.map((input, i) => {
      const userInput = normalize(input);
      const correctAnswer = normalize(fillInBlanksQuestions[i].answer);
      // Para depuração, se necessário
      // console.log(`Questão ${i+1}: userInput='${userInput}', correctAnswer='${correctAnswer}', match=${userInput === correctAnswer}`);
      return userInput === correctAnswer;
    });
    setResultsEx1(evaluatedResults);
  };

  // Handlers para o exercício 2
  const handleOptionChangeEx2 = (questionId, optionId) => {
    setSelectedOptionsEx2({
      ...selectedOptionsEx2,
      [questionId]: optionId
    });
  };

  const handleCheckClickEx2 = () => {
    const newResults = {};
    const newDisplayedAnswers = {};
    
    multipleChoiceQuestions.forEach(question => {
      const selectedOption = selectedOptionsEx2[question.id];
      if (selectedOption) {
        const selectedOptionObj = question.options.find(opt => opt.id === selectedOption);
        newResults[question.id] = selectedOptionObj ? selectedOptionObj.isCorrect : false;
        
        // Armazena o texto da opção selecionada para exibição
        if (selectedOptionObj) {
          newDisplayedAnswers[question.id] = selectedOptionObj.text;
        }
      } else {
        newResults[question.id] = false;
      }
    });
    
    setResultsEx2(newResults);
    setDisplayedAnswersEx2(newDisplayedAnswers);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1><span className={styles.exercisesRed}>Exercises</span></h1>
      </header>

      {/* Exercício 1: Fill in the blanks */}
      <p className={styles.instructionRed}>
        <strong>1. Fill in the blanks using "will" ( Full Form )</strong>
      </p>

      <div className={styles.questionBox}>
        <main className={styles.main}>
          {fillInBlanksQuestions.map((q, index) => {
            const [beforeBlank, afterBlank] = q.sentence.split('__________');

            return (
              <div key={index} className={styles.question}>
                <span>{beforeBlank}</span>
                <input
                  type="text"
                  value={inputValuesEx1[index]}
                  onChange={(e) => handleInputChangeEx1(e.target.value, index)}
                  className={styles.input}
                />
                <span>{afterBlank}</span>

                {resultsEx1[index] !== null && (
                  <img
                    src={resultsEx1[index] ? correctIcon : wrongIcon}
                    alt={resultsEx1[index] ? "Correct" : "Incorrect"}
                    className={styles.resultIcon}
                  />
                )}
              </div>
            );
          })}
        </main>
      </div>

      <div className={styles.checkContainer}>
        <button className={styles.checkButton} onClick={handleCheckClickEx1}>
          Check
        </button>
      </div>

      <hr className={styles.divider} />

      {/* Exercício 2: Multiple Choice */}
      <p className={styles.instructionRed}>
        <strong>2. Multiple Choice</strong>
      </p>

      <div className={styles.questionBox}>
        <main className={styles.main}>
          {multipleChoiceQuestions.map((question) => {
            const [beforeBlank, afterBlank] = question.question.split('__________');
            const displayedAnswer = displayedAnswersEx2[question.id];
            
            return (
              <div key={question.id} className={styles.multipleChoiceQuestion}>
                <div className={styles.questionText}>
                  <span>{beforeBlank}</span>
                  {displayedAnswer ? (
                    <span className={styles.chosenAnswer}>{displayedAnswer}</span>
                  ) : (
                    <span className={styles.blankPlaceholder}>__________</span>
                  )}
                  <span>{afterBlank}</span>
                  {resultsEx2[question.id] !== undefined && (
                    <img
                      src={resultsEx2[question.id] ? correctIcon : wrongIcon}
                      alt={resultsEx2[question.id] ? "Correct" : "Incorrect"}
                      className={styles.resultIcon}
                    />
                  )}
                </div>
                <div className={styles.optionsContainer}>
                  {question.options.map((option) => (
                    <div key={option.id} className={styles.optionItem}>
                      <input
                        type="radio"
                        id={`q${question.id}-${option.id}`}
                        name={`question-${question.id}`}
                        value={option.id}
                        checked={selectedOptionsEx2[question.id] === option.id}
                        onChange={() => handleOptionChangeEx2(question.id, option.id)}
                        className={styles.radioInput}
                      />
                      <label htmlFor={`q${question.id}-${option.id}`} className={styles.radioLabel}>
                        {option.id}) {option.text}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </main>
      </div>

      <div className={styles.checkContainer}>
        <button className={styles.checkButton} onClick={handleCheckClickEx2}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina342;
