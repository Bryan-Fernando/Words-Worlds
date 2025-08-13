import React, { useState } from 'react';
import styles from './pagina343.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

// Dados para o exercício 3: Word Order
const wordOrderQuestions = [
  { id: 1, words: "tomorrow / will / I / study", answer: "I will study tomorrow" },
  { id: 2, words: "will / She / help / us", answer: "She will help us" },
  { id: 3, words: "not / come / will / They / today", answer: "They will not come today" }
];

// Dados para o exercício 4: Choose the Correct Form
const chooseCorrectFormQuestions = [
  {
    id: 1,
    question: "1.",
    options: [
      { id: 'a', text: 'She will goes to the party.', isCorrect: false },
      { id: 'b', text: 'She will go to the party.', isCorrect: true }
    ]
  },
  {
    id: 2,
    question: "2.",
    options: [
      { id: 'a', text: 'I will not to be late.', isCorrect: false },
      { id: 'b', text: 'I will not be late.', isCorrect: true }
    ]
  }
];

// Função para normalizar strings (remover espaços extras e converter para minúsculas)
const normalize = (str) => {
  if (str === null || str === undefined) return '';
  return str.trim().replace(/\s+/g, ' ').toLowerCase();
};

const Pagina343 = () => {
  // Estados para o exercício 3: Word Order
  const [inputValuesEx3, setInputValuesEx3] = useState(Array(wordOrderQuestions.length).fill(''));
  const [resultsEx3, setResultsEx3] = useState(Array(wordOrderQuestions.length).fill(null));

  // Estados para o exercício 4: Choose the Correct Form
  const [selectedOptionsEx4, setSelectedOptionsEx4] = useState({});
  const [resultsEx4, setResultsEx4] = useState({});
  const [displayedAnswersEx4, setDisplayedAnswersEx4] = useState({});

  // Handlers para o exercício 3: Word Order
  const handleInputChangeEx3 = (value, index) => {
    const updatedValues = [...inputValuesEx3];
    updatedValues[index] = value;
    setInputValuesEx3(updatedValues);
  };

  const handleCheckClickEx3 = () => {
    const evaluatedResults = inputValuesEx3.map((input, i) => {
      const userInput = normalize(input);
      const correctAnswer = normalize(wordOrderQuestions[i].answer);
      // Para depuração, se necessário
      console.log(`Questão ${i+1}: userInput='${userInput}', correctAnswer='${correctAnswer}', match=${userInput === correctAnswer}`);
      return userInput === correctAnswer;
    });
    setResultsEx3(evaluatedResults);
  };

  // Handlers para o exercício 4: Choose the Correct Form
  const handleOptionChangeEx4 = (questionId, optionId) => {
    setSelectedOptionsEx4({
      ...selectedOptionsEx4,
      [questionId]: optionId
    });
  };

  const handleCheckClickEx4 = () => {
    const newResults = {};
    const newDisplayedAnswers = {};
    
    chooseCorrectFormQuestions.forEach(question => {
      const selectedOption = selectedOptionsEx4[question.id];
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
    
    setResultsEx4(newResults);
    setDisplayedAnswersEx4(newDisplayedAnswers);
  };

  return (
    <div className={styles.page343__container}>
      <header className={styles.page343__header}>
        <h1><span className={styles.page343__exercisesRed}>Exercises</span></h1>
      </header>

      {/* Exercício 3: Word Order */}
      <p className={styles.page343__instructionRed}>
        <strong>3. Word Order</strong>
      </p>

      <div className={styles.page343__questionBox}>
        <main className={styles.page343__main}>
          {wordOrderQuestions.map((q, index) => (
            <div key={q.id} className={styles.page343__question}>
              <span>{q.id}. {q.words}</span>
              <div className={styles.page343__inputContainer}>
                <input
                  type="text"
                  value={inputValuesEx3[index]}
                  onChange={(e) => handleInputChangeEx3(e.target.value, index)}
                  className={styles.page343__input}
                  placeholder={inputValuesEx3[index] === '' ? "Type the correct order" : ""}
                />
                {resultsEx3[index] !== null && (
                  <img
                    src={resultsEx3[index] ? correctIcon : wrongIcon}
                    alt={resultsEx3[index] ? "Correct" : "Incorrect"}
                    className={styles.page343__resultIcon}
                  />
                )}
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className={styles.page343__checkContainer}>
        <button className={styles.page343__checkButton} onClick={handleCheckClickEx3}>
          Check
        </button>
      </div>

      <hr className={styles.page343__divider} />

      {/* Exercício 4: Choose the Correct Form */}
      <p className={styles.page343__instructionRed}>
        <strong>4. Choose the Correct Form</strong>
      </p>

      <div className={styles.page343__questionBox}>
        <main className={styles.page343__main}>
          {chooseCorrectFormQuestions.map((question) => (
            <div key={question.id} className={styles.page343__multipleChoiceQuestion}>
              <div className={styles.page343__questionText}>
                {displayedAnswersEx4[question.id] ? (
                  <>
                    <span>{question.question}</span>
                    <span className={styles.page343__chosenAnswer}>{displayedAnswersEx4[question.id]}</span>
                  </>
                ) : (
                  <span>{question.question}</span>
                )}
                {resultsEx4[question.id] !== undefined && (
                  <img
                    src={resultsEx4[question.id] ? correctIcon : wrongIcon}
                    alt={resultsEx4[question.id] ? "Correct" : "Incorrect"}
                    className={styles.page343__resultIcon}
                  />
                )}
              </div>
              <div className={styles.page343__optionsContainer}>
                {question.options.map((option) => (
                  <div key={option.id} className={styles.page343__optionItem}>
                    <input
                      type="radio"
                      id={`q${question.id}-${option.id}`}
                      name={`question-${question.id}`}
                      value={option.id}
                      checked={selectedOptionsEx4[question.id] === option.id}
                      onChange={() => handleOptionChangeEx4(question.id, option.id)}
                      className={styles.page343__radioInput}
                    />
                    <label htmlFor={`q${question.id}-${option.id}`} className={styles.page343__radioLabel}>
                      {option.id}) {option.text}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>

      <div className={styles.page343__checkContainer}>
        <button className={styles.page343__checkButton} onClick={handleCheckClickEx4}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina343;
