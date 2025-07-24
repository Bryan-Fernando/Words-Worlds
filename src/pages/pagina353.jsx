import React, { useState } from 'react';
import styles from './pagina353.module.css';
import correctIcon from '../assets/icons/correct_icon.webp';
import wrongIcon from '../assets/icons/wrong_icon.webp';

// Data for Exercise 14: Choose the correct option
const questionsEx14 = [
  {
    id: 1,
    question: "1. She __________ call you after the meeting.",
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
      { id: 'b', text: 'are', isCorrect: false },
      { id: 'c', text: 'do', isCorrect: false },
      { id: 'd', text: 'would', isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "3. We __________ go to the cinema this evening",
    options: [
      { id: 'a', text: 'have', isCorrect: false },
      { id: 'b', text: 'are', isCorrect: false },
      { id: 'c', text: 'will', isCorrect: true },
      { id: 'd', text: 'do', isCorrect: false }
    ]
  }
];

const Pagina353 = () => {
  // States for Exercise 14
  const [selectedOptionsEx14, setSelectedOptionsEx14] = useState({});
  const [resultsEx14, setResultsEx14] = useState({});
  const [displayedAnswersEx14, setDisplayedAnswersEx14] = useState({});

  // Handlers for Exercise 14
  const handleOptionChangeEx14 = (questionId, optionId) => {
    setSelectedOptionsEx14({
      ...selectedOptionsEx14,
      [questionId]: optionId
    });
  };

  const handleCheckClickEx14 = () => {
    const newResults = {};
    const newDisplayedAnswers = {};
    
    questionsEx14.forEach(question => {
      const selectedOptionId = selectedOptionsEx14[question.id];
      if (selectedOptionId) {
        const selectedOptionObj = question.options.find(opt => opt.id === selectedOptionId);
        newResults[question.id] = selectedOptionObj ? selectedOptionObj.isCorrect : false;
        
        if (selectedOptionObj) {
          newDisplayedAnswers[question.id] = selectedOptionObj.text;
        }
      } else {
        newResults[question.id] = false;
      }
    });
    
    setResultsEx14(newResults);
    setDisplayedAnswersEx14(newDisplayedAnswers);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1><span className={styles.exercisesRed}>Exercises</span></h1>
      </header>

      {/* Exercise 14: Choose the correct option */}
      <p className={styles.instructionRed}>
        <strong>14. Choose the correct option</strong>
      </p>
      <p className={styles.subtitleCorrectAnswer}>Choose the correct answer.</p>

      <div className={styles.questionBox}>
        <main className={styles.main}>
          {questionsEx14.map((question, index) => {
            const [beforeBlank, afterBlank] = question.question.split('__________');
            const displayedAnswer = displayedAnswersEx14[question.id];
            
            return (
              <React.Fragment key={question.id}>
                <div className={styles.multipleChoiceQuestion}>
                  <div className={styles.questionText}>
                    <span>{beforeBlank}</span>
                    {displayedAnswer ? (
                      <span className={styles.chosenAnswer}>{displayedAnswer}</span>
                    ) : (
                      <span className={styles.blankPlaceholder}>__________</span>
                    )}
                    <span>{afterBlank}</span>
                    {resultsEx14[question.id] !== undefined && (
                      <img
                        src={resultsEx14[question.id] ? correctIcon : wrongIcon}
                        alt={resultsEx14[question.id] ? "Correct" : "Incorrect"}
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
                          checked={selectedOptionsEx14[question.id] === option.id}
                          onChange={() => handleOptionChangeEx14(question.id, option.id)}
                          className={styles.radioInput}
                        />
                        <label htmlFor={`q${question.id}-${option.id}`} className={styles.radioLabel}>
                          {option.id}) {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                {index < questionsEx14.length - 1 && <hr className={styles.dividerInsideBox} />}
              </React.Fragment>
            );
          })}
        </main>
      </div>

      <div className={styles.checkContainer}>
        <button className={styles.checkButton} onClick={handleCheckClickEx14}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Pagina353;
