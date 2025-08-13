import React, { useState } from 'react';
import styles from './pagina321.module.css';

const Pagina321 = () => {
  const questions = [
    {
      id: 1,
      text: "My brother __________________ TV in the living room.",
      options: ["are watching", "is watching", "am watching"],
      correctAnswer: "is watching"
    },
    {
      id: 2,
      text: "You __________________ a great job on this project.",
      options: ["are doing", "is doing", "am doing"],
      correctAnswer: "are doing"
    },
    {
      id: 3,
      text: "She __________________ to school today.",
      options: ["is going", "are going", "am going"],
      correctAnswer: "is going"
    },
    {
      id: 4,
      text: "We __________________ about the problem now.",
      options: ["is talking", "am talking", "are talking"],
      correctAnswer: "are talking"
    },
    {
      id: 5,
      text: "The students __________________ for the test at the moment.",
      options: ["are studying", "is studying", "am studying"],
      correctAnswer: "are studying"
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const handleOptionSelect = (questionId, option) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  const checkAnswers = () => {
    if (Object.keys(selectedAnswers).length < questions.length) {
      alert('Por favor, responda todas as questões antes de verificar!');
      return;
    }
    
    let correct = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    
    setCorrectCount(correct);
    setShowResults(true);
  };

  const resetExercise = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setCorrectCount(0);
  };

  const isCorrectAnswer = (questionId, option) => {
    if (!showResults) return null;
    const question = questions.find(q => q.id === questionId);
    return question.correctAnswer === option;
  };

  return (
    <div className={styles.container}>
      
      <div className={styles.mainContent}>
        <div className={styles.exerciseSection}>
          
          <div className={styles.questionsContainer}>
            {questions.map((question) => (
              <div key={question.id} className={styles.questionBlock}>
                <div className={styles.questionText}>
                  <span>{question.text.split('__________________')[0]}</span>
                  <span className={styles.blankLine}>__________________</span>
                  <span>{question.text.split('__________________')[1]}</span>
                </div>
                <div className={styles.optionsContainer}>
                  {question.options.map((option, index) => (
                    <div key={index} className={styles.optionItem}>
                      <label className={`${styles.optionLabel} ${
                        showResults
                          ? isCorrectAnswer(question.id, option)
                            ? styles.correct
                            : selectedAnswers[question.id] === option
                            ? styles.incorrect
                            : ''
                          : ''
                      }`}>
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option}
                          checked={selectedAnswers[question.id] === option}
                          onChange={() => handleOptionSelect(question.id, option)}
                          disabled={showResults}
                          className={styles.optionInput}
                        />
                        {String.fromCharCode(97 + index)}) {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.buttonsContainer}>
            {!showResults ? (
              <button
                className={styles.checkButton}
                onClick={checkAnswers}
                disabled={Object.keys(selectedAnswers).length < questions.length}
              >
                Check Answers
              </button>
            ) : (
              <div className={styles.resultsContainer}>
                <p className={styles.resultsText}>You got {correctCount} out of {questions.length} correct!</p>
                <button
                  className={styles.resetButton}
                  onClick={resetExercise}
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina321;